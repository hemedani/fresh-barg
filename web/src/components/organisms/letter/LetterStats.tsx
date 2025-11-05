"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function LetterStats() {
    const pathname = usePathname()

    const stats = [
        {
            title: 'ارسالی‌ها',
            count: 1247,
            path: '/dashboard/letter/send',
            color: 'from-blue-500 to-cyan-500',
            active: pathname === '/dashboard/letter/send'
        },
        {
            title: 'دریافتی‌ها',
            count: 856,
            path: '/dashboard/letter/received',
            color: 'from-green-500 to-emerald-500',
            active: pathname === '/dashboard/letter/received'
        },
        {
            title: 'ارجاعی‌ها',
            count: 423,
            path: '/dashboard/letter/referred',
            color: 'from-purple-500 to-pink-500',
            active: pathname === '/dashboard/letter/referred'
        },
        {
            title: 'قالب ها',
            count: 26,
            path: '/dashboard/letter/template-letter',
            color: 'from-purple-500 to-pink-500',
            active: pathname === '/dashboard/letter/template-letter'
        }
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <Link
                    key={index}
                    href={stat.path}
                    className={`block p-6 rounded-2xl bg-linear-to-r ${stat.color} 
            transition-all duration-300 hover:scale-105 hover:shadow-2xl
            ${stat.active ? 'ring-2 ring-white ring-opacity-50' : ''}`}
                >
                    <div className="text-white">
                        <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
                        <p className="text-3xl font-bold">{stat.count.toLocaleString()}</p>
                        <div className="mt-2 text-sm opacity-90">
                            مشاهده همه →
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}