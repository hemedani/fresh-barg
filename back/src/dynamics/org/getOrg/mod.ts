import { setTokens } from "utils/setToken.ts";
import { coreApp, org } from "../../../../mod.ts";
import { getOrgFn } from "./getOrg.fn.ts";
import { getOrgValidator } from "./getOrg.val.ts";
import { setUser } from "utils/setUser.ts";
import { grantAccess } from "utils/grantAccess.ts";

import { MyContext } from "interfaces/context.ts";
import { ObjectId, TLesanBody } from "share/deps.ts";

const ownOrg = async () => {
	const { user, body }: MyContext = coreApp.contextFns
		.getContextModel() as MyContext;

	const { _id } = (body?.details.set)!;

	const foundOrg = await org.findOne({ filters: { _id: new ObjectId(_id) } });

	const set: Record<string, any> = { ...body?.details.set };

	if (user.org?._id === foundOrg?._id) {
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
export const getOrgSetup = () =>
	coreApp.acts.setAct({
		schema: "org",
		fn: getOrgFn,
		actName: "getOrg",
		preAct: [
			setTokens,
			setUser,
			grantAccess({
				levels: ["Orghead", "Unithead"],
				features: ["create unit"],
			}),
			ownOrg,
		],
		validator: getOrgValidator(),
	});

export * from "./getOrg.fn.ts";
export * from "./getOrg.val.ts";
