import { getActivePositionId } from "@/app/actions/position/getActivePosition";
import { getProvinces } from "@/app/actions/province/gets";
import { ProvinceClient } from "@/components/pages/province/ProvincePage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const ProvincePage = async () => {
  const cookieStore = await cookies()
  const userCookie = cookieStore.get("user")

  if (!userCookie?.value) redirect("/")

  const user = JSON.parse(userCookie.value) as { position: Array<{ _id: string; level: string }> }

  const activePositionId = await getActivePositionId()

  const activePosition = activePositionId ? user.position.find(p => p._id === activePositionId) : user.position[0]

  if (activePosition?.level !== "Ghost") redirect("/dashboard")

  const response = await getProvinces({
    set: { page: 1, limit: 10 },
    get: { _id: 1, name: 1, enName: 1, abb: 1 },
  });


  return <ProvinceClient provinces={response.body} />;
};

export default ProvincePage;
