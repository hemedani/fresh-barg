"use server"
import { http } from "@/services/Api";
import { ReqType } from "@/types/declarations/selectInp";
import { cookies } from "next/headers";


export const createUser = async ({ set, get }: ReqType["main"]["user"]["addUser"]) => {
  console.log({ set });

  const token = (await cookies()).get("token");
  if (!token?.value) {
    return {
      success: false,
      error: "کاربر احراز هویت نشده است، لطفاً وارد حساب کاربری خود شوید",
    };
  }
  const response = await http.send({
    service: "main",
    model: "user",
    act: "addUser",
    details: {
      set,
      get,
    },
  }, { token: token.value });

  if (!response.success) {
    return {
      error: response.body.message || "Failed to get user information",
      success: false,
    };
  } else {
    return response
  }

};
