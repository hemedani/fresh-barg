import { Editor } from '@tiptap/react'
import { List, ListOrdered } from 'lucide-react'

interface TextListProps {
    editor: Editor
}

export const TextList = ({ editor }: TextListProps) => {
    return (
        <div className="flex items-center gap-1 p-2 bg-slate-600 rounded-lg">
            {/* Bullet List */}
            <button
                type='button'
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`p-2 rounded transition-colors ${editor.isActive('bulletList')
                    ? 'bg-blue-500 text-white'
                    : 'text-slate-300 hover:bg-slate-500'
                    }`}
                title="لیست نقطه‌ای"
            >
                <List size={18} />
            </button>

            {/* Ordered List */}
            <button
                type='button'
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`p-2 rounded transition-colors ${editor.isActive('orderedList')
                    ? 'bg-blue-500 text-white'
                    : 'text-slate-300 hover:bg-slate-500'
                    }`}
                title="لیست شماره‌ای"
            >
                <ListOrdered size={18} />
            </button>
        </div>
    )
}   