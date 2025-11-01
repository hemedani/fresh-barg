export const FeaturesSection = () => {
  return (
    <section className="py-32 bg-linear-to-b from-slate-800 to-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            چرا <span className="text-white">نامه‌نگار</span>؟
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            همه ابزارهایی که برای نامه‌نگاری حرفه‌ای نیاز دارید، در یک پلتفرم
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group glass p-10 rounded-3xl text-center hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-4 cursor-pointer">
            <div className="w-20 h-20 bg-linear-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
              <i className="fas fa-robot"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">هوش مصنوعی</h3>
            <p className="text-slate-300 leading-relaxed">
              نامه‌های حرفه‌ای را با یک کلیک و به صورت خودکار تولید کنید
            </p>
          </div>

          <div className="group glass p-10 rounded-3xl text-center hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-4 cursor-pointer">
            <div className="w-20 h-20 bg-linear-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
              <i className="fas fa-bolt"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">ارسال سریع</h3>
            <p className="text-slate-300 leading-relaxed">
              هزاران نامه را در کسری از ثانیه ارسال کنید
            </p>
          </div>

          <div className="group glass p-10 rounded-3xl text-center hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-4 cursor-pointer">
            <div className="w-20 h-20 bg-linear-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">گزارش کامل</h3>
            <p className="text-slate-300 leading-relaxed">
              آمار دقیق از وضعیت ارسال و باز شدن نامه‌ها
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
