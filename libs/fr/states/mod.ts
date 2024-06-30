import { createUserState } from "./user/mod.ts";

export function createAppState() {
  return { user: { ...createUserState() } };
}
