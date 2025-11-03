// components/organisms/UserCard.tsx
import { FC } from "react";
import { Edit, Trash2, User as UserIcon } from "lucide-react";
import { Button } from "@/components/atoms";
import { User } from "@/types/schemaType";
import { getGenderText } from "@/utils/helper";

interface UserCardProps {
    user: User;
    onEdit: (user: User) => void;
    onDelete: (id: string) => void;
}

export const UserCard: FC<UserCardProps> = ({ user, onEdit, onDelete }) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('fa-IR');
    };

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