import { coreApp, letter } from "../../../../mod.ts";
import { MyContext } from "interfaces/context.ts";
import { addRefferFn } from "./addReffer.fn.ts";
import { addRefferValidator } from "./addReffer.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { ObjectId } from "https://deno.land/x/lesan@v0.1.1/mod.ts";
import { isPositionInUser } from "utils/isPositionInUser.ts";
import { throwError } from "https://deno.land/x/lesan@v0.1.1/src/utils/throwError.ts";

const checkAddRefferAccess = async () => {
	const { body, position }: MyContext = coreApp.contextFns
		.getContextModel() as MyContext;

	const { refferedId, pistionId, letterId } = body?.details.set!;

	const foundedLetter = await letter.findOne({
		filters: { _id: new ObjectId(letterId) },
	});

	!foundedLetter && throwError(" this letter not exsit.");

	if (position?._id.equals(foundedLetter!.recievers._id)) {
		return;
	}

	if (
		foundedLetter && foundedLetter.reffers &&
		foundedLetter.reffers.includes(({ _id }: any) =>
			position?._id.equals(_id)
		)
	) {
		return;
	}

	throwError("can not do this");
};

export const addRefferSetup = () =>
	coreApp.acts.setAct({
		schema: "reffer",
		fn: addRefferFn,
		actName: "addReffer",
		preAct: [
			setTokens,
			setUser,
			isPositionInUser,
			checkAddRefferAccess,
		],
		validator: addRefferValidator(),
	});

export * from "./addReffer.fn.ts";
export * from "./addReffer.val.ts";
