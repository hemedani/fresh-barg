// src/app/dashboard/organ/page.tsx
import { getOrgans } from "@/app/actions/organ/gets"
import { getActivePositionId } from "@/app/actions/position/getActivePosition"
import { OrganClient } from "@/components/pages/organ/organPage"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function OrganPage() {
  const cookieStore = await cookies()
  const userCookie = cookieStore.get("user")
  if (!userCookie?.value) redirect("/login")

  const user = JSON.parse(userCookie.value) as { position: Array<{ _id: string; level: string }> }
  const activePositionId = await getActivePositionId()
  const activePosition = activePositionId
    ? user.position.find(p => p._id === activePositionId)
    : user.position[0]

  if (!activePosition?.level) redirect("/dashboard")

  const allowedRoles = ["Ghost", "Orghead"]
  if (!allowedRoles.includes(activePosition.level)) redirect("/dashboard")

  const organsRes = await getOrgans({
    get: { _id: 1, name: 1, address: 1, description: 1, ownership: 1, type: 1, location: 1 },
    set: { page: 1, limit: 50, positionId: activePosition._id },
  })

  return (
    <OrganClient
      organizations={organsRes.body ?? []}
      positionId={activePosition._id}
    />
  )
}