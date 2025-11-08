import { http } from "@/services/Api";
import { DeepPartial, ReqType } from "@/types/declarations/selectInp";

export type UpdateUserSet = ReqType["main"]["user"]["updateUser"]["set"];
export type UpdateUserGet = DeepPartial<
  ReqType["main"]["user"]["updateUser"]["get"]
>;

export const UpdateUser = async (set: UpdateUserSet, get: UpdateUserGet) => {
  const response = await http.send({
    service: "main",
    model: "user",
    act: "updateUser",
    details: {
      set,
      get,
    },
  });

  return response.data;
};
