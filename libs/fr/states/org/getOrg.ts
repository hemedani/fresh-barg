import { DeepPartial, ReqType, orgSchema, } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type GetOrgSet = ReqType["main"]["org"]["getOrg"]["set"]
export type GetOrgGet = DeepPartial<ReqType["main"]["org"]["getOrg"]["get"]>

export const getOrg = async (orgs: Signal<DeepPartial<orgSchema>[]>, set: GetOrgSet, get: GetOrgGet) => {
  const getOrg = await bargApi.send({
    model: "org",
    act: "getOrg",
    details: {
      set,
      get,
    },
  })
  if (getOrg.success)
    orgs.value = getOrg;
  return getOrg
}
