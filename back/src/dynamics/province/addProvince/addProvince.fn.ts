import { ActFn } from "share/deps.ts";
import { province } from "../../../../mod.ts";

export const addProvinceFn: ActFn = async (body) => {
	const {
		set,
		get,
	} = body.details;

	return await province.insertOne({
		doc: set,
		projection: get,
	});
};
