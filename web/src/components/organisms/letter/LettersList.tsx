"use client"

import { Eye, Download, Share2 } from 'lucide-react'

const mockLetters = [
    {
        id: 1,
        title: 'نامه درخواست همکاری',
        type: 'sent',
        sender: 'محمد رضایی',
        receiver: 'شرکت فناوری',
        date: '1402/10/15',
        priority: 'high',
        status: 'pending'
    },
    {
        id: 2,
        title: 'پاسخ درخواست استخدام',
        type: 'received',
        sender: 'شرکت توسعه',
        receiver: 'احمد محمدی',
        date: '1402/10/14',
        priority: 'medium',
        status: 'read'
    }
]

export function LettersList() {
    return (
        <div className="bg-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">لیست نامه‌ها</h3>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-slate-700">
                            <th className="text-right py-3 px-4 text-slate-300 font-medium">عنوان نامه</th>
                            <th className="text-right py-3 px-4 text-slate-300 font-medium">فرستنده</th>
                            <th className="text-right py-3 px-4 text-slate-300 font-medium">گیرنده</th>
                            <th className="text-right py-3 px-4 text-slate-300 font-medium">تاریخ</th>
                            <th className="text-right py-3 px-4 text-slate-300 font-medium">اولویت</th>
                            <th className="text-right py-3 px-4 text-slate-300 font-medium">عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockLetters.map(letter => (
                            <tr key={letter.id} className="border-b border-slate-700 hover:bg-slate-750">
                                <td className="py-3 px-4 text-white">{letter.title}</td>
                                <td className="py-3 px-4 text-slate-300">{letter.sender}</td>
                                <td className="py-3 px-4 text-slate-300">{letter.receiver}</td>
                                <td className="py-3 px-4 text-slate-300">{letter.date}</td>
                                <td className="py-3 px-4">
                                    <span className={`px-2 py-1 rounded-full text-xs ${letter.priority === 'high'
                                        ? 'bg-red-500 text-white'
                                        : 'bg-yellow-500 text-black'
                                        }`}>
                                        {letter.priority === 'high' ? 'فوری' : 'عادی'}
                                    </span>
                                </td>
                                <td className="py-3 px-4">
                                    <div className="flex items-center gap-2">
                                        <button className="p-1 hover:bg-slate-600 rounded transition-colors">
                                            <Eye size={16} className="text-blue-400" />
                                        </button>
                                        <button className="p-1 hover:bg-slate-600 rounded transition-colors">
                                            <Download size={16} className="text-green-400" />
                                        </button>
                                        <button className="p-1 hover:bg-slate-600 rounded transition-colors">
                                            <Share2 size={16} className="text-purple-400" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}