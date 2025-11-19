'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Mail, Plus } from 'lucide-react';
import { Letter, LetterCard } from '../LetterCard';

interface LettersListProps {
    initialLetters: Letter[];
}

export const LettersList = ({ initialLetters }: LettersListProps) => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h2 className="text-xl font-bold text-white">لیست نامه‌ها</h2>

                {/* فیلترها */}
                <div className="flex flex-wrap gap-2">
                    <Link
                        href="/dashboard/letter/received"
                        className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive('/dashboard/letter/received')
                            ? 'bg-indigo-600 text-white shadow-sm'
                            : 'bg-slate-700/70 text-slate-300 hover:bg-slate-600'
                            }`}
                        aria-label="مشاهده نامه‌های دریافتی"
                    >
                        دریافتی‌ها
                    </Link>
                    <Link
                        href="/dashboard/letter/send"
                        className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive('/dashboard/letter/send')
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'bg-slate-700/70 text-slate-300 hover:bg-slate-600'
                            }`}
                        aria-label="مشاهده نامه‌های ارسالی"
                    >
                        ارسالی‌ها
                    </Link>
                </div>

                {/* دکمه ایجاد */}
                <Link
                    href="/dashboard/letter/create-letter"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 font-medium"
                    aria-label="ایجاد نامه جدید"
                >
                    <Plus size={18} />
                    ایجاد نامه
                </Link>
            </div>

            <div className="space-y-5">
                {initialLetters?.length > 0 ? (
                    initialLetters?.map((letter) => <LetterCard key={letter?._id} letter={letter} />)
                ) : (
                    <div className="text-center py-12 text-slate-400">
                        <Mail className="mx-auto mb-3 text-slate-600" size={48} />
                        نامه‌ای یافت نشد
                    </div>
                )}
            </div>
        </div>
    );
};