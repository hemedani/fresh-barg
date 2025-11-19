'use client'
import { usePosition } from "@/context/PositionContext"
import { useDropdown } from "@/hooks/useDropDown"
import { ChevronDown, Check, LogOut, Settings, User } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/authContext"
import { translateLevelType } from "@/utils/helper"

export const ProfileDropDown = ({
    first_name,
    last_name,
    email,
}: {
    first_name?: string
    last_name?: string
    email?: string
}) => {
    const router = useRouter()
    const { isOpen, toggle, close, dropdownRef } = useDropdown()
    const { logout } = useAuth()
    const { positions, activePosition, setActive, loading } = usePosition()

    const handlePositionChange = async (pos: any) => {
        await setActive(pos)
        close()
        router.refresh()
    }

    if (loading) return null

    return (
        <div className="relative">
            <button
                onClick={toggle}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-xl px-3 py-2 border border-white/20 transition"
            >
                <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image src="/images/noPhoto.png" alt="profile" width={32} height={32} />
                </div>
                <div className="text-right">
                    <p className="text-white font-bold text-sm">{first_name} {last_name}</p>
                    <p className="text-xs text-slate-400">{translateLevelType(activePosition?.level!) || 'انتخاب نقش'}</p>
                </div>
                <ChevronDown size={16} className={`text-white transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div ref={dropdownRef} className="absolute left-0 top-full mt-2 w-64 bg-slate-800/95 backdrop-blur border border-white/20 rounded-xl shadow-xl py-2 z-50">
                    {/* اطلاعات کاربر */}
                    <div className="px-4 py-3 border-b border-white/10">
                        <div className="flex items-center gap-3">
                            <Image src="/images/noPhoto.png" alt="profile" width={40} height={40} className="rounded-full" />
                            <div>
                                <p className="text-white font-semibold text-sm">{first_name} {last_name}</p>
                                <p className="text-slate-400 text-xs">{email}</p>
                            </div>
                        </div>
                    </div>

                    <button onClick={() => router.push("/dashboard")} className="w-full px-4 py-3 text-right text-white hover:bg-white/10 flex items-center gap-3">
                        <User size={18} className="text-slate-400" />
                        <span>پروفایل من</span>
                    </button>

                    <div className="border-t border-white/10 my-1"></div>

                    {/* لیست نقش‌ها */}
                    <div className="py-2 max-h-48 overflow-y-auto">
                        <p className="text-xs text-slate-400 px-4 mb-1">نقش فعال</p>
                        {positions.map((pos) => (
                            <button
                                key={pos._id}
                                onClick={() => handlePositionChange(pos)}
                                className={`w-full px-4 py-2 text-right flex items-center justify-between hover:bg-white/10 transition ${activePosition?._id === pos._id ? 'bg-white/5' : ''
                                    }`}
                            >
                                <span className="text-white text-sm">{translateLevelType(pos.level!)}</span>
                                {activePosition?._id === pos._id && <Check size={16} className="text-green-400" />}
                            </button>
                        ))}
                    </div>

                    <div className="border-t border-white/10 my-1"></div>


                    <button
                        onClick={() => { close(); router.refresh(); logout(); }}
                        className="w-full px-4 py-3 text-right text-red-400 hover:bg-red-400/10 flex items-center gap-3"
                    >
                        <LogOut size={18} />
                        <span>خروج</span>
                    </button>
                </div>
            )}
        </div>
    )
}
