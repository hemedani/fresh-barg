import { coreApp } from "../../../../mod.ts";
import { countPredeflettersFn } from "./countPredefletters.fn.ts";
import { countPredeflettersValidator } from "./countPredefletters.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";

export const countPredeflettersSetup = () =>
	coreApp.acts.setAct({
		schema: "preDefLetter",
		fn: countPredeflettersFn,
		actName: "countPredefletters",
		preAct: [
			setTokens,
			setUser,
		],
		validator: countPredeflettersValidator(),
	});

export * from "./countPredefletters.fn.ts";
export * from "./countPredefletters.val.ts";
