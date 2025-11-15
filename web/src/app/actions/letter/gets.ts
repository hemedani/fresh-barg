"use server";
import { http } from "@/services/Api";
import { ReqType } from "@/types/declarations/selectInp";
import { cookies } from "next/headers";

export const getLetters = async ({
    set,
    get,
}: ReqType["main"]["letter"]["getLetters"]) => {
    try {
        const token = (await cookies()).get("token");
        if (!token?.value) {
            return {
                success: false,
                error: "کاربر احراز هویت نشده است، لطفاً وارد حساب کاربری خود شوید",
            };
        }

        const response = await http.send(
            {
                service: "main",
                model: "letter",
                act: "getLetters",
                details: {
                    set,
                    get,
                },
            },
            { token: token?.value },
        );

        if (!response.success) {
            return { success: false, message: response.body.message };
        } else {
            return response;
        }
    } catch {
        return {
            success: false,
            error: "An unexpected error occurred",
        };
    }
};
