'use client';

import { Clock, Edit, Eye, Mail, Tag, Trash2, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export interface Letter {
    _id: string;
    number: string;
    subject: string;
    leed: string;
    status: 'draft' | 'sent' | 'referenced' | 'archived';
    sender: string;
    receivers: string[];
    tags: string[];
    created_at: string;
    delivered: boolean;
    is_end: boolean;
    author: string;
}

const statusConfig = {
    draft: { text: 'پیش‌نویس', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
    sent: { text: 'ارسال شده', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
    referenced: { text: 'ارجاع داده شده', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    archived: { text: 'آرشیو شده', color: 'bg-slate-500/20 text-slate-400 border-slate-500/30' },
};

export const LetterCard = ({ letter }: { letter: Letter }) => {
    const router = useRouter();
    const [openActions, setOpenActions] = useState(false);

    const formatDate = (dateString: string) => {
        return new Intl.DateTimeFormat('fa-IR', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        }).format(new Date(dateString));
    };

    const { text: statusText, color: statusColor } = statusConfig[letter.status] || statusConfig.draft;

    return (
        <div className="bg-slate-800/60 hover:bg-slate-800 rounded-xl p-5 border border-slate-700/70 hover:border-slate-600 transition-all duration-200 group">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                {/* محتوای اصلی */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-3 mb-3">
                        <div className="mt-0.5 shrink-0 w-9 h-9 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <Mail size={16} className="text-blue-400" />
                        </div>
                        <div className="min-w-0">
                            <h3 className="text-white font-semibold text-base leading-tight truncate">{letter.subject}</h3>
                            <p className="text-slate-400 text-sm mt-1">شماره: {letter.number}</p>
                        </div>
                    </div>

                    <p className="text-slate-300 text-sm line-clamp-2 mt-1">{letter.leed}</p>

                    {/* متادیتای پایین */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-slate-400 text-xs">
                        <div className="flex items-center gap-1">
                            <User size={12} className="shrink-0" />
                            <span className="truncate">{letter.sender}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Mail size={12} className="shrink-0" />
                            <span>{letter.receivers?.length || 0} گیرنده</span>
                        </div>
                        {letter.tags?.length > 0 && (
                            <div className="flex items-center gap-1">
                                <Tag size={12} className="shrink-0" />
                                <span>{letter.tags.join('، ')}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* ستون راست (وضعیت + اقدامات) */}
                <div className="flex flex-col items-end gap-2">
                    <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium border ${statusColor}`}
                    >
                        {statusText}
                    </span>

                    {/* دکمه‌های اقدام */}
                    <div className="flex gap-1">
                        <button
                            onClick={() => router.push(`/dashboard/letter/${letter._id}`)}
                            className="p-2 text-blue-400 hover:bg-blue-500/20 rounded-lg transition-colors"
                            aria-label="مشاهده جزئیات"
                        >
                            <Eye size={16} />
                        </button>
                        <button
                            className="p-2 text-green-400 hover:bg-green-500/20 rounded-lg transition-colors"
                            aria-label="ویرایش نامه"
                        >
                            <Edit size={16} />
                        </button>
                        <button
                            className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                            aria-label="حذف نامه"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* تاریخ در پایین (ریسپانسیو) */}
            <div className="mt-4 pt-3 border-t border-slate-700/50 flex justify-end">
                <div className="flex items-center gap-1 text-slate-500 text-xs">
                    <Clock size={14} />
                    <span>{formatDate(letter.created_at)}</span>
                </div>
            </div>
        </div>
    );
};