import { Editor } from '@tiptap/react'
import { Image } from 'lucide-react'

interface ImageUploaderProps {
    editor: Editor
}

export const ImageUploader = ({ editor }: ImageUploaderProps) => {
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) return

        // بررسی نوع فایل
        if (!file.type.startsWith('image/')) {
            alert('لطفاً یک فایل تصویر انتخاب کنید')
            return
        }

        const reader = new FileReader()
        reader.onloadend = () => {
            const base64string = reader.result as string
            editor.chain().focus().setImage({ src: base64string }).run()
        }
        reader.onerror = () => {
            alert('خطا در بارگذاری تصویر')
        }
        reader.readAsDataURL(file)

        // ریست کردن input
        event.target.value = ''
    }

    const triggerFileInput = () => {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = 'image/*'
        input.onchange = (e) => handleImageUpload(e as any)
        input.click()
    }

    return (
        <div className="flex items-center gap-1 p-2 bg-slate-600 rounded-lg">
            <button
                type='button'
                onClick={triggerFileInput}
                className="flex items-center gap-2 px-3 py-2 rounded text-slate-300 hover:bg-slate-500 transition-colors text-sm"
                title="افزودن تصویر"
            >
                <Image size={16} />
                تصویر
            </button>
        </div>
    )
}