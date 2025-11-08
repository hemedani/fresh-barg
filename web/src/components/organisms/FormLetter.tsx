"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Editor } from "../template/editor/Editor";

export function LetterForm() {
    const [formData, setFormData] = useState({
        number: "",
        subject: "",
        authorId: "",
        recieversId: "",
        tags: "",
        leed: "",
        orgId: "",
        unitId: "",
        content: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (key: string, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // شبیه‌سازی ارسال داده
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log("داده‌های فرم:", formData);
            alert("نامه با موفقیت ثبت شد!");
        } catch (error) {
            console.error("خطا در ثبت نامه:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setFormData({
            number: "",
            subject: "",
            authorId: "",
            recieversId: "",
            tags: "",
            leed: "",
            orgId: "",
            unitId: "",
            content: "",
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-slate-800 rounded-2xl p-6 border border-slate-700 space-y-6"
        >
            {/* هدر */}
            <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <div>
                    <h2 className="text-2xl font-bold text-white">ثبت نامه جدید</h2>
                    <p className="text-slate-400 text-sm mt-1">فرم ثبت و مدیریت نامه‌های اداری</p>
                </div>
            </div>

            {/* اطلاعات اصلی */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* شماره نامه */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        شماره نامه *
                    </label>
                    <input
                        type="text"
                        value={formData.number}
                        onChange={(e) => handleChange("number", e.target.value)}
                        className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white 
                            focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="مثال: ۱۴۰۳/۱۲/۳۴۵"
                        required
                    />
                </div>

                {/* موضوع */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        موضوع نامه *
                    </label>
                    <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white 
                            focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="موضوع نامه را وارد کنید"
                        required
                    />
                </div>

                {/* گیرندگان */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        گیرندگان *
                    </label>
                    <select
                        value={formData.recieversId}
                        onChange={(e) => handleChange("recieversId", e.target.value)}
                        className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white 
                            focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        required
                    >
                        <option value="">انتخاب گیرنده</option>
                        <option value="user1">مدیریت منابع انسانی</option>
                        <option value="user2">واحد فناوری اطلاعات</option>
                        <option value="user3">مدیریت مالی</option>
                        <option value="user4">واحد بازاریابی</option>
                    </select>
                </div>

                {/* سازمان */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        سازمان مبدا
                    </label>
                    <select
                        value={formData.orgId}
                        onChange={(e) => handleChange("orgId", e.target.value)}
                        className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white 
                            focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                        <option value="">انتخاب سازمان</option>
                        <option value="org1">سازمان مرکزی</option>
                        <option value="org2">شعبه شمال</option>
                        <option value="org3">شعبه جنوب</option>
                    </select>
                </div>

                {/* واحد */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        واحد مربوطه
                    </label>
                    <select
                        value={formData.unitId}
                        onChange={(e) => handleChange("unitId", e.target.value)}
                        className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white 
                            focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                        <option value="">انتخاب واحد</option>
                        <option value="unit1">واحد توسعه</option>
                        <option value="unit2">واحد پشتیبانی</option>
                        <option value="unit3">واحد QA</option>
                    </select>
                </div>

                {/* برچسب‌ها */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        برچسب‌ها
                    </label>
                    <select
                        value={formData.tags}
                        onChange={(e) => handleChange("tags", e.target.value)}
                        className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white 
                            focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                        <option value="">انتخاب برچسب</option>
                        <option value="urgent">فوری</option>
                        <option value="official">اداری</option>
                        <option value="confidential">محرمانه</option>
                        <option value="normal">عادی</option>
                    </select>
                </div>
            </div>

            {/* لید */}
            <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                    خلاصه نامه (لید)
                </label>
                <textarea
                    value={formData.leed}
                    onChange={(e) => handleChange("leed", e.target.value)}
                    rows={3}
                    className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white 
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="خلاصه یا مقدمه مختصری از نامه..."
                />
            </div>

            {/* محتوای اصلی با ادیتور */}
            <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                    محتوای نامه *
                </label>
                <div className="bg-slate-800 border border-slate-600 rounded-xl overflow-hidden">
                    <Editor />
                </div>
                <p className="text-slate-400 text-xs mt-2">
                    از ابزارهای فوق برای فرمت‌بندی متن و افزودن تصاویر استفاده کنید
                </p>
            </div>

            {/* دکمه‌های action */}
            <div className="flex justify-end gap-3 pt-6 border-t border-slate-700">
                <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white 
                        transition-colors duration-200 font-medium"
                    disabled={isSubmitting}
                >
                    پاک کردن فرم
                </button>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white 
                        flex items-center gap-2 transition-colors duration-200 font-medium
                        disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            در حال ثبت...
                        </>
                    ) : (
                        "ثبت نامه"
                    )}
                </button>
            </div>

        </form>
    );
}