import { DeepPartial, ReqType, userSchema } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export const getUser = async (user: Signal<DeepPartial<userSchema>>, set: ReqType["main"]["user"]["getUser"]["set"], get: ReqType["main"]["user"]["getUser"]["get"]) => {
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
