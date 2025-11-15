import { useState, useCallback } from 'react';

interface UseFileUploadProps {
    maxSize?: number;
    allowedTypes?: string[];
}

export const useFileUpload = ({
    maxSize = 5 * 1024 * 1024, // 5MB default
    allowedTypes = ['image/jpeg', 'image/png', 'image/webp'],
}: UseFileUploadProps = {}) => {
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const validateFile = useCallback((file: File): boolean => {
        setError(null);

        if (!allowedTypes.includes(file.type)) {
            setError('فرمت فایل مجاز نیست. فقط فایل‌های تصویری مجاز هستند.');
            return false;
        }

        if (file.size > maxSize) {
            setError(`حجم فایل نباید بیشتر از ${maxSize / 1024 / 1024} مگابایت باشد.`);
            return false;
        }

        return true;
    }, [allowedTypes, maxSize]);

    const uploadFile = useCallback(async (file: File): Promise<string | null> => {
        if (!validateFile(file)) {
            return null;
        }

        setIsUploading(true);
        setError(null);

        try {
            // Create preview only - no backend upload
            const preview = URL.createObjectURL(file);
            setPreviewUrl(preview);
            return preview;
        } catch (err) {
            setError('خطا در پردازش فایل');
            return null;
        } finally {
            setIsUploading(false);
        }
    }, [validateFile]);

    const clearFile = useCallback(() => {
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }
        setPreviewUrl(null);
        setError(null);
    }, [previewUrl]);

    return {
        isUploading,
        error,
        previewUrl,
        uploadFile,
        clearFile,
    };
};