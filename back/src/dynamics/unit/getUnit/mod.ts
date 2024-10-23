import { MyContext } from "interfaces/context.ts";
import { coreApp, unit } from "../../../../mod.ts";
import { getUnitFn } from "./getUnit.fn.ts";
import { getUnitValidator } from "./getUnit.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { ObjectId, TLesanBody } from "share/deps.ts";
import { grantAccess } from "utils/grantAccess.ts";

const oenUnit = async () => {
	const { user, body }: MyContext = coreApp.contextFns
		.getContextModel() as MyContext;

	const { _id } = body?.details.set!;

	const foundUnit = await unit.findOne({
		filters: { _id: new ObjectId(_id) },
	});

	const set: Record<string, any> = { ...body?.details.set };

	if (user.unit?._id === foundUnit?._id) {
		coreApp.contextFns.addBodyToContext({
			...body,
			details: {
				...body?.details,
				set,
			},
		} as TLesanBody);
		return;
	}
};
export const getUnitSetup = () =>
	coreApp.acts.setAct({
		schema: "unit",
		fn: getUnitFn,
		actName: "getUnit",
		preAct: [
			setTokens,
			setUser,
			grantAccess({
				levels: ["Orghead", "Unithead"],
				features: ["create unit"],
			}),
		],
		validator: getUnitValidator(),
	});
