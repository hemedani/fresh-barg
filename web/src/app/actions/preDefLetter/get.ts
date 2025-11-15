"use server";
import { http } from "@/services/Api";
import { ReqType } from "@/types/declarations/selectInp";
import { cookies } from "next/headers";

export const getPreDefLetter = async ({
    set,
    get,
}: ReqType["main"]["preDefLetter"]["getPredefletter"]) => {
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
                model: "preDefLetter",
                act: "getPredefletter",
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
