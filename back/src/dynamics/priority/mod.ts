import { addPrioritySetup } from "./addPriority/mod.ts";
import { getPrioritySetup } from "./getPriority/mod.ts";
import { updatePrioritySetup } from "./updatePriority/mod.ts";
// import { getPrioritiesSetup } from "./getPriorities/mod.ts";

export const prioritySetup = () => {
  addPrioritySetup();
  updatePrioritySetup();
  getPrioritySetup();
  // getPrioritiesSetup();
};

export * from "./addPriority/mod.ts";
export * from "./getPriority/mod.ts";
export * from "./updatePriority/mod.ts";
// export * from "./getPriorities/mod.ts";
