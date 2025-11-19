'use client';

import { FileText, Send, Users, Mail } from 'lucide-react';

interface StatCardProps {
    title: string;
    value: string;
    change?: number;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    color: string; // e.g., 'bg-blue-500'
}

const StatCard = ({ title, value, change, icon: Icon, color }: StatCardProps) => {
    const isPositive = change && change > 0;
    const iconBgColor = color;
    const iconColor = color.replace('bg-', 'text-'); // e.g., bg-blue-500 → text-blue-500

    return (
        <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-slate-400 text-sm font-medium">{title}</p>
                    <p className="text-2xl font-bold text-white mt-1">{value}</p>
                    {change !== undefined && (
                        <div className="flex items-center mt-2">
                            {isPositive ? (
                                <span className="text-green-400 text-xs font-medium flex items-center">
                                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                                    </svg>
                                    {change}% افزایش
                                </span>
                            ) : (
                                <span className="text-red-400 text-xs font-medium flex items-center">
                                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                    {Math.abs(change)}% کاهش
                                </span>
                            )}
                        </div>
                    )}
                </div>
                <div className={`${iconBgColor} p-3 rounded-lg`}>
                    <Icon size={20} className={`${iconColor} opacity-90`} />
                </div>
            </div>
        </div>
    );
};

export const LetterStats = () => {
    const stats = [
        {
            title: 'کل نامه‌ها',
            value: '۱,۲۴۸',
            change: 12,
            icon: FileText,
            color: 'bg-blue-500/20',
        },
        {
            title: 'نامه‌های ارسالی',
            value: '۸۹۲',
            change: 8,
            icon: Send,
            color: 'bg-green-500/20',
        },
        {
            title: 'ارجاع داده شده',
            value: '۳۲۴',
            change: -3,
            icon: Users,
            color: 'bg-purple-500/20',
        },
        {
            title: 'قالب‌های ذخیره شده',
            value: '۱۵',
            change: 5,
            icon: Mail,
            color: 'bg-orange-500/20',
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
        </div>
    );
};