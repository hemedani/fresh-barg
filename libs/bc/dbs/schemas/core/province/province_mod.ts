import { size, string } from "../../../deps.ts";
import { coreApp } from "../../../../../../back/mod.ts";

export const provincePure = {
	name: size(string(), 2, 100),
	enName: string(),
	abb: string(),
};

const provinceRelations = {};

export const provinces = () =>
	coreApp.odm.newModel(
		"province",
		provincePure,
		provinceRelations,
	);
