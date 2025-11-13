// components/organisms/UserCard.tsx
import { FC, useState } from "react";
import { Edit, Trash2, User as UserIcon, Shield, Check, X } from "lucide-react";
import { Button, SelectBox } from "@/components/atoms";
import { User } from "@/types/schemaType";
import { getGenderText } from "@/utils/helper";
import { UserLevel } from "@/types/types";

interface UserCardProps {
    user: User;
    level: UserLevel;
    onEdit: (user: User) => void;
    onDelete: (id: string) => void;
    onRoleChange: (userId: string, role: UserLevel) => void;
}

const roleOptions = [
    { _id: "Ghost", name: "سوپر ادمین" },
    { _id: "Orghead", name: "رئیس سازمان" },
    { _id: "Unithead", name: "رئیس واحد" },
    { _id: "Staff", name: "کارمند" },
];

export const UserCard: FC<UserCardProps> = ({ user, level, onEdit, onDelete, onRoleChange }) => {
    const [selectedRole, setSelectedRole] = useState<UserLevel>(level || "Staff");
    const [isEditingRole, setIsEditingRole] = useState(false);
    const [tempRole, setTempRole] = useState<UserLevel>(level || "Staff");

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('fa-IR');
    };

    const handleRoleChangeStart = () => {
        setTempRole(selectedRole);
        setIsEditingRole(true);
    };

    const handleRoleChangeConfirm = () => {
        setSelectedRole(tempRole);
        onRoleChange(user._id, tempRole);
        setIsEditingRole(false);
    };

    const handleRoleChangeCancel = () => {
        setTempRole(selectedRole);
        setIsEditingRole(false);
    };

    const handleTempRoleChange = (role: string) => {
        const userLevel = role as UserLevel;
        setTempRole(userLevel);
    };

    const getRoleBadgeColor = (role: UserLevel) => {
        const colors = {
            Ghost: "bg-purple-500/20 text-purple-400 border-purple-500/30",
            Orghead: "bg-red-500/20 text-red-400 border-red-500/30",
            Unithead: "bg-blue-500/20 text-blue-400 border-blue-500/30",
            Staff: "bg-green-500/20 text-green-400 border-green-500/30",
        };
        return colors[role as keyof typeof colors] || colors.Staff;
    };

    const getRoleText = (role: UserLevel) => {
        const roleMap: { [key: string]: string } = {
            Ghost: "سوپر ادمین",
            Orghead: "رئیس سازمان",
            Unithead: "رئیس واحد",
            Staff: "کارمند",
        };
        return roleMap[role as string] || "نامشخص";
    };

    const getRoleIcon = (role: UserLevel) => {
        const icons = {
            Ghost: "👑",
            Orghead: "🏢",
            Unithead: "⭐",
            Staff: "👨‍💼",
        };
        return icons[role as keyof typeof icons] || "👤";
    };

    const hasRoleChanged = tempRole !== selectedRole;

    return (
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-lg">
            {/* هدر کارت */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <UserIcon className="text-blue-400" size={20} />
                    </div>
                    <div>
                        <h3 className="text-white font-semibold text-lg">
                            {user.first_name} {user.last_name}
                        </h3>
                        <p className="text-slate-400 text-sm">{user.personnel_code}</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <Button
                        onClick={() => onEdit(user)}
                        className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/20"
                    >
                        <Edit size={16} />
                    </Button>
                    <Button
                        onClick={() => onDelete(user._id)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/20"
                    >
                        <Trash2 size={16} />
                    </Button>
                </div>
            </div>

            {/* اطلاعات کاربر */}
            <div className="space-y-3">
                <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">تلفن:</span>
                    <span className="text-white font-medium">{user.phone}</span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">جنسیت:</span>
                    <span className="text-white font-medium">{getGenderText(user.gender)}</span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">تاریخ تولد:</span>
                    <span className="text-white font-medium">{formatDate(user.birth_date)}</span>
                </div>

                {/* بخش سطح کاربر */}
                <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">سطح دسترسی:</span>
                    <div className="flex items-center gap-2">
                        <span className="text-sm">{getRoleIcon(selectedRole)}</span>
                        <span className={`px-2 py-1 rounded-md text-xs border ${getRoleBadgeColor(selectedRole)}`}>
                            {getRoleText(selectedRole)}
                        </span>
                    </div>
                </div>

                {/* دراپ داون تغییر سطح دسترسی */}
                <div className="mt-3 pt-3 border-t border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                        <label className="block text-slate-400 text-sm">
                            <Shield size={14} className="inline ml-1" />
                            تغییر سطح دسترسی
                        </label>

                        {!isEditingRole ? (
                            <Button
                                onClick={handleRoleChangeStart}
                                className="text-blue-400 hover:text-blue-300 text-xs px-3 py-1"
                            >
                                تغییر
                            </Button>
                        ) : (
                            <div className="flex gap-1">
                                <Button
                                    onClick={handleRoleChangeConfirm}
                                    className={`text-xs px-2 py-1 ${hasRoleChanged
                                        ? "text-green-400 hover:text-green-300 hover:bg-green-500/20"
                                        : "text-gray-400 cursor-not-allowed"
                                        }`}
                                >
                                    <Check size={14} />
                                </Button>
                                <Button
                                    onClick={handleRoleChangeCancel}
                                    className="text-xs px-2 py-1 text-red-400 hover:text-red-300 hover:bg-red-500/20"
                                >
                                    <X size={14} />
                                </Button>
                            </div>
                        )}
                    </div>

                    {isEditingRole ? (
                        <div className="space-y-2">
                            <SelectBox
                                label="نقش"
                                name="position"
                                value={tempRole || ""}
                                onChange={handleTempRoleChange}
                                options={roleOptions}
                                placeholder="انتخاب سطح دسترسی"
                            />
                            {hasRoleChanged && (
                                <div className="flex items-center gap-2 text-xs text-slate-400">
                                    <span>تغییر از:</span>
                                    <span className={`px-2 py-1 rounded border ${getRoleBadgeColor(selectedRole)}`}>
                                        {getRoleText(selectedRole)}
                                    </span>
                                    <span>به:</span>
                                    <span className={`px-2 py-1 rounded border ${getRoleBadgeColor(tempRole)}`}>
                                        {getRoleText(tempRole)}
                                    </span>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-xs text-slate-500 text-center py-2">
                            برای تغییر سطح دسترسی روی دکمه "تغییر" کلیک کنید
                        </div>
                    )}
                </div>

                {user.email && (
                    <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">ایمیل:</span>
                        <span className="text-white font-medium text-sm">{user.email}</span>
                    </div>
                )}
            </div>
        </div>
    );
};