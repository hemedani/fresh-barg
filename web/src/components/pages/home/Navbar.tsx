"use client"
import { ProfileDropDown } from "@/components/mulecules";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";


interface IUser {
  first_name: string
  last_name: string
  email: string
}

export const Navbar = () => {
  const [user, setUser] = useState<IUser>();

  const [mounted, setMounted] = useState(false);

  // فقط در کلاینت اجرا شود
  useEffect(() => {
    setMounted(true);
    const userData = Cookie.get("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);
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
          !user ?
            <Link
              href="/login"
              className="text-white glass cursor-pointer hover:text-green-400  px-6 py-2 rounded-full transition"
            >
              برای شروع وارد شوید
            </Link> :
            <ProfileDropDown email={user?.email} first_name={user?.first_name} last_name={user?.last_name} />
        }
      </div>
    </nav>
  );
};
