// components/organisms/UserCard.tsx
import { FC, useState } from "react";
import { Edit, Trash2, User as UserIcon, Shield, Check, X, Eye } from "lucide-react";
import { Button, SelectBox } from "@/components/atoms";
import { UserType } from "@/types/schemaType";
import { getGenderText } from "@/utils/helper";
import { userLevelLabels, userLevelIcons, userLevelColors, UserLevel } from "@/types/types";
import { useRouter } from "next/navigation";

interface UserCardProps {
    user: UserType;
    onEdit: (user: UserType) => void;
    onDelete: (id: string) => void;
    onRoleChange: (userId: string, role: UserLevel) => void;
}

export const UserCard: FC<UserCardProps> = ({ user, onEdit, onDelete, onRoleChange }) => {
    const [isEditingRole, setIsEditingRole] = useState(false);
    const [tempRole, setTempRole] = useState<UserLevel>(user.level);
    const router = useRouter()

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("fa-IR");
    };

    const handleRoleChangeConfirm = () => {
        if (tempRole !== user.level) {
            onRoleChange(user._id, tempRole);
        }
        setIsEditingRole(false);
    };

    const hasRoleChanged = tempRole !== user.level;

    return (
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-lg">
            {/* Header */}
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
                    <button
                        onClick={() => router.push(`/dashboard/user/${user._id}/features`)}
                        title="مشاهده"
                        className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 p-2 rounded-lg"
                    >
                        <Eye size={16} />
                    </button>
                    <Button
                        onClick={() => onEdit(user)}
                        className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 p-2 rounded-lg"
                    >
                        <Edit size={16} />
                    </Button>
                    <Button
                        onClick={() => onDelete(user._id)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/20 p-2 rounded-lg"
                    >
                        <Trash2 size={16} />
                    </Button>
                </div>
            </div>

            {/* Info */}
            <div className="space-y-3">
                <InfoRow label="تلفن" value={user.phone} />
                <InfoRow label="جنسیت" value={getGenderText(user.gender)} />
                <InfoRow label="تاریخ تولد" value={formatDate(user.birth_date)} />
                {user.email && <InfoRow label="ایمیل" value={user.email} />}

                {/* Role */}
                <div className="flex justify-between items-center">
                    {/* <span className="text-slate-400 text-sm">سطح دسترسی:</span> */}
                    <div className="flex items-center gap-2">
                        {/* <span className="text-sm">{userLevelIcons[user.level]}</span> */}
                        {/* <span
                            className={`px-2 py-1 rounded-md text-xs border ${userLevelColors[user.level]}`}
                        >
                            {userLevelLabels[user.level]}
                        </span> */}
                    </div>
                </div>

                {/* Role Editor */}
                <div className="mt-3 pt-3 border-t border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                        <label className="block text-slate-400 text-sm">
                            <Shield size={14} className="inline ml-1" />
                            تغییر سطح دسترسی
                        </label>

                        {isEditingRole ? (
                            <div className="flex gap-1">
                                <button
                                    onClick={handleRoleChangeConfirm}
                                    disabled={!hasRoleChanged}
                                    className={`text-xs p-1.5 rounded ${hasRoleChanged
                                        ? "text-green-400 hover:text-green-300 hover:bg-green-500/20"
                                        : "text-gray-500 cursor-not-allowed"
                                        }`}
                                >
                                    <Check size={14} />
                                </button>
                                <Button
                                    onClick={() => setIsEditingRole(false)}
                                    className="text-xs p-1.5 rounded text-red-400 hover:text-red-300 hover:bg-red-500/20"
                                >
                                    <X size={14} />
                                </Button>
                            </div>
                        ) : (
                            <Button
                                onClick={() => setIsEditingRole(true)}
                                className="text-blue-400 hover:text-blue-300 text-xs px-2.5 py-1 rounded"
                            >
                                تغییر
                            </Button>
                        )}
                    </div>

                    {isEditingRole ? (
                        <div className="space-y-2">
                            <SelectBox
                                label="نقش"
                                name="level"
                                value={tempRole}
                                onChange={(v) => setTempRole(v as UserLevel)}
                                options={Object.entries(userLevelLabels).map(([value, label]) => ({
                                    _id: value,
                                    name: label,
                                }))}
                                placeholder="انتخاب سطح دسترسی"
                            />
                            {hasRoleChanged && (
                                <div className="flex items-center gap-2 text-xs text-slate-400">
                                    <span>از:</span>
                                    <span className={`px-2 py-1 rounded border ${userLevelColors[user.level]}`}>
                                        {userLevelLabels[user.level]}
                                    </span>
                                    <span>به:</span>
                                    <span className={`px-2 py-1 rounded border ${userLevelColors[tempRole]}`}>
                                        {userLevelLabels[tempRole]}
                                    </span>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-xs text-slate-500 text-center py-2">
                            برای تغییر سطح دسترسی کلیک کنید
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between items-center">
        <span className="text-slate-400 text-sm">{label}:</span>
        <span className="text-white font-medium">{value}</span>
    </div>
);