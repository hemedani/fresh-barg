"use client";

import { OTPVerifiForm, PhoneNumberForm } from "@/components/mulecules";
import { useState } from "react";

export const LoginPage = () => {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState<string>("");
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 text-white font-sans">
      <div className="w-full max-w-md px-6 z-10">
        {step === "phone" ? (
          <PhoneNumberForm setPhone={setPhone} setStep={setStep} />
        ) : (
          <OTPVerifiForm phone={phone} setStep={setStep} />
        )}
      </div>
    </div>
  );
};
