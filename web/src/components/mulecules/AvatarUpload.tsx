import React, { useRef } from 'react';
import Image from 'next/image';
import { Camera, X, Loader2, Edit3 } from 'lucide-react';
import { useFileUpload } from '@/hooks/useFileUpload';

interface AvatarUploadProps {
    initialAvatar?: string;
    onAvatarChange: (file: File | null) => void;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
}

export const AvatarUpload: React.FC<AvatarUploadProps> = ({
    initialAvatar = '/images/noPhoto.png',
    onAvatarChange,
    size = 'md',
    disabled = false,
}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const {
        isUploading,
        error,
        previewUrl,
        uploadFile,
        clearFile,
    } = useFileUpload();

    const sizeClasses = {
        sm: 'w-16 h-16',
        md: 'w-32 h-32',
        lg: 'w-48 h-48',
    };

    const handleFileSelect = async (file: File) => {
        const result = await uploadFile(file);
        if (result) {
            onAvatarChange(file);
        }
    };

    const handleRemoveAvatar = () => {
        clearFile();
        onAvatarChange(null);
    };

    const handleAvatarClick = () => {
        if (!disabled && !isUploading) {
            fileInputRef.current?.click();
        }
    };

    const currentAvatar = previewUrl || initialAvatar;

    return (
        <div className="relative group">
            {/* Hidden file input */}
            <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileSelect(file);
                    e.target.value = ''; // Reset input
                }}
                accept="image/*"
                className="hidden"
                disabled={disabled || isUploading}
            />

            <div className={`${sizeClasses[size]} relative`}>
                {/* Avatar Image */}
                <div className="w-full h-full rounded-full bg-linear-to-br from-green-500/20 to-emerald-600/20 border-4 border-white/10 overflow-hidden shadow-2xl">
                    {isUploading ? (
                        <div className="w-full h-full flex items-center justify-center bg-gray-500/20">
                            <Loader2 size={24} className="text-green-400 animate-spin" />
                        </div>
                    ) : (
                        <Image
                            src={currentAvatar}
                            alt="Profile avatar"
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>

                {/* Remove button for custom avatars */}
                {previewUrl && !isUploading && (
                    <button
                        onClick={handleRemoveAvatar}
                        disabled={disabled}
                        className="absolute top-0 right-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg hover:bg-red-600 transition-all duration-200"
                    >
                        <X size={12} className="text-white" />
                    </button>
                )}

                {/* Edit button */}
                <button
                    onClick={handleAvatarClick}
                    disabled={disabled || isUploading}
                    className="absolute -bottom-2 -right-2 w-10 h-10 bg-linear-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center border-4 border-white/10 shadow-2xl hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isUploading ? (
                        <Loader2 size={18} className="text-white animate-spin" />
                    ) : (
                        <Camera size={18} className="text-white" />
                    )}
                </button>

                {/* Edit overlay */}
                <div
                    onClick={handleAvatarClick}
                    className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                >
                    <Edit3 size={24} className="text-white" />
                </div>
            </div>

            {/* Error message */}
            {error && (
                <div className="absolute -bottom-8 left-0 right-0 bg-red-500 text-white text-xs rounded p-1 text-center">
                    {error}
                </div>
            )}
        </div>
    );
};