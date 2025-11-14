// components/pages/UnitClient.tsx
'use client'
import { FC } from "react"
import { Briefcase } from "lucide-react"
import { Button } from "@/components/atoms/Button"
import { UnitCard } from "@/components/organisms/UnitCard"
import { useModal } from "@/hooks/useModal"
import { CreateUnitModal } from "@/components/organisms/form/CreateUnitModal"

export type TUnit = {
    _id: string
    name: string
    categories: string[]
    province: { _id: string; name: string }
    city: { _id: string; name: string }
    org: { _id: string; name: string }
}

export type TUnitsProps = {
    units: TUnit[]
    position: { _id: string; level: string }
}

export const UnitClient: FC<TUnitsProps> = ({ units, position }) => {
    const { isOpen, open, close } = useModal()
    const hasUnits = units.length > 0

    return (
        <>
            {/* هدر */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">مدیریت واحدها</h1>
                    <p className="text-slate-400">ایجاد، ویرایش و مدیریت واحدها</p>
                </div>
                <Button
                    onClick={open}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
                >
                    ایجاد واحد
                </Button>
            </div>

            {/* لیست واحدها */}
            {hasUnits ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {units.map((unit) => (
                        <UnitCard
                            key={unit._id}
                            _id={unit._id}
                            name={unit.name}
                            categories={unit.categories}
                            province={unit.province.name}
                            city={unit.city.name}
                            org={unit.org.name}
                        />
                    ))}
                </div>
            ) : (
                /* حالت خالی */
                <div className="text-center py-16">
                    <div className="w-24 h-24 mx-auto mb-4 bg-slate-800 rounded-full flex items-center justify-center">
                        <Briefcase className="text-slate-400" size={40} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-300 mb-2">واحد یافت نشد</h3>
                    <p className="text-slate-500 mb-6">اولین واحد را ایجاد کنید</p>
                    <Button
                        onClick={open}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                    >
                        ایجاد واحد
                    </Button>
                </div>
            )}

            {/* مودال ایجاد واحد */}
            <CreateUnitModal
                isOpen={isOpen}
                onClose={close}
                positionId={position._id}
            />
        </>
    )
}