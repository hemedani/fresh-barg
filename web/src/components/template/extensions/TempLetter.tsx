import { Editor } from '@tiptap/react'
import { FileText, Briefcase, User } from 'lucide-react'
import { format } from 'date-fns-jalali'
import { faIR } from 'date-fns-jalali/locale'

interface TemplateLoaderProps {
  editor: Editor
}

export const TemplateLoader = ({ editor }: TemplateLoaderProps) => {
  const loadOfficialTemplate = () => {
    const content = ``
    editor.commands.setContent(content)
  }

  const loadPersonalTemplate = () => {
    const content = ``
    editor.commands.setContent(content)
  }

  return (
    <div className="flex items-center gap-1 p-2 bg-slate-600 rounded-lg">
      <button
        onClick={loadOfficialTemplate}
        className="flex items-center gap-2 px-3 py-2 rounded text-slate-300 hover:bg-slate-500 transition-colors text-sm"
        title="قالب نامه رسمی"
      >
        <Briefcase size={16} />
        نامه رسمی
      </button>

      <button
        onClick={loadPersonalTemplate}
        className="flex items-center gap-2 px-3 py-2 rounded text-slate-300 hover:bg-slate-500 transition-colors text-sm"
        title="قالب نامه شخصی"
      >
        <User size={16} />
        نامه شخصی
      </button>
    </div>
  )
}