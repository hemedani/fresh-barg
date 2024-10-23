import { uploadImageSetup } from "./uploadImage/mod.ts";
import { uploadFileSetup } from "./uploadFile/mod.ts";

export const fileSetup = () => {
	uploadImageSetup();
	uploadFileSetup();
};
