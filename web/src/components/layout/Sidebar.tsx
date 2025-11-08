'use client'

import { useState } from 'react'
import {
  MapPin,
  Building2,
  Landmark,
  Network,
  UserCog,
  Mail,
  User,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Mobile Menu Button - On left for RTL */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800 border border-slate-600 rounded-xl text-white shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar - Fixed on right */}
      <nav className={`
        fixed top-0 right-0 h-screen 
        w-80 lg:w-72
        bg-linear-to-b from-slate-900/95 to-slate-800/95 
        border-l border-slate-700/50 
        p-6 overflow-y-auto backdrop-blur-sm
        z-30
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="mb-8 pb-4 border-b border-slate-700/50">
          <div className="flex items-center justify-between lg:block">
            <h2 className="text-lg font-semibold text-white flex items-center">
              <div className="w-2 h-6 bg-green-500 rounded-full mr-3"></div>
              پنل مدیریت
            </h2>
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-1 text-slate-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-slate-400 text-sm mt-2">سیستم یکپارچه سازمانی</p>
        </div>

        {/* Menu Items */}
        <ul className="list-none p-0 m-0 space-y-2">
          <li>
            <Link
              href="/dashboard/province"
              onClick={() => setIsOpen(false)}
              className="flex items-center text-slate-300 no-underline p-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-green-500/10 group border border-transparent hover:border-white/10"
            >
              <MapPin className="text-slate-400 group-hover:text-green-400 transition-colors mr-3" size={20} />
              <span className="font-medium">استان</span>
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/city"
              onClick={() => setIsOpen(false)}
              className="flex items-center text-slate-300 no-underline p-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-green-500/10 group border border-transparent hover:border-white/10"
            >
              <Building2 className="text-slate-400 group-hover:text-green-400 transition-colors mr-3" size={20} />
              <span className="font-medium">شهر</span>
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/organ"
              onClick={() => setIsOpen(false)}
              className="flex items-center text-slate-300 no-underline p-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-green-500/10 group border border-transparent hover:border-white/10"
            >
              <Landmark className="text-slate-400 group-hover:text-green-400 transition-colors mr-3" size={20} />
              <span className="font-medium">سازمان</span>
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/unit"
              onClick={() => setIsOpen(false)}
              className="flex items-center text-slate-300 no-underline p-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-green-500/10 group border border-transparent hover:border-white/10"
            >
              <Network className="text-slate-400 group-hover:text-green-400 transition-colors mr-3" size={20} />
              <span className="font-medium">واحد</span>
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/user"
              onClick={() => setIsOpen(false)}
              className="flex items-center text-slate-300 no-underline p-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-green-500/10 group border border-transparent hover:border-white/10"
            >
              <User className="text-slate-400 group-hover:text-green-400 transition-colors mr-3" size={20} />
              <span className="font-medium">کاربران</span>
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/position"
              onClick={() => setIsOpen(false)}
              className="flex items-center text-slate-300 no-underline p-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-green-500/10 group border border-transparent hover:border-white/10"
            >
              <UserCog className="text-slate-400 group-hover:text-green-400 transition-colors mr-3" size={20} />
              <span className="font-medium">نقش</span>
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/letter"
              onClick={() => setIsOpen(false)}
              className="flex items-center text-slate-300 no-underline p-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-green-500/10 group border border-transparent hover:border-white/10"
            >
              <Mail className="text-slate-400 group-hover:text-green-400 transition-colors mr-3" size={20} />
              <span className="font-medium">نامه</span>
            </Link>
          </li>
        </ul>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-slate-700/50">
          <div className="flex items-center text-slate-400 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            وضعیت: آنلاین
          </div>
        </div>
      </nav>
    </>
  );
};