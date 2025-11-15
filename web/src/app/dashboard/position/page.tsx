import { getOrgans } from "@/app/actions/organ/gets";
import { getActivePositionId } from "@/app/actions/position/getActivePosition";
import { getPositions } from "@/app/actions/position/gets";
import { getUnits } from "@/app/actions/unit/gets";
import { RoleClient } from "@/components/pages/position/PositionPage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export const PositionPage = async () => {
  const cookieStore = await cookies()
  const userCookie = cookieStore.get("user")

  if (!userCookie?.value) {
    redirect("/login")
  }

  const user = JSON.parse(userCookie.value) as { position: Array<{ _id: string; name: string; level?: string }> }

  const activePositionId = await getActivePositionId()
  const activePosition = activePositionId ? user.position.find(p => p._id === activePositionId) : user.position[0]

  if (!activePosition) {
    redirect("/dashboard")
  }

  if (activePosition.name === "Staff") {
    redirect("/dashboard")
  }
  const [responsePositions, responseَUser, responseOrgans, responseUnits] = await Promise.all([getPositions({ get: { _id: 1, level: 1, name: 1, panel: 1, features: 1, org: { name: 1, _id: 1 }, unit: { name: 1, _id: 1 } }, set: { page: 1, limit: 10, filterPositions: "all" } }),
  getPositions({ get: { _id: 1, level: 1, name: 1, panel: 1, features: 1 }, set: { page: 1, limit: 10, filterPositions: "all" } }),
  getOrgans({ get: { _id: 1, name: 1, }, set: { page: 1, limit: 10, positionId: activePosition._id } }),
  getUnits({ get: { _id: 1, name: 1, }, set: { page: 1, limit: 10, positionId: activePosition._id } })
  ])

  return (
    <RoleClient organs={responseOrgans.body} units={responseUnits.body} users={responseَUser.body} roles={responsePositions.body} />
  );
};

export default PositionPage;
