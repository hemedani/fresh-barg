"use server";
import { http } from "@/services/Api";
import { ReqType } from "@/types/declarations/selectInp";
import { cookies } from "next/headers";

export const getCities = async ({
  set,
  get,
}: ReqType["main"]["city"]["getCities"]) => {
  const token = (await cookies()).get("token");
  console.log(set);

  const response = await http.send(
    {
      service: "main",
      model: "city",
      act: "getCities",
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
