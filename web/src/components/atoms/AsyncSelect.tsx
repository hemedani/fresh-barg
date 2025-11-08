"use client";
import dynamic from "next/dynamic";
import React from "react";
import { FieldPath, FieldValues, Path, PathValue, UseFormSetValue } from "react-hook-form";
import { GroupBase, OptionsOrGroups, PropsValue } from "react-select";
import { CustomStyles } from "./Select";

const AsyncSelect = dynamic(() => import("react-select/async"), { ssr: false });

export type SelectOption = { value: string; label: string };

type MyAsyncSelectProps<T extends FieldValues = FieldValues> = {
    name: FieldPath<T>;
    label: string;
    setValue: UseFormSetValue<T>;
    labelAsValue?: boolean;
    errMsg?: string;
    placeholder?: string;
    loadOptions?: (
        inputValue: string,
        callback: (options: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>) => void
    ) => Promise<OptionsOrGroups<SelectOption, GroupBase<SelectOption>>> | void;
    defaultOptions?: OptionsOrGroups<SelectOption, GroupBase<SelectOption>> | boolean;
    defaultValue?: PropsValue<SelectOption>;
    className?: string;
    isDisabled?: boolean

};

const MyAsyncMultiSelect = <T extends FieldValues = FieldValues>({
    errMsg,
    name,
    label,
    loadOptions,
    setValue,
    labelAsValue = false,
    defaultOptions,
    defaultValue,
    className,
    placeholder,
    isDisabled
}: MyAsyncSelectProps<T>) => {
    return (
        <div className={`flex flex-col gap-2 ${className || ""}`}>
            <label htmlFor={name} className="text-sm font-medium text-slate-700 text-right">
                {label}
            </label>
            <div className="relative">
                <AsyncSelect
                    cacheOptions
                    defaultValue={defaultValue}
                    loadOptions={loadOptions}
                    defaultOptions={defaultOptions}
                    onChange={(newVal: any) => {
                        // اینجاست که TypeScript رو آروم می‌کنیم!
                        const values = Array.isArray(newVal)
                            ? newVal.map((val: SelectOption) => (labelAsValue ? val.label : val.value))
                            : newVal && newVal.value != null
                                ? [labelAsValue ? newVal.label : newVal.value]
                                : [];

                        const finalValue = values.length > 0 ? values[0] : "";

                        setValue(name, finalValue as unknown as PathValue<T, Path<T>>, {
                            shouldValidate: true,
                            shouldDirty: true,
                            shouldTouch: true,
                        });
                    }}
                    name={name}
                    placeholder={placeholder || `${label} را انتخاب کنید`}
                    styles={CustomStyles}
                    noOptionsMessage={() => "گزینه‌ای یافت نشد"}
                    loadingMessage={() => "در حال بارگذاری..."}
                    isRtl={true}
                    isClearable={true}
                    className="react-select-container"
                    classNamePrefix="react-select"
                />
            </div>
            {errMsg && (
                <span className="text-red-500 text-xs font-medium text-right mt-1 flex items-center gap-1">
                    <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

export default MyAsyncMultiSelect;