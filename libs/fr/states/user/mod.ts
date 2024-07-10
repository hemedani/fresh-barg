import { signal } from "@preact/signals";
import {
  DeepPartial,
  userSchema,
} from "../../../../back/declarations/selectInp.ts";
import { loginRequest } from "./loginRequest.ts";
import { login } from "./login.ts";
import { getUser, GetUserGet, GetUserSet } from "./getUser.ts";
import { getMe, GetMetGet, GetMetSet } from "./getMe.ts";
import { BargStates } from "../../mod.ts";
import { getUsers, GetUsersSet } from "./getUsers.ts";

export type User = DeepPartial<userSchema>;

export const me = signal<BargStates<User>>({
  data: {},
  loader: false,
  err: null,
});
export const user = signal<BargStates<User>>({
  data: {},
  loader: false,
  err: null,
});
export const users = signal<BargStates<User[]>>({
  data: [],
  loader: false,
  err: null,
});

export const createUserState = () => {
  return {
    me,
    user,
    users,
    loginRequest: async (phone: string) => await loginRequest(phone),
    login: async (phone: string, code: number) => await login(me, phone, code),
    getUser: async (
      set: GetUserSet,
      get: GetUserGet,
    ) => await getUser(user, set, get),
    getUsers: async (
      set: GetUsersSet,
      get: GetUserGet,
      token: string,
      added?: boolean,
    ) => await getUsers(users, set, get, token, added),
    getMe: async (
      set: GetMetSet,
      get: GetMetGet,
      token: string,
    ) => await getMe(me, set, get, token),
  };
};
