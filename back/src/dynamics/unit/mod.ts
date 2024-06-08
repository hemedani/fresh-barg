import { addUnitSetup } from "./addUnit/mod.ts";
import { getUnitSetup } from "./getUnit/mod.ts";
import { getUnitsSetup } from "./getUnits/mod.ts";
import { updateUnitSetup } from "./updateUnit/mod.ts";
import { removeUnitSetup } from "./removeUnit/mod.ts";

export const unitSetup = () => {
	addUnitSetup();
	updateUnitSetup();
	getUnitSetup();
	getUnitsSetup();
	removeUnitSetup();
};

export * from "./addUnit/mod.ts";
export * from "./getUnit/mod.ts";
export * from "./getUnits/mod.ts";
export * from "./updateUnit/mod.ts";
export * from "./removeUnit/mod.ts";
