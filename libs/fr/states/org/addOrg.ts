import {
  DeepPartial,
  ReqType,
} from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { orgs } from "./mod.ts";


export type addOrgSet = ReqType["main"]["org"]["addOrg"]["set"];
export type AddOrgGet = DeepPartial<ReqType["main"]["org"]["addOrg"]["get"]>;

export const addOrg = async (
  signalInp: typeof orgs,
  set: addOrgSet,
  get: AddOrgGet,
  token: string,
) => {
  signalInp.value = {
    ...signalInp.value,
    loader: true,
    err: null,
  };
  const getData = await bargApi.send({
    model: "org",
    act: "addOrg",
    details: {
      set,
      get,
    },
  }, { token });
  if (getData.success) {
    signalInp.value = {
      err: null,
      loader: false,
      data: [getData.body, ...signalInp.value.data],
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
