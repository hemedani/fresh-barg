"use client";
import { ArrowRight, Leaf, Phone, Send, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginRequest } from "@/app/actions/auth/loginReq";
import toast from "react-hot-toast";

interface PhoneNumberFormProps {
  setStep: Dispatch<SetStateAction<"phone" | "otp">>;
  setPhone: Dispatch<SetStateAction<string>>;
}

export const LoginUserSchema = z.object({
  phone: z
    .string()
    .min(1, { message: "شماره تلفن الزامی است" })
    .regex(/^09[0-9]{9}$/, {
      message: "شماره تلفن باید با 09 شروع شود و 11 رقم باشد",
    }),
});

export type PhoneNumberFormSchema = z.infer<typeof LoginUserSchema>;

export const PhoneNumberForm: FC<PhoneNumberFormProps> = ({
  setStep,
  setPhone,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PhoneNumberFormSchema>({
    resolver: zodResolver(LoginUserSchema),
  });

  const onSubmit: SubmitHandler<PhoneNumberFormSchema> = async (data) => {
    const response = await loginRequest({ phone: +data.phone }, { phone: 1 });
    if (response.success) {
      toast.success("کد تایید برای شماره موبایل شما ارسال شد");
      setPhone(response.body.phone);
      setStep("otp");
    } else {
      toast.error(response.body.message);
    }
  };

  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-linear-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2 flex items-center justify-center">
          <Leaf className="ml-2" size={32} />
          برگ
        </h1>
        <p className="text-slate-400 mt-2">ورود با شماره موبایل</p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
        <div id="phoneStep">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label
              htmlFor="phone"
              className="block text-slate-300 text-sm mb-2"
            >
              شماره موبایل
            </label>
            <div className="relative mb-2">
              <Phone
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500"
                size={20}
              />
              <input
                {...register("phone")}
                name="phone"
                id="phone"
                type="tel"
                placeholder="09123456789"
                maxLength={11}
                className={`w-full px-4 py-3.5 bg-white/10 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pr-12 transition-all duration-300 ${
                  errors.phone
                    ? "border-red-400/60 focus:ring-red-500"
                    : "border-white/30 focus:border-transparent"
                }`}
              />
            </div>

            {/* نمایش خطا */}
            {errors.phone && (
              <div className="mb-4 animate-fadeIn">
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                  <AlertCircle size={18} className="shrink-0" />
                  <span className="text-sm font-medium">
                    {errors.phone.message}
                  </span>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-linear-to-r from-green-500 to-emerald-500 text-white py-3.5 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center gap-2 disabled:from-green-400 disabled:to-emerald-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  در حال ارسال...
                </>
              ) : (
                <>
                  <Send size={20} />
                  ارسال کد تأیید
                </>
              )}
            </button>
          </form>

          <p className="text-slate-400 text-xs text-center mt-4">
            با ورود،{" "}
            <Link
              href="#"
              className="text-green-500 hover:text-green-400 transition-colors"
            >
              شرایط استفاده
            </Link>{" "}
            را می‌پذیرید.
          </p>
        </div>

        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-slate-400 hover:text-slate-300 transition-colors text-sm flex items-center justify-center gap-2"
          >
            <ArrowRight size={16} />
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </>
  );
};
