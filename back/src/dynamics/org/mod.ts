import { addOrgSetup } from "./addOrg/mod.ts";
import { getOrgSetup } from "./getOrg/mod.ts";
import { getOrgsSetup } from "./getOrgs/mod.ts";
import { updateOrgSetup } from "./updateOrg/mod.ts";
import { removeOrgSetup } from "./removeOrg/mod.ts";
import { countOrgsSetup } from "./countOrgs/mod.ts";

export const orgSetup = () => {
	addOrgSetup();
	updateOrgSetup();
	getOrgSetup();
	getOrgsSetup();
	removeOrgSetup();
	countOrgsSetup();
};

export * from "./addOrg/mod.ts";
export * from "./getOrg/mod.ts";
export * from "./getOrgs/mod.ts";
export * from "./updateOrg/mod.ts";
export * from "./removeOrg/mod.ts";
export * from "./countOrgs/mod.ts";
