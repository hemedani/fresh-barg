import {
  MapPin,
  Building2,
  Landmark,
  Network,
  UserCog,
  Mail,
} from "lucide-react";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <nav className="w-72 bg-linear-to-b from-slate-900/95 to-slate-800/95 border-r border-slate-700/50 p-6 overflow-y-auto backdrop-blur-sm">
      {/* Header */}
      <div className="mb-8 pb-4 border-b border-slate-700/50">
        <h2 className="text-lg font-semibold text-white flex items-center">
          <div className="w-2 h-6 bg-green-500 rounded-full ml-3"></div>
          پنل مدیریت
        </h2>
        <p className="text-slate-400 text-sm mt-2">سیستم یکپارچه سازمانی</p>
      </div>

      <ul className="list-none p-0 m-0 space-y-2">
        <li>
          <Link
            href={`/dashboard/province`}
            className="flex items-center text-slate-300 no-underline p-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-green-500/10 group border border-transparent hover:border-white/10"
          >
            <MapPin className="text-slate-400 group-hover:text-green-400 transition-colors ml-3" size={20} />
            <span className="font-medium">استان</span>
          </Link>
        </li>

        <li>
          <Link
            href={`/dashboard/city`}
            className="flex items-center text-slate-300 no-underline p-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-green-500/10 group border border-transparent hover:border-white/10"
          >
            <Building2 className="text-slate-400 group-hover:text-green-400 transition-colors ml-3" size={20} />
            <span className="font-medium">شهر</span>
          </Link>
        </li>

        <li>
          <Link
            href={`/dashboard/organ`}
            className="flex items-center text-slate-300 no-underline p-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-green-500/10 group border border-transparent hover:border-white/10"
          >
            <Landmark className="text-slate-400 group-hover:text-green-400 transition-colors ml-3" size={20} />
            <span className="font-medium">سازمان</span>
          </Link>
        </li>

        <li>
          <Link
            href={`/dashboard/unit`}
            className="flex items-center text-slate-300 no-underline p-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-green-500/10 group border border-transparent hover:border-white/10"
          >
            <Network className="text-slate-400 group-hover:text-green-400 transition-colors ml-3" size={20} />
            <span className="font-medium">واحد</span>
          </Link>
        </li>

        <li>
          <Link
            href={`/dashboard/position`}
            className="flex items-center text-slate-300 no-underline p-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-green-500/10 group border border-transparent hover:border-white/10"
          >
            <UserCog className="text-slate-400 group-hover:text-green-400 transition-colors ml-3" size={20} />
            <span className="font-medium">نقش</span>
          </Link>
        </li>

        <li>
          <Link
            href={`/dashboard/letter`}
            className="flex items-center text-slate-300 no-underline p-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-green-500/10 group border border-transparent hover:border-white/10"
          >
            <Mail className="text-slate-400 group-hover:text-green-400 transition-colors ml-3" size={20} />
            <span className="font-medium">نامه</span>
          </Link>
        </li>
      </ul>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-slate-700/50">
        <div className="flex items-center text-slate-400 text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full ml-2 animate-pulse"></div>
          وضعیت: آنلاین
        </div>
      </div>
    </nav>
  );
};