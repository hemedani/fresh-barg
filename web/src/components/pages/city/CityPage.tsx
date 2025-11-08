"use client";
import { useForm, Controller } from "react-hook-form";
import { FC } from "react";
import { Building2 } from "lucide-react";
import { z } from "zod";
import { useRouter } from "next/navigation";


import { zodResolver } from "@hookform/resolvers/zod";
import { SelectBox, MyInput, Button } from "@/components/atoms";
import { useModal } from "@/hooks/useModal";
import { EntityCard, Modal } from "@/components/mulecules";
import { createCity } from "@/app/actions/city/create";
import toast from "react-hot-toast";

export const citySchema = z.object({
    name: z.string().min(2, "نام باید حداقل ۲ کاراکتر باشد"),
    enName: z.string().min(2, "نام انگلیسی الزامی است"),
    abb: z.string().min(2).max(5, "مخفف باید ۲ تا ۵ کاراکتر باشد"),
    province: z.string().min(1, "انتخاب استان الزامی است"),
});

export type CityForm = z.infer<typeof citySchema>;


export type TProvince = {
    _id: string;
    name: string;
};

export type TCity = {
    _id: string;
    name: string;
    enName: string;
    abb: string;
};

export type TCitiesProps = {
    cities: TCity[];
    provinces: TProvince[];
};

export const CityClient: FC<TCitiesProps> = ({ provinces, cities }) => {
    const router = useRouter()
    const { isOpen, open, close } = useModal();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<CityForm>({
        resolver: zodResolver(citySchema),
    });

    const onSubmit = async (data: CityForm) => {
        const response = await createCity({ set: { name: data.name, enName: data.enName, abb: data.abb, provinceId: data.province }, get: { _id: 1, abb: 1, enName: 1, name: 1 } })
        if (response.success) {
            toast.success("شهرستان جدید ایجاد شد")
            router.refresh()
        }

    };

    return (
        <>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">مدیریت شهرها</h1>
                    <p className="text-slate-400">ایجاد، ویرایش و مدیریت شهرهای سیستم</p>
                </div>
                <Button
                    onClick={open}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                >
                    <span className="ml-2">➕</span>
                    ایجاد شهر جدید
                </Button>
            </div>

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

            {!cities?.length && (
                <div className="text-center py-16">
                    <div className="w-24 h-24 mx-auto mb-4 bg-slate-800 rounded-full flex items-center justify-center">
                        <Building2 className="text-slate-400" size={40} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-300 mb-2">شهری یافت نشد</h3>
                    <p className="text-slate-500 mb-6">اولین شهر خود را ایجاد کنید</p>
                    <Button
                        onClick={open}
                        className="bg-green-600 hover:bg-green-700 text-white"
                    >
                        ایجاد شهر جدید
                    </Button>
                </div>
            )}

            <Modal isOpen={isOpen} onClose={close} title="ایجاد شهر جدید">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <MyInput label="نام شهر" name="name" register={register} errMsg={errors.name?.message} />
                    <MyInput label="نام انگلیسی" name="enName" register={register} errMsg={errors.enName?.message} />
                    <MyInput label="مخفف" name="abb" register={register} errMsg={errors.abb?.message} />

                    <Controller
                        name="province"
                        control={control}
                        render={({ field }) => (
                            <div className="w-full p-2">
                                <SelectBox
                                    label="استان مربوطه"
                                    name={field.name}
                                    value={field.value || ""}
                                    onChange={field.onChange}
                                    options={provinces} // مستقیم آرایه provinces
                                    errMsg={errors.province?.message}
                                />
                            </div>
                        )}
                    />

                    <div className="flex justify-end gap-3 pt-4 border-t border-slate-700">
                        <Button className="rounded px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white"
                            type="button" onClick={close}>
                            لغو
                        </Button>
                        <Button className="rounded bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
                            type="submit">ذخیره شهر</Button>
                    </div>
                </form>
            </Modal>
        </>
    );
};
