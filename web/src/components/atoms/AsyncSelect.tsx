// components/atoms/AsyncSelect.tsx
"use client";
import { FC } from "react";
import ReactSelectAsync, { AsyncProps } from "react-select/async";
import { components, StylesConfig } from "react-select";

export interface AsyncSelectProps {
    label?: string;
    name: string;
    value?: any;
    onChange: (value: any) => void;
    loadOptions: (inputValue: string) => Promise<any[]>;
    options?: any[];
    placeholder?: string;
    errMsg?: string;
    isMulti?: boolean;
    isDisabled?: boolean;
    getOptionLabel?: (option: any) => string;
    getOptionValue?: (option: any) => string;
    isLoading?: boolean;
    defaultOptions?: boolean | any[];
}

export const AsyncSelect: FC<AsyncSelectProps> = ({
    label,
    name,
    value,
    onChange,
    loadOptions,
    options,
    placeholder = "انتخاب کنید...",
    errMsg,
    isMulti = false,
    isDisabled = false,
    getOptionLabel = (option) => option.name || option.label,
    getOptionValue = (option) => option._id || option.value,
    isLoading = false,
    defaultOptions = true,
}) => {
    // استایل‌های custom برای react-select
    const customStyles: StylesConfig = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: "#1e293b",
            borderColor: state.isFocused ? "#3b82f6" : "#475569",
            borderWidth: "2px",
            borderRadius: "0.75rem",
            padding: "0.25rem 0.5rem",
            minHeight: "44px",
            boxShadow: state.isFocused ? "0 0 0 2px rgba(59, 130, 246, 0.2)" : "none",
            "&:hover": {
                borderColor: state.isFocused ? "#3b82f6" : "#64748b",
            },
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: "#1e293b",
            borderRadius: "0.75rem",
            zIndex: 50,
        }),
        menuList: (provided) => ({
            ...provided,
            padding: "0.5rem",
            borderRadius: "0.5rem",
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected
                ? "#3b82f6"
                : state.isFocused
                    ? "#334155"
                    : "transparent",
            color: state.isSelected ? "white" : "#e2e8f0",
            borderRadius: "0.5rem",
            padding: "0.75rem 1rem",
            marginBottom: "0.25rem",
            cursor: "pointer",
            "&:active": {
                backgroundColor: "#2563eb",
            },
        }),
        singleValue: (provided) => ({
            ...provided,
            color: "#e2e8f0",
            fontSize: "0.875rem",
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: "#3b82f6",
            borderRadius: "0.5rem",
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: "white",
            fontSize: "0.875rem",
            padding: "0.25rem 0.5rem",
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: "white",
            borderRadius: "0 0.5rem 0.5rem 0",
            "&:hover": {
                backgroundColor: "#ef4444",
                color: "white",
            },
        }),
        input: (provided) => ({
            ...provided,
            color: "#e2e8f0",
        }),
        placeholder: (provided) => ({
            ...provided,
            color: "#94a3b8",
            fontSize: "0.875rem",
        }),
        loadingIndicator: (provided) => ({
            ...provided,
            color: "#3b82f6",
        }),
        loadingMessage: (provided) => ({
            ...provided,
            color: "#94a3b8",
        }),
        noOptionsMessage: (provided) => ({
            ...provided,
            color: "#94a3b8",
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            backgroundColor: "#475569",
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            color: "#94a3b8",
            "&:hover": {
                color: "#e2e8f0",
            },
        }),
        clearIndicator: (provided, state) => ({
            ...provided,
            color: "#94a3b8",
            "&:hover": {
                color: "#ef4444",
            },
        }),
    };

    // کامپوننت custom برای indicators
    const DropdownIndicator = (props: any) => {
        return (
            <components.DropdownIndicator {...props}>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </components.DropdownIndicator>
        );
    };

    const handleChange = (selectedOption: any) => {
        onChange(selectedOption);
    };

    const filterOptions = (inputValue: string) => {
        if (!options) return [];
        return options.filter((option) =>
            getOptionLabel(option).toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    return (
        <div className="w-full">
            {label && (
                <label
                    htmlFor={name}
                    className="block text-sm font-medium text-slate-300 mb-2"
                >
                    {label}
                </label>
            )}

            <ReactSelectAsync
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                loadOptions={loadOptions}
                defaultOptions={defaultOptions}
                placeholder={placeholder}
                isMulti={isMulti}
                isDisabled={isDisabled}
                isLoading={isLoading}
                styles={customStyles}
                components={{ DropdownIndicator }}
                getOptionLabel={getOptionLabel}
                getOptionValue={getOptionValue}
                noOptionsMessage={({ inputValue }) =>
                    inputValue ? "نتیجه‌ای یافت نشد" : "گزینه‌ای موجود نیست"
                }
                loadingMessage={() => "در حال بارگذاری..."}
                className="react-select-container"
                classNamePrefix="react-select"
            />

            {errMsg && (
                <p className="mt-1 text-sm text-red-400">{errMsg}</p>
            )}
        </div>
    );
};