"use client";
import { useForm, Controller } from "react-hook-form";
import { FC, useState, useCallback } from "react";
import { Shield } from "lucide-react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import AsyncSelect from "react-select/async";

import { zodResolver } from "@hookform/resolvers/zod";
import { MyInput, Button, SelectBox, CustomStyles } from "@/components/atoms";
import { useModal } from "@/hooks/useModal";
import { Modal } from "@/components/mulecules";
import { DeviceCard } from "@/components/organisms/PositionCard";
import toast from "react-hot-toast";
import { createPosition } from "@/app/actions/position/create";

// اسکیمای اعتبارسنجی
export const roleSchema = z.object({
    name: z.string().min(2, "نام نقش باید حداقل ۲ کاراکتر باشد"),
    unitId: z.string().min(1, "انتخاب واحد الزامی است"),
    orgId: z.string().min(1, "انتخاب سازمان الزامی است"),
    level: z.enum(["Ghost", "Orghead", "Unithead", "Staff"])
        .refine(val => val, { message: "انتخاب سطح دسترسی الزامی است" }),
    panel: z.enum(["darya", "johar", "nameh", "anbar", "bita"])
        .refine(val => val, { message: "انتخاب سطح دسترسی الزامی است" }),
    userId: z.string().min(1, "انتخاب کاربر الزامی است"),
    features: z.array(z.string()).min(1, "حداقل یک دسترسی انتخاب کنید"),
});

export type RoleForm = z.infer<typeof roleSchema>;

// انواع داده‌ها
export type TRole = {
    _id: string;
    name: string;
    unit: { _id: string; name: string };
    org: { _id: string; name: string };
    panel: "Ghost" | "Orghead" | "Unithead" | "Staff";
    level: "darya" | "johar" | "nameh" | "anbar" | "bita";
    features: string[];
};

export type TRolesProps = {
    roles: TRole[];
    organs: { _id: string; name: string }[];
    units: { _id: string; name: string }[];
    users: { _id: string; name: string }[];
};

// داده‌های ثابت
const panelOptions = [
    { _id: "darya", name: "دریا" },
    { _id: "johar", name: "جوهر" },
    { _id: "nameh", name: "نامه" },
    { _id: "anbar", name: "انبار" },
    { _id: "bita", name: "بیتا" },
];

const levelOptions = [
    { _id: "Ghost", name: "سوپر ادمین" },
    { _id: "Orghead", name: "رئیس سازمان" },
    { _id: "Unithead", name: "رئیس واحد" },
    { _id: "Staff", name: "کارمند" },
];

const featuresData = [
    { _id: "create unit", name: "ایجاد واحد" },
    { _id: "create chart", name: "ایجاد چارت" },
    { _id: "read letters", name: "مشاهده نامه‌ها" },
    { _id: "create letters", name: "ایجاد نامه" },
    { _id: "reffer letters", name: "ارجاع نامه" },
    { _id: "add staff", name: "افزودن کارمند" },
    { _id: "add position to user", name: "افزودن موقعیت به کاربر" },
    { _id: "read positions", name: "مشاهده موقعیت‌ها" },
    { _id: "add position", name: "افزودن موقعیت" },
    { _id: "edit org", name: "ویرایش سازمان" },
    { _id: "edit unit", name: "ویرایش واحد" },
];

type OptionType = {
    value: string;
    label: string;
};

// helper function برای خطاها
const getErrorMessage = (error: any): string | undefined => {
    if (typeof error?.message === 'string') {
        return error.message;
    }
    return undefined;
};

