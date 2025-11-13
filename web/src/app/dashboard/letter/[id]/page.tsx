import { getLetter } from "@/app/actions/letter/get";
import { LetterDetailsPage } from "@/components/pages/letter/DetailLetterPage";
import { cookies } from "next/headers";

export default async function LettersPage({ params }: { params: Promise<{ id: string }> }) {
    const userCookie = (await cookies()).get("user");
    const user = userCookie ? JSON.parse(userCookie.value) : null;

    const userPosition = user.position[1]
    const paramsId = (await params).id
    console.log({ userPosition });

    const responseLetter = await getLetter({ get: { _id: 1, author: 1, content: 1, created_at: 1, delivered: 1, is_end: 1, leed: 1, number: 1, recievers: 1, sender: 1, subject: 1, tags: 1, updated_at: 1 }, set: { positionId: userPosition._id, _id: paramsId } })
    console.log({ responseLetter });

    return (
        <LetterDetailsPage />
    )
}
