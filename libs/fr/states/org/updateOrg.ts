import {
  DeepPartial,
  ReqType,
} from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { orgs } from "./mod.ts";

export type UpdateOrgSet = ReqType["main"]["org"]["updateOrg"]["set"];
export type UpdateOrgGet = DeepPartial<
  ReqType["main"]["org"]["updateOrg"]["get"]
>;

export const updateOrg = async (
  signalInp: typeof orgs,
  set: UpdateOrgSet,
  get: UpdateOrgGet,
  token: string,
) => {
  signalInp.value = {
    ...signalInp.value,
    loader: true,
    err: null,
  };
  const getData = await bargApi.send({
    model: "org",
    act: "updateOrg",
    details: {
      set,
      get,
    },
  }, { token });
  if (getData.success) {
    const updateOrgIdx = signalInp.value.data.findIndex((org) =>
      org?._id === getData.body._id
    );
    signalInp.value = {
      err: null,
      loader: false,
      data: [
        ...signalInp.value.data.splice(0, updateOrgIdx),
        getData.body,
        ...signalInp.value.data.splice(updateOrgIdx + 1),
      ],
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
