export const HeroSection = () => {
  return (
    <section className="bg-fixed min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl floating"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl floating"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-6 py-2 rounded-full glass text-white text-sm font-medium mb-8 slide-in-up">
            <i className="fas fa-rocket mr-2"></i>
            جدیدترین راه‌حل نامه‌نگاری هوشمند
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 slide-in-up">
            نامه‌
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              نگار
            </span>
          </h1>

          <div
            className="text-xl md:text-2xl text-slate-300 mb-12 typewriter slide-in-up delay-500"
          >
            ارتباط <span className="text-blue-400">سریع</span> و{" "}
            <span className="text-purple-400">هوشمند</span> با یک کلیک
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 slide-in-up delay-[1.2s]"
          >
            <button className="group bg-linear-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 pulse-glow">
              <i className="fas fa-play mr-3 group-hover:mr-4 transition-all duration-300"></i>
              شروع رایگان
            </button>
            <button className="glass text-white px-12 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <i className="fas fa-eye mr-3"></i>
              مشاهده دمو
            </button>
          </div>

          <div
            className="grid grid-cols-3 gap-8 text-center text-slate-300 slide-in-up delay-[1.5s]"
          >
            <div>
              <div className="text-3xl font-bold text-white mb-1">99.9%</div>
              <div>موفقیت ارسال</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">10K+</div>
              <div>کاربر فعال</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">1M+</div>
              <div>نامه ارسال شده</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-20 right-20 w-24 h-24 glass rounded-2xl flex items-center justify-center text-2xl text-white pulse-glow delay-[2s]"
      >
        <i className="fas fa-envelope-open-text"></i>
      </div>
    </section>
  );
};
