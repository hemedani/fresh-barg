import { getOrgans } from "@/app/actions/organ/gets";
import { getActivePositionId } from "@/app/actions/position/getActivePosition";
import { getPositions } from "@/app/actions/position/gets";
import { getUnits } from "@/app/actions/unit/gets";
import { getUsers } from "@/app/actions/user/getUsers"
import UsersPage from "@/components/pages/user/UserPage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
    const cookieStore = await cookies()
    const userCookie = cookieStore.get("user")

    if (!userCookie?.value) redirect("/login")

    const user = JSON.parse(userCookie.value) as { position: Array<{ _id: string; level: string }> }
    const activePositionId = await getActivePositionId()
    const activePosition = activePositionId ? user.position.find(p => p._id === activePositionId) : user.position[0]

    if (!activePosition) redirect("/dashboard")

    // 3. دسترسی: فقط Ghost, Orghead, Unithead
    const allowedRoles = ["Ghost", "Orghead", "Unithead"]
    if (!allowedRoles.includes(activePosition.level)) redirect("/dashboard")

    const responseUser = await getUsers({
        get: {
            _id: 1,
            email: 1,
            first_name: 1,
            last_name: 1,
            birth_date: 1,
            gender: 1,
            phone: 1,
            personnel_code: 1,
            is_active: 1,
        }, set: { limit: 10, page: 1, }
    });
    const responseOrg = await getOrgans({ get: { _id: 1, name: 1 }, set: { page: 1, limit: 10, positionId: activePosition._id } })
    const responseUnit = await getUnits({ get: { _id: 1, name: 1 }, set: { page: 1, limit: 10, positionId: activePosition._id } })
    const responsePositions = await getPositions({ get: { _id: 1, name: 1 }, set: { page: 1, limit: 10, filterPositions: "all" } })

    return <UsersPage positions={responsePositions.body} units={responseUnit.body} organs={responseOrg.body} userPosition={activePosition} users={responseUser} />
}

export default Page;
