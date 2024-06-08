import { Infer } from "share/deps.ts";
import { FeaturesEnum, LevelsEnum } from "share/schemas/mod.ts";
import { throwError } from "utils/throwError.ts";
import { isPositionInUser } from "utils/isPositionInUser.ts";

export const grantAccess = (
	{ levels, features }: {
		levels?: Infer<typeof LevelsEnum>[];
		features?: Infer<typeof FeaturesEnum>[];
	},
) => {
	const checkAccess = async () => {
		const position = await isPositionInUser();
		if (position && position.level === "Ghost") return;

		if (levels && levels.includes(position!.level)) return;

		if (
			features && features.some((fe) => position!.features.includes(fe))
		) return;

		throwError("You cant do this");
	};

	return checkAccess;
};
