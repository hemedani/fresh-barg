import { DeepPartial, ReqType, orgSchema } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type AddOrgSet = ReqType["main"]["org"]["addOrg"]["set"]
export type AddOrgGet = DeepPartial<ReqType["main"]["org"]["addOrg"]["get"]>

export const addOrg = async (orgs: Signal<DeepPartial<orgSchema>[]>, set: AddOrgSet, get: AddOrgGet) => {
  const addOrg = await bargApi.send({
    model: "org",
    act: "addOrg",
    details: {
      set,
      get,
    },
  })
  if (addOrg.success)
    orgs.value = [addOrg, ...orgs.value];
  return addOrg
}
