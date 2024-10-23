import { setTokens } from "utils/setToken.ts";
import { coreApp, position, unit } from "../../../../mod.ts";
import { addPositionFn } from "./addPosition.fn.ts";
import { addPositionValidator } from "./addPosition.val.ts";
import { setUser } from "utils/setUser.ts";
import { grantAccess } from "utils/grantAccess.ts";
import { MyContext } from "interfaces/context.ts";
import { throwError } from "utils/throwError.ts";
import { ObjectId, TLesanBody } from "share/deps.ts";

const checkPositionValidationForAddPostition = async () => {
	const { user, body }: MyContext = coreApp.contextFns
		.getContextModel() as MyContext;

	let { positionId, unitId, panel, orgId, level } = body?.details.set!;

	if (!positionId) {
		throwError("can not find position in body.details.set.position");
	}

	const foundedPositionInUser = user.position?.find(({ _id }) =>
		_id.equals(positionId)
	);
	if (!foundedPositionInUser) throwError("you dont have this position");

	const foundedPosition = await position.findOne({
		filters: { _id: foundedPositionInUser?._id },
	});
	if (!foundedPosition) throwError("can not find this position");

	if (foundedPosition!.level === "Ghost") {
		if (!panel) throwError("You most send panel");

		if (unitId) {
			const foundedUnit = await unit.findOne({
				filters: { _id: new ObjectId(unitId) },
			});
			if (!foundedUnit) throwError("Can not find this unit");
			orgId = foundedUnit!.org._id;
		}

		coreApp.contextFns.addBodyToContext(
			{
				...body,
				details: {
					...body?.details,
					set: {
						...body?.details.set,
						orgId,
					},
				},
			} as TLesanBody,
		);
		return;
	}

	if (foundedPosition!.level === "Orghead") {
		if (level === "Ghost" || level === "Orghead") {
			throwError("You can not add this position level.");
		}
		if (!unitId) throwError("You most send unitId");

		const foundedUnit = await unit.findOne({
			filters: { _id: new ObjectId(unitId) },
		});

		if (!foundedUnit) throwError("Can not find this unit");
		if (!foundedUnit!.org._id.equals(foundedPosition!.org._id)) {
			throwError("this unit is not a right unit");
		}

		coreApp.contextFns.addBodyToContext(
			{
				...body,
				details: {
					...body?.details,
					set: {
						...body?.details.set,
						orgId: foundedPosition!.org._id,
						panel: foundedPosition!.panel,
					},
				},
			} as TLesanBody,
		);
		return;
	}

	if (level === "Ghost" || level === "Orghead" || level === "Unithead") {
		throwError("You can not add this position level.");
	}
	coreApp.contextFns.addBodyToContext(
		{
			...body,
			details: {
				...body?.details,
				set: {
					...body?.details.set,
					orgId: foundedPosition!.org._id,
					unitId: foundedPosition!.unit._id,
					panel: foundedPosition!.panel,
				},
			},
		} as TLesanBody,
	);
	return;
};

export const addPositionSetup = () =>
	coreApp.acts.setAct({
		schema: "position",
		fn: addPositionFn,
		actName: "addPosition",
		preAct: [
			setTokens,
			setUser,
			grantAccess({
				levels: ["Orghead", "Unithead"],
				features: ["add position"],
			}),
			checkPositionValidationForAddPostition,
		],
		validator: addPositionValidator(),
	});
