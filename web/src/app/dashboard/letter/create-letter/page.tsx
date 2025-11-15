import { getOrgans } from "@/app/actions/organ/gets";
import { getPositions } from "@/app/actions/position/gets";
import { getUnits } from "@/app/actions/unit/gets";
import { getUsers } from "@/app/actions/user/getUsers";
import { LetterForm } from "@/components/organisms/FormLetter";
import { cookies } from "next/headers";

const tagOptions = [
    { value: "فوری", label: "فوری" },
    { value: "اداری", label: "اداری" },
    { value: "محرمانه", label: "محرمانه" },
    { value: "مهم", label: "مهم" },
    { value: "داخلی", label: "داخلی" },
];

export default async function LettersPage() {
    const userCookie = (await cookies()).get("user");
    const user = userCookie ? JSON.parse(userCookie.value) : null;

    const userPosition = user.position[0]
    console.log({ userPosition });

    const [responsePositions, responseUnits, responseOrgans] = await Promise.all([
        getPositions({ get: { _id: 1, name: 1 }, set: { page: 1, limit: 50, filterPositions: "all" } }),
        getUnits({ get: { _id: 1, name: 1 }, set: { page: 1, limit: 50, positionId: userPosition._id } }),
        getOrgans({ get: { _id: 1, name: 1 }, set: { page: 1, limit: 50, positionId: userPosition._id } }),
    ]);

    return (
        <div className="p-6 space-y-6">
            <LetterForm authorId={user._id} userPosition={userPosition} orgs={responseOrgans.body} receivers={responsePositions.body} tagOptions={tagOptions} units={responseUnits.body} />
        </div>
    )
}
