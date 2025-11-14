// components/pages/ProvinceClient.tsx
'use client'
import { Button } from "@/components/atoms/Button"
import { EntityCard } from "@/components/mulecules"
import { CreateProvinceModal } from "@/components/organisms/form/createProvinceModal"
import { useModal } from "@/hooks/useModal"

export type TProvinceProps = { _id: string; name: string; enName: string; abb: string }
export type TProvinces = { provinces: TProvinceProps[] }

export const ProvinceClient: React.FC<TProvinces> = ({ provinces }) => {
  const { isOpen, open, close } = useModal()

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">استان‌ها</h1>
        <Button onClick={open} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
        >
          ایجاد استان جدید
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {provinces.map(p => (
          <EntityCard key={p._id} name={p.name} enName={p.enName} abb={p.abb} />
        ))}
      </div>

      <CreateProvinceModal isOpen={isOpen} onClose={close} />
    </div>
  )
}