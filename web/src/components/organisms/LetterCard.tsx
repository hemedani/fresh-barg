"use client"

import { Clock, Edit, Eye, Mail, Tag, Trash2, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

export const LetterCard = ({ letter }: { letter: Letter }) => {
    const router = useRouter()
    const [showActions, setShowActions] = useState(false);

    const getStatusColor = (status: string) => {
        const colors = {
            draft: 'bg-yellow-500 text-yellow-100',
            sent: 'bg-green-500 text-green-100',
            referenced: 'bg-blue-500 text-blue-100',
            archived: 'bg-slate-500 text-slate-100'
        };
        return colors[status as keyof typeof colors] || 'bg-slate-500 text-slate-100';
    };

    const getStatusText = (status: string) => {
        const texts = {
            draft: 'پیش‌نویس',
            sent: 'ارسال شده',
            referenced: 'ارجاع داده شده',
            archived: 'آرشیو شده'
        };
        return texts[status as keyof typeof texts] || status;
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('fa-IR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    };

    return (
        <div
            className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
            onMouseEnter={() => setShowActions(true)}
            onMouseLeave={() => setShowActions(false)}
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                            <Mail size={20} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-lg">{letter.subject}</h3>
                            <p className="text-slate-400 text-sm">شماره: {letter.number}</p>
                        </div>
                    </div>

                    <p className="text-slate-300 line-clamp-2 mb-3">{letter.leed}</p>
                </div>

                <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(letter.status)}`}>
                        {getStatusText(letter.status)}
                    </span>

                    {showActions && (
                        <div className="flex gap-1">
                            <button onClick={() => router.push(`/dashboard/letter/${letter._id}`)} className="p-2 text-blue-400 hover:bg-blue-500/20 rounded-lg transition-colors">
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
                        <span>{letter.receivers?.length} گیرنده</span>
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
                    <span>{formatDate(letter.created_at)}</span>
                </div>
            </div>
        </div>
    );
};