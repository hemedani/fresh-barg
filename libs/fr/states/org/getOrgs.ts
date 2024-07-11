import {
  DeepPartial,
  ReqType,
} from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { orgs } from "./mod.ts";

export type GetOrgsSet = DeepPartial<
  ReqType["main"]["org"]["getOrgs"]["set"]
>;
export type GetOrgsGet = DeepPartial<
  ReqType["main"]["org"]["getOrgs"]["get"]
>;

export const getOrgs = async (
  signalInp: typeof orgs,
  set: GetOrgsSet,
  get: GetOrgsGet,
  token: string,
  added?: boolean,
) => {
  signalInp.value = {
    ...signalInp.value,
    loader: true,
    err: null,
  };
  const getData = await bargApi.send({
    model: "org",
    act: "getOrgs",
    details: {
      set,
      get,
    },
  }, { token });
  if (getData.success) {
    signalInp.value = {
      err: null,
      loader: false,
      data: added ? [...signalInp.value.data, ...getData.body] : getData.body,
    };
  } else {
    signalInp.value = {
      ...signalInp.value,
      err: getData.body.message,
      loader: false,
    };
  }
  return getData;
};
