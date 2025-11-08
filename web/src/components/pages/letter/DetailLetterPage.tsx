'use client'

import { useState } from 'react'
import {
    ArrowRight,
    Download,
    Printer,
    Share2,
    Edit,
    Archive,
    Clock,
    User,
    Mail,
    Tag,
    FileText,
    Building,
    Users,
    Reply,
    Copy,
    Check
} from 'lucide-react'
import Link from 'next/link'

export const LetterDetailsPage = () => {
    const [letter] = useState({
        id: 1,
        number: '۱۲۴۷۸',
        subject: 'درخواست تجهیزات سخت‌افزاری برای پرسنل جدید',
        status: 'sent',
        type: 'official',
        priority: 'high',
        sender: 'واحد فناوری اطلاعات',
        senderUnit: 'دپارتمان توسعه',
        receivers: [
            'مدیریت منابع انسانی',
            'واحد مالی',
            'مدیریت فناوری اطلاعات'
        ],
        tags: ['فوری', 'اداری', 'تجهیزات'],
        date: '۲۵ دی ۱۴۰۳',
        time: '۱۴:۳۰',
        summary: 'با توجه به استخدام پرسنل جدید در بخش‌های مختلف شرکت، جهت انجام امور محوله به تجهیزات سخت‌افزاری جدید نیاز می‌باشد.',
        content: `
      <div dir="rtl">
        <h1 style="text-align: center; color: #e2e8f0; margin-bottom: 2rem;">درخواست تجهیزات سخت‌افزاری</h1>
        
        <div style="text-align: left; color: #94a3b8; margin-bottom: 2rem;">
          <p>شماره: ۱۲۴۷۸</p>
          <p>تاریخ: ۲۵ دی ۱۴۰۳</p>
        </div>

        <div style="color: #94a3b8; margin-bottom: 2rem;">
          <p>از: واحد فناوری اطلاعات - دپارتمان توسعه</p>
          <p>به: مدیریت منابع انسانی، واحد مالی، مدیریت فناوری اطلاعات</p>
        </div>

        <hr style="margin: 2rem 0; border-top: 1px solid #475569;" />

        <div style="color: #e2e8f0;">
          <p style="line-height: 2; margin-bottom: 1rem;">با سلام و احترام،</p>
          
          <p style="line-height: 2; margin-bottom: 1rem;">
            احتراماً به استحضار می‌رساند که با توجه به استخدام ۳ نفر پرسنل جدید در بخش‌های مختلف شرکت، 
            جهت انجام امور محوله به تجهیزات سخت‌افزاری زیر نیاز می‌باشد:
          </p>

          <ul style="color: #e2e8f0; line-height: 2; margin-right: 1.5rem; margin-bottom: 1rem;">
            <li>لپ‌تاپ با مشخصات فنی Core i5 نسل ۱۲ به بالا - تعداد: ۳ دستگاه</li>
            <li>مانیتور ۲۴ اینچ - تعداد: ۳ دستگاه</li>
            <li>ماوس و کیبورد وایرلس - تعداد: ۳ ست</li>
            <li>هارد اکسترنال ۱ ترابایت - تعداد: ۲ دستگاه</li>
          </ul>

          <p style="line-height: 2; margin-bottom: 2rem;">
            لذا خواهشمند است دستور فرمایید نسبت به تأمین و تحویل موارد فوق به این واحد اقدام لازم به عمل آید.
          </p>

          <p style="line-height: 2; margin-bottom: 1rem;">با سپاس و احترام</p>
          
          <div style="margin-top: 3rem;">
            <p>علیرضا محمدی</p>
            <p>مدیر فناوری اطلاعات</p>
          </div>
        </div>
      </div>
    `,
        attachments: [
            { name: 'لیست-تجهیزات.pdf', size: '2.4 MB' },
            { name: 'برآورد-هزینه.xlsx', size: '1.1 MB' }
        ],
        history: [
            { action: 'ایجاد شده', by: 'علیرضا محمدی', time: '۲۵ دی ۱۴۰۳ - ۱۴:۳۰' },
            { action: 'ارسال شده', by: 'سیستم', time: '۲۵ دی ۱۴۰۳ - ۱۴:۳۵' },
            { action: 'مشاهده شده', by: 'مدیریت منابع انسانی', time: '۲۵ دی ۱۴۰۳ - ۱۵:۲۰' }
        ]
    })

    const [copied, setCopied] = useState(false)

    const getStatusColor = (status: string) => {
        const colors = {
            draft: 'bg-yellow-500 text-yellow-100',
            sent: 'bg-green-500 text-green-100',
            referenced: 'bg-blue-500 text-blue-100',
            archived: 'bg-slate-500 text-slate-100'
        }
        return colors[status as keyof typeof colors] || 'bg-slate-500 text-slate-100'
    }

    const getPriorityColor = (priority: string) => {
        const colors = {
            low: 'bg-green-500 text-green-100',
            medium: 'bg-yellow-500 text-yellow-100',
            high: 'bg-orange-500 text-orange-100',
            urgent: 'bg-red-500 text-red-100'
        }
        return colors[priority as keyof typeof colors] || 'bg-slate-500 text-slate-100'
    }

    const handleDownload = () => {
        // شبیه‌سازی دانلود
        const element = document.createElement('a')
        const file = new Blob([letter.content], { type: 'text/html' })
        element.href = URL.createObjectURL(file)
        element.download = `نامه-${letter.number}.html`
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
    }

    const handlePrint = () => {
        window.print()
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleReply = () => {
        // هدایت به صفحه ایجاد نامه جدید با پیش‌پر شدن فیلدها
        window.location.href = `/letters/create?replyTo=${letter.id}`
    }

    return (
        <div className="p-6 space-y-6">
            {/* هدر صفحه */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link
                        href="/letters"
                        className="p-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors"
                    >
                        <ArrowRight className="text-slate-300" size={20} />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-white">جزئیات نامه</h1>
                        <p className="text-slate-400 text-sm mt-1">شماره: {letter.number}</p>
                    </div>
                </div>

                {/* دکمه‌های action */}
                <div className="flex gap-3">
                    <button
                        onClick={handleReply}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors"
                    >
                        <Reply size={18} />
                        پاسخ
                    </button>

                    <button
                        onClick={handleCopyLink}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-xl transition-colors"
                    >
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                        {copied ? 'کپی شد!' : 'کپی لینک'}
                    </button>

                    <button
                        onClick={handlePrint}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-xl transition-colors"
                    >
                        <Printer size={18} />
                        چاپ
                    </button>

                    <button
                        onClick={handleDownload}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
                    >
                        <Download size={18} />
                        دانلود
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* سایدبار اطلاعات */}
                <div className="lg:col-span-1 space-y-6">
                    {/* کارت اطلاعات اصلی */}
                    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                        <h3 className="text-lg font-semibold text-white mb-4">اطلاعات نامه</h3>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-slate-400">شماره نامه:</span>
                                <span className="text-white font-mono font-bold">{letter.number}</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-slate-400">وضعیت:</span>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(letter.status)}`}>
                                    {letter.status === 'sent' && 'ارسال شده'}
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-slate-400">اولویت:</span>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(letter.priority)}`}>
                                    {letter.priority === 'high' && 'بالا'}
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-slate-400">تاریخ ارسال:</span>
                                <span className="text-white font-medium">{letter.date}</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-slate-400">زمان ارسال:</span>
                                <span className="text-white font-medium">{letter.time}</span>
                            </div>
                        </div>
                    </div>

                    {/* کارت فرستنده و گیرندگان */}
                    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                        <h3 className="text-lg font-semibold text-white mb-4">فرستنده و گیرندگان</h3>

                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center gap-2 text-slate-400 mb-2">
                                    <User size={16} />
                                    <span className="text-sm">فرستنده</span>
                                </div>
                                <p className="text-white">{letter.sender}</p>
                                <p className="text-slate-400 text-sm">{letter.senderUnit}</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 text-slate-400 mb-2">
                                    <Users size={16} />
                                    <span className="text-sm">گیرندگان ({letter.receivers.length})</span>
                                </div>
                                <div className="space-y-1">
                                    {letter.receivers.map((receiver, index) => (
                                        <p key={index} className="text-white text-sm">• {receiver}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* کارت پیوست‌ها */}
                    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                        <h3 className="text-lg font-semibold text-white mb-4">پیوست‌ها</h3>

                        <div className="space-y-3">
                            {letter.attachments.map((file, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <FileText className="text-blue-400" size={18} />
                                        <div>
                                            <p className="text-white text-sm">{file.name}</p>
                                            <p className="text-slate-400 text-xs">{file.size}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            // شبیه‌سازی دانلود فایل
                                            const element = document.createElement('a')
                                            element.href = '#'
                                            element.download = file.name
                                            element.click()
                                        }}
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        <Download size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* دکمه‌های سریع */}
                    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                        <h3 className="text-lg font-semibold text-white mb-4">عملیات سریع</h3>

                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={handleReply}
                                className="flex flex-col items-center gap-2 p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                            >
                                <Reply className="text-green-400" size={20} />
                                <span className="text-white text-sm">پاسخ</span>
                            </button>

                            <button
                                onClick={handleDownload}
                                className="flex flex-col items-center gap-2 p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                            >
                                <Download className="text-blue-400" size={20} />
                                <span className="text-white text-sm">دانلود</span>
                            </button>

                            <button
                                onClick={handlePrint}
                                className="flex flex-col items-center gap-2 p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                            >
                                <Printer className="text-orange-400" size={20} />
                                <span className="text-white text-sm">چاپ</span>
                            </button>

                            <button
                                onClick={handleCopyLink}
                                className="flex flex-col items-center gap-2 p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                            >
                                <Copy className="text-purple-400" size={20} />
                                <span className="text-white text-sm">کپی لینک</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* محتوای اصلی */}
                <div className="lg:col-span-2 space-y-6">
                    {/* کارت موضوع و خلاصه */}
                    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <h2 className="text-xl font-bold text-white mb-2">{letter.subject}</h2>
                                <p className="text-slate-300 leading-relaxed">{letter.summary}</p>
                            </div>
                        </div>

                        {/* تگ‌ها */}
                        <div className="flex flex-wrap gap-2">
                            {letter.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm border border-slate-600"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* کارت محتوای نامه */}
                    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                        <h3 className="text-lg font-semibold text-white mb-4">محتوای نامه</h3>

                        <div
                            className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-white prose-p:text-slate-300 
                prose-strong:text-white prose-em:text-white prose-li:text-slate-300 prose-blockquote:text-slate-300
                prose-headings:font-bold prose-p:leading-8"
                            dangerouslySetInnerHTML={{ __html: letter.content }}
                        />
                    </div>

                    {/* کارت تاریخچه */}
                    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                        <h3 className="text-lg font-semibold text-white mb-4">تاریخچه نامه</h3>

                        <div className="space-y-4">
                            {letter.history.map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <div className="flex-1">
                                        <p className="text-white">{item.action}</p>
                                        <p className="text-slate-400 text-sm">
                                            توسط {item.by} • {item.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}