import { getUsers } from "@/app/actions/user/getUsers"
import UsersPage from "@/components/pages/user/UserPage";

const Page = async () => {
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
    })

    return <UsersPage users={responseUser} />
}

export default Page;
