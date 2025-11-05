"use client";

import { useEffect, useState } from "react";
import Cookie from "js-cookie";

import { ProfileDropDown } from "../mulecules";

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



  // تا زمانی که در کلاینت mount نشده، چیزی نمایش نده
  if (!mounted) {
    return (
      <header className="bg-white/10 border-b border-white/20 px-5 py-4 flex justify-end items-center backdrop-blur-sm relative z-40">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-24 h-4 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </header>
    );
  }



  return (
    <header className="bg-white/10 border-b border-white/20 px-5 py-4 flex justify-end items-center backdrop-blur-sm relative z-40">
      <div className="flex items-center gap-4">
        <ProfileDropDown email={user?.email} first_name={user?.first_name} last_name={user?.last_name} />
      </div>
    </header>
  );
};