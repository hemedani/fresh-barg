import React, { useRef } from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
    onFileSelect: (file: File) => void;
    acceptedTypes?: string;
    maxSize?: number;
    className?: string;
    disabled?: boolean;
}

export const FileUpload: React.FC<FileUploadProps> = ({
    onFileSelect,
    acceptedTypes = 'image/*',
    maxSize = 5 * 1024 * 1024,
    className = '',
    disabled = false,
}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            onFileSelect(file);
        }
    };

    const handleClick = () => {
        if (!disabled) {
            fileInputRef.current?.click();
        }
    };

    return (
        <div className={`relative ${className}`}>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept={acceptedTypes}
                className="hidden"
                disabled={disabled}
            />

            <button
                type="button"
                onClick={handleClick}
                disabled={disabled}
                className={`w-full p-4 border-2 border-dashed rounded-lg transition-all duration-200 hover:border-green-400 hover:bg-green-400/10 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50
                            ${disabled
                        ? 'opacity-50 cursor-not-allowed border-gray-400'
                        : 'border-gray-300 cursor-pointer'} ${className}`}
            >
                <div className="flex flex-col items-center justify-center space-y-2">
                    <Upload size={24} className="text-gray-400" />
                    <span className="text-sm text-gray-600">
                        کلیک کنید یا فایل را اینجا بکشید
                    </span>
                    <span className="text-xs text-gray-500">
                        حداکثر حجم: {maxSize / 1024 / 1024}MB
                    </span>
                </div>
            </button>
        </div>
    );
};