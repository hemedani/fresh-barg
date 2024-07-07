import { DeepPartial, ReqType, orgSchema, } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type RemoveOrgsSet = ReqType["main"]["org"]["removeOrg"]["set"]
export type RemoveOrgsGet = DeepPartial<ReqType["main"]["org"]["removeOrg"]["get"]>

export const removeOrg = async (orgs: Signal<DeepPartial<orgSchema>[]>, set: RemoveOrgsSet, get: RemoveOrgsGet) => {
  const removeOrg = await bargApi.send({
    model: "org",
    act: "removeOrg",
    details: {
      set,
      get,
    },
  })
  if (removeOrg.success)
    orgs.value = orgs.value.filter(org => org._id !== removeOrg._id)
  return removeOrg
}
