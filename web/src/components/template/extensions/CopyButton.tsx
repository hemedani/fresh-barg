import { Editor } from '@tiptap/react'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface CopyButtonProps {
    editor: Editor
}

export const CopyButton = ({ editor }: CopyButtonProps) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = async (type: 'html' | 'text') => {
        try {
            const content = type === 'html' ? editor.getHTML() : editor.getText()
            await navigator.clipboard.writeText(content)
            setCopied(true)

            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('خطا در کپی کردن:', err)
        }
    }

    return (
        <div className="flex items-center gap-1">
            <button
                type='button'
                onClick={() => handleCopy('html')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                title="کپی HTML"
            >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                کپی HTML
            </button>

            <button
                type='button'
                onClick={() => handleCopy('text')}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                title="کپی متن ساده"
            >
                <Copy size={18} />
                کپی متن
            </button>
        </div>
    )
}