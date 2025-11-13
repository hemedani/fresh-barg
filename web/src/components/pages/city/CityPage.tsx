"use client";

import { useForm, Controller } from "react-hook-form";
import { FC, useCallback, useMemo } from "react";
import { Building2 } from "lucide-react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { MyInput, Button } from "@/components/atoms";
import { useModal } from "@/hooks/useModal";
import { EntityCard, Modal } from "@/components/mulecules";
import { createCity } from "@/app/actions/city/create";
import { getProvinces } from "@/app/actions/province/gets";
import toast from "react-hot-toast";
import MyAsyncMultiSelect from "@/components/atoms/AsyncSelect";
import { CityForm, citySchema } from "@/types/schemaType";



// Option Type
type OptionType = {
    value: string;
    label: string;
};

// Props
export type TProvince = { _id: string; name: string };
export type TCity = { _id: string; name: string; enName: string; abb: string };
export type TCitiesProps = {
    cities: TCity[];
    provinces: TProvince[];
};

export const CityClient: FC<TCitiesProps> = ({ provinces, cities }) => {
    const router = useRouter();
    const { isOpen, open, close } = useModal();

    // Form
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        setValue, // اضافه شد برای استفاده در setValue
    } = useForm<CityForm>({
        resolver: zodResolver(citySchema),
    });

    // Load Provinces
    const loadProvinceOptions = useCallback(
        async (inputValue: string): Promise<OptionType[]> => {
            try {
                const result = await getProvinces({
                    set: { page: 1, limit: 20, name: inputValue },
                    get: { _id: 1, name: 1 },
                });
                return result.body.map((p: TProvince) => ({
                    value: p._id,
                    label: p.name,
                }));
            } catch (error) {
                console.error("Error loading provinces:", error);
                return [];
            }
        },
        []
    );

    // Initial Options for SSR
    const initialProvinceOptions = useMemo<OptionType[]>(
        () => provinces.map((p) => ({ value: p._id, label: p.name })),
        [provinces]
    );

    // Submit
    const onSubmit = async (data: CityForm) => {
        const response = await createCity({
            set: {
                name: data.name,
                enName: data.enName,
                abb: data.abb,
                provinceId: data.province,
            },
            get: { _id: 1, abb: 1, enName: 1, name: 1 },
        });

        if (response.success) {
            toast.success("شهرستان جدید ایجاد شد");
            router.refresh();
            close();
        }
    };

    return (
        <>
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">مدیریت شهرها</h1>
                    <p className="text-slate-400">ایجاد، ویرایش و مدیریت شهرهای سیستم</p>
                </div>
                <Button
                    onClick={open}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
                >
                    <span className="ml-2">➕</span>
                    ایجاد شهر جدید
                </Button>
            </div>

            {/* Cities List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cities?.map((city) => (
                    <EntityCard
                        key={city._id}
                        name={city.name}
                        enName={city.enName}
                        abb={city.abb}
                    />
                ))}
            </div>

            {/* Empty State */}
            {!cities?.length && (
                <div className="text-center py-16">
                    <div className="w-24 h-24 mx-auto mb-4 bg-slate-800 rounded-full flex items-center justify-center">
                        <Building2 size={40} className="text-slate-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-300 mb-2">شهری یافت نشد</h3>
                    <p className="text-slate-500 mb-6">اولین شهر خود را ایجاد کنید</p>
                    <Button onClick={open} className="bg-green-600 text-white">
                        ایجاد شهر جدید
                    </Button>
                </div>
            )}

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={close} title="ایجاد شهر جدید">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <MyInput label="نام شهر" name="name" register={register} errMsg={errors.name?.message} />
                    <MyInput label="نام انگلیسی" name="enName" register={register} errMsg={errors.enName?.message} />
                    <MyInput label="مخفف" name="abb" register={register} errMsg={errors.abb?.message} />

                    {/* AsyncSelect - تک انتخابی با MyAsyncMultiSelect */}
                    <Controller
                        name="province"
                        control={control}
                        render={({ field }) => {
                            // تبدیل string به object برای نمایش در select
                            const selectedOption = field.value
                                ? initialProvinceOptions.find((o) => o.value === field.value) || null
                                : null;

                            return (
                                <MyAsyncMultiSelect
                                    name="province"
                                    label="استان مربوطه"
                                    loadOptions={loadProvinceOptions}
                                    defaultOptions={initialProvinceOptions}
                                    defaultValue={selectedOption}
                                    setValue={(_name, value) => {
                                        // چون MyAsyncMultiSelect همیشه آرایه برمی‌گردونه
                                        const selectedValue = Array.isArray(value) ? value[0] : value;
                                        field.onChange(selectedValue || "");
                                    }}
                                    placeholder="جستجو و انتخاب استان..."
                                    errMsg={errors.province?.message}
                                />
                            );
                        }}
                    />

                    <div className="flex justify-end gap-3 pt-4 border-t border-slate-700">
                        <Button type="button" className="px-6 py-3 bg-slate-600 hover:bg-slate-500 text-white rounded-xl transition-colors 
 duration-200 font-medium border border-slate-500"
                            onClick={close}>
                            لغو
                        </Button>
                        <Button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-200 
 hover:shadow-lg hover:shadow-blue-500/25 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            type="submit">ذخیره</Button>
                    </div>
                </form>
            </Modal>
        </>
    );
};