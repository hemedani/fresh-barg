import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { coreApp } from "../../../../mod.ts";
import { uploadImageFn } from "./uploadImage.fn.ts";
import { uploadImageValidator } from "./uploadImage.val.ts";

export const uploadImageSetup = () =>
	coreApp.acts.setAct({
		schema: "file",
		actName: "uploadImage",
		validationRunType: "create",
		validator: uploadImageValidator(),
		preAct: [
			setTokens,
			setUser,
		],
		fn: uploadImageFn,
	});
