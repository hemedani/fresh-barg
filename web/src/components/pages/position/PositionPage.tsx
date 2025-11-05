"use client";
import { useForm, Controller } from "react-hook-form";
import { FC } from "react";
import { Cpu, Smartphone, Monitor } from "lucide-react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import AsyncSelect from "react-select/async";

import { zodResolver } from "@hookform/resolvers/zod";
import { MyInput, Button, SelectBox } from "@/components/atoms";
import { useModal } from "@/hooks/useModal";
import { Modal } from "@/components/mulecules";
import { DeviceCard } from "@/components/organisms/PositionCard";
import toast from "react-hot-toast";

// اسکیمای اعتبارسنجی
export const deviceSchema = z.object({
    name: z.string().min(2, "نام باید حداقل ۲ کاراکتر باشد"),
    unitId: z.string().min(1, "انتخاب واحد الزامی است"),
    orgId: z.string().min(1, "انتخاب سازمان الزامی است"),
    panel: z.string().min(1, "انتخاب پنل الزامی است"),
    level: z.string().min(1, "انتخاب سطح الزامی است"),
    features: z.array(z.string()).min(1, "حداقل یک ویژگی انتخاب کنید"),
    positionId: z.string().min(1, "انتخاب موقعیت الزامی است"),
});

export type DeviceForm = z.infer<typeof deviceSchema>;

// انواع داده‌ها
export type TDevice = {
    _id: string;
    name: string;
    unitId: string;
    orgId: string;
    panel: string;
    level: string;
    features: string[];
    positionId: string;
};

export type TDevicesProps = {
    devices: TDevice[];
};

// داده‌های تستی
const panels = [
    { _id: "darya", name: "پنل مدیریت" },
    { _id: "johar", name: "پنل کاربری" },
    { _id: "nameh", name: "پنل نظارتی" },
    { _id: "anbar", name: "پنل گزارش‌گیری" },
    { _id: "bita", name: "پنل تحلیل داده" }
];

const levels = [
    { _id: "Ghost", name: "سوپر ادمین" },
    { _id: "Orghead", name: "مدیر سازمان" },
    { _id: "Unithead", name: "مدیر واحد" },
    { _id: "Staff", name: "کارکنان عادی" }
];

const featuresList = [
    { _id: "create unit", name: "مانیتورینگ" },
    { _id: "create chart", name: "گزارش‌گیری" },
    { _id: "read letters", name: "تحلیل داده" },
    { _id: "create letters", name: "هشدارها" },
    { _id: "reffer letters", name: "API دسترسی" },
    { _id: "add staff", name: "خروجی داده" },
    { _id: "add position to user", name: "سفارشی‌سازی" },
    { _id: "read positions", name: "پشتیبانی موبایل" },
    { _id: "add position", name: "پشتیبانی موبایل" },
    { _id: "edit org", name: "پشتیبانی موبایل" },
    { _id: "edit unit", name: "پشتیبانی موبایل" },
];

const positions = [
    { _id: "1", name: "سرور اصلی" },
    { _id: "2", name: "دستگاه کاربر" },
    { _id: "3", name: "ایستگاه کاری" },
    { _id: "4", name: "دستگاه نظارتی" },
    { _id: "5", name: "سرور پشتیبان" }
];

// توابع Async برای SelectBox ها
const loadUnits = async (inputValue: string) => {
    // شبیه‌سازی API call
    const mockUnits = [
        { _id: "1", name: "واحد فناوری اطلاعات" },
        { _id: "2", name: "واحد مالی" },
        { _id: "3", name: "واحد بازاریابی" },
        { _id: "4", name: "واحد منابع انسانی" },
        { _id: "5", name: "واحد تحقیق و توسعه" }
    ];

    return new Promise<any[]>((resolve) => {
        setTimeout(() => {
            const filtered = mockUnits.filter(unit =>
                unit.name.toLowerCase().includes(inputValue.toLowerCase())
            );
            resolve(filtered);
        }, 500);
    });
};

const loadOrganizations = async (inputValue: string) => {
    // شبیه‌سازی API call
    const mockOrgs = [
        { _id: "1", name: "شرکت فناوری اطلاعات نوآوران" },
        { _id: "2", name: "هلدینگ توسعه صنعتی ایران" },
        { _id: "3", name: "بانک اقتصاد نوین" },
        { _id: "4", name: "شرکت پتروشیمی مبین" },
        { _id: "5", name: "استارتاپ تکنولوژی ویستا" }
    ];

    return new Promise<any[]>((resolve) => {
        setTimeout(() => {
            const filtered = mockOrgs.filter(org =>
                org.name.toLowerCase().includes(inputValue.toLowerCase())
            );
            resolve(filtered);
        }, 500);
    });
};

const loadPositions = async (inputValue: string) => {
    return new Promise<any[]>((resolve) => {
        setTimeout(() => {
            const filtered = positions.filter(position =>
                position.name.toLowerCase().includes(inputValue.toLowerCase())
            );
            resolve(filtered);
        }, 500);
    });
};

export const DeviceClient: FC<TDevicesProps> = ({
    devices,
}) => {
    const router = useRouter()
    const { isOpen, open, close } = useModal();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<DeviceForm>({
        resolver: zodResolver(deviceSchema),
    });

    const onSubmit = async (data: DeviceForm) => {
        console.log("داده‌های فرم دستگاه:", data);
        toast.success("دستگاه جدید ایجاد شد");
        router.refresh();
        close();
    };

    return (
        <>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">مدیریت دستگاه‌ها</h1>
                    <p className="text-slate-400">ایجاد، ویرایش و مدیریت دستگاه‌های سیستم</p>
                </div>
                <Button
                    onClick={open}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                >
                    <span className="ml-2">➕</span>
                    ایجاد دستگاه جدید
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {devices?.map((device) => (
                    <DeviceCard
                        key={device._id}
                        _id={device._id}
                        name={device.name}
                        unitId={device.unitId}
                        orgId={device.orgId}
                        panel={device.panel}
                        level={device.level}
                        features={device.features}
                        positionId={device.positionId}
                    />
                ))}
            </div>

            {!devices?.length && (
                <div className="text-center py-16">
                    <div className="w-24 h-24 mx-auto mb-4 bg-slate-800 rounded-full flex items-center justify-center">
                        <Cpu className="text-slate-400" size={40} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-300 mb-2">دستگاهی یافت نشد</h3>
                    <p className="text-slate-500 mb-6">اولین دستگاه را ایجاد کنید</p>
                    <Button
                        onClick={open}
                        className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                        ایجاد دستگاه جدید
                    </Button>
                </div>
            )}

            <Modal
                isOpen={isOpen}
                onClose={close}
                title="ایجاد دستگاه جدید"
            >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* ردیف اول: نام دستگاه */}
                    <div>
                        <MyInput
                            label="نام دستگاه"
                            name="name"
                            register={register}
                            errMsg={errors.name?.message}
                            placeholder="مثال: سرور مرکزی - ایستگاه کاری مدیر"
                        />
                    </div>

                    {/* ردیف دوم: واحد و سازمان */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <Controller
                            name="unitId"
                            control={control}
                            render={({ field }) => (
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        واحد مربوطه
                                    </label>
                                    <AsyncSelect
                                        {...field}
                                        cacheOptions
                                        defaultOptions
                                        loadOptions={loadUnits}
                                        placeholder="جستجوی واحد..."
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                        onChange={(selected: any) => field.onChange(selected?.value)}
                                    />
                                    {errors.unitId && (
                                        <p className="text-red-500 text-sm mt-1">{errors.unitId.message}</p>
                                    )}
                                </div>
                            )}
                        />

                        <Controller
                            name="orgId"
                            control={control}
                            render={({ field }) => (
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        سازمان مربوطه
                                    </label>
                                    <AsyncSelect
                                        {...field}
                                        cacheOptions
                                        defaultOptions
                                        loadOptions={loadOrganizations}
                                        placeholder="جستجوی سازمان..."
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                        onChange={(selected: any) => field.onChange(selected?.value)}
                                    />
                                    {errors.orgId && (
                                        <p className="text-red-500 text-sm mt-1">{errors.orgId.message}</p>
                                    )}
                                </div>
                            )}
                        />
                    </div>

                    {/* ردیف سوم: پنل و سطح */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <Controller
                            name="panel"
                            control={control}
                            render={({ field }) => (
                                <SelectBox
                                    label="نوع پنل"
                                    name={field.name}
                                    value={field.value || ""}
                                    onChange={field.onChange}
                                    options={panels}
                                    placeholder="انتخاب پنل"
                                    errMsg={errors.panel?.message}
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
                                    options={levels}
                                    placeholder="انتخاب سطح"
                                    errMsg={errors.level?.message}
                                />
                            )}
                        />
                    </div>

                    {/* ردیف چهارم: ویژگی‌ها */}
                    <div>
                        <Controller
                            name="features"
                            control={control}
                            render={({ field }) => (
                                <SelectBox
                                    label="ویژگی‌ها (چند انتخابی)"
                                    name="features"
                                    value={field.value?.[0] || ""}
                                    onChange={(value) => field.onChange([value])}
                                    options={featuresList}
                                    placeholder="انتخاب ویژگی‌ها"
                                    errMsg={errors.features?.message}
                                />
                            )}
                        />
                    </div>

                    {/* ردیف پنجم: موقعیت */}
                    <div>
                        <Controller
                            name="positionId"
                            control={control}
                            render={({ field }) => (
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        موقعیت دستگاه
                                    </label>
                                    <AsyncSelect
                                        {...field}
                                        cacheOptions
                                        defaultOptions
                                        loadOptions={loadPositions}
                                        placeholder="جستجوی موقعیت..."
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                        onChange={(selected: any) => field.onChange(selected?.value)}
                                    />
                                    {errors.positionId && (
                                        <p className="text-red-500 text-sm mt-1">{errors.positionId.message}</p>
                                    )}
                                </div>
                            )}
                        />
                    </div>

                    {/* دکمه‌ها */}
                    <div className="flex justify-end gap-3 pt-4 border-t border-slate-700">
                        <Button
                            type="button"
                            onClick={close}
                            className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2"
                        >
                            لغو
                        </Button>
                        <Button
                            type="submit"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2"
                        >
                            ذخیره دستگاه
                        </Button>
                    </div>
                </form>
            </Modal>
        </>
    );
};