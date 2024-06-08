import { enums, number, object, optional, size, string } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const getPositionsValidator = () => {
	return object({
		set: object({
			page: number(),
			limit: number(),
			orgId: optional(size(string(), 24)),
			unitId: optional(size(string(), 24)),
			positionId: optional(size(string(), 24)),
			filterPositions: enums(["all", "free", "busy"]),
		}),
		get: selectStruct("position", 2),
	});
};
