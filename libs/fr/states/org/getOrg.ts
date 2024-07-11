import {
  DeepPartial,
  ReqType,
} from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { org } from "./mod.ts";

export type GetOrgSet = ReqType["main"]["org"]["getOrg"]["set"];
export type GetOrgGet = DeepPartial<ReqType["main"]["org"]["getOrg"]["get"]>;

export const getOrg = async (
  signalInp: typeof org,
  set: GetOrgSet,
  get: GetOrgGet,
  token: string,
) => {
  signalInp.value = {
    ...signalInp.value,
    loader: true,
    err: null,
  };
  const getData = await bargApi.send({
    model: "org",
    act: "getOrg",
    details: {
      set,
      get,
    },
  }, { token });
  if (getData.success) {
    signalInp.value = {
      err: null,
      loader: false,
      data: getData.body,
    };
  } else {
    signalInp.value = {
      ...signalInp.value,
      err: getData.body,
      loader: false,
    };
  }
  return getData;
};
