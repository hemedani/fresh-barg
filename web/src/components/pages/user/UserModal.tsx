"use client"
import { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserForm, userSchema, User } from "@/types/schemaType";
import { Modal } from "@/components/mulecules";
import { MyInput, Button, SelectBox } from "@/components/atoms";
import MyAsyncMultiSelect from "@/components/atoms/AsyncSelect";
import { getProvinces } from "@/app/actions/province/gets";

interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: UserForm) => void;
    user?: User | null;
    isLoading?: boolean;
}

const genderOptions = [
    { _id: "male", name: "مرد" },
    { _id: "female", name: "زن" },
];

export const UserModal: FC<UserModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    user,
    isLoading = false,
}) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
        setValue
    } = useForm<UserForm>({
        resolver: zodResolver(userSchema),
        defaultValues: user || {
            first_name: "",
            last_name: "",
            phone: "",
            gender: undefined,
            birth_date: "",
            personnel_code: "",
            email: "",
        },
    });

    const handleFormSubmit = (data: UserForm) => {
        onSubmit(data);
        reset();
    };

    const handleClose = () => {
        reset();
        onClose();
    };

    const loadOptionOrgan = (inputValue: string, callback: (options: any[]) => void) => {
        console.log({ inputValue });

        getProvinces({ get: {}, set: { limit: 10, page: 1, name: inputValue } })
            .then(response => {
                const options = response.body.map((item: any) => ({
                    value: item.id,
                    label: item.name
                }));
                console.log(options);

                callback(options); // این خط مهمه!
            })
            .catch(() => {
                callback([]); // در صورت خطا، آرایه خالی
            });
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            title={user ? "ویرایش کاربر" : "ایجاد کاربر جدید"}
        >
            <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
                {/* ردیف اول: نام و نام خانوادگی */}
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

                {/* ردیف دوم: کد پرسنلی و تلفن */}
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

                {/* ردیف سوم: جنسیت و تاریخ تولد */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                            <SelectBox
                                label="جنسیت"
                                name={field.name}
                                value={field.value || ""}
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

                {/* ردیف چهارم: ایمیل */}
                <div>
                    <MyInput
                        label="ایمیل (اختیاری)"
                        name="email"
                        type="email"
                        register={register}
                        errMsg={errors.email?.message}
                        placeholder="example@email.com"
                    />
                </div>
                <MyAsyncMultiSelect
                    name="provinceId"
                    label="استان"
                    setValue={setValue}
                    loadOptions={loadOptionOrgan}
                    defaultOptions={true}
                    errMsg={errors.provinceId?.message}
                    placeholder="جستجوی استان..."
                    labelAsValue={false}
                />
                {/* دکمه‌ها */}
                <div className="flex justify-end gap-3 pt-4 border-t border-slate-700">
                    <Button
                        type="button"
                        onClick={handleClose}
                        className="px-6 py-2"
                    >
                        لغو
                    </Button>
                    <Button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
                    >
                        {user ? "بروزرسانی" : "ذخیره"}
                    </Button>
                </div>
            </form>
        </Modal>
    );
};