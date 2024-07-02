import { signal } from "@preact/signals";
import {
  DeepPartial,
  ReqType,
  userSchema,
} from "../../../../back/declarations/selectInp.ts";
import { loginRequest } from "./loginRequest.ts";
import { login } from "./login.ts";
import { getUser } from "./getUser.ts";

export type User = DeepPartial<userSchema>;

export const me = signal<User>({});
export const user = signal<User>({});
export const users = signal<User[]>([]);

export const createUserState = () => {
  return {
    me,
    user,
    users,
    loginRequest: async (phone: string) => await loginRequest(phone),
    login: async (phone: string, code: number) => await login(me, phone, code),
    getUser: async (set: ReqType["main"]["user"]["getUser"]["set"], get: ReqType["main"]["user"]["getUser"]["get"]) => await getUser(user, set, get)
  };
};