export const RoleClient: FC<TRolesProps> = ({
    roles,
    organs,
    units,
    users
}) => {
    const router = useRouter();
    const { isOpen, open, close } = useModal();
    const [selectedFeaturesOptions, setSelectedFeaturesOptions] = useState<OptionType[]>([]);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
        setValue,
    } = useForm<RoleForm>({
        resolver: zodResolver(roleSchema),
        defaultValues: {
            name: "",
            unitId: "",
            orgId: "",
            panel: "nameh",
            level: "Staff",
            userId: "",
            features: [],
        },
    });

    // تابع برای لود کردن دسترسی‌ها
    const loadFeaturesOptions = useCallback(async (inputValue: string) => {
        return new Promise<OptionType[]>((resolve) => {
            const featureOptions = featuresData.map(feature => ({
                value: feature._id,
                label: feature.name
            }));

            const filtered = featureOptions.filter(feature =>
                feature.label.toLowerCase().includes(inputValue.toLowerCase())
            );

            resolve(filtered);
        });
    }, []);

    const handleFeaturesChange = useCallback((selectedOptions: any) => {
        const options = selectedOptions as OptionType[] || [];
        setSelectedFeaturesOptions(options);
        setValue("features", options.map(option => option.value));
    }, [setValue]);

    const onSubmit = async (data: RoleForm) => {
        console.log("داده‌های فرم نقش:", data);
        try {
            // در عمل اینجا API call داریم
            const responsePosition = await createPosition({ set: { name: data.name, level: data.level, orgId: data.orgId, panel: data.panel, positionId: "" }, get: { _id: 1, level: 1 } })
            console.log({ responsePosition });

            if (responsePosition.success) {
                toast.success("نقش جدید با موفقیت ایجاد شد");
            }
            router.refresh();
            reset();
            setSelectedFeaturesOptions([]);
            close();
        } catch (error) {
            toast.error("خطا در ایجاد نقش");
        }
    };

    const handleClose = () => {
        reset();
        setSelectedFeaturesOptions([]);
        close();
    };

    return (
        <>
            {/* هدر صفحه */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">مدیریت نقش‌های کاربران</h1>
                    <p className="text-slate-400">تعریف و مدیریت سطح دسترسی کاربران در سازمان‌ها و واحدها</p>
                </div>
                <Button
                    onClick={open}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                    <span className="ml-2">🛡️</span>
                    ایجاد نقش جدید
                </Button>
            </div>

            {/* لیست نقش‌ها */}
            {roles?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {roles.map((role) => (
                        <DeviceCard
                            positionId=""
                            key={role._id}
                            _id={role._id}
                            name={role.name}
                            unitId={role.unit?.name}
                            orgId={role.org?.name}
                            panel={role.panel}
                            level={role.level}
                        />
                    ))}
                </div>
            ) : (
                /* حالت خالی */
                <div className="text-center py-16">
                    <div className="w-24 h-24 mx-auto mb-4 bg-slate-800 rounded-full flex items-center justify-center">
                        <Shield className="text-slate-400" size={40} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-300 mb-2">نقشی تعریف نشده</h3>
                    <p className="text-slate-500 mb-6">اولین نقش سازمانی را ایجاد کنید</p>
                    <Button
                        onClick={open}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        ایجاد نقش جدید
                    </Button>
                </div>
            )}

            {/* مودال ایجاد نقش */}
            <Modal
                isOpen={isOpen}
                onClose={handleClose}
                title="ایجاد نقش جدید"
                className="w-full max-w-4xl"
            >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-h-[70vh] overflow-y-auto">
                    {/* نام نقش */}
                    <div>
                        <MyInput
                            label="نام نقش"
                            name="name"
                            register={register}
                            errMsg={getErrorMessage(errors.name)}
                            placeholder="مثال: مدیر فناوری - کارشناس منابع انسانی"
                        />
                    </div>

                    {/* واحد و سازمان */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Controller
                            name="unitId"
                            control={control}
                            render={({ field }) => (
                                <SelectBox
                                    label="واحد مربوطه"
                                    name={field.name}
                                    value={field.value || ""}
                                    onChange={field.onChange}
                                    options={units}
                                    placeholder="انتخاب واحد"
                                    errMsg={getErrorMessage(errors.unitId)}
                                />
                            )}
                        />
                        <Controller
                            name="orgId"
                            control={control}
                            render={({ field }) => (
                                <SelectBox
                                    label="سازمان مربوطه"
                                    name={field.name}
                                    value={field.value || ""}
                                    onChange={field.onChange}
                                    options={organs}
                                    placeholder="انتخاب سازمان"
                                    errMsg={getErrorMessage(errors.orgId)}
                                />
                            )}
                        />
                    </div>

                    {/* پنل و سطح دسترسی */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Controller
                            name="panel"
                            control={control}
                            render={({ field }) => (
                                <SelectBox
                                    label="پنل دسترسی"
                                    name={field.name}
                                    value={field.value || "nameh"}
                                    onChange={field.onChange}
                                    options={panelOptions}
                                    placeholder="انتخاب پنل"
                                    errMsg={getErrorMessage(errors.panel)}
                                />
                            )}
                        />
                        <Controller
                            name="level"
                            control={control}
                            render={({ field }) => (
                                <SelectBox
                                    label="سطح دسترسی"
                                    name={field.name}
                                    value={field.value || ""}
                                    onChange={field.onChange}
                                    options={levelOptions}
                                    placeholder="انتخاب سطح دسترسی"
                                    errMsg={getErrorMessage(errors.level)}
                                />
                            )}
                        />
                    </div>

                    {/* کاربر */}
                    <div>
                        <Controller
                            name="userId"
                            control={control}
                            render={({ field }) => (
                                <SelectBox
                                    label="کاربر"
                                    name={field.name}
                                    value={field.value || ""}
                                    onChange={field.onChange}
                                    options={users}
                                    placeholder="انتخاب کاربر"
                                    errMsg={getErrorMessage(errors.userId)}
                                />
                            )}
                        />
                    </div>

                    {/* دسترسی‌ها - Multi Select */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            دسترسی‌ها (چند انتخابی)
                        </label>
                        <Controller
                            name="features"
                            control={control}
                            render={({ field }) => (
                                <AsyncSelect
                                    isMulti
                                    cacheOptions
                                    defaultOptions
                                    loadOptions={loadFeaturesOptions}
                                    placeholder="جستجوی دسترسی‌ها..."
                                    styles={CustomStyles}
                                    value={selectedFeaturesOptions}
                                    onChange={handleFeaturesChange}
                                    loadingMessage={() => "در حال جستجو..."}
                                    noOptionsMessage={() => "دسترسی‌ای یافت نشد"}
                                />
                            )}
                        />
                        {errors.features && (
                            <p className="text-red-500 text-sm mt-1">{getErrorMessage(errors.features)}</p>
                        )}
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
                        <Button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
                        >
                            ذخیره نقش
                        </Button>
                    </div>
                </form>
            </Modal>
        </>
    );
};