import { addRefferSetup } from "./addReffer/mod.ts";
import { getRefferSetup } from "./getReffer/mod.ts";
import { updateRefferSetup } from "./updateReffer/mod.ts";
import { removeRefferSetup } from "./removeReffer/mod.ts";
import { addReplyToRefferSetup } from "./addReplyToReffer/mod.ts";
import { readReplyToRefferSetup } from "./readReplyToReffer/mod.ts";
import { getReffersSetup } from "./getReffers/mod.ts";
import { countReffersSetup } from "./countReffers/mod.ts";
export const refferSetup = () => {
	addRefferSetup();
	updateRefferSetup();
	getRefferSetup();
	removeRefferSetup();
	addReplyToRefferSetup();
	readReplyToRefferSetup();
	getReffersSetup();
	countReffersSetup();
};

export * from "./addReffer/mod.ts";
export * from "./getReffer/mod.ts";
export * from "./updateReffer/mod.ts";
export * from "./removeReffer/mod.ts";
export * from "./addReplyToReffer/mod.ts";
export * from "./readReplyToReffer/mod.ts";
export * from "./getReffers/mod.ts";
export * from "./countReffers/mod.ts";
