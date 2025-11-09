import { getPositions } from "@/app/actions/position/gets";
import { DeviceClient } from "@/components/pages/position/PositionPage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export const PositionPage = async () => {
  const userCookie = (await cookies()).get("user");
  const user = userCookie ? JSON.parse(userCookie.value) : null;

  const userPosition = user.position[0]

  if (userPosition.level === "staff") redirect("/")

  const response = await getPositions({ get: { _id: 1, level: 1, name: 1, panel: 1, features: 1 }, set: { page: 1, limit: 10, filterPositions: "all" } })
  return (
    <DeviceClient devices={response.body} />
  );
};

export default PositionPage;
