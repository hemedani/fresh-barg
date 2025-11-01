export const StartSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-blue-600/90 to-purple-600/90"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            آماده‌اید{" "}
            <span className="bg-linear-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              شروع
            </span>{" "}
            کنید؟
          </h2>
          <p className="text-xl text-slate-200 mb-12 leading-relaxed">
            همین حالا ثبت‌نام کنید و 14 روز رایگان از همه امکانات استفاده کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-bold text-xl flex items-center justify-center hover:bg-slate-100 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <i className="fas fa-user-plus mr-3"></i>
              شروع رایگان
            </button>
            <button className="glass text-white px-12 py-5 rounded-2xl font-bold text-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <i className="fas fa-phone mr-3"></i>
              تماس با ما
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
