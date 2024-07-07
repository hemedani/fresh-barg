import { DeepPartial, ReqType, orgSchema, } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type UpdateOrgSet = ReqType["main"]["org"]["updateOrg"]["set"]
export type UpdateOrgGet = DeepPartial<ReqType["main"]["org"]["updateOrg"]["get"]>

export const updateOrg = async (orgs: Signal<DeepPartial<orgSchema>[]>, set: UpdateOrgSet, get: UpdateOrgGet) => {
  const updateOrg = await bargApi.send({
    model: "org",
    act: "updateOrg",
    details: {
      set,
      get,
    },
  })
  if (updateOrg.success) {

    const updateOrgIdx = orgs.value.findIndex((pr) => pr._id === updateOrg._id)
    orgs.value = [...orgs.value.splice(0, updateOrgIdx), updateOrg, ...orgs.value.splice(updateOrgIdx + 1)]
  }
  return updateOrg
}
