import { coreApp } from "../../../../mod.ts";
import { getUsersFn } from "./getUsers.fn.ts";
import { getUsersValidator } from "./getUsers.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { MyContext } from "interfaces/context.ts";
import { TLesanBody } from "deps";

const checkGetUsersValidator = () => {
	const { body, position }: MyContext = coreApp.contextFns
		.getContextModel() as MyContext;

	if (position?.level === "Ghost") {
		return;
	}

	const set = body?.details.set;

	if (position?.level === "Staff") {
		set!.unitId = position.unit?._id;
	}

	if (position?.level === "Unithead") {
		set!.unitId = position.unit?._id;
	}

	if (position?.level === "Orghead") {
		set!.orgId = position.org?._id;
	}

	coreApp.contextFns.addBodyToContext({
		...body,
		details: {
			...body?.details,
			set,
		},
	} as TLesanBody);
	return;
};

export const getUsersSetup = () =>
	coreApp.acts.setAct({
		schema: "user",
		fn: getUsersFn,
		actName: "getUsers",
		preAct: [
			setTokens,
			setUser,
			checkGetUsersValidator,
		],
		validator: getUsersValidator(),
	});
