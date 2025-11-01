"use server";
import { http } from "@/services/Api";
import { ReqType } from "@/types/declarations/selectInp";
import { cookies } from "next/headers";

export const getCity = async ({
  set,
  get,
}: ReqType["main"]["city"]["getCity"]) => {
  const token = (await cookies()).get("token");

  const response = await http.send(
    {
      service: "main",
      model: "city",
      act: "getCity",
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
