import { http } from "@/services/Api";
import { DeepPartial, ReqType } from "@/types/declarations/selectInp";

export type AddUserSet = ReqType["main"]["user"]["addUser"]["set"];
export type AddUserGet = DeepPartial<ReqType["main"]["user"]["addUser"]["get"]>;

export const AddUser = async (set: AddUserSet, get: AddUserGet) => {
  const response = await http.send({
    service: "main",
    model: "user",
    act: "addUser",
    details: {
      set,
      get,
    },
  });

  return response;
};
