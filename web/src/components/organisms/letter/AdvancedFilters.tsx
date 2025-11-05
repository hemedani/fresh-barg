"use client"

import { useState } from 'react'
import { Filter, Search, X } from 'lucide-react'

export function AdvancedFilters() {
    const [isOpen, setIsOpen] = useState(false)
    const [filters, setFilters] = useState({
        type: '',
        dateFrom: '',
        dateTo: '',
        users: '',
        organization: '',
        unit: ''
    })

    const filterOptions = {
        types: [
            { value: 'sent', label: 'ارسالی' },
            { value: 'received', label: 'دریافتی' },
            { value: 'referred', label: 'ارجاعی' }
        ],
        users: [
            { value: 'user1', label: 'کاربر ۱' },
            { value: 'user2', label: 'کاربر ۲' }
        ],
        organizations: [
            { value: 'org1', label: 'سازمان ۱' },
            { value: 'org2', label: 'سازمان ۲' }
        ],
        units: [
            { value: 'unit1', label: 'واحد ۱' },
            { value: 'unit2', label: 'واحد ۲' }
        ]
    }

    const handleFilterChange = (key: string, value: string) => {
        setFilters(prev => ({ ...prev, [key]: value }))
    }

    const clearFilters = () => {
        setFilters({
            type: '',
            dateFrom: '',
            dateTo: '',
            users: '',
            organization: '',
            unit: ''
        })
    }

    return (
        <div className="bg-slate-800 rounded-2xl p-6">
            {/* هدر فیلتر */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <Filter className="text-blue-400" size={24} />
                    <h3 className="text-lg font-semibold text-white">فیلتر پیشرفته</h3>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 
                     text-white rounded-xl transition-colors"
                    >
                        <Search size={18} />
                        جستجو
                    </button>
                    <button
                        onClick={clearFilters}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 
                     text-white rounded-xl transition-colors"
                    >
                        <X size={18} />
                        پاک کردن
                    </button>
                </div>
            </div>

            {/* فرم فیلتر */}
            {isOpen && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-slate-700">
                    {/* نوع نامه */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            نوع نامه
                        </label>
                        <select
                            value={filters.type}
                            onChange={(e) => handleFilterChange('type', e.target.value)}
                            className="w-full bg-slate-700 border border-slate-600 rounded-xl px-3 py-2 
                       text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="">همه</option>
                            {filterOptions.types.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* تاریخ از */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            تاریخ از
                        </label>
                        <input
                            type="date"
                            value={filters.dateFrom}
                            onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
                            className="w-full bg-slate-700 border border-slate-600 rounded-xl px-3 py-2 
                       text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* تاریخ تا */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            تاریخ تا
                        </label>
                        <input
                            type="date"
                            value={filters.dateTo}
                            onChange={(e) => handleFilterChange('dateTo', e.target.value)}
                            className="w-full bg-slate-700 border border-slate-600 rounded-xl px-3 py-2 
                       text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* کاربران */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            کاربران
                        </label>
                        <select
                            value={filters.users}
                            onChange={(e) => handleFilterChange('users', e.target.value)}
                            className="w-full bg-slate-700 border border-slate-600 rounded-xl px-3 py-2 
                       text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="">همه کاربران</option>
                            {filterOptions.users.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* سازمان */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            سازمان
                        </label>
                        <select
                            value={filters.organization}
                            onChange={(e) => handleFilterChange('organization', e.target.value)}
                            className="w-full bg-slate-700 border border-slate-600 rounded-xl px-3 py-2 
                       text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="">همه سازمان‌ها</option>
                            {filterOptions.organizations.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* واحد */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            واحد
                        </label>
                        <select
                            value={filters.unit}
                            onChange={(e) => handleFilterChange('unit', e.target.value)}
                            className="w-full bg-slate-700 border border-slate-600 rounded-xl px-3 py-2 
                       text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="">همه واحدها</option>
                            {filterOptions.units.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            )}
        </div>
    )
}