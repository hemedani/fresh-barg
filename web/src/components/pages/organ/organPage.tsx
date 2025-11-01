"use client";
import { useForm, Controller } from "react-hook-form";
import { FC, useState } from "react";
import { Building2 } from "lucide-react";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { MyInput, Button, SelectBox } from "@/components/atoms";
import { useModal } from "@/hooks/useModal";
import { Modal } from "@/components/mulecules";
import { OrganizationCard } from "@/components/organisms/OrganCard";
import toast from "react-hot-toast";
import { getCities } from "@/app/actions/city/gets";
import { createOrgan } from "@/app/actions/organ/create";

// اسکیمای اعتبارسنجی
export const organizationSchema = z.object({
    name: z.string().min(2, "نام باید حداقل ۲ کاراکتر باشد"),
    address: z.string().min(5, "آدرس باید حداقل ۵ کاراکتر باشد"),
    ownership: z.enum(["private", "government", "semi-private"])
        .refine(val => !!val, { message: "انتخاب نوع مالکیت الزامی است" }),
    type: z.enum(["service", "industrial", "trading", "technology", "financial", "healthcare"])
        .refine(val => !!val, { message: "انتخاب نوع سازمان الزامی است" }),
    longitude: z.string().regex(/^-?(\d+)(\.\d+)?$/, "طول جغرافیایی معتبر وارد کنید"),
    latitude: z.string().regex(/^-?(\d+)(\.\d+)?$/, "عرض جغرافیایی معتبر وارد کنید"),
    description: z.string().min(10, "توضیحات باید حداقل ۱۰ کاراکتر باشد"),
    provinceId: z.string().min(1, "انتخاب استان الزامی است"),
    cityId: z.string().min(1, "انتخاب شهر الزامی است"),
});

export type OrganizationForm = z.infer<typeof organizationSchema>;

// انواع داده‌ها
export type TOrganization = {
    _id: string;
    name: string;
    address: string;
    ownership: "private" | "government" | "semi-private";
    type: "service" | "industrial" | "trading" | "technology" | "financial" | "healthcare";
    location?: {
        longitude: number;
        latitude: number;
    }
    description: string;
    provinceId: string;
    cityId: string;
};

export type TOrganizationsProps = {
    organizations: TOrganization[];
    provinces: { _id: string, name: string }[]
    positionId: string;
};

const ownershipTypes = [
    { _id: "government", name: "دولتی" },
    { _id: "private", name: "خصوصی" },
    { _id: "cooperative", name: "تعاونی" },
    { _id: "other", name: "سایر" }
];

const organizationTypes = [
    { _id: "service", name: "خدماتی" },
    { _id: "industrial", name: "صنعتی" },
    { _id: "commercial", name: "تجاری" },
    { _id: "educational", name: "آموزشی" },
    { _id: "health", name: "بهداشتی" },
    { _id: "other", name: "سایر" }
];

