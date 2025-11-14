// src/app/dashboard/unit/page.tsx
import { getUnits } from "@/app/actions/unit/gets"
import { getActivePositionId } from "@/app/actions/position/getActivePosition"
import { UnitClient } from "@/components/pages/unit/UnitPage"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function UnitPage() {
  const cookieStore = await cookies()
  const userCookie = cookieStore.get("user")
  if (!userCookie?.value) redirect("/login")

  const user = JSON.parse(userCookie.value) as { position: Array<{ _id: string; level: string }> }
  const activePositionId = await getActivePositionId()
  const activePosition = activePositionId
    ? user.position.find(p => p._id === activePositionId)
    : user.position[0]

  if (!activePosition?.level) redirect("/dashboard")

  const disallowedRoles = ["Staff"]
  if (disallowedRoles.includes(activePosition.level)) redirect("/dashboard")

  const unitsRes = await getUnits({
    get: { _id: 1, name: 1, categories: 1, org: { _id: 1, name: 1 }, city: { _id: 1, name: 1 }, province: { _id: 1, name: 1 } },
    set: { page: 1, limit: 50, positionId: activePosition._id },
  })

  return (
    <UnitClient
      units={unitsRes.body ?? []}
      position={activePosition}
    />
  )
}