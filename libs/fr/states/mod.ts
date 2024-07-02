import { createProvinceState } from "./province/mod.ts";
import { createUserState } from "./user/mod.ts";

export function createAppState() {
  return {
    user: { ...createUserState() },
    province: { ...createProvinceState() }
  };
}
