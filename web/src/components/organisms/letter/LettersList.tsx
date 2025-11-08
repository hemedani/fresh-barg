'use client'

import { useState } from 'react'
import { Eye, Edit, Trash2, Mail, Clock, User, Tag, Plus } from 'lucide-react'
import Link from 'next/link'

const LetterCard = ({ letter }: any) => {
    const [showActions, setShowActions] = useState(false)

    const getStatusColor = (status: string) => {
        const colors = {
            draft: 'bg-yellow-500 text-yellow-100',
            sent: 'bg-green-500 text-green-100',
            referenced: 'bg-blue-500 text-blue-100',
            archived: 'bg-slate-500 text-slate-100'
        }
        return colors[status as keyof typeof colors] || 'bg-slate-500 text-slate-100'
    }

    const getTypeIcon = (type: string) => {
        const icons = {
            official: '📄',
            personal: '✉️',
            urgent: '🚨',
            confidential: '🔒'
        }
        return icons[type as keyof typeof icons] || '📄'
    }

    return (
        <div
            className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
            onMouseEnter={() => setShowActions(true)}
            onMouseLeave={() => setShowActions(false)}
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{getTypeIcon(letter.type)}</span>
                        <div>
                            <h3 className="text-white font-semibold text-lg">{letter.subject}</h3>
                            <p className="text-slate-400 text-sm">شماره: {letter.number}</p>
                        </div>
                    </div>

                    <p className="text-slate-300 line-clamp-2 mb-3">{letter.summary}</p>
                </div>

                <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(letter.status)}`}>
                        {letter.status === 'draft' && 'پیش‌نویس'}
                        {letter.status === 'sent' && 'ارسال شده'}
                        {letter.status === 'referenced' && 'ارجاع داده شده'}
                        {letter.status === 'archived' && 'آرشیو شده'}
                    </span>

                    {showActions && (
                        <div className="flex gap-1">
                            <button className="p-2 text-blue-400 hover:bg-blue-500/20 rounded-lg transition-colors">
                                <Eye size={16} />
                            </button>
                            <button className="p-2 text-green-400 hover:bg-green-500/20 rounded-lg transition-colors">
                                <Edit size={16} />
                            </button>
                            <button className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors">
                                <Trash2 size={16} />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex items-center justify-between text-slate-400 text-sm">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{letter.sender}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Mail size={14} />
                        <span>{letter.receivers.length} گیرنده</span>
                    </div>
                    {letter.tags.length > 0 && (
                        <div className="flex items-center gap-1">
                            <Tag size={14} />
                            <span>{letter.tags.join('، ')}</span>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{letter.date}</span>
                </div>
            </div>
        </div>
    )
}

export const LettersList = () => {
    const [letters] = useState([
        {
            id: 1,
            number: '۱۴۰۳/۰۱/۲۵',
            subject: 'درخواست تجهیزات سخت‌افزاری',
            summary: 'با سلام، احتراماً به استحضار می‌رساند جهت انجام امور جاری واحد، نیازمند تجهیزات سخت‌افزاری جدید می‌باشیم...',
            status: 'sent',
            type: 'official',
            sender: 'واحد فناوری اطلاعات',
            receivers: ['مدیریت منابع انسانی'],
            tags: ['فوری', 'اداری'],
            date: '۲ ساعت پیش'
        },
        {
            id: 2,
            number: '۱۴۰۳/۰۱/۲۴',
            subject: 'گزارش عملکرد ماهانه',
            summary: 'گزارش کامل عملکرد واحد در ماه گذشته به پیوست ارسال می‌گردد. خواهشمند است جهت بررسی و اعلام نظر...',
            status: 'referenced',
            type: 'confidential',
            sender: 'واحد بازاریابی',
            receivers: ['مدیریت', 'واحد مالی'],
            tags: ['محرمانه'],
            date: '۱ روز پیش'
        },
        {
            id: 3,
            number: '۱۴۰۳/۰۱/۲۳',
            subject: 'نامه تشکر از همکاری',
            summary: 'ضمن تشکر از همکاری ارزشمند شما در پروژه اخیر، امیدواریم این همکاری در آینده نیز تداوم داشته باشد...',
            status: 'draft',
            type: 'personal',
            sender: 'مدیریت',
            receivers: ['تیم توسعه'],
            tags: ['تشکر'],
            date: '۲ روز پیش'
        }
    ])

    return (
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">لیست نامه‌ها</h2>
                <Link
                    href="/dashboard/letter/create-letter"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300 
            hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
                >
                    <Plus size={20} />
                    ایجاد نامه جدید
                </Link>
            </div>

            <div className="space-y-4">
                {letters.map(letter => (
                    <LetterCard key={letter.id} letter={letter} />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-6 pt-6 border-t border-slate-700">
                <button className="px-3 py-2 rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors">
                    قبلی
                </button>
                <button className="px-3 py-2 rounded-lg bg-blue-600 text-white">1</button>
                <button className="px-3 py-2 rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors">
                    2
                </button>
                <button className="px-3 py-2 rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors">
                    3
                </button>
                <button className="px-3 py-2 rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors">
                    بعدی
                </button>
            </div>
        </div>
    )
}