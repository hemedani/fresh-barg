import {
  DeepPartial,
  ReqType,
} from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { users } from "./mod.ts";

export type GetUsersSet = ReqType["main"]["user"]["getUsers"]["set"];
export type GetUsersGet = DeepPartial<
  ReqType["main"]["user"]["getUsers"]["get"]
>;

export const getUsers = async (
  signalInp: typeof users,
  set: GetUsersSet,
  get: GetUsersGet,
  token: string,
  added?: boolean,
) => {
  signalInp.value = {
    ...signalInp.value,
    loader: true,
    err: null,
  };
  const getData = await bargApi.send({
    model: "user",
    act: "getUsers",
    details: {
      set,
      get,
    },
  }, { token });
  if (getData.success) {
    signalInp.value = {
      loader: false,
      err: null,
      data: added ? [...signalInp.value.data, ...getData.body] : getData.body,
    };
  } else {
    signalInp.value = { ...signalInp.value, loader: false, err: getData.body };
  }
  return getData;
};
