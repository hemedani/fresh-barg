import { Plus, Edit, Trash2 } from 'lucide-react'

const templates = [
    {
        id: 1,
        name: 'قالب درخواست همکاری',
        category: 'اداری',
        lastModified: '1402/10/10'
    },
    {
        id: 2,
        name: 'قالب گزارش ماهانه',
        category: 'گزارشی',
        lastModified: '1402/10/05'
    }
]

export default function TemplatesPage() {
    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">مدیریت قالب‌های نامه</h1>
                <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 
                         text-white rounded-xl transition-colors">
                    <Plus size={18} />
                    قالب جدید
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map(template => (
                    <div key={template.id} className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-750 
                                         transition-colors border border-slate-700">
                        <h3 className="text-lg font-semibold text-white mb-2">{template.name}</h3>
                        <div className="flex items-center justify-between text-slate-400 text-sm mb-4">
                            <span>{template.category}</span>
                            <span>آخرین تغییر: {template.lastModified}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 
                               bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                                <Edit size={16} />
                                ویرایش
                            </button>
                            <button className="flex items-center justify-center gap-2 px-3 py-2 
                               bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}