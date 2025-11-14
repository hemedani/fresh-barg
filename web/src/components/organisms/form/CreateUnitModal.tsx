// components/molecules/Modals/CreateUnitModal.tsx
'use client'
import { useState, useCallback, useEffect } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Modal } from "@/components/mulecules"
import { Button } from "@/components/atoms/Button"
import { MyInput } from "@/components/atoms/Input"
import { SelectBox } from "@/components/atoms/Select"
import AsyncSelect from "react-select/async"
import { createUnit } from "@/app/actions/unit/create"
import { getProvinces } from "@/app/actions/province/gets"
import { getCities } from "@/app/actions/city/gets"
import { getOrgans } from "@/app/actions/organ/gets"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { UnitForm, UnitSchema } from "@/types/schemaType"
import { CustomStyles } from "@/components/atoms"

type Option = { value: string; label: string }

interface CreateUnitModalProps {
    isOpen: boolean
    onClose: () => void
    positionId: string
}

export const CreateUnitModal: React.FC<CreateUnitModalProps> = ({ isOpen, onClose, positionId }) => {
    const router = useRouter()
    const [organs, setOrgans] = useState<{ _id: string; name: string }[]>([])
    const [selectedProvince, setSelectedProvince] = useState<Option | null>(null)
    const [selectedCity, setSelectedCity] = useState<Option | null>(null)

    const {
        register,
        handleSubmit,
        control,
        reset,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<UnitForm>({
        resolver: zodResolver(UnitSchema),
        defaultValues: { categories: [] },
    })

    // فچ سازمان‌ها وقتی مودال باز میشه
    useEffect(() => {
        if (!isOpen) return

        const fetchOrgans = async () => {
            try {
                const res = await getOrgans({
                    get: { _id: 1, name: 1 },
                    set: { page: 1, limit: 50, positionId },
                })
                setOrgans(res.body ?? [])
            } catch (error) {
                console.error("Error loading organs:", error)
                setOrgans([])
            }
        }

        fetchOrgans()
    }, [isOpen, positionId])

    // لود استان‌ها
    const loadProvinces = useCallback(async (input: string): Promise<Option[]> => {
        try {
            const res = await getProvinces({
                set: { name: input, page: 1, limit: 20 },
                get: { _id: 1, name: 1 },
            })
            return res.body.map((p: { _id: string, name: string }) => ({ value: p._id, label: p.name }))
        } catch {
            return []
        }
    }, [])

    // لود شهرها
    const loadCities = useCallback(async (input: string): Promise<Option[]> => {
        if (!selectedProvince?.value) return []
        try {
            const res = await getCities({
                set: { provinceId: selectedProvince.value, name: input, page: 1, limit: 20, positionId },
                get: { _id: 1, name: 1 },
            })
            return res.body.map((c: { _id: string, name: string }) => ({ value: c._id, label: c.name }))
        } catch {
            return []
        }
    }, [selectedProvince, positionId])

    // ریست شهر وقتی استان تغییر کرد
    useEffect(() => {
        if (selectedProvince) {
            setValue("cityId", "")
            setSelectedCity(null)
        }
    }, [selectedProvince, setValue])

    const onSubmit = async (data: UnitForm) => {
        try {
            const res = await createUnit({
                set: { ...data, positionId },
                get: { _id: 1, name: 1 },
            })

            if (res.success) {
                toast.success("واحد جدید ایجاد شد")
                router.refresh()
                reset()
                setSelectedProvince(null)
                setSelectedCity(null)
                onClose()
            } else {
                toast.error(res.error?.message || "خطا در ایجاد واحد")
            }
        } catch (error) {
            toast.error("خطا در ارتباط با سرور")
            console.error(error)
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="ایجاد واحد جدید">
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

                {/* دسته‌بندی‌ها */}
                <div>
                    <Controller
                        name="categories"
                        control={control}
                        render={({ field }) => (
                            <SelectBox
                                name="categories"
                                label="دسته‌بندی"
                                options={[]}
                                value={field.value?.[0] || ""}
                                onChange={v => field.onChange(v ? [v] : [])}
                                errMsg={errors.categories?.message}
                                placeholder="انتخاب دسته‌بندی"
                            />
                        )}
                    />
                </div>

                {/* استان و شهر */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* استان */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">استان</label>
                        <Controller
                            name="provinceId"
                            control={control}
                            render={({ field }) => (
                                <AsyncSelect
                                    cacheOptions
                                    defaultOptions
                                    loadOptions={loadProvinces}
                                    placeholder="جستجوی استان..."
                                    loadingMessage={() => "در حال جستجو..."}
                                    noOptionsMessage={() => "استانی یافت نشد"}
                                    styles={CustomStyles}
                                    value={selectedProvince}
                                    onChange={opt => {
                                        field.onChange(opt?.value || "")
                                        setSelectedProvince(opt)
                                    }}
                                    isClearable
                                />
                            )}
                        />
                        {errors.provinceId && <p className="text-red-500 text-xs mt-1">{errors.provinceId.message}</p>}
                    </div>

                    {/* شهر */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">شهر</label>
                        <Controller
                            name="cityId"
                            control={control}
                            render={({ field }) => (
                                <AsyncSelect
                                    cacheOptions
                                    defaultOptions
                                    loadOptions={loadCities}
                                    placeholder={selectedProvince ? "جستجوی شهر..." : "ابتدا استان انتخاب کنید"}
                                    loadingMessage={() => "در حال جستجو..."}
                                    noOptionsMessage={() => "شهری یافت نشد"}
                                    isDisabled={!selectedProvince}
                                    styles={CustomStyles}
                                    value={selectedCity}
                                    onChange={opt => {
                                        field.onChange(opt?.value || "")
                                        setSelectedCity(opt)
                                    }}
                                    isClearable
                                />
                            )}
                        />
                        {errors.cityId && <p className="text-red-500 text-xs mt-1">{errors.cityId.message}</p>}
                    </div>
                </div>

                {/* سازمان */}
                <div>
                    <Controller
                        name="orgId"
                        control={control}
                        render={({ field }) => (
                            <SelectBox
                                name="orgId"
                                label="سازمان"
                                options={organs}
                                value={field.value || ""}
                                onChange={field.onChange}
                                errMsg={errors.orgId?.message}
                                placeholder={organs.length > 0 ? "انتخاب سازمان" : "در حال بارگذاری سازمان‌ها..."}
                            />
                        )}
                    />
                </div>

                {/* دکمه‌های اقدام */}
                <div className="flex justify-end gap-3 pt-4 border-t border-slate-700">
                    <Button type="button" onClick={onClose} className="px-6 py-3 bg-slate-600 hover:bg-slate-500 text-white rounded-xl transition-colors 
 duration-200 font-medium border border-slate-500">
                        لغو
                    </Button>
                    <Button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-200 
 hover:shadow-lg hover:shadow-blue-500/25 font-medium disabled:opacity-50 disabled:cursor-not-allowed" type="submit">ذخیره</Button>
                </div>
            </form>
        </Modal>
    )
}