import { getLetter } from "@/app/actions/letter/get";
import { getActivePositionId } from "@/app/actions/position/getActivePosition";
import { LetterDetailsPage } from "@/components/pages/letter/DetailLetterPage";
import { redirect } from "next/navigation";

export default async function LettersPage({ params }: { params: Promise<{ id: string }> }) {
    const activePosition = await getActivePositionId()
    if (!activePosition) redirect("/dashboard")
    const paramsId = (await params).id

    const responseLetter = await getLetter({ get: { _id: 1, author: 1, content: 1, created_at: 1, delivered: 1, is_end: 1, leed: 1, number: 1, recievers: 1, sender: 1, subject: 1, tags: 1, updated_at: 1 }, set: { positionId: activePosition, _id: paramsId } })

    return <LetterDetailsPage initialLetter={responseLetter.body} />
}
