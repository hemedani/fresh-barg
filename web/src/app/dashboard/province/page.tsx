import { getProvinces } from "@/app/actions/province/gets";
import { ProvinceClient } from "@/components/pages/province/ProvincePage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const ProvincePage = async () => {
  const userCookie = (await cookies()).get("user");
  const user = userCookie ? JSON.parse(userCookie.value) : null;

  const userPosition = user.position[0]

  if (userPosition.level !== "Ghost") redirect("/")


  const response = await getProvinces({
    set: { page: 1, limit: 10 },
    get: { _id: 1, name: 1, enName: 1, abb: 1 },
  });


  return <ProvinceClient provinces={response.body} />;
};

export default ProvincePage;
