import { coreApp, reffer } from "../../../../mod.ts";
import { MyContext } from "interfaces/context.ts";
import { addReplyToRefferFn } from "./addReplyToReffer.fn.ts";
import { addReplyToRefferValidator } from "./addReplyToReffer.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { isPositionInUser } from "utils/isPositionInUser.ts";
import { ObjectId } from "https://deno.land/x/lesan@v0.1.1/mod.ts";
import { throwError } from "https://deno.land/x/lesan@v0.1.3/src/utils/throwError.ts";

const checkReplyToRefferRule = async () => {
	const { body, position }: MyContext = coreApp.contextFns
		.getContextModel() as MyContext;

	const { _id } = body?.details.set!;

	const foundedReffer = await reffer.findOne({
		filters: { _id: new ObjectId(_id) },
	});

	if (position?._id.equals(foundedReffer!.refferer._id)) {
		return;
	}
	throwError("can not do this");
};

export const addReplyToRefferSetup = () =>
	coreApp.acts.setAct({
		schema: "reffer",
		fn: addReplyToRefferFn,
		actName: "addReplyToReffer",
		preAct: [
			setTokens,
			setUser,
			isPositionInUser,
			checkReplyToRefferRule,
		],
		validator: addReplyToRefferValidator(),
	});
