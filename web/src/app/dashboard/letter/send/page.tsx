import { LetterStats, AdvancedFilters, LettersList } from '@/components/organisms/letter'

export default function SentLettersPage() {
    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">نامه‌های ارسالی</h1>
            </div>

            <LetterStats />
            <AdvancedFilters />
            <LettersList />
        </div>
    )
}