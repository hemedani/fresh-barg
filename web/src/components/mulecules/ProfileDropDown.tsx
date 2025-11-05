import { useAuth } from "@/context/authContext";
import { useDropdown } from "@/hooks/useDropDown";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const ProfileDropDown = ({ first_name, last_name, email }: { first_name?: string, last_name?: string, email?: string }) => {
    const router = useRouter();
    const { isOpen, toggle, close, dropdownRef } = useDropdown();
    const { logout } = useAuth();


    const handleLogout = () => {
        logout();
        close();
        router.refresh()
    };

    const handleProfile = () => {
        router.push("/dashboard");
        close();
    };

    const handleSettings = () => {
        console.log("تنظیمات");
        close();
    };
    return (
        <div className="relative">
            <button
                onClick={toggle}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-xl px-3 py-2 border border-white/20"
            >
                <div className="w-8 h-8 bg-linear-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    <Image
                        src={"/images/noPhoto.png"}
                        alt="user profile"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                </div>
                <span className="font-bold text-white text-sm">
                    {first_name} {last_name}
                </span>
                <ChevronDown
                    size={16}
                    className={`text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute left-0 top-full mt-2 w-48 bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl py-2 z-50"
                >
                    <div className="px-4 py-3 border-b border-white/10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-linear-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                                <Image
                                    src={"/images/noPhoto.png"}
                                    alt="user profile"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-white font-semibold text-sm truncate">
                                    {first_name} {last_name}
                                </p>
                                <p className="text-slate-400 text-xs truncate">
                                    {email}
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleProfile}
                        className="w-full px-4 py-3 text-right text-white hover:bg-white/10 transition-all duration-200 flex items-center gap-3 group"
                    >
                        <User
                            size={18}
                            className="text-slate-400 group-hover:text-green-400"
                        />
                        <span className="flex-1">پروفایل من</span>
                    </button>

                    <button
                        onClick={handleSettings}
                        className="w-full px-4 py-3 text-right text-white hover:bg-white/10 transition-all duration-200 flex items-center gap-3 group"
                    >
                        <Settings
                            size={18}
                            className="text-slate-400 group-hover:text-green-400"
                        />
                        <span className="">تنظیمات</span>
                    </button>

                    <div className="border-t border-white/10 my-1"></div>

                    <button
                        onClick={handleLogout}
                        className="w-full px-4 py-3 text-right text-red-400 hover:bg-red-400/10 transition-all duration-200 flex items-center gap-3 group"
                    >
                        <LogOut size={18} className="group-hover:text-red-300" />
                        <span className="flex-1">خروج از سیستم</span>
                    </button>
                </div>
            )}
        </div>
    );
};
