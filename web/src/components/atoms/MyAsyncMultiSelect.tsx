"use client";
import { ReactSelectOption } from "@/types/types";
import dynamic from "next/dynamic";
import { FieldPath, FieldValues, Path, PathValue, UseFormSetValue } from "react-hook-form";
import { GroupBase, OptionsOrGroups, PropsValue, StylesConfig } from "react-select";
import { CustomStyles } from "./Select";

const AsyncSelect = dynamic(() => import("react-select/async"), { ssr: false });

// export type SelectOption = { value: string; label: string };

interface InputProps<Option, Group extends GroupBase<Option>, T extends FieldValues = FieldValues> {
    name: FieldPath<T>;
    label: string;
    setValue: UseFormSetValue<T>;
    labelAsValue?: boolean;
    errMsg?: string;
    placeholder?: string;
    loadOptions?: (inputValue: string, callback: (options: OptionsOrGroups<Option, Group>) => void) => Promise<OptionsOrGroups<Option, Group>> | void;
    defaultOptions?: OptionsOrGroups<Option, Group> | boolean;
    defaultValue?: PropsValue<Option>;
    className?: string;
}

export const MyAsyncMultiSelect = <Option, Group extends GroupBase<Option>, T extends FieldValues = FieldValues>({
    errMsg,
    name,
    label,
    loadOptions,
    setValue,
    labelAsValue,
    defaultOptions,
    defaultValue,
    className,
    placeholder
}: InputProps<Option, Group, T>) => {


    return (
        <div className={`flex flex-col gap-2 ${className || ""}`}>
            <label
                htmlFor={name}
                className="text-sm font-medium text-slate-700 text-right"
            >
                {label}
            </label>

            <div className="relative">
                <AsyncSelect
                    isMulti
                    cacheOptions
                    defaultValue={defaultValue}
                    loadOptions={loadOptions}
                    defaultOptions={defaultOptions}
                    onChange={(newVal) =>
                        setValue(
                            name,
                            ((newVal as ReactSelectOption[]).map((val) =>
                                labelAsValue ? val.label : val.value
                            ) as unknown as PathValue<T, Path<T>>)
                        )
                    }
                    name={name}
                    placeholder={placeholder || `${label} را انتخاب کنید`}
                    styles={CustomStyles}
                    noOptionsMessage={() => "گزینه‌ای یافت نشد"}
                    loadingMessage={() => "در حال بارگذاری..."}
                    isRtl={true}
                    className="react-select-container"
                    classNamePrefix="react-select"
                />
            </div>

            {errMsg && (
                <span className="text-red-500 text-xs font-medium text-right mt-1 flex items-center gap-1">
                    <svg
                        className="w-3 h-3 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                    {errMsg}
                </span>
            )}
        </div>
    );
};

