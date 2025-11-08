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

  useEffect(() => {
    setMounted(true);
    const userData = Cookie.get("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  if (!mounted) {
    return (
      <header className="sticky top-0 bg-slate-800/90 border-b border-slate-700 px-6 py-4 flex justify-end items-center backdrop-blur-sm z-20">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-slate-600 rounded-full animate-pulse"></div>
          <div className="w-24 h-4 bg-slate-600 rounded animate-pulse"></div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 bg-slate-800/90 border-b border-slate-700 px-6 py-4 flex justify-end items-center backdrop-blur-sm z-20">
      <div className="flex items-center gap-4">
        <ProfileDropDown
          email={user?.email}
          first_name={user?.first_name}
          last_name={user?.last_name}
        />
      </div>
    </header>
  );
};