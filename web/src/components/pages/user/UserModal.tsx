"use client"
import { FC, useState, useCallback, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AsyncSelect from "react-select/async";
import { UserForm, userSchema, UserType } from "@/types/schemaType";
import { Modal } from "@/components/mulecules";
import { MyInput, Button, SelectBox, CustomStyles } from "@/components/atoms";
import { getProvinces } from "@/app/actions/province/gets";
import { getCities } from "@/app/actions/city/gets";

interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: UserForm) => void;
    user?: UserType | null;
    isLoading?: boolean;
    organs?: { _id: string; name: string }[];
    units?: { _id: string; name: string }[];
    positions?: { _id: string; name: string }[];
    positionId?: string;
}

const genderOptions = [
    { _id: "Male", name: "مرد" },
    { _id: "Female", name: "زن" },
];

type OptionType = {
    value: string;
    label: string;
};

export const UserModal: FC<UserModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    user,
    isLoading = false,
    organs = [],
    units = [],
    positions = [],
    positionId = ""
}) => {
    const [selectedProvince, setSelectedProvince] = useState<string>("");
    const [selectedProvinceOption, setSelectedProvinceOption] = useState<OptionType | null>(null);
    const [selectedCityOption, setSelectedCityOption] = useState<OptionType | null>(null);
    const [selectedPositionOptions, setSelectedPositionOptions] = useState<OptionType[]>([]);

    // تبدیل positions prop به OptionType
    const positionOptions: OptionType[] = positions.map(position => ({
        value: position._id,
        label: position.name
    }));

    // تنظیم مقادیر پیش‌فرض
    const getDefaultValues = (): UserForm => {
        if (user) {
            // تبدیل positionهای user به OptionType برای نمایش
            const userPositionOptions = user.position?.map(posId => {
                const position = positions.find(p => p._id === posId);
                return position ? { value: position._id, label: position.name } : null;
            }).filter(Boolean) as OptionType[] || [];

            setSelectedPositionOptions(userPositionOptions);

            return {
                first_name: user.first_name || "",
                last_name: user.last_name || "",
                phone: user.phone || "",
                gender: user.gender || "male",
                birth_date: user.birth_date || "",
                personnel_code: user.personnel_code || "",
                email: user.email || "",
                provinceId: user.provinceId || "",
                cityId: user.cityId || "",
                orgId: user.orgId || "",
                unitId: user.unitId || "",
                position: user.position || [],
            };
        }

        return {
            first_name: "",
            last_name: "",
            phone: "",
            gender: "Male",
            birth_date: "",
            personnel_code: "",
            email: "",
            provinceId: "",
            cityId: "",
            orgId: "",
            unitId: "",
            position: [],
        };
    };

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
        setValue,
    } = useForm<UserForm>({
        resolver: zodResolver(userSchema),
        defaultValues: getDefaultValues(),
    });

    // وقتی user یا positions تغییر کرد، فرم رو ریست کن
    useEffect(() => {
        if (user || positions.length > 0) {
            reset(getDefaultValues());
        }
    }, [user, positions, reset]);

    // توابع AsyncSelect
    const loadProvinceOptions = useCallback(async (inputValue: string) => {
        try {
            const result = await getProvinces({
                set: { page: 1, limit: 20, name: inputValue },
                get: { _id: 1, name: 1 },
            });
            return result.body?.map((p: { _id: string; name: string }) => ({
                value: p._id,
                label: p.name,
            })) || [];
        } catch (error) {
            return [];
        }
    }, []);

    const loadCityOptions = useCallback(async (inputValue: string) => {
        if (!selectedProvince) return [];
        try {
            const result = await getCities({
                set: { page: 1, limit: 20, provinceId: selectedProvince, name: inputValue, positionId },
                get: { _id: 1, name: 1 },
            });
            return result.body.map((city: { _id: string; name: string }) => ({
                value: city._id,
                label: city.name,
            }));
        } catch (error) {
            return [];
        }
    }, [selectedProvince, positionId]);

    // تابع برای لود کردن موقعیت‌ها - فقط از positions prop استفاده می‌کند
    const loadPositionOptions = useCallback(async (inputValue: string) => {
        return new Promise<OptionType[]>((resolve) => {
            // اگر positions prop خالی بود، آرایه خالی برگردان
            if (!positions || positions.length === 0) {
                resolve([]);
                return;
            }

            // فیلتر بر اساس inputValue
            const filtered = positionOptions.filter(position =>
                position.label.toLowerCase().includes(inputValue.toLowerCase())
            );

            resolve(filtered);
        });
    }, [positions, positionOptions]);

    const handleProvinceChange = useCallback((option: OptionType | null) => {
        const provinceId = option?.value || "";
        setSelectedProvince(provinceId);
        setSelectedProvinceOption(option);
        setValue("provinceId", provinceId, { shouldValidate: true });
        setValue("cityId", "", { shouldValidate: true });
        setSelectedCityOption(null);
    }, [setValue]);

    const handlePositionChange = useCallback((selectedOptions: any) => {
        const options = selectedOptions as OptionType[] || [];
        setSelectedPositionOptions(options);
        setValue("position", options.map(option => option.value), { shouldValidate: true });
    }, [setValue]);

    const handleFormSubmit = (data: UserForm) => {
        console.log('Form data submitted:', data);
        // مطمئن شو هیچ undefined ای وجود ندارد
        const cleanedData: UserForm = {
            ...data,
            first_name: data.first_name || "",
            last_name: data.last_name || "",
            phone: data.phone || "",
            gender: data.gender || "male",
            birth_date: data.birth_date || "",
            personnel_code: data.personnel_code || "",
            email: data.email || "",
            provinceId: data.provinceId || "",
            cityId: data.cityId || "",
            orgId: data.orgId || "",
            unitId: data.unitId || "",
            position: data.position || [],
        };
        onSubmit(cleanedData);
        resetForm();
    };

    const resetForm = () => {
        reset(getDefaultValues());
        setSelectedProvince("");
        setSelectedProvinceOption(null);
        setSelectedCityOption(null);
        setSelectedPositionOptions([]);
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            title={user ? "ویرایش کاربر" : "ایجاد کاربر جدید"}
            className="w-full max-w-4xl"
        >
            <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6 max-h-[70vh] overflow-y-auto">

                {/* اطلاعات شخصی */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <MyInput
                        label="نام"
                        name="first_name"
                        register={register}
                        errMsg={errors.first_name?.message}
                        placeholder="نام کاربر"
                    />
                    <MyInput
                        label="نام خانوادگی"
                        name="last_name"
                        register={register}
                        errMsg={errors.last_name?.message}
                        placeholder="نام خانوادگی کاربر"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <MyInput
                        label="کد پرسنلی"
                        name="personnel_code"
                        register={register}
                        errMsg={errors.personnel_code?.message}
                        placeholder="کد پرسنلی"
                    />
                    <MyInput
                        label="شماره تلفن"
                        name="phone"
                        register={register}
                        errMsg={errors.phone?.message}
                        placeholder="09xxxxxxxxx"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                            <SelectBox
                                label="جنسیت"
                                name={field.name}
                                value={field.value || "male"}
                                onChange={field.onChange}
                                options={genderOptions}
                                placeholder="انتخاب جنسیت"
                                errMsg={errors.gender?.message}
                            />
                        )}
                    />
                    <MyInput
                        label="تاریخ تولد"
                        name="birth_date"
                        type="date"
                        register={register}
                        errMsg={errors.birth_date?.message}
                        placeholder="تاریخ تولد"
                    />
                </div>

                <MyInput
                    label="ایمیل (اختیاری)"
                    name="email"
                    type="email"
                    register={register}
                    errMsg={errors.email?.message}
                    placeholder="example@email.com"
                />

                {/* موقعیت مکانی */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">استان</label>
                        <Controller
                            name="provinceId"
                            control={control}
                            render={({ field }) => (
                                <AsyncSelect
                                    cacheOptions
                                    defaultOptions
                                    loadOptions={loadProvinceOptions}
                                    placeholder="جستجوی استان..."
                                    styles={CustomStyles}
                                    value={selectedProvinceOption}
                                    onChange={handleProvinceChange}
                                    loadingMessage={() => "در حال جستجو..."}
                                    noOptionsMessage={() => "استانی یافت نشد"}
                                />
                            )}
                        />
                        {errors.provinceId && <p className="text-red-500 text-sm mt-1">{errors.provinceId.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">شهر</label>
                        <Controller
                            name="cityId"
                            control={control}
                            render={({ field }) => (
                                <AsyncSelect
                                    cacheOptions
                                    defaultOptions
                                    loadOptions={loadCityOptions}
                                    placeholder={selectedProvince ? "جستجوی شهر..." : "ابتدا استان انتخاب کنید"}
                                    styles={CustomStyles}
                                    isDisabled={!selectedProvince}
                                    value={selectedCityOption}
                                    onChange={(option: OptionType | null) => {
                                        setSelectedCityOption(option);
                                        setValue("cityId", option?.value || "", { shouldValidate: true });
                                    }}
                                    loadingMessage={() => "در حال جستجو..."}
                                    noOptionsMessage={() => "شهری یافت نشد"}
                                />
                            )}
                        />
                        {errors.cityId && <p className="text-red-500 text-sm mt-1">{errors.cityId.message}</p>}
                    </div>
                </div>

                {/* سازمان و واحد */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Controller
                        name="orgId"
                        control={control}
                        render={({ field }) => (
                            <SelectBox
                                label="سازمان"
                                name={field.name}
                                value={field.value || ""}
                                onChange={(value) => {
                                    field.onChange(value);
                                    setValue("orgId", value || "", { shouldValidate: true });
                                }}
                                options={organs}
                                placeholder="انتخاب سازمان"
                                errMsg={errors.orgId?.message}
                            />
                        )}
                    />
                    <Controller
                        name="unitId"
                        control={control}
                        render={({ field }) => (
                            <SelectBox
                                label="واحد"
                                name={field.name}
                                value={field.value || ""}
                                onChange={(value) => {
                                    field.onChange(value);
                                    setValue("unitId", value || "", { shouldValidate: true });
                                }}
                                options={units}
                                placeholder="انتخاب واحد"
                                errMsg={errors.unitId?.message}
                            />
                        )}
                    />
                </div>

                {/* موقعیت شغلی - Multi Select */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">موقعیت‌ها (چند انتخابی)</label>
                    <Controller
                        name="position"
                        control={control}
                        render={({ field }) => (
                            <AsyncSelect
                                isMulti
                                cacheOptions
                                defaultOptions
                                loadOptions={loadPositionOptions}
                                placeholder="جستجوی موقعیت‌ها..."
                                styles={CustomStyles}
                                value={selectedPositionOptions}
                                onChange={handlePositionChange}
                                loadingMessage={() => "در حال جستجو..."}
                                noOptionsMessage={() => positions.length === 0 ? "هیچ موقعیتی موجود نیست" : "موقعیتی یافت نشد"}
                            />
                        )}
                    />
                    {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>}
                </div>

                {/* دکمه‌ها */}
                <div className="flex justify-end gap-3 pt-4 border-t border-slate-700">
                    <Button
                        type="button"
                        onClick={handleClose}
                        className="px-6 py-2 bg-slate-600 hover:bg-slate-700 text-white"
                    >
                        لغو
                    </Button>
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
                        disabled={isLoading}
                    >
                        {isLoading ? "در حال ذخیره..." : user ? "بروزرسانی کاربر" : "ایجاد کاربر"}
                    </button>
                </div>
            </form>
        </Modal>
    );
};