import { Editor } from '@tiptap/react'
import { FileText, Briefcase, User } from 'lucide-react'
import { format } from 'date-fns-jalali'
import { faIR } from 'date-fns-jalali/locale'

interface TemplateLoaderProps {
    editor: Editor
}

export const TemplateLoader = ({ editor }: TemplateLoaderProps) => {
    const loadOfficialTemplate = () => {
        const content = `
      <div dir="rtl" style="text-align: center; color: #e2e8f0; margin-bottom: 2rem;">
        <h1>عنوان نامه رسمی</h1>
      </div>
      <div dir="rtl" style="text-align: left; color: #94a3b8; margin-bottom: 2rem;">
        <p>شماره: _________</p>
        <p>تاریخ: ${format(new Date(), 'yyyy/MM/dd', { locale: faIR })}</p>
        <p>پیوست: دارد / ندارد</p>
      </div>
      <div dir="rtl" style="color: #94a3b8; margin-bottom: 2rem;">
        <p>از: [نام واحد/شخص فرستنده]</p>
        <p>به: [نام واحد/شخص گیرنده]</p>
        <p>موضوع: [موضوع نامه]</p>
      </div>
      <hr style="margin: 2rem 0; border-top: 1px solid #475569;" />
      <div dir="rtl" style="color: #e2e8f0;">
        <p style="line-height: 2;">با سلام و احترام،</p>
        <p style="line-height: 2; margin-top: 1rem;">احتراماً به استحضار می‌رساند که...</p>
        <p style="line-height: 2; margin-top: 2rem;">با سپاس و احترام</p>
        <p style="margin-top: 3rem;">[نام و نام خانوادگی]</p>
        <p>[سمت سازمانی]</p>
      </div>
    `
        editor.commands.setContent(content)
    }

    const loadPersonalTemplate = () => {
        const content = `
      <div dir="rtl" style="color: #e2e8f0;">
        <p style="line-height: 2; text-align: right;">سلام [نام گیرنده] عزیز،</p>
        <p style="line-height: 2; margin-top: 1rem; text-align: right;">امیدوارم حالتون خوب باشه. می‌خواستم در مورد...</p>
        <p style="line-height: 2; margin-top: 2rem; text-align: right;">منتظر پاسخ شما هستم.</p>
        <p style="margin-top: 3rem; text-align: right;">[نام شما]</p>
      </div>
    `
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