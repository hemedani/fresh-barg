import { coreApp, letter } from "../../../../mod.ts";
import { getLetterFn } from "./getLetter.fn.ts";
import { getLetterValidator } from "./getLetter.val.ts";
import { MyContext } from "interfaces/context.ts";
import { ObjectId } from "https://deno.land/x/lesan@v0.1.1/mod.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { isPositionInUser } from "utils/isPositionInUser.ts";
import { throwError } from "https://deno.land/x/lesan@v0.1.1/src/utils/throwError.ts";

const checkGetLetterRule = async () => {
	const { body, position }: MyContext = coreApp.contextFns
		.getContextModel() as MyContext;

	const { _id } = body?.details.set!;

	const foundedLetter = await letter.findOne({
		filters: { _id: new ObjectId(_id) },
	});

	!foundedLetter && throwError(" this letter not exsit.");

	if (position?._id.equals(foundedLetter!.recievers._id)) {
		return;
	}

	if (
		foundedLetter && foundedLetter.recievers &&
		foundedLetter.recievers.includes(({ _id }: any) =>
			position?._id.equals(_id)
		)
	) {
		return;
	}
	throwError("can not do this");
};

export const getLetterSetup = () =>
	coreApp.acts.setAct({
		schema: "letter",
		fn: getLetterFn,
		actName: "getLetter",
		preAct: [
			setTokens,
			setUser,
			isPositionInUser,
			checkGetLetterRule,
		],
		validator: getLetterValidator(),
	});
