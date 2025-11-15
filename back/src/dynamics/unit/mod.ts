import { addUnitSetup } from "./addUnit/mod.ts";
import { getUnitSetup } from "./getUnit/mod.ts";
import { getUnitsSetup } from "./getUnits/mod.ts";
import { updateUnitSetup } from "./updateUnit/mod.ts";
import { removeUnitSetup } from "./removeUnit/mod.ts";
import { countUnitsSetup } from "./countUnits/mod.ts";

export const unitSetup = () => {
	addUnitSetup();
	updateUnitSetup();
	getUnitSetup();
	getUnitsSetup();
	removeUnitSetup();
	countUnitsSetup();
};