export const OrganizationClient: FC<TOrganizationsProps> = ({
    organizations,
    provinces,
    positionId
}) => {
    const [cityData, setCityData] = useState([])
    const router = useRouter()
    const { isOpen, open, close } = useModal();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<OrganizationForm>({
        resolver: zodResolver(organizationSchema),
    });

    const handleProvinceChange = async (label: string) => {
        const response = await getCities({ set: { limit: 10, page: 1, positionId: positionId, provinceId: label }, get: { _id: 1, name: 1 } })
        setCityData(response.body)

    };

    const onSubmit = async (data: OrganizationForm) => {
        const response = await createOrgan({
            set: {
                address: data.address, cityId: data.cityId, description: data.description, name: data.description, ownership: data.ownership, provinceId: data.provinceId, type: data.type, latitude: +data.latitude, longitude: +data.longitude
            }, get: { _id: 1, address: 1, description: 1, name: 1, ownership: 1, type: 1 }
        });
        console.log(response);
        if (response.success) {
            toast.success("سازمان جدید ایجاد شد");
            router.refresh();
        } else {
            toast.error("خطا در انجام عملیات");
        }
        close();
    };

    return (
        <>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">مدیریت سازمان‌ها</h1>
                    <p className="text-slate-400">ایجاد، ویرایش و مدیریت سازمان‌های سیستم</p>
                </div>
                <Button
                    onClick={open}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                >
                    <span className="ml-2">➕</span>
                    ایجاد سازمان جدید
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {organizations?.map((organization) => (
                    <OrganizationCard
                        key={organization._id}
                        _id={organization._id}
                        address={organization.address}
                        description={organization.description}
                        ownership={organization.ownership}
                        type={organization.type}
                        location={organization.location}
                    />
                ))}
            </div>

            {!organizations?.length && (
                <div className="text-center py-16">
                    <div className="w-24 h-24 mx-auto mb-4 bg-slate-800 rounded-full flex items-center justify-center">
                        <Building2 className="text-slate-400" size={40} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-300 mb-2">سازمانی یافت نشد</h3>
                    <p className="text-slate-500 mb-6">اولین سازمان خود را ایجاد کنید</p>
                    <Button
                        onClick={open}
                        className="bg-green-600 hover:bg-green-700 text-white"
                    >
                        ایجاد سازمان جدید
                    </Button>
                </div>
            )}

            <Modal
                isOpen={isOpen}
                onClose={close}
                title="ایجاد سازمان جدید"
            >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* ردیف اول: نام و آدرس */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <MyInput
                            label="نام سازمان"
                            name="name"
                            register={register}
                            errMsg={errors.name?.message}
                            placeholder="نام سازمان را وارد کنید"
                        />
                        <MyInput
                            label="آدرس"
                            name="address"
                            register={register}
                            errMsg={errors.address?.message}
                            placeholder="آدرس کامل سازمان"
                        />
                    </div>

                    {/* ردیف دوم: نوع مالکیت و نوع سازمان */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <Controller
                            name="ownership"
                            control={control}
                            render={({ field }) => (
                                <SelectBox
                                    label="نوع مالکیت"
                                    name={field.name}
                                    value={field.value || ""}
                                    onChange={field.onChange}
                                    options={ownershipTypes}
                                    placeholder="انتخاب نوع مالکیت"
                                    errMsg={errors.ownership?.message}
                                />
                            )}
                        />

                        <Controller
                            name="type"
                            control={control}
                            render={({ field }) => (
                                <SelectBox
                                    label="نوع سازمان"
                                    name={field.name}
                                    value={field.value || ""}
                                    onChange={field.onChange}
                                    options={organizationTypes}
                                    placeholder="انتخاب نوع سازمان"
                                    errMsg={errors.type?.message}
                                />
                            )}
                        />
                    </div>

                    {/* ردیف سوم: مختصات جغرافیایی */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <MyInput
                            label="طول جغرافیایی"
                            name="longitude"
                            register={register}
                            errMsg={errors.longitude?.message}
                            placeholder="مثال: 51.388973"
                        />
                        <MyInput
                            label="عرض جغرافیایی"
                            name="latitude"
                            register={register}
                            errMsg={errors.latitude?.message}
                            placeholder="مثال: 35.689198"
                        />
                    </div>

                    {/* ردیف چهارم: استان و شهر */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <Controller
                            name="provinceId"
                            control={control}
                            render={({ field }) => (
                                <SelectBox
                                    label="استان"
                                    name={field.name}
                                    value={field.value || ""}
                                    onChange={(value: string) => {
                                        handleProvinceChange(value)
                                        field.onChange(value)
                                    }}
                                    options={provinces}
                                    placeholder="انتخاب استان"
                                    errMsg={errors.provinceId?.message}
                                />
                            )}
                        />

                        <Controller
                            name="cityId"
                            control={control}
                            render={({ field }) => (
                                <SelectBox
                                    label="شهر"
                                    name={field.name}
                                    value={field.value || ""}
                                    onChange={field.onChange}
                                    options={cityData}
                                    placeholder="انتخاب شهر"
                                    errMsg={errors.cityId?.message}
                                />
                            )}
                        />
                    </div>

                    {/* توضیحات */}
                    <div>
                        <MyInput
                            label="توضیحات"
                            name="description"
                            register={register}
                            errMsg={errors.description?.message}
                            type="textarea"
                            placeholder="توضیحات کامل درباره سازمان..."
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
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
                        >
                            ذخیره سازمان
                        </Button>
                    </div>
                </form>
            </Modal>
        </>
    );
};