import { addFormSetup } from "./addForm/mod.ts";
import { getFormSetup } from "./getForm/mod.ts";
import { getFormsSetup } from "./getForms/mod.ts";
import { updateFormSetup } from "./updateForm/mod.ts";

export * from "./addForm/mod.ts";
export * from "./getForm/mod.ts";
export * from "./getForms/mod.ts";
export * from "./updateForm/mod.ts";

export const formSetup = () => {
	addFormSetup();
	getFormSetup()
	getFormsSetup()
	updateFormSetup()
}