"use server";
import { http } from "@/services/Api";
import { DeepPartial, ReqType } from "@/types/declarations/selectInp";

export type LoginReqSet = ReqType["main"]["user"]["loginReq"]["set"];
export type LoginReqGet = DeepPartial<
  ReqType["main"]["user"]["loginReq"]["get"]
>;

export const loginRequest = async (set: LoginReqSet, get: LoginReqGet) => {
  const response = await http.send({
    service: "main",
    model: "user",
    act: "loginReq",
    details: {
      set,
      get,
    },
  });
  return response;
};
