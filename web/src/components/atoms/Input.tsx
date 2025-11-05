"use client";
import { FieldPath, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  label: string;
  register: UseFormRegister<T>;
  className?: string;
  errMsg?: string;
  type?: string;
  placeholder?: string;
  step?: string;
}

export const MyInput = <T extends FieldValues = FieldValues>({
  className,
  errMsg,
  name,
  type,
  label,
  placeholder,
  register,
  step,
}: InputProps<T>) => {
  return (
    <div className={`flex flex-col gap-3 ${className || ""}`}>
      <label
        htmlFor={name}
        className="text-sm font-medium text-slate-300 text-right flex items-center gap-2"
      >
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          id={name}
          {...register(name)}
          placeholder={placeholder || label}
          className={`
            w-full px-4 py-3 bg-white/5 border rounded-xl resize-none
            placeholder:text-slate-400 text-right text-white
            transition-all duration-300 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
            hover:bg-white/10 hover:border-white/30
            ${errMsg
              ? "border-red-400/60 bg-red-500/10 focus:ring-red-500"
              : "border-white/20 focus:border-transparent"
            }
          `}
          rows={4}
        />
      ) : (
        <input
          id={name}
          {...register(name)}
          type={type || "text"}
          placeholder={placeholder || label}
          step={step}
          className={`
            w-full px-4 py-3 bg-white/5 border rounded-xl
            placeholder:text-slate-400 text-right text-white
            transition-all duration-300 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
            hover:bg-white/10 hover:border-white/30
            ${errMsg
              ? "border-red-400/60 bg-red-500/10 focus:ring-red-500"
              : "border-white/20 focus:border-transparent"
            }
            ${type === "date" ? "text-left direction-ltr" : ""}
            ${type === "number" ? "direction-ltr text-left" : ""}
          `}
        />
      )}

      {errMsg && (
        <span className="text-red-400 text-xs font-medium text-right mt-1 flex items-center gap-2">
          <div className="w-2 h-2 bg-red-400 rounded-full shrink-0"></div>
          {errMsg}
        </span>
      )}
    </div>
  );
};
