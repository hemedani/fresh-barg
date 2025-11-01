"use client"
import { useAuth } from "@/context/authContext";
import Link from "next/link";

export const Navbar = () => {
  const { isAuthenticated } = useAuth()

  return (
    <nav className="fixed top-0 w-full z-50 glass px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          <i className="fas fa-leaf mr-2"></i> برگ
        </div>
        <div className="md:flex items-center justify-around w-md text-white">
          <Link href="#features" className="hover:text-green-400 transition">
            ویژگی‌ها
          </Link>
          <Link href="#pricing" className="hover:text-green-400 transition">
            قیمت
          </Link>
          <Link href="#contact" className="hover:text-green-400 transition">
            تماس
          </Link>
        </div>
        {
          !isAuthenticated ?
            <Link
              href="/login"
              className="text-white glass cursor-pointer hover:text-green-400  px-6 py-2 rounded-full transition"
            >
              برای شروع وارد شوید
            </Link> :
            <Link href="/dashboard" className="hover:text-green-400 transition">
              پنل مدیریت
            </Link>
        }
      </div>
    </nav>
  );
};
