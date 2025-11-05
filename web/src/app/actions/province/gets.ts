"use server"
import { http } from "@/services/Api";
import { ReqType } from "@/types/declarations/selectInp";
import { cookies } from "next/headers";

export const getProvinces = async ({
  set,
  get,
}: ReqType["main"]["province"]["getProvinces"]) => {
  const token = (await cookies()).get("token");

  const response = await http.send(
    {
      service: "main",
      model: "province",
      act: "getProvinces",
      details: {
        set,
        get,
      },
    },
    { token: token?.value },
  );

  if (!response.success) {
    return { success: false, message: response.body.message };
  }

  return response;
};
