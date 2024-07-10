import {
  DeepPartial,
  ReqType,
} from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { user } from "./mod.ts";

export type GetMetSet = ReqType["main"]["user"]["getMe"]["set"];
export type GetMetGet = DeepPartial<ReqType["main"]["user"]["getMe"]["get"]>;

export const getMe = async (
  signalInp: typeof user,
  set: GetMetSet,
  get: GetMetGet,
  token: string,
) => {
  signalInp.value = {
    ...signalInp.value,
    loader: true,
    err: null,
  };
  const getData = await bargApi.send({
    model: "user",
    act: "getMe",
    details: {
      set,
      get,
    },
  }, { token });
  if (getData.success) {
    signalInp.value = {
      data: { ...getData.body },
      loader: false,
      err: null,
    };
  } else {
    signalInp.value = { data: {}, loader: false, err: getData.body };
  }
  return getData;
};
