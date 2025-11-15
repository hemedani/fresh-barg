// src/app/dashboard/organ/page.tsx
import { getOrgans } from "@/app/actions/organ/gets"
import { getActivePositionId } from "@/app/actions/position/getActivePosition"
import { getProvinces } from "@/app/actions/province/gets"
import { OrganizationClient } from "@/components/pages/organ/organPage"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function Page() {
  const cookieStore = await cookies()
  const userCookie = cookieStore.get("user")

  if (!userCookie?.value) redirect("/login")

  const user = JSON.parse(userCookie.value) as { position: Array<{ _id: string; level: string }> }

  const activePositionId = await getActivePositionId()

  // 3. انتخاب نقش فعال
  const activePosition = activePositionId ? user.position.find(p => p._id === activePositionId) : user.position[0]

  if (!activePosition) redirect("/dashboard")

  // 4. دسترسی: فقط Ghost و Orghead
  const allowedRoles = ["Ghost", "Orghead"]
  if (!allowedRoles.includes(activePosition.level)) redirect("/dashboard")
  console.log(activePosition._id);

  // 5. درخواست‌ها (موازی)
  const [organsRes, provincesRes] = await Promise.all([
    getOrgans({
      get: { _id: 1, name: 1, address: 1, description: 1, ownership: 1, type: 1, location: 1, },
      set: { page: 1, limit: 10, positionId: activePosition._id, },
    }),
    getProvinces({
      get: { _id: 1, name: 1 },
      set: { page: 1, limit: 10 },
    }),
  ])

  // console.log(organsRes);


  return (
    <OrganizationClient
      positionId={activePosition._id}
      organizations={organsRes.body ?? []}
      provinces={provincesRes.body ?? []}
    />
  )
}