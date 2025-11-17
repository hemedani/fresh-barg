"use server"
import { http } from "@/services/Api";
import { ReqType } from "@/types/declarations/selectInp";
import { cookies } from "next/headers";

export const updatePosition = async ({
    set,
    get,
}: ReqType["main"]["position"]["updatePosition"]) => {
    const token = (await cookies()).get("token");

    const response = await http.send(
        {
            service: "main",
            model: "position",
            act: "updatePosition",
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
