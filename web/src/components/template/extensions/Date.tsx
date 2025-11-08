import { Editor } from '@tiptap/react'
import { Calendar } from 'lucide-react'

interface DateInserterProps {
    editor: Editor
}

export const DateInserter = ({ editor }: DateInserterProps) => {
    const insertDate = () => {
        const persianDate = new Date().toLocaleDateString('fa-IR')
        editor.chain().focus().insertContent(`<p dir="rtl" style="text-align: right; color: #e2e8f0;">تاریخ: ${persianDate}</p>`).run()
    }

    return (
        <div className="flex items-center gap-1 p-2 bg-slate-600 rounded-lg">
            <button
                onClick={insertDate}
                className="flex items-center gap-2 px-3 py-2 rounded text-slate-300 hover:bg-slate-500 transition-colors text-sm"
                title="درج تاریخ امروز"
            >
                <Calendar size={16} />
                تاریخ
            </button>
        </div>
    )
}