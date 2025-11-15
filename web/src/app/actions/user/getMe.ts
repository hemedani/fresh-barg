"use server"
import { http } from "@/services/Api";
import { ReqType } from "@/types/declarations/selectInp";
import { GetMeResponse } from "@/types/types";
import { cookies } from "next/headers";

export const GetMe = async (
  get?: ReqType["main"]["user"]["getMe"]["get"],
): Promise<GetMeResponse> => {

  try {
    const cookieStore = cookies()
    const token = (await cookieStore).get("token");

    if (!token?.value) {
      return {
        success: false,
        error: "کاربر احراز هویت نشده است، لطفاً وارد حساب کاربری خود شوید",
      };
    }

    get = get || {
      _id: 1,
      first_name: 1,
      last_name: 1,
      phone: 1,
      gender: 1,
      birth_date: 1,
      personnel_code: 1,
      email: 1,
      is_active: 1,
      province: {
        _id: 1,
        name: 1,
      },
      city: {
        _id: 1,
        name: 1,
      },
      avatar: {
        _id: 1,
        name: 1,
        size: 1,
        type: 1,
      },
      org: {
        _id: 1,
        name: 1,
      },
      unit: {
        _id: 1,
        name: 1,
      },
      position: {
        _id: 1,
        level: 1,
      }
    };

    const response = await http.send(
      {
        service: "main",
        model: "user",
        act: "getMe",
        details: {
          set: {},
          get,
        },
      },
      { token: token?.value },
    );


    if (!response.success) {
      return {
        error: response.body.message || "Failed to get user information",
        success: false,
      };
    } else {
      if (token.value) {
        (await cookieStore).set("user", JSON.stringify(response.body), {
          maxAge: 60 * 60 * 24 * 7, // 7 days
        });
      }
      return {
        user: response.body,
        success: true,
      };
    }
  } catch {
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
};
