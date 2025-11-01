import { DeviceClient } from "@/components/pages/position/PositionPage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export const PositionPage = async () => {
  const userCookie = (await cookies()).get("user");
  const user = userCookie ? JSON.parse(userCookie.value) : null;

  const userPosition = user.position[0]

  if (userPosition.level === "staff") redirect("/")

  const testDevices = [
    {
      _id: "dev001",
      name: "سرور مرکزی دیتابیس",
      unitId: "1",
      orgId: "1",
      panel: "admin",
      level: "enterprise",
      features: ["monitoring", "alerts", "api", "export"],
      positionId: "1"
    },
    {
      _id: "dev002",
      name: "ایستگاه کاری مدیر",
      unitId: "4",
      orgId: "2",
      panel: "user",
      level: "advanced",
      features: ["reporting", "analytics", "customization"],
      positionId: "3"
    },
    {
      _id: "dev003",
      name: "دستگاه نظارتی شبکه",
      unitId: "1",
      orgId: "3",
      panel: "monitor",
      level: "standard",
      features: ["monitoring", "alerts"],
      positionId: "4"
    },
    {
      _id: "dev004",
      name: "سرور پشتیبان",
      unitId: "5",
      orgId: "4",
      panel: "admin",
      level: "enterprise",
      features: ["monitoring", "api", "export", "mobile"],
      positionId: "5"
    }
  ];

  return (
    <DeviceClient devices={testDevices} />
  );
};

export default PositionPage;
