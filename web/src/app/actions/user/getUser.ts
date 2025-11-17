"use server"
import { http } from "@/services/Api";
import { ReqType } from "@/types/declarations/selectInp";
import { cookies } from "next/headers";

export const getUser = async ({ set, get }: ReqType["main"]["user"]["getUser"]) => {
    try {
        const cookieStore = cookies()
        const token = (await cookieStore).get("token");

        if (!token?.value) {
            return {
                success: false,
                error: "کاربر احراز هویت نشده است، لطفاً وارد حساب کاربری خود شوید",
            };
        }

        const response = await http.send({
            service: "main",
            model: "user",
            act: "getUser",
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
            return response.body
        }
    } catch {
        return {
            success: false,
            error: "An unexpected error occurred",
        };
    }

};
