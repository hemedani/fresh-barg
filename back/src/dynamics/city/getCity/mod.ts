import { MyContext } from "interfaces/context.ts";
import { city, coreApp } from "../../../../mod.ts";
import { getCityFn } from "./getCity.fn.ts";
import { getCityValidator } from "./getCity.val.ts";
import { ObjectId, TLesanBody } from "share/deps.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { grantAccess } from "utils/grantAccess.ts";

const ownCity = async () => {
	const { user, body }: MyContext = coreApp.contextFns
		.getContextModel() as MyContext;

	const { _id } = body?.details.set!;

	const foundCity = await city.findOne({
		filters: { _id: new ObjectId(_id) },
	});

	const set: Record<string, any> = { ...body?.details.set };

	if (user.city?._id === foundCity?._id) {
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

export const getCitySetup = () =>
	coreApp.acts.setAct({
		schema: "city",
		fn: getCityFn,
		actName: "getCity",
		preAct: [
			setTokens,
			setUser,
			grantAccess({ levels: ["Orghead", "Ghost"] }),
		],
		validator: getCityValidator(),
	});
