import { Editor } from '@tiptap/react'
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react'
import { useState, useEffect } from 'react'

interface TextFormatterProps {
    editor: Editor
}

export const TextFormatter = ({ editor }: TextFormatterProps) => {
    const [activeStyles, setActiveStyles] = useState({
        bold: false,
        italic: false,
        underline: false,
        alignLeft: false,
        alignCenter: false,
        alignRight: false,
        alignJustify: false
    })

    // گوش دادن به تغییرات selection و update
    useEffect(() => {
        const updateActiveStyles = () => {
            setActiveStyles({
                bold: editor.isActive('bold'),
                italic: editor.isActive('italic'),
                underline: editor.isActive('underline'),
                alignLeft: editor.isActive({ textAlign: 'left' }),
                alignCenter: editor.isActive({ textAlign: 'center' }),
                alignRight: editor.isActive({ textAlign: 'right' }),
                alignJustify: editor.isActive({ textAlign: 'justify' })
            })
        }

        // گوش دادن به تغییرات selection
        editor.on('selectionUpdate', updateActiveStyles)
        editor.on('transaction', updateActiveStyles)

        return () => {
            editor.off('selectionUpdate', updateActiveStyles)
            editor.off('transaction', updateActiveStyles)
        }
    }, [editor])

    return (
        <div className="flex items-center gap-1 p-2 bg-slate-600 rounded-lg">
            {/* Bold */}
            <button
                type='button'
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`p-2 rounded transition-colors ${activeStyles.bold
                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                    : 'text-slate-300 hover:bg-slate-500'
                    }`}
                title="پررنگ"
            >
                <Bold size={18} />
            </button>

            {/* Italic */}
            <button
                type='button'
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`p-2 rounded transition-colors ${activeStyles.italic
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                    : 'text-slate-300 hover:bg-slate-500'
                    }`}
                title="کج"
            >
                <Italic size={18} />
            </button>

            {/* Underline */}
            <button
                type='button'
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={`p-2 rounded transition-colors ${activeStyles.underline
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                    : 'text-slate-300 hover:bg-slate-500'
                    }`}
                title="زیرخط"
            >
                <Underline size={18} />
            </button>

            <div className="w-px h-6 bg-slate-500 mx-1" />

            {/* Text Alignment */}
            <button
                type='button'
                onClick={() => editor.chain().focus().setTextAlign('right').run()}
                className={`p-2 rounded transition-colors ${activeStyles.alignRight
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-300 hover:bg-slate-500'
                    }`}
                title="تراز به راست"
            >
                <AlignRight size={18} />
            </button>


            <button
                type='button'
                onClick={() => editor.chain().focus().setTextAlign('center').run()}
                className={`p-2 rounded transition-colors ${activeStyles.alignCenter
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-300 hover:bg-slate-500'
                    }`}
                title="تراز به وسط"
            >
                <AlignCenter size={18} />
            </button>

            <button
                type='button'
                onClick={() => editor.chain().focus().setTextAlign('left').run()}
                className={`p-2 rounded transition-colors ${activeStyles.alignLeft
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-300 hover:bg-slate-500'
                    }`}
                title="تراز به چپ"
            >
                <AlignLeft size={18} />
            </button>

            <button
                type='button'
                onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                className={`p-2 rounded transition-colors ${activeStyles.alignJustify
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-300 hover:bg-slate-500'
                    }`}
                title="تراز به دو طرف"
            >
                <AlignJustify size={18} />
            </button>
        </div>
    )
}