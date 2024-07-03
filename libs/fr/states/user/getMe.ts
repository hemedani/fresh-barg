import {
  DeepPartial,
  ReqType,
  userSchema,
} from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type GetMetSet = ReqType["main"]["user"]["getMe"]["set"];
export type GetMetGet = DeepPartial<ReqType["main"]["user"]["getMe"]["get"]>;

export const getMe = async (
  me: Signal<DeepPartial<userSchema>>,
  set: GetMetSet,
  get: GetMetGet,
  token: string,
) => {
  const getMe = await bargApi.send({
    model: "user",
    act: "getMe",
    details: {
      set,
      get,
    },
  }, { token });
  me.value = getMe;
  return getMe;
};
