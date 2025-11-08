import { FileText, Send, Users, Mail, Plus } from 'lucide-react'

const StatCard = ({ title, value, change, icon: Icon, color }: any) => (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
        <div className="flex items-center justify-between">
            <div>
                <p className="text-slate-400 text-sm mb-1">{title}</p>
                <p className="text-2xl font-bold text-white">{value}</p>
                {change && (
                    <p className={`text-xs mt-1 ${change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {change > 0 ? '↑' : '↓'} {Math.abs(change)}% از ماه گذشته
                    </p>
                )}
            </div>
            <div className={`p-3 rounded-lg ${color}`}>
                <Icon size={24} className="text-white" />
            </div>
        </div>
    </div>
)

export const LetterStats = () => {
    const stats = [
        {
            title: 'کل نامه‌ها',
            value: '۱,۲۴۸',
            change: +12,
            icon: FileText,
            color: 'bg-blue-500'
        },
        {
            title: 'نامه‌های ارسالی',
            value: '۸۹۲',
            change: +8,
            icon: Send,
            color: 'bg-green-500'
        },
        {
            title: 'ارجاع داده شده',
            value: '۳۲۴',
            change: -3,
            icon: Users,
            color: 'bg-purple-500'
        },
        {
            title: 'قالب‌های ذخیره شده',
            value: '۱۵',
            change: +5,
            icon: Mail,
            color: 'bg-orange-500'
        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
        </div>
    )
}