"use client";
import { useForm, Controller } from "react-hook-form";
import { FC, useCallback, useEffect, useState } from "react";
import { Briefcase } from "lucide-react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import AsyncSelect from "react-select/async";

import { zodResolver } from "@hookform/resolvers/zod";
import { MyInput, Button, SelectBox, CustomStyles } from "@/components/atoms";
import { useModal } from "@/hooks/useModal";
import { Modal } from "@/components/mulecules";
import { UnitCard } from "@/components/organisms/UnitCard";
import toast from "react-hot-toast";
import { getProvinces } from "@/app/actions/province/gets";
import { getCities } from "@/app/actions/city/gets";
import { getOrgans } from "@/app/actions/organ/gets";

// اسکیمای اعتبارسنجی
export const jobSchema = z.object({
    name: z.string().min(2, "نام باید حداقل ۲ کاراکتر باشد"),
    categories: z.array(z.string()).min(1, "حداقل یک دسته‌بندی انتخاب کنید"),
    positionId: z.string().min(1, "انتخاب موقعیت الزامی است"),
    provinceId: z.string().min(1, "انتخاب استان الزامی است"),
    cityId: z.string().min(1, "انتخاب شهر الزامی است"),
    orgId: z.string().min(1, "انتخاب سازمان الزامی است"),
});

export type JobForm = z.infer<typeof jobSchema>;

// انواع داده‌ها
export type TUnit = {
    _id: string;
    name: string;
    categories: string[];
    province: { _id: string; name: string };
    city: { _id: string; name: string };
    org: { _id: string; name: string };
};

export type TUnitsProps = {
    units: TUnit[];
    position: { _id: string; level: string };
    organs: { _id: string; name: string }[];
};

type OptionType = {
    value: string;
    label: string;
};

export const UnitClient: FC<TUnitsProps> = ({ units, organs, position }) => {
    const router = useRouter();
    const { isOpen, open, close } = useModal();
    const [cityOptions, setCityOptions] = useState<OptionType[]>([]);
    const [provinceOptions, setProvinceOptions] = useState<OptionType[]>([]);
    const [organOptions, setOrganOptions] = useState<OptionType[]>([]);
    const [positionOptions, setPositionOptions] = useState<OptionType[]>([]);
    const [selectedProvince, setSelectedProvince] = useState<OptionType | null>(null);

    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<JobForm>({
        resolver: zodResolver(jobSchema),
        defaultValues: {
            categories: [],
        }
    });

    const watchProvinceId = watch("provinceId");

    // ریست کردن شهر وقتی استان تغییر می‌کند
    useEffect(() => {
        if (watchProvinceId) {
            setValue("cityId", "");
            setCityOptions([]);
        }
    }, [watchProvinceId, setValue]);

    const onSubmit = async (data: JobForm) => {
        try {
            console.log("داده‌های فرم:", data);
            toast.success("واحد جدید ایجاد شد");
            router.refresh();
            close();
        } catch (error) {
            toast.error("خطا در ایجاد واحد");
            console.error("Error creating unit:", error);
        }
    };

    // توابع هندلر برای Selectها
    const handleCategoriesChange = (value: string, field: any) => {
        if (value) {
            field.onChange([value]);
        } else {
            field.onChange([]);
        }
    };

    const handleSingleSelectChange = (value: string, field: any) => {
        field.onChange(value);
    };

    const hasUnits = units && units.length > 0;

    const loadProvinceOptions = useCallback(async (inputValue: string) => {
        try {
            const result = await getProvinces({
                set: {
                    page: 1,
                    limit: 20,
                    name: inputValue,
                },
                get: {
                    _id: 1,
                    name: 1,
                },
            });

            const options = result.body.map((p: { _id: string; name: string }) => ({
                value: p._id,
                label: p.name,
            }));

            setProvinceOptions(options);
            return options;
        } catch (error) {
            console.error("Error loading provinces:", error);
            return [];
        }
    }, []);

    const loadOrganOptions = useCallback(async (inputValue: string) => {
        try {
            const result = await getOrgans({
                set: {
                    page: 1,
                    limit: 20,
                    // name: inputValue,
                    positionId: position._id
                },
                get: {
                    _id: 1,
                    name: 1,
                },
            });

            const options = result.body.map((p: { _id: string; name: string }) => ({
                value: p._id,
                label: p.name,
            }));

            setProvinceOptions(options);
            return options;
        } catch (error) {
            console.error("Error loading provinces:", error);
            return [];
        }
    }, []);

    const loadPositionOptions = useCallback(async (inputValue: string) => {
        try {
            const result = await getProvinces({
                set: {
                    page: 1,
                    limit: 20,
                    name: inputValue,
                },
                get: {
                    _id: 1,
                    name: 1,
                },
            });

            const options = result.body.map((p: { _id: string; name: string }) => ({
                value: p._id,
                label: p.name,
            }));

            setProvinceOptions(options);
            return options;
        } catch (error) {
            console.error("Error loading provinces:", error);
            return [];
        }
    }, []);

    const loadCityOptions = useCallback(async (inputValue: string) => {
        try {
            if (!watchProvinceId) {
                return [];
            }

            const result = await getCities({
                set: {
                    page: 1,
                    limit: 20,
                    provinceId: watchProvinceId,
                    name: inputValue,
                    positionId: position._id
                },
                get: {
                    _id: 1,
                    name: 1,
                },
            });

            const cities = result.body.map((city: { _id: string; name: string }) => ({
                value: city._id,
                label: city.name,
            }));

            setCityOptions(cities);
            return cities;
        } catch (error) {
            console.error("Error loading cities:", error);
            return [];
        }
    }, [watchProvinceId]);

    // پیدا کردن province انتخاب شده برای نمایش label
    useEffect(() => {
        if (watchProvinceId && provinceOptions.length > 0) {
            const foundProvince = provinceOptions.find(opt => opt.value === watchProvinceId);
            setSelectedProvince(foundProvince || null);
        } else {
            setSelectedProvince(null);
        }
    }, [watchProvinceId, provinceOptions]);

    return (
        <>
            {/* هدر */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">مدیریت واحدها</h1>
                    <p className="text-slate-400">ایجاد، ویرایش و مدیریت واحدها</p>
                </div>
                <Button
                    onClick={open}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
                >
                    <span>➕</span>
                    ایجاد واحد
                </Button>
            </div>

            {/* لیست واحدها */}
            {hasUnits ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {units.map((unit) => (
                        <UnitCard
                            key={unit._id}
                            _id={unit._id}
                            name={unit.name}
                            categories={unit.categories}
                            province={unit.province.name}
                            city={unit.city.name}
                            org={unit.org.name}
                        />
                    ))}
                </div>
            ) : (
                /* حالت خالی */
                <div className="text-center py-16">
                    <div className="w-24 h-24 mx-auto mb-4 bg-slate-800 rounded-full flex items-center justify-center">
                        <Briefcase className="text-slate-400" size={40} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-300 mb-2">
                        واحد یافت نشد
                    </h3>
                    <p className="text-slate-500 mb-6">
                        اولین واحد را ایجاد کنید
                    </p>
                    <Button
                        onClick={open}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                    >
                        ایجاد واحد
                    </Button>
                </div>
            )}

            {/* مودال ایجاد واحد */}
            <Modal
                isOpen={isOpen}
                onClose={close}
                title="ایجاد واحد جدید"
            >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* نام واحد */}
                    <div>
                        <MyInput
                            label="نام واحد"
                            name="name"
                            register={register}
                            errMsg={errors.name?.message}
                            placeholder="مثال: واحد توسعه Front-end"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <Controller
                            name="categories"
                            control={control}
                            render={({ field }) => (
                                <SelectBox
                                    label="دسته‌بندی‌ها"
                                    name="categories"
                                    value={field.value?.[0] || ""}
                                    onChange={(value) => handleCategoriesChange(value, field)}
                                    options={[]}
                                    placeholder="انتخاب دسته‌بندی"
                                    errMsg={errors.categories?.message}
                                />
                            )}
                        />

                        <Controller
                            name="positionId"
                            control={control}
                            render={({ field }) => (
                                <SelectBox
                                    label="موقعیت"
                                    name={field.name}
                                    value={field.value || ""}
                                    onChange={(value) => handleSingleSelectChange(value, field)}
                                    options={[]}
                                    placeholder="انتخاب موقعیت"
                                    errMsg={errors.positionId?.message}
                                />
                            )}
                        />
                    </div>

                    {/* استان و شهر */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <Controller
                            name="provinceId"
                            control={control}
                            render={({ field }) => (
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">
                                        استان
                                    </label>
                                    <AsyncSelect
                                        cacheOptions
                                        defaultOptions
                                        loadOptions={loadProvinceOptions}
                                        placeholder="جستجوی استان..."
                                        loadingMessage={() => "در حال جستجو..."}
                                        noOptionsMessage={() => "استانی یافت نشد"}
                                        onChange={(option: OptionType | null) => {
                                            console.log("Province selected:", option);
                                            field.onChange(option?.value || "");
                                            setSelectedProvince(option);
                                        }}
                                        value={selectedProvince}
                                        styles={CustomStyles}
                                        isClearable
                                    />
                                    {errors.provinceId && (
                                        <p className="text-red-500 text-xs mt-1">{errors.provinceId.message}</p>
                                    )}
                                </div>
                            )}
                        />

                        <Controller
                            name="cityId"
                            control={control}
                            render={({ field }) => (
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">
                                        شهر
                                    </label>
                                    <AsyncSelect
                                        cacheOptions
                                        defaultOptions
                                        loadOptions={loadCityOptions}
                                        placeholder={watchProvinceId ? "جستجوی شهر..." : "ابتدا استان انتخاب کنید"}
                                        loadingMessage={() => "در حال جستجو..."}
                                        noOptionsMessage={() => "شهری یافت نشد"}
                                        isDisabled={!watchProvinceId}
                                        onChange={(option: OptionType | null) => {
                                            console.log("City selected:", option);
                                            field.onChange(option?.value || "");
                                        }}
                                        value={cityOptions.find(opt => opt.value === field.value) || null}
                                        styles={CustomStyles}
                                        isClearable
                                    />
                                    {errors.cityId && (
                                        <p className="text-red-500 text-xs mt-1">{errors.cityId.message}</p>
                                    )}
                                </div>
                            )}
                        />
                    </div>

                    {/* سازمان */}
                    <div>
                        <Controller
                            name="orgId"
                            control={control}
                            render={({ field }) => (
                                <SelectBox
                                    label="سازمان"
                                    name={field.name}
                                    value={field.value || ""}
                                    onChange={(value) => handleSingleSelectChange(value, field)}
                                    options={organs}
                                    placeholder="انتخاب سازمان"
                                    errMsg={errors.orgId?.message}
                                />
                            )}
                        />
                    </div>

                    {/* دکمه‌های action */}
                    <div className="flex justify-end gap-3 pt-4 border-t border-slate-700">
                        <Button
                            type="button"
                            onClick={close}
                            className="rounded px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white"
                        >
                            لغو
                        </Button>
                        <Button
                            type="submit"
                            className="rounded bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
                        >
                            {isSubmitting ? "در حال ذخیره..." : "ذخیره"}
                        </Button>
                    </div>
                </form>
            </Modal>
        </>
    );
};