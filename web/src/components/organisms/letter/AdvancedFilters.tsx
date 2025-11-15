'use client'

import { useState } from 'react'
import { Search, Filter, X, Calendar } from 'lucide-react'

export const AdvancedFilters = () => {
    const [filters, setFilters] = useState({
        search: '',
        status: '',
        type: '',
        dateFrom: '',
        dateTo: ''
    })

    const [showAdvanced, setShowAdvanced] = useState(false)

    const handleFilterChange = (key: string, value: string) => {
        setFilters(prev => ({ ...prev, [key]: value }))
    }

    const clearFilters = () => {
        setFilters({
            search: '',
            status: '',
            type: '',
            dateFrom: '',
            dateTo: ''
        })
    }

    const hasActiveFilters = Object.values(filters).some(value => value !== '')

    return (
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex flex-col lg:flex-row gap-4">
                {/* جستجو */}
                <div className="flex-1 relative">
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        value={filters.search}
                        onChange={(e) => handleFilterChange('search', e.target.value)}
                        placeholder="جستجو در نامه‌ها (موضوع، شماره، محتوا)..."
                        className="w-full bg-slate-700 border border-slate-600 rounded-xl pl-4 pr-12 py-3 text-white 
              focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                </div>

                {/* دکمه‌ها */}
                <div className="flex gap-3">
                    <button
                        onClick={() => setShowAdvanced(!showAdvanced)}
                        className={`px-4 py-3 rounded-xl border transition-colors flex items-center gap-2 ${showAdvanced
                            ? 'bg-blue-500 border-blue-500 text-white'
                            : 'bg-slate-700 border-slate-600 text-slate-300 hover:bg-slate-600'
                            }`}
                    >
                        <Filter size={18} />
                        فیلتر پیشرفته
                    </button>

                    {hasActiveFilters && (
                        <button
                            onClick={clearFilters}
                            className="px-4 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white transition-colors flex items-center gap-2"
                        >
                            <X size={18} />
                            پاک کردن فیلترها
                        </button>
                    )}
                </div>
            </div>

            {/* فیلترهای پیشرفته */}
            {showAdvanced && (
                <div className="mt-6 pt-6 border-t border-slate-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* وضعیت */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">وضعیت</label>
                            <select
                                value={filters.status}
                                onChange={(e) => handleFilterChange('status', e.target.value)}
                                className="w-full bg-slate-700 border border-slate-600 rounded-xl px-3 py-2 text-white 
                  focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="">همه وضعیت‌ها</option>
                                <option value="draft">پیش‌نویس</option>
                                <option value="sent">ارسال شده</option>
                                <option value="referenced">ارجاع داده شده</option>
                                <option value="archived">آرشیو شده</option>
                            </select>
                        </div>

                        {/* نوع نامه */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">نوع نامه</label>
                            <select
                                value={filters.type}
                                onChange={(e) => handleFilterChange('type', e.target.value)}
                                className="w-full bg-slate-700 border border-slate-600 rounded-xl px-3 py-2 text-white 
                  focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="">همه انواع</option>
                                <option value="official">اداری</option>
                                <option value="personal">شخصی</option>
                                <option value="urgent">فوری</option>
                                <option value="confidential">محرمانه</option>
                            </select>
                        </div>

                        {/* تاریخ از */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">از تاریخ</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="date"
                                    value={filters.dateFrom}
                                    onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
                                    className="w-full bg-slate-700 border border-slate-600 rounded-xl pl-12 pr-3 py-2 text-white 
                    focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* تاریخ تا */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">تا تاریخ</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="date"
                                    value={filters.dateTo}
                                    onChange={(e) => handleFilterChange('dateTo', e.target.value)}
                                    className="w-full bg-slate-700 border border-slate-600 rounded-xl pl-12 pr-3 py-2 text-white 
                    focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}