import { getOrgans } from "@/app/actions/organ/gets";
import { getActivePositionId } from "@/app/actions/position/getActivePosition";
import { getUnits } from "@/app/actions/unit/gets";
import { UnitClient } from "@/components/pages/unit/UnitPage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const UnitPage = async () => {
  // 1. کوکی کاربر
  const cookieStore = await cookies()
  const userCookie = cookieStore.get("user")

  if (!userCookie?.value) {
    redirect("/login")
  }

  const user = JSON.parse(userCookie.value) as {
    position: Array<{ _id: string; level: string }>
  }

  // 2. نقش فعال (از کوکی)
  const activePositionId = await getActivePositionId()
  const activePosition = activePositionId
    ? user.position.find(p => p._id === activePositionId)
    : user.position[0]

  if (!activePosition) {
    redirect("/dashboard")
  }

  // 3. دسترسی: همه جز Staff
  const disallowedRoles = ["Staff"]
  if (disallowedRoles.includes(activePosition.level)) {
    redirect("/dashboard")
  }

  const [responseUnit, responseOrgan] = await Promise.all([
    getUnits({ get: { _id: 1, categories: 1, name: 1, org: { _id: 1, name: 1 }, city: { _id: 1, name: 1 }, province: { _id: 1, name: 1 } }, set: { limit: 10, page: 1, positionId: activePosition._id, } }),
    getOrgans({ set: { page: 1, limit: 10, positionId: activePosition._id }, get: { _id: 1, name: 1 } })
  ])

  return (
    <UnitClient units={responseUnit.body} organs={responseOrgan.body} position={activePosition} />
  );
};

export default UnitPage;
