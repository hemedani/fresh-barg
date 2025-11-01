import { getCities } from "@/app/actions/city/gets";
import { getOrgans } from "@/app/actions/organ/gets";
import { getProvinces } from "@/app/actions/province/gets";
import { OrganizationClient } from "@/components/pages/organ/organPage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const OrganPage = async () => {
  const userCookie = (await cookies()).get("user");
  const user = userCookie ? JSON.parse(userCookie.value) : null;

  const userPosition = user.position[0]

  if (userPosition.level === "staff" || userPosition.level === "Unithead") redirect("/")

  const response = await getOrgans({ get: { _id: 1, address: 1, description: 1, ownership: 1, type: 1, location: 1 }, set: { page: 1, limit: 10, positionId: userPosition._id } })
  const responseProvinces = await getProvinces({ set: { limit: 10, page: 1 }, get: { _id: 1, name: 1 } })
  console.log({ data: response.body[1].location });

  return <OrganizationClient positionId={userPosition._id} organizations={response.body} provinces={responseProvinces.body} />

};

export default OrganPage;
