// components/pages/CityClient.tsx
'use client'
import { Button } from "@/components/atoms/Button"
import { EntityCard } from "@/components/mulecules"
import { CreateCityModal } from "@/components/organisms/form/createCityModal"
import { useModal } from "@/hooks/useModal"
import { Building2 } from "lucide-react"

export type TCity = { _id: string; name: string; enName: string; abb: string }
export type TCitiesProps = { cities: TCity[] }

export const CityClient: React.FC<TCitiesProps> = ({ cities }) => {
    const { isOpen, open, close } = useModal()

    return (
        <>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">مدیریت شهرها</h1>
                    <p className="text-slate-400">ایجاد، ویرایش و مدیریت شهرهای سیستم</p>
                </div>
                <Button onClick={open} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">
                    ایجاد شهر جدید
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cities.map(city => (
                    <EntityCard key={city._id} name={city.name} enName={city.enName} abb={city.abb} />
                ))}
            </div>

            {!cities.length && (
                <div className="text-center py-16">
                    <div className="w-24 h-24 mx-auto mb-4 bg-slate-800 rounded-full flex items-center justify-center">
                        <Building2 size={40} className="text-slate-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-300 mb-2">شهری یافت نشد</h3>
                    <p className="text-slate-500 mb-6">اولین شهر خود را ایجاد کنید</p>
                    <Button onClick={open} className="bg-green-600 text-white">ایجاد شهر جدید</Button>
                </div>
            )}

            <CreateCityModal isOpen={isOpen} onClose={close} />
        </>
    )
}