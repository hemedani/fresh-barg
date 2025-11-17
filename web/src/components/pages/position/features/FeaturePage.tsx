'use client';

import { updatePosition } from "@/app/actions/position/update";
import { MyAsyncMultiSelect } from "@/components/atoms";
import { AvatarUpload } from "@/components/mulecules";
import { ReactSelectOption } from "@/types/types";
import { Briefcase, Building, Mail, MapPin, Phone, Shield, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface UserData {
    _id: string;
    first_name: string;
    last_name: string;
    gender?: string;
    avatar?: string;
    email?: string;
    phone?: string;
    position: {
        _id: string;
        name: string;
        level?: string;
        features: string[];
    }[];
    province: { _id: string; name: string };
    city: { _id: string; name: string };
    org: { _id: string; name: string }[];
    unit: { _id: string; name: string }[];
}

interface IProps {
    user: UserData
    activePosition: string;
}

const AVAILABLE_FEATURES: ReactSelectOption[] = [
    { value: "create unit", label: "ایجاد واحد" },
    { value: "create chart", label: "ایجاد چارت" },
    { value: "read letters", label: "مشاهده نامه‌ها" },
    { value: "create letters", label: "ایجاد نامه" },
    { value: "reffer letters", label: "ارجاع نامه" },
    { value: "add staff", label: "افزودن کارمند" },
    { value: "add position to user", label: "افزودن موقعیت به کاربر" },
    { value: "read positions", label: "مشاهده موقعیت‌ها" },
    { value: "add position", label: "افزودن موقعیت" },
    { value: "edit org", label: "ویرایش سازمان" },
    { value: "edit unit", label: "ویرایش واحد" },
]

export const FeaturesPage: FC<IProps> = ({ activePosition, user }) => {
    const router = useRouter()
    const [avatarFile, setAvatarFile] = useState<File | null>(null);
    const { setValue, watch } = useForm()

    const currentPosition = useMemo(() => {
        if (!user?.position?.length) return null;
        return user.position.find(pos => pos._id === activePosition) || user.position[0];
    }, [user?.position, activePosition]);

    // تبدیل features فعلی کاربر به فرمت ReactSelectOption
    const currentFeatures = useMemo((): ReactSelectOption[] => {
        if (!currentPosition?.features?.length) return [];

        return currentPosition.features.map(feature => {
            const foundFeature = AVAILABLE_FEATURES.find(af => af.value === feature);
            return foundFeature || { value: feature, label: feature };
        });
    }, [currentPosition]);

    const loadOptions = (
        inputValue: string,
        callback: (options: ReactSelectOption[]) => void
    ) => {
        const filtered = AVAILABLE_FEATURES.filter(feature =>
            feature.label.includes(inputValue) ||
            feature.value.includes(inputValue) ||
            inputValue === ''
        );
        callback(filtered);
    };

    const handleSaveChanges = async () => {
        console.log(currentPosition, activePosition)
        if (!currentPosition?._id || !activePosition) {
            toast.error("هیچ نقشی برای شما تعریف نشده")
            return;
        }
        const response = await updatePosition({ set: { _id: currentPosition?._id, positionId: activePosition, features: watch('features') }, get: { _id: 1, features: 1, level: 1, name: 1, user: { _id: 1, first_name: 1, last_name: 1 } } })
        console.log('Saving changes:', response);
        if (response.success) {
            toast.success("دخیره شد");
            router.replace("/dashboard/letter")
        }
    };

    return (
        <div className="flex gap-5">
            <div className="flex-1 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <User className="w-6 h-6 text-white" />
                    </div>
                    اطلاعات کاربر
                </h2>

                <div className="flex items-start gap-8">
                    <AvatarUpload
                        initialAvatar={user.avatar || '/images/noPhoto.png'}
                        onAvatarChange={setAvatarFile}
                        size="lg"
                    />

                    <div className="space-y-6 flex-1">
                        <div>
                            <h3 className="text-3xl font-bold text-white">
                                {user.first_name} {user.last_name}
                            </h3>
                            <p className="text-slate-400 text-lg mt-2">
                                {currentPosition?.name || 'بدون موقعیت'}
                            </p>
                            {currentPosition && (
                                <div className="mt-2">
                                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                                        موقعیت فعال: {currentPosition.name}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="space-y-4 text-slate-300">
                            {user.email && (
                                <div className="flex items-center gap-4">
                                    <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                                    <span>{user.email}</span>
                                </div>
                            )}

                            {user.phone && (
                                <div className="flex items-center gap-4">
                                    <Phone className="w-5 h-5 text-green-400 shrink-0" />
                                    <span dir="ltr">{user.phone}</span>
                                </div>
                            )}

                            <div className="flex items-center gap-4">
                                <MapPin className="w-5 h-5 text-purple-400 shrink-0" />
                                <span>
                                    {user.province?.name} - {user.city?.name}
                                </span>
                            </div>

                            {currentPosition && (
                                <div className="flex items-center gap-4">
                                    <Shield className="w-5 h-5 text-yellow-400 shrink-0" />
                                    <span className="px-4 py-2 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-bold shadow-lg">
                                        {currentPosition.level || 'Staff'}
                                    </span>
                                </div>
                            )}

                            {user.org?.[0] && (
                                <div className="flex items-center gap-4">
                                    <Building className="w-5 h-5 text-cyan-400 shrink-0" />
                                    <span>{user.org[0].name}</span>
                                </div>
                            )}

                            {user.unit?.[0] && (
                                <div className="flex items-center gap-4">
                                    <Briefcase className="w-5 h-5 text-emerald-400 shrink-0" />
                                    <span>{user.unit[0].name}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">مدیریت ویژگی‌ها</h3>
                    {currentPosition && (
                        <span className="text-sm text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full">
                            موقعیت فعال
                        </span>
                    )}
                </div>

                <div className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-3">
                            ویژگی‌ها {currentPosition && `برای ${currentPosition.name}`}
                        </label>
                        <MyAsyncMultiSelect
                            label="ویژگی ها"
                            name="features"
                            setValue={setValue}
                            loadOptions={loadOptions}
                            defaultValue={currentFeatures}
                            defaultOptions={AVAILABLE_FEATURES}
                        />
                        <p className="text-xs text-slate-400 mt-3">
                            {currentPosition
                                ? `ویژگی‌ها برای موقعیت "${currentPosition.name}" مدیریت می‌شوند`
                                : 'لطفاً ابتدا موقعیت کاربر را تنظیم کنید'
                            }
                        </p>
                    </div>

                    <button
                        onClick={handleSaveChanges}
                        disabled={!currentPosition}
                        className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {currentPosition
                            ? `ذخیره تغییرات برای ${currentPosition.name}`
                            : 'بدون موقعیت فعال'
                        }
                    </button>
                </div>
            </div>
        </div >
    )
}