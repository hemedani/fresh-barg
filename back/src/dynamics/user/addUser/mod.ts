import { setTokens } from "utils/setToken.ts";
import { coreApp, position } from "../../../../mod.ts";
import { addUserFn } from "./addUser.fn.ts";
import { addUserValidator } from "./addUser.val.ts";
import { setUser } from "utils/setUser.ts";
import { grantAccess } from "utils/grantAccess.ts";
import { MyContext } from "interfaces/context.ts";
import { throwError } from "utils/throwError.ts";
import { ObjectId, TLesanBody } from "deps";

const checkAddUserValidation = async () => {
	const { user, body }: MyContext = coreApp.contextFns
		.getContextModel() as MyContext;

	let { positionId, position: insertedPositions } = body?.details.set!;

	insertedPositions = insertedPositions.map((ip: string) => new ObjectId(ip));

	if (!positionId) {
		throwError("can not find position in body.details.set.position");
	}

	const foundedPositionInUser = user.position?.find(({ _id }) =>
		_id.equals(positionId)
	);

	if (!foundedPositionInUser) throwError("you dont have this position");

	const foundedPosition = await position.findOne({
		//	filters: { _id: foundedPositionInUser?._id },

		filters: { _id: new ObjectId(positionId) },
	});

	if (!foundedPosition) throwError("can not find this position");

	const foundedInsertedPositions = await position
		.find({
			filters: { _id: { $in: insertedPositions } },
		})
		.toArray();
	if (!foundedInsertedPositions) throwError("can not find this position");

	const set: Record<string, any> = { ...body?.details.set };

	set.unitIds = foundedInsertedPositions
		.map((fip) => (fip.unit ? fip.unit._id.toString() : null))
		.filter((n) => n);
	set.unitIds = Array.from(new Set(set.unitIds));

	set.orgIds = foundedInsertedPositions
		.map((fip) => (fip.org ? fip.org._id.toString() : null))
		.filter((n) => n);
	set.orgIds = Array.from(new Set(set.orgIds));

	if (foundedPosition!.level === "Ghost") {
		coreApp.contextFns.addBodyToContext({
			...body,
			details: {
				...body?.details,
				set,
			},
		} as TLesanBody);
		return;
	}

	if (foundedPosition!.level === "Orghead") {
		const notAllowedLevel = foundedInsertedPositions.some(
			(p) => p.level === "Ghost" || p.level === "Orghead",
		);

		if (notAllowedLevel) {
			throwError("You can not add this position level :)");
		}

		// check if sended org._id for every postion is inside sender Orghead postion

		// const justOwnOrgPosition = foundedInsertedPositions.some()
		// if (justOwnOrgPosition) {
		// 	throwError("You can not add position to anogher org :)");
		// }

		coreApp.contextFns.addBodyToContext({
			...body,
			details: {
				...body?.details,
				set,
			},
		} as TLesanBody);
		return;
	}

	//   //--
	//   const justOwnOrgPosition = await org.findOne({
	//     filters: { _id: foundedPositionInUser?._id },
	//   });
	//   if (!justOwnOrgPosition) {
	//     throwError('You can not add position to another org');
	//   }
	// //--

	//ezafe kon
	if (foundedPosition!.level === "Unithead") {
		const notAllowedLevel = foundedInsertedPositions.some(
			(p) =>
				p.level === "Ghost" || p.level === "Orghead" ||
				p.level === "Unithead",
		);

		if (notAllowedLevel) {
			throwError("You can not add this position level :)");
		}

		coreApp.contextFns.addBodyToContext({
			...body,
			details: {
				...body?.details,
				set,
			},
		} as TLesanBody);
		return;
	}

	if (foundedPosition!.features.includes("add staff")) {
		const notAllowedFeatures = foundedInsertedPositions.some(
			(p) =>
				p.features === "add staff" ||
				p.features === "create unit" ||
				p.features === "add position" ||
				p.level === "Ghost" ||
				p.level === "Orghead" ||
				p.level === "Unithead",
		);

		if (notAllowedFeatures) {
			throwError("You can not add this position features");
		}

		coreApp.contextFns.addBodyToContext({
			...body,
			details: {
				...body?.details,
				set,
			},
		} as TLesanBody);
		return;
	}

	throwError("You dont have enough access to do this action!");
};

export const addUserSetup = () =>
	coreApp.acts.setAct({
		schema: "user",
		fn: addUserFn,
		actName: "addUser",
		preAct: [
			setTokens,
			setUser,
			grantAccess({
				levels: ["Orghead", "Unithead"],
				features: ["add staff"],
			}),
			checkAddUserValidation,
		],
		validator: addUserValidator(),
		validationRunType: "create",
	});

export * from "./addUser.fn.ts";
export * from "./addUser.val.ts";
