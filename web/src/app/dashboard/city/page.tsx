import { getCities } from "@/app/actions/city/gets";
import { getProvinces } from "@/app/actions/province/gets";
import { CityClient } from "@/components/pages/province";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const CityPage = async () => {
  const userCookie = (await cookies()).get("user");
  const user = userCookie ? JSON.parse(userCookie.value) : null;

  const userPosition = user.position[0]

  if (userPosition.level !== "Ghost") redirect("/")

  const response = await getCities({
    get: { _id: 1, name: 1, enName: 1, abb: 1 },
    set: { page: 1, limit: 10, positionId: userPosition._id },
  });

  const responseProvince = await getProvinces({
    get: { _id: 1, name: 1 },
    set: { page: 1, limit: 10, },
  });

  return <CityClient provinces={responseProvince.body} cities={response.body} />;
};

export default CityPage;