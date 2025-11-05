import { AdvancedFilters, LettersList, LetterStats } from "@/components/organisms/letter";
import { Editor } from "@/components/template/editor/Editor";

export default function LettersPage() {
  return (
    <div className="p-6 space-y-6">
      {/* <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">مدیریت نامه‌ها</h1>
      </div>
      ]
      <LetterStats />

      <AdvancedFilters />

      <LettersList /> */}
      <Editor />
    </div>
  )
}