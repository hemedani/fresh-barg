import { coreApp, letter } from "../../../../mod.ts";
import { MyContext } from "interfaces/context.ts";
import { addReplyToLetterFn } from "./addReplyToLetter.fn.ts";
import { addReplyToLetterValidator } from "./addReplyToLetter.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { throwError } from "utils/throwError.ts";
import { isPositionInUser } from "utils/isPositionInUser.ts";
import { ObjectId } from "https://deno.land/x/lesan@v0.1.1/mod.ts";

const checkReplyToLetterRule = async () => {
	const { body, position }: MyContext = coreApp.contextFns
		.getContextModel() as MyContext;

	const { _id } = body?.details.set!;

	const foundedLetter = await letter.findOne({
		filters: { _id: new ObjectId(_id) },
	});

	if (position?._id.equals(foundedLetter!.letter._id)) {
		return;
	}
	throwError("can not do this");
};

export const addReplyToLetterSetup = () =>
	coreApp.acts.setAct({
		schema: "letter",
		fn: addReplyToLetterFn,
		actName: "addReplyToLetter",
		preAct: [
			setTokens,
			setUser,
			isPositionInUser,
			checkReplyToLetterRule,
		],
		validator: addReplyToLetterValidator(),
	});
