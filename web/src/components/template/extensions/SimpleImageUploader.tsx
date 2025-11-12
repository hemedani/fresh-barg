import { Button } from '@/components/atoms'
import { ImageIcon } from 'lucide-react'

interface Props {
    onUpload: (file: File) => void
}

export const SimpleImageUploader = ({ onUpload }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file && file.type.startsWith('image/')) {
            onUpload(file)
        }
    }

    return (
        <label className="cursor-pointer">
            <input
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
            />
            <Button
                type='button'
                className="flex items-center gap-2 border-slate-500 text-slate-300 hover:bg-slate-600 hover:text-white transition"
            >
                <ImageIcon className="w-4 h-4" />
                آپلود عکس
            </Button>
        </label>
    )
}