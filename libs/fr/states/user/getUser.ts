import { DeepPartial, ReqType, userSchema } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";
export type getUserSet = ReqType["main"]["user"]["getUser"]["set"]
export type setUserSet = DeepPartial<ReqType["main"]["user"]["getUser"]["get"]>

export const getUser = async (user: Signal<DeepPartial<userSchema>>, set: getUserSet, get: setUserSet) => {
  const getUser = await bargApi.send({
    model: "user",
    act: "getUser",
    details: {
      set,
      get,
    },
  })
  user.value = getUser;
  return getUser
}
