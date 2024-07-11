import {
  DeepPartial,
  ReqType,
} from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { orgs } from "./mod.ts";

export type RemoveOrgSet = ReqType["main"]["org"]["removeOrg"]["set"];
export type RemoveOrgGet = DeepPartial<
  ReqType["main"]["org"]["removeOrg"]["get"]
>;

export const removeOrg = async (
  signalInp: typeof orgs,
  set: RemoveOrgSet,
  get: RemoveOrgGet,
  token: string,
) => {
  signalInp.value = {
    ...signalInp.value,
    loader: true,
    err: null,
  };
  const getData = await bargApi.send({
    model: "org",
    act: "removeOrg",
    details: {
      set,
      get,
    },
  }, { token });

  if (getData.success) {
    signalInp.value = {
      loader: false,
      err: null,
      data: signalInp.value.data.filter((org) =>
        org?._id !== getData.body._id
      ),
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
