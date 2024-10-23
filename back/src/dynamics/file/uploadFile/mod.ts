import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { coreApp } from "../../../../mod.ts";
import { uploadFileFn } from "./uploadFile.fn.ts";
import { uploadFileValidator } from "./uploadFile.val.ts";

export const uploadFileSetup = () =>
	coreApp.acts.setAct({
		schema: "file",
		actName: "uploadFile",
		validationRunType: "create",
		validator: uploadFileValidator(),
		preAct: [
			setTokens,
			setUser,
		],
		fn: uploadFileFn,
	});
