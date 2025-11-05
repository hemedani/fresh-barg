import { Editor } from '@tiptap/react'
import { Printer } from 'lucide-react'

interface PrintButtonProps {
    editor: Editor
}

export const PrintButton = ({ editor }: PrintButtonProps) => {
    const handlePrint = () => {
        const content = editor.getText() // فقط متن ساده
        const printWindow = window.open('', '_blank')

        if (printWindow) {
            printWindow.document.write(`
        <!DOCTYPE html>
        <html dir="rtl">
        <head>
          <title>چاپ نامه</title>
          <style>
            body { 
              font-family: 'B Nazanin', 'Tahoma', sans-serif; 
              line-height: 2;
              padding: 2cm;
              color: #000;
            }
            .letter-content {
              white-space: pre-wrap;
              font-size: 14pt;
            }
            @media print {
              body { margin: 0; }
            }
          </style>
        </head>
        <body>
          <div class="letter-content">${content}</div>
        </body>
        </html>
      `)

            printWindow.document.close()
            printWindow.focus()
            printWindow.print()
        }
    }

    return (
        <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            title="چاپ نامه"
        >
            <Printer size={18} />
            چاپ
        </button>
    )
}