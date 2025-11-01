export const Footer = () => {
  return (
    <footer className="bg-slate-900/50 backdrop-blur-xl border-t border-slate-800/50 py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center mb-6">
          <i className="fas fa-envelope text-3xl text-blue-400 mr-3"></i>
          <span className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            نامه‌نگار
          </span>
        </div>
        <p className="text-slate-500 mb-8">
          © 2025 نامه‌نگار. همه حقوق محفوظ است.
        </p>
        <div className="flex justify-center space-x-8 space-x-reverse text-slate-500">
          <a href="#" className="hover:text-white transition-colors">
            <i className="fab fa-telegram"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
