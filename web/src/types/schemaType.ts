// schemas/userSchema.ts
import { z } from "zod";

export const userSchema = z.object({
    first_name: z.string().min(2, "نام باید حداقل ۲ کاراکتر باشد"),
    last_name: z.string().min(2, "نام خانوادگی باید حداقل ۲ کاراکتر باشد"),
    phone: z.string().min(11, "شماره تلفن باید ۱۱ رقمی باشد").max(11, "شماره تلفن باید ۱۱ رقمی باشد"),
    gender: z.enum(["male", "female"]).refine(
        (val) => val === "male" || val === "female",
        "لطفاً جنسیت را انتخاب کنید"
    ),
    birth_date: z.string().min(1, "تاریخ تولد الزامی است"),
    personnel_code: z.string().min(1, "کد پرسنلی الزامی است"),
    email: z.string().email("ایمیل معتبر نیست").optional().or(z.literal("")),
    provinceId: z.string().min(1, "انتخاب استان مورد نظر الزامی است"),
});

export type UserForm = z.infer<typeof userSchema>;
export type User = UserForm & { _id: string };