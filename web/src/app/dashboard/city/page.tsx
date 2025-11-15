import { getCities } from "@/app/actions/city/gets";
import { getActivePositionId } from "@/app/actions/position/getActivePosition";
import { getProvinces } from "@/app/actions/province/gets";
import { CityClient } from "@/components/pages/province";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const CityPage = async () => {
  const cookieStore = await cookies()
  const userCookie = cookieStore.get("user")

  if (!userCookie?.value) redirect("/login")

  const user = JSON.parse(userCookie.value) as { position: Array<{ _id: string; level: string }> }

  const activePositionId = await getActivePositionId()

  const activePosition = activePositionId ? user.position.find(p => p._id === activePositionId) : user.position[0]

  if (!activePosition?.level) redirect("/dashboard")

  if (activePosition?.level !== "Ghost") redirect("/dashboard")

  const [responseCities, responseProvince] = await Promise.all([
    getCities({
      get: { _id: 1, name: 1, enName: 1, abb: 1 },
      set: { page: 1, limit: 10, positionId: activePosition._id },
    }),
    getProvinces({
      get: { _id: 1, name: 1 },
      set: { page: 1, limit: 10, },
    })
  ])

  return <CityClient provinces={responseProvince.body ?? []} cities={responseCities.body ?? []} />;
};

export default CityPage;