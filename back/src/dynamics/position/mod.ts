import { addPositionSetup } from "./addPosition/mod.ts";
import { getPositionSetup } from "./getPosition/mod.ts";
import { getPositionsSetup } from "./getPositions/mod.ts";
import { updatePositionSetup } from "./updatePosition/mod.ts";
import { countPositionsSetup } from "./countPositions/mod.ts";

export const positionSetup = () => {
	addPositionSetup();
	updatePositionSetup();
	getPositionSetup();
	getPositionsSetup();
	countPositionsSetup();
};

export * from "./addPosition/mod.ts";
export * from "./getPosition/mod.ts";
export * from "./getPositions/mod.ts";
export * from "./updatePosition/mod.ts";
export * from "./countPositions/mod.ts";
