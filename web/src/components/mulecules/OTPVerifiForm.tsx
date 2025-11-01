"use client";
import { login } from "@/app/actions/auth/login";
import { GetMe } from "@/app/actions/user/getMe";
import { Check, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast/headless";
import OTPInput from "react-otp-input";
import Cookies from "js-cookie";
import { useAuth } from "@/context/authContext";

interface OTPVerifiFormProps {
  setStep: Dispatch<SetStateAction<"phone" | "otp">>;
  phone: string;
}

export const OTPVerifiForm: FC<OTPVerifiFormProps> = ({ setStep, phone }) => {
  const { setUserAuth } = useAuth()
  const { handleSubmit } = useForm();
  const [otp, setOtp] = useState<string>("");
  const router = useRouter();

  const onSubmit = async () => {
    const response = await login(
      { phone: +phone, code: +otp },
      {
        token: 1,
        user: {
          _id: 1,
          first_name: 1,
          last_name: 1,
          phone: 1,
          email: 1,
          gender: 1,
          personnel_code: 1,
          birth_date: 1,
          is_active: 1,
        },
      },
    );
    if (response.success) {
      toast.success("کد تایید برای شماره موبایل شما ارسال شد");
      // const responseUser = await GetMe()
      // Cookies.set("user", JSON.stringify(responseUser.user))
      await setUserAuth(response.body.token)
      router.replace("/dashboard");
      setStep("otp");
    } else {
      toast.error(response.body.message);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
      <div className="text-center mb-6">
        <Shield className="text-5xl text-green-500 mb-4 mx-auto" size={48} />
        <h2 className="text-xl font-bold mb-2">کد تأیید</h2>
        <p className="text-slate-400 text-sm">
          کد ۶ رقمی به{" "}
          <span className="text-green-500 font-semibold">0912****789</span>{" "}
          ارسال شد
        </p>
      </div>
      <div className="flex justify-center gap-3 mb-6">
        <OTPInput
          value={otp}
          onChange={setOtp}
          inputType="text"
          numInputs={5}
          shouldAutoFocus
          containerStyle={{ direction: "ltr" }}
          inputStyle={{
            width: "56px",
            height: "64px",
            direction: "ltr"
          }}
          renderSeparator={<span>-</span>}
          renderInput={(props) => (
            <input
              {...props}
              className="w-14 h-16 text-center text-2xl font-bold bg-white/10 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          )}
        />
      </div>
      <button
        onClick={handleSubmit(onSubmit)}
        className="w-full bg-linear-to-r from-green-500 to-emerald-500 text-white py-3.5 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <Check size={20} />
        تأیید و ورود
      </button>
      <div className="flex justify-between items-center mt-4 text-sm">
        <button className="text-green-500 hover:text-green-400 transition-colors underline">
          ارسال مجدد
        </button>
        <button
          onClick={() => setStep("phone")}
          className="text-slate-400 hover:text-slate-300 transition-colors"
        >
          تغییر شماره
        </button>
      </div>
      <div className="text-center mt-4 text-amber-400 text-sm">
        ارسال مجدد در <span className="font-mono">59</span> ثانیه
      </div>
    </div>
  );
};
