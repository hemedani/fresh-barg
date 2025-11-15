"use server";
import { http } from "@/services/Api";
import { DeepPartial, ReqType } from "@/types/declarations/selectInp";
import { cookies } from "next/headers";

export type GetProvincesGet = ReqType["main"]["province"]["getProvince"]["get"];
export type GetProvincesSet = DeepPartial<
  ReqType["main"]["province"]["getProvince"]["set"]
>;

export const getProvince = async (
  set: GetProvincesSet,
  get: GetProvincesGet,
) => {
  const token = (await cookies()).get("token");

  const response = await http.send(
    {
      service: "main",
      model: "province",
      act: "getProvince",
      details: {
        get,
        set,
      },
    },
    { token: token?.value },
  );

  if (!response.success) {
    return { success: false, message: response.body.message };
  }

  return response;
};
