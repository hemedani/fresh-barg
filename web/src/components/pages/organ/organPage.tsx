"use client";
import { useForm, Controller } from "react-hook-form";
import { FC, useState } from "react";
import { Building2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import AsyncSelect from "react-select/async";

import { MyInput, Button, SelectBox, CustomStyles } from "@/components/atoms";
import { useModal } from "@/hooks/useModal";
import { Modal } from "@/components/mulecules";
import { OrganizationCard } from "@/components/organisms/OrganCard";
import { getCities } from "@/app/actions/city/gets";
import { createOrgan } from "@/app/actions/organ/create";
import { OrganizationForm, organizationSchema } from "@/types/schemaType";

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
    { _id: "semi-private", name: "نیمه خصوصی" },
];

const organizationTypes = [
    { _id: "service", name: "خدماتی" },
    { _id: "industrial", name: "صنعتی" },
    { _id: "trading", name: "تجاری" },
    { _id: "technology", name: "فناوری" },
    { _id: "financial", name: "مالی" },
    { _id: "healthcare", name: "بهداشتی" },
];

// استایل‌های فارسی برای react-select
const customStyles = {
    control: (base: any) => ({
        ...base,
        backgroundColor: '#1e293b',
        borderColor: '#475569',
        color: 'white',
        minHeight: '44px',
        '&:hover': {
            borderColor: '#64748b'
        }
    }),
    menu: (base: any) => ({
        ...base,
        backgroundColor: '#1e293b',
        color: 'white',
        zIndex: 50
    }),
    option: (base: any, state: any) => ({
        ...base,
        backgroundColor: state.isFocused ? '#334155' : '#1e293b',
        color: 'white',
        '&:hover': {
            backgroundColor: '#475569'
        }
    }),
    singleValue: (base: any) => ({
        ...base,
        color: 'white'
    }),
    input: (base: any) => ({
        ...base,
        color: 'white'
    }),
    placeholder: (base: any) => ({
        ...base,
        color: '#94a3b8'
    })
};

export const OrganizationClient: FC<TOrganizationsProps> = ({
    organizations,
    provinces,
    positionId
}) => {
    const [selectedProvince, setSelectedProvince] = useState<string>("");
    const [cities, setCities] = useState<{ value: string, label: string }[]>([]);
    const [selectedProvinceOption, setSelectedProvinceOption] = useState<any>(null);
    const [selectedCityOption, setSelectedCityOption] = useState<any>(null);
    const router = useRouter()
    const { isOpen, open, close } = useModal();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        setValue,
        reset
    } = useForm<OrganizationForm>({
        resolver: zodResolver(organizationSchema),
    });

    // تابع برای لود کردن استان‌ها در AsyncSelect
    const loadProvinces = (inputValue: string): Promise<any[]> => {
        return new Promise((resolve) => {
            const filteredProvinces = provinces.filter(province =>
                province.name.includes(inputValue)
            ).map(province => ({
                value: province._id,
                label: province.name
            }));
            resolve(filteredProvinces);
        });
    };

    // تابع برای لود کردن شهرها بر اساس استان انتخاب شده
    const loadCities = (inputValue: string): Promise<any[]> => {
        return new Promise(async (resolve) => {
            if (!selectedProvince) {
                resolve([]);
                return;
            }

            try {
                const response = await getCities({
                    set: {
                        limit: 50,
                        page: 1,
                        positionId: positionId,
                        provinceId: selectedProvince
                    },
                    get: { _id: 1, name: 1 }
                });

                const citiesList = response.body.map((city: any) => ({
                    value: city._id,
                    label: city.name
                }));

                setCities(citiesList);

                const filteredCities = citiesList.filter((city: any) =>
                    city.label.includes(inputValue)
                );

                resolve(filteredCities);
            } catch (error) {
                console.error('Error loading cities:', error);
                resolve([]);
            }
        });
    };

    // پیدا کردن نام استان و شهر برای نمایش
    const findProvinceName = (provinceId: string) => {
        return provinces.find(p => p._id === provinceId)?.name || "";
    };

    const findCityName = (cityId: string) => {
        return cities.find(c => c.value === cityId)?.label || "";
    };

    const onSubmit = async (data: OrganizationForm) => {
        const response = await createOrgan({
            set: {
                address: data.address,
                cityId: data.cityId,
                description: data.description,
                name: data.name,
                ownership: data.ownership,
                provinceId: data.provinceId,
                type: data.type,
                latitude: +data.latitude,
                longitude: +data.longitude
            },
            get: { _id: 1, address: 1, description: 1, name: 1, ownership: 1, type: 1 }
        });

        console.log(response);
        if (response.success) {
            toast.success("سازمان جدید ایجاد شد");
            router.refresh();
            reset();
            setSelectedProvince("");
            setSelectedProvinceOption(null);
            setSelectedCityOption(null);
            setCities([]);
            close();
        } else {
            toast.error("خطا در انجام عملیات");
        }
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
                        name={organization.name}
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
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                استان
                            </label>
                            <Controller
                                name="provinceId"
                                control={control}
                                render={({ field }) => (
                                    <AsyncSelect
                                        cacheOptions
                                        defaultOptions
                                        loadOptions={loadProvinces}
                                        placeholder="استان را انتخاب کنید..."
                                        styles={CustomStyles}
                                        value={selectedProvinceOption}
                                        onChange={(selected: any) => {
                                            field.onChange(selected?.value || "");
                                            setSelectedProvince(selected?.value || "");
                                            setSelectedProvinceOption(selected);
                                            setValue("cityId", "");
                                            setSelectedCityOption(null);
                                            setCities([]);
                                        }}
                                        onBlur={field.onBlur}
                                    />
                                )}
                            />
                            {errors.provinceId && (
                                <p className="text-red-500 text-sm mt-1">{errors.provinceId.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                شهر
                            </label>
                            <Controller
                                name="cityId"
                                control={control}
                                render={({ field }) => (
                                    <AsyncSelect
                                        cacheOptions
                                        defaultOptions
                                        loadOptions={loadCities}
                                        placeholder={selectedProvince ? "شهر را انتخاب کنید..." : "ابتدا استان را انتخاب کنید"}
                                        styles={CustomStyles}
                                        isDisabled={!selectedProvince}
                                        value={selectedCityOption}
                                        onChange={(selected: any) => {
                                            field.onChange(selected?.value || "");
                                            setSelectedCityOption(selected);
                                        }}
                                        onBlur={field.onBlur}
                                    />
                                )}
                            />
                            {errors.cityId && (
                                <p className="text-red-500 text-sm mt-1">{errors.cityId.message}</p>
                            )}
                        </div>
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