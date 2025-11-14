// components/pages/OrganClient.tsx
'use client'
import { Button } from "@/components/atoms/Button"
import { CreateOrganModal } from "@/components/organisms/form/CreateOrganModal"
import { OrganizationCard } from "@/components/organisms/OrganCard"
import { useModal } from "@/hooks/useModal"
import { Building2 } from "lucide-react"

export type TOrganization = {
    _id: string
    name: string
    address: string
    ownership: string
    type: string
    location?: { longitude: number; latitude: number }
    description: string
}

export type TOrganProps = {
    organizations: TOrganization[]
    positionId: string
}

export const OrganClient: React.FC<TOrganProps> = ({ organizations, positionId }) => {
    const { isOpen, open, close } = useModal()

    return (
        <>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">مدیریت سازمان‌ها</h1>
                    <p className="text-slate-400">ایجاد، ویرایش و مدیریت سازمان‌های سیستم</p>
                </div>
                <Button onClick={open} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">
                    ایجاد سازمان جدید
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {organizations.map(org => (
                    <OrganizationCard
                        key={org._id}
                        _id={org._id}
                        name={org.name}
                        address={org.address}
                        description={org.description}
                        ownership={org.ownership}
                        type={org.type}
                        location={org.location}
                    />
                ))}
            </div>

            {!organizations.length && (
                <div className="text-center py-16">
                    <div className="w-24 h-24 mx-auto mb-4 bg-slate-800 rounded-full flex items-center justify-center">
                        <Building2 size={40} className="text-slate-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-300 mb-2">سازمانی یافت نشد</h3>
                    <p className="text-slate-500 mb-6">اولین سازمان خود را ایجاد کنید</p>
                    <Button onClick={open} className="bg-green-600 text-white">ایجاد سازمان جدید</Button>
                </div>
            )}

            <CreateOrganModal isOpen={isOpen} onClose={close} positionId={positionId} />
        </>
    )
}