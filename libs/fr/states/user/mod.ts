import { signal } from "@preact/signals";
import {
  DeepPartial,
  userSchema,
} from "../../../../back/declarations/selectInp.ts";
import { loginRequest } from "./loginRequest.ts";
import { login } from "./login.ts";

export type User = DeepPartial<userSchema>;

export const user = signal<User>({});

export const createUserState = () => {
  return {
    user,
    loginRequest: (phone: string) => loginRequest(phone),
    login: (phone: string, code: number) => login(user, phone, code),
  };
};
