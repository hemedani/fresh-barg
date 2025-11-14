// components/molecules/Modals/CreateProvinceModal.tsx
'use client'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Modal } from "@/components/mulecules"
import { Button } from "@/components/atoms/Button"
import { MyInput } from "@/components/atoms/Input"
import { createProvince } from "@/app/actions/province/create"
import { useRouter } from "next/navigation"
import { ProvinceForm, provinceSchema } from "@/types/schemaType"

interface CreateProvinceModalProps {
    isOpen: boolean
    onClose: () => void
}

export const CreateProvinceModal: React.FC<CreateProvinceModalProps> = ({ isOpen, onClose }) => {
    const router = useRouter()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ProvinceForm>({
        resolver: zodResolver(provinceSchema),
    })

    const onSubmit = async (data: ProvinceForm) => {
        await createProvince({ set: data, get: { _id: 1, name: 1 } })
        router.refresh()
        reset()
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="ایجاد استان جدید">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <MyInput label="نام" name="name" register={register} errMsg={errors.name?.message} />
                <MyInput label="نام انگلیسی" name="enName" register={register} errMsg={errors.enName?.message} />
                <MyInput label="مخفف" name="abb" register={register} errMsg={errors.abb?.message} />
                <div className="flex justify-end gap-2 mt-6">
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