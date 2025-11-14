// src/app/dashboard/city/page.tsx
import { getCities } from "@/app/actions/city/gets"
import { CityClient } from "@/components/pages/city/CityPage"
import { getActivePositionId } from "@/app/actions/position/getActivePosition"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function CityPage() {
  const cookieStore = await cookies()
  const userCookie = cookieStore.get("user")
  if (!userCookie?.value) redirect("/login")

  const user = JSON.parse(userCookie.value) as { position: Array<{ _id: string; level: string }> }
  const activePositionId = await getActivePositionId()
  const activePosition = activePositionId
    ? user.position.find(p => p._id === activePositionId)
    : user.position[0]

  if (!activePosition?.level || activePosition.level !== "Ghost") {
    redirect("/dashboard")
  }

  const res = await getCities({
    get: { _id: 1, name: 1, enName: 1, abb: 1 },
    set: { page: 1, limit: 50, positionId: activePosition._id },
  })

  return <CityClient cities={res.body ?? []} />
}