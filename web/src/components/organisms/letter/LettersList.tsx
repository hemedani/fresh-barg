'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Plus, Search } from 'lucide-react';
import Link from 'next/link';
import { Letter, LetterCard } from '../LetterCard';

interface LettersListProps {
    initialLetters: Letter[];
    totalPages: number;
    currentPage: number;
}



export const LettersList = ({ initialLetters, totalPages, currentPage }: LettersListProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchTerm, setSearchTerm] = useState<any>();

    return (
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">لیست نامه‌ها</h2>

                <div className="flex items-center gap-4">
                    {/* جستجو */}
                    <div className="relative">
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="جستجو در نامه‌ها..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 pr-12 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 w-80"
                        />
                    </div>

                    <Link
                        href="/dashboard/letter/create-letter"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
                    >
                        <Plus size={20} />
                        ایجاد نامه جدید
                    </Link>
                </div>
            </div>

            <div className="space-y-4">
                {initialLetters?.map(letter => (
                    <LetterCard key={letter._id} letter={letter} />
                ))}

                {initialLetters?.length === 0 && (
                    <div className="text-center py-8 text-slate-400">
                        نامه‌ای یافت نشد
                    </div>
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-6 pt-6 border-t border-slate-700">
                    <button
                        onClick={() => { }}
                        disabled={currentPage === 1}
                        className="px-3 py-2 rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors disabled:opacity-50"
                    >
                        قبلی
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            onClick={() => { }}
                            className={`px-3 py-2 rounded-lg transition-colors ${page === currentPage
                                ? 'bg-blue-600 text-white'
                                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => { }}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors disabled:opacity-50"
                    >
                        بعدی
                    </button>
                </div>
            )}
        </div>
    );
};