import { getOrgans } from "@/app/actions/organ/gets";
import { getUnits } from "@/app/actions/unit/gets";
import { UnitClient } from "@/components/pages/unit/UnitPage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const UnitPage = async () => {
  const userCookie = (await cookies()).get("user");
  const user = userCookie ? JSON.parse(userCookie.value) : null;
  // if (!user) redirect("/")
  const userPosition = user?.position[0]

  if (userPosition.level === "staff") redirect("/")

  const response = await getUnits({ get: { _id: 1, categories: 1, name: 1, org: { _id: 1, name: 1 }, city: { _id: 1, name: 1 }, province: { _id: 1, name: 1 } }, set: { limit: 10, page: 1, positionId: userPosition._id, cityId: user.city._id, orgId: user.org[0]._id, provinceId: user.province._id } })
  const responseOrgan = await getOrgans({ set: { page: 1, limit: 10, positionId: userPosition._id }, get: { _id: 1, name: 1 } })
  return (
    <UnitClient units={response.body} organs={responseOrgan.body} position={userPosition} />
  );
};

export default UnitPage;
