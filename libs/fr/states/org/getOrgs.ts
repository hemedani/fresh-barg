import { DeepPartial, ReqType, orgSchema, } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type GetOrgsSet = ReqType["main"]["org"]["getOrgs"]["set"]
export type GetOrgsGet = DeepPartial<ReqType["main"]["org"]["getOrgs"]["get"]>

export const getOrgs = async (orgs: Signal<DeepPartial<orgSchema>[]>, set: GetOrgsSet, get: GetOrgsGet) => {
  const getOrgs = await bargApi.send({
    model: "org",
    act: "getOrgs",
    details: {
      set,
      get,
    },
  })
  if (getOrgs.success)
    orgs.value = getOrgs;
  return getOrgs
}
