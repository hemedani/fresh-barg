'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Image from '@tiptap/extension-image'
import Dropcursor from '@tiptap/extension-dropcursor'
import { ResizableImage } from 'tiptap-extension-resizable-image'
import { useState, useCallback } from 'react'

// Extensions
import { TextFormatter } from '../extensions/TextFormatter'
import { TextList } from '../extensions/TextList'
import { DateInserter } from '../extensions/Date'
import { SimpleImageUploader } from '../extensions/SimpleImageUploader'

export const Editor = () => {
    const [wordCount, setWordCount] = useState(0)
    const [charCount, setCharCount] = useState(0)

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: { levels: [1, 2, 3] },
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Underline,
            Image.configure({
                inline: true,
                allowBase64: true,
                HTMLAttributes: {
                    class: 'tiptap-image-resizable',
                },
            }),
            Dropcursor,
            ResizableImage,
        ],
        content: `
      <div dir="rtl">
        <h1 class="text-center text-slate-200 mb-8">عنوان نامه</h1>
        <p class="text-left text-slate-500 mb-8">تاریخ: ___________</p>
        <p class="text-slate-300 leading-8">با سلام و احترام،</p>
        <p class="text-slate-300 leading-8 mt-4">متن نامه خود را در این قسمت بنویسید...</p>
        <p class="text-slate-300 leading-8 mt-8">با تشکر و احترام</p>
        <p class="text-slate-300 mt-12">[نام و نام خانوادگی]</p>
        <p class="text-slate-300">[سمت سازمانی]</p>
      </div>
    `,
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class: 'prose prose-lg max-w-none focus:outline-none min-h-96 p-6 prose-p:my-2 prose-headings:font-bold dark:prose-invert prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-em:text-white prose-li:text-slate-300 prose-blockquote:text-slate-300',
                dir: 'rtl',
            },
            handlePaste: (view, event) => handleClipboard(event),
            handleDrop: (view, event, slice, moved) => handleFileDrop(event, moved),
        },
        onUpdate: ({ editor }) => {
            const text = editor.getText()
            setWordCount(text.trim() ? text.trim().split(/\s+/).length : 0)
            setCharCount(text.length)
        },
    })

    // --- آپلود تصویر ---
    const handleImageUpload = useCallback((file: File) => {
        const reader = new FileReader()
        reader.onload = (e) => {
            const base64 = e.target?.result as string
            editor?.chain().focus().setImage({ src: base64 }).run()
        }
        reader.readAsDataURL(file)
    }, [editor])

    const handleClipboard = (event: ClipboardEvent) => {
        const items = event.clipboardData?.items
        if (!items) return false
        for (const item of items) {
            if (item.type.startsWith('image/')) {
                const file = item.getAsFile()
                if (file) {
                    handleImageUpload(file)
                    return true
                }
            }
        }
        return false
    }

    const handleFileDrop = (event: DragEvent, moved: boolean) => {
        if (!moved && event.dataTransfer?.files?.length) {
            event.preventDefault()
            const file = event.dataTransfer.files[0]
            if (file.type.startsWith('image/')) {
                handleImageUpload(file)
                return true
            }
        }
        return false
    }

    if (!editor) {
        return (
            <div className="max-w-4xl mx-auto p-6 bg-slate-800 rounded-xl shadow-lg border border-slate-700">
                <div className="flex items-center justify-center min-h-96">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                        <p className="text-slate-400">در حال بارگذاری ویرایشگر...</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-slate-800 rounded-xl shadow-lg border border-slate-700">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700">
                <div>
                    <h1 className="text-xl font-bold text-white">ویرایشگر نامه‌نگاری</h1>
                    <p className="text-slate-400 text-sm">آپلود، ریسایز و جابه‌جایی تصاویر با Tailwind</p>
                </div>
            </div>

            {/* Toolbar */}
            <div className="flex flex-wrap gap-3 p-4 bg-slate-700 rounded-xl border border-slate-600 mb-4">
                <TextFormatter editor={editor} />
                <TextList editor={editor} />
                <DateInserter editor={editor} />
                <SimpleImageUploader onUpload={handleImageUpload} />
            </div>

            {/* Editor */}
            <div className="bg-slate-800 border border-slate-600 rounded-xl overflow-hidden mb-4">
                <EditorContent editor={editor} />
            </div>

            {/* راهنما */}
            <div className="p-4 bg-amber-900/30 border border-amber-700 rounded-lg text-amber-300 text-sm mb-4">
                <p className="font-bold mb-2">راهنمای تصاویر:</p>
                <ul className="space-y-1 list-disc list-inside">
                    <li>دکمه "آپلود عکس" را بزنید</li>
                    <li>عکس را انتخاب کنید</li>
                    <li>بعد از درج، <span className="font-bold text-blue-400">گوشه‌های آبی</span> ظاهر می‌شوند</li>
                    <li>گوشه‌ها را بکشید تا اندازه تغییر کند</li>
                    <li>عکس را بگیرید و در متن جابه‌جا کنید</li>
                </ul>
            </div>

            {/* Stats */}
            <div className="text-slate-400 text-sm text-center">
                <span>کلمات: {wordCount}</span>
                <span className="mx-3">•</span>
                <span>کاراکترها: {charCount}</span>
            </div>
        </div>
    )
}