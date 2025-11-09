import { getOrgans } from "@/app/actions/organ/gets";
import { getPositions } from "@/app/actions/position/gets";
import { getUnits } from "@/app/actions/unit/gets";
import { getUsers } from "@/app/actions/user/getUsers"
import UsersPage from "@/components/pages/user/UserPage";
import { cookies } from "next/headers";

const Page = async () => {
    const userCookie = (await cookies()).get("user");
    const user = userCookie ? JSON.parse(userCookie.value) : null;
    const userPosition = user?.position[0]

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
    const responseOrg = await getOrgans({ get: { _id: 1, name: 1 }, set: { page: 1, limit: 10, positionId: userPosition._id } })
    const responseUnit = await getUnits({ get: { _id: 1, name: 1 }, set: { page: 1, limit: 10, positionId: userPosition._id } })
    const responsePositions = await getPositions({ get: { _id: 1, name: 1 }, set: { page: 1, limit: 10, filterPositions: "all" } })

    return <UsersPage positions={responsePositions.body} units={responseUnit.body} organs={responseOrg.body} userPosition={userPosition} users={responseUser} />
}

export default Page;
