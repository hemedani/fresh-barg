import { createFormState } from "./form/mod.ts";
import { createLetterState } from "./letter/mod.ts";
import { createOrgsState } from "./org/mod.ts";
import { createPositionState } from "./position/mod.ts";
import { createPreDefLetterState } from "./preDefaultLetter/mod.ts";
import { createPriorityState } from "./priority/mod.ts";
import { createProvinceState } from "./province/mod.ts";
import { createUnitState } from "./unit/mod.ts";
import { createUserState } from "./user/mod.ts";

export function createAppState() {
  return {
    user: { ...createUserState() },
    province: { ...createProvinceState() },
    org: { ...createOrgsState() },
    unit: { ...createUnitState() },
    letter: { ...createLetterState() },
    position: { ...createPositionState() },
    preDefLetter: { ...createPreDefLetterState() },
    priority: { ...createPriorityState() },
    form: { ...createFormState() }
  };
}
