import { setTokens } from "utils/setToken.ts";
import { coreApp, org, position, unit } from "../../../../mod.ts";
import { addPosToUserFn } from "./addPosToUser.fn.ts";
import { addPosToUserValidator } from "./addPosToUser.val.ts";
import { setUser } from "utils/setUser.ts";
import { grantAccess } from "utils/grantAccess.ts";
import { MyContext } from "interfaces/context.ts";
import { ObjectId, TLesanBody } from "share/deps.ts";
import { throwError } from "utils/throwError.ts";

const checkAddPosRules = async () => {
	const { body, position: requesterPosition }: MyContext = coreApp
		.contextFns
		.getContextModel() as MyContext;

	const { position: insertedPosition } = body?.details.set!;

	const foundedInsertedPosition = await position
		.findOne({
			filters: { _id: new ObjectId(insertedPosition) },
		});

	if (!foundedInsertedPosition) throwError("can not find this position");

	console.log({ foundedInsertedPosition });

	const set: Record<string, any> = { ...body?.details.set };

	if (requesterPosition!.level === "Ghost") {
		coreApp.contextFns.addBodyToContext({
			...body,
			details: {
				...body?.details,
				set,
			},
		} as TLesanBody);
		return;
	}

	if (requesterPosition!.level === "Orghead") {
		const notAllowedLevel = (foundedInsertedPosition!.level === "Ghost" ||
				foundedInsertedPosition!.level === "Orghead")
			? true
			: false;

		if (notAllowedLevel) {
			throwError("You can just add UNITHEAD , ORGHEAD");
		}

		if (
			foundedInsertedPosition!.org._id.equals(requesterPosition?.org?._id)
		) {
			coreApp.contextFns.addBodyToContext({
				...body,
				details: {
					...body?.details,
					set,
				},
			} as TLesanBody);
			return;
		}
		throwError("orgs not match!");
	}

	if (requesterPosition!.level === "Unithead") {
		const notAllowedLevel = (foundedInsertedPosition!.level === "Ghost" ||
				foundedInsertedPosition!.level === "Orghead" ||
				foundedInsertedPosition!.level === "Unithead")
			? true
			: false;

		if (notAllowedLevel) {
			throwError("You can just add STAFF ");
		}

		if (
			foundedInsertedPosition!.unit._id.equals(
				requesterPosition?.unit?._id,
			)
		) {
			coreApp.contextFns.addBodyToContext({
				...body,
				details: {
					...body?.details,
					set,
				},
			} as TLesanBody);
			return;
		}
		throwError("units not match!");
	}

	if (requesterPosition!.features.includes("add position to user")) {
		const notAllowedLevel = (foundedInsertedPosition!.level === "Ghost" ||
				foundedInsertedPosition!.level === "Orghead" ||
				foundedInsertedPosition!.level === "Unithead")
			? true
			: false;

		if (notAllowedLevel) {
			throwError("You can just add STAFF ");
		}

		if (
			foundedInsertedPosition!.unit._id.equals(
				requesterPosition?.unit?._id,
			)
		) {
			coreApp.contextFns.addBodyToContext({
				...body,
				details: {
					...body?.details,
					set,
				},
			} as TLesanBody);
			return;
		}
		throwError("units not match!");
	}

	throwError("You dont have enough access to do this action!");
};

export const addPosToUserSetup = () =>
	coreApp.acts.setAct({
		schema: "user",
		fn: addPosToUserFn,
		actName: "addPosToUser",
		preAct: [
			setTokens,
			setUser,
			grantAccess({
				levels: ["Orghead", "Unithead"],
				features: ["create unit"],
			}),
			checkAddPosRules,
		],
		validator: addPosToUserValidator(),
	});

export * from "./addPosToUser.fn.ts";
export * from "./addPosToUser.val.ts";
