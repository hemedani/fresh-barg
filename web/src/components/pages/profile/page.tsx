"use client";

import React, { useState } from "react";
import {
  Mail,
  Circle,
  Phone,
  MapPin,
  Building,
  Users,
  Calendar,
  User,
  Hash,
  Edit3,
  Shield,
  Download,
} from "lucide-react";
import { AvatarUpload } from "@/components/mulecules/AvatarUpload";

interface UserProfileProps {
  first_name: string;
  last_name: string;
  phone: string;
  gender: string;
  birth_date: string;
  personnel_code: string;
  email: string;
  is_active: boolean;
  province: string;
  city: string;
  avatar?: string;
  organ: string;
  unit: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  first_name,
  last_name,
  phone,
  gender,
  birth_date,
  personnel_code,
  email,
  is_active,
  province,
  city,
  avatar,
  organ,
  unit,
}) => {
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const handleAvatarChange = (file: File | null) => {
    setAvatarFile(file);
    // Just store the file - no automatic upload
    console.log('Avatar file changed:', file);

    // If you want to upload later, you can use this file
    // For example, when user clicks "Save Changes" button
  };

  // Function to handle avatar upload when needed
  const handleSaveAvatar = async () => {
    if (avatarFile) {
      // Upload avatarFile to your backend here
      const formData = new FormData();
      formData.append('avatar', avatarFile);

      try {
        const response = await fetch('/api/user/avatar', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('Avatar uploaded successfully');
        }
      } catch (error) {
        console.error('Error uploading avatar:', error);
      }
    }
  };

  return (
    <div className="mx-auto px-4 py-8">
      {/* Profile Card */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header Gradient */}
        <div className="bg-linear-to-r from-green-500 to-emerald-600 h-32 relative">
          {/* Action Buttons in Header */}
        </div>

        <div className="relative px-6 pb-8 -mt-16">
          <div className="flex flex-col sm:flex-row items-center sm:items-end space-y-4 sm:space-y-0 sm:space-x-6">
            {/* Avatar Component */}
            <AvatarUpload
              initialAvatar={avatar || "/images/noPhoto.png"}
              onAvatarChange={handleAvatarChange}
              size="md"
            />

            {/* Name & Status */}
            <div className="text-center sm:text-left flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                <h1 className="text-2xl font-bold text-white">
                  {first_name} {last_name}
                </h1>
                <Shield className="text-green-400" size={20} />
              </div>

              <p className="text-slate-300 text-sm mt-1">{email}</p>

              <div className="flex items-center justify-center sm:justify-start gap-3 mt-2">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${is_active
                    ? "bg-green-500/20 text-green-300 border border-green-500/30"
                    : "bg-red-500/20 text-red-300 border border-red-500/30"
                    }`}
                >
                  <Circle
                    className={`w-2 h-2 mr-1 ${is_active
                      ? "text-green-400 fill-green-400"
                      : "text-red-400 fill-red-400"
                      }`}
                  />
                  {is_active ? "فعال" : "غیرفعال"}
                </span>
                <span className="text-slate-400 text-xs">|</span>
                <span className="text-slate-300 text-sm">
                  کد پرسنلی: {personnel_code}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details Grid */}
        <div className="px-6 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-green-400/30 transition-all duration-300 group relative">
              <div className="absolute left-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center border border-green-500/30">
                  <Edit3 size={12} className="text-green-400" />
                </button>
              </div>
              <label className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                <User size={16} />
                نام
              </label>
              <p className="text-white font-medium text-lg">{first_name}</p>
            </div>

            {/* Last Name */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-green-400/30 transition-all duration-300 group relative">
              <div className="absolute left-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center border border-green-500/30">
                  <Edit3 size={12} className="text-green-400" />
                </button>
              </div>
              <label className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                <User size={16} />
                نام خانوادگی
              </label>
              <p className="text-white font-medium text-lg">{last_name}</p>
            </div>

            {/* Phone */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-green-400/30 transition-all duration-300 group relative">
              <div className="absolute left-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center border border-green-500/30">
                  <Edit3 size={12} className="text-green-400" />
                </button>
              </div>
              <label className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                <Phone size={16} />
                شماره تماس
              </label>
              <p className="text-white font-mono direction-ltr text-left">
                {phone}
              </p>
            </div>

            {/* Gender */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-green-400/30 transition-all duration-300 group relative">
              <div className="absolute left-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center border border-green-500/30">
                  <Edit3 size={12} className="text-green-400" />
                </button>
              </div>
              <label className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                <Users size={16} />
                جنسیت
              </label>
              <p className="text-white capitalize">
                {gender === "male" ? "مرد" : "زن"}
              </p>
            </div>

            {/* Birth Date */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-green-400/30 transition-all duration-300 group relative">
              <div className="absolute left-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center border border-green-500/30">
                  <Edit3 size={12} className="text-green-400" />
                </button>
              </div>
              <label className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                <Calendar size={16} />
                تاریخ تولد
              </label>
              <p className="text-white font-medium">
                {new Date(birth_date).toLocaleDateString("fa-IR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </p>
            </div>

            {/* Personnel Code */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-green-400/30 transition-all duration-300">
              <label className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                <Hash size={16} />
                کد پرسنلی
              </label>
              <p className="text-white font-mono font-bold">{personnel_code}</p>
            </div>

            {/* Province */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-green-400/30 transition-all duration-300 group relative">
              <div className="absolute left-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center border border-green-500/30">
                  <Edit3 size={12} className="text-green-400" />
                </button>
              </div>
              <label className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                <MapPin size={16} />
                استان
              </label>
              <p className="text-white">{province}</p>
            </div>

            {/* City */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-green-400/30 transition-all duration-300 group relative">
              <div className="absolute left-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center border border-green-500/30">
                  <Edit3 size={12} className="text-green-400" />
                </button>
              </div>
              <label className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                <MapPin size={16} />
                شهر
              </label>
              <p className="text-white">{city}</p>
            </div>

            {/* Organization */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-green-400/30 transition-all duration-300 group relative">
              <div className="absolute left-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center border border-green-500/30">
                  <Edit3 size={12} className="text-green-400" />
                </button>
              </div>
              <label className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                <Building size={16} />
                سازمان
              </label>
              <p className="text-white">{organ}</p>
            </div>

            {/* Unit */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-green-400/30 transition-all duration-300 group relative">
              <div className="absolute left-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center border border-green-500/30">
                  <Edit3 size={12} className="text-green-400" />
                </button>
              </div>
              <label className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                <Building size={16} />
                واحد
              </label>
              <p className="text-white">{unit}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center px-8 py-4 bg-linear-to-r from-green-500 to-emerald-600 text-white font-bold rounded-2xl shadow-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 flex-1 sm:flex-none justify-center">
              <Mail className="w-5 h-5 ml-2" />
              مشاهده نامه‌های کاربر
            </button>

            <div className="flex gap-3">
              <button className="inline-flex items-center px-6 py-3 bg-amber-500/20 text-amber-300 border border-amber-500/30 font-medium rounded-xl hover:bg-amber-500/30 transition-all duration-300 hover:scale-105">
                <Edit3 className="w-5 h-5 ml-2" />
                ویرایش اطلاعات
              </button>

              {/* Save Avatar Button - Only show when there's a new avatar */}
              {avatarFile && (
                <button
                  onClick={handleSaveAvatar}
                  className="inline-flex items-center px-6 py-3 bg-green-500/20 text-green-300 border border-green-500/30 font-medium rounded-xl hover:bg-green-500/30 transition-all duration-300 hover:scale-105"
                >
                  <Download className="w-5 h-5 ml-2" />
                  ذخیره عکس پروفایل
                </button>
              )}

              <button className="inline-flex items-center px-6 py-3 bg-blue-500/20 text-blue-300 border border-blue-500/30 font-medium rounded-xl hover:bg-blue-500/30 transition-all duration-300 hover:scale-105">
                <Download className="w-5 h-5 ml-2" />
                خروجی
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};