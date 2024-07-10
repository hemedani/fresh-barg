import {
  DeepPartial,
  ReqType,
} from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { user } from "./mod.ts";

export type GetUserSet = ReqType["main"]["user"]["getUser"]["set"];
export type GetUserGet = DeepPartial<ReqType["main"]["user"]["getUser"]["get"]>;

export const getUser = async (
  signalInp: typeof user,
  set: GetUserSet,
  get: GetUserGet,
) => {
  signalInp.value = {
    ...signalInp.value,
    loader: true,
    err: null,
  };
  const getUser = await bargApi.send({
    model: "user",
    act: "getUser",
    details: {
      set,
      get,
    },
  });
  if (getUser.success) {
    signalInp.value = {
      data: { ...getUser.body },
      loader: false,
      err: null,
    };
  } else {
    signalInp.value = { data: {}, loader: false, err: getUser.body };
  }
  return getUser;
};
