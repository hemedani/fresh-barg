import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import { useCallback, useState } from 'react'
import Draggable from 'react-draggable'

export const ImageResizer = ({ node, updateAttributes }: any) => {
    const [size, setSize] = useState({ width: node.attrs.width || 300, height: node.attrs.height || 'auto' })

    const handleResize = useCallback((event: any, data: any) => {
        const newWidth = Math.max(100, size.width + data.deltaX)
        setSize(prev => ({ ...prev, width: newWidth }))
        updateAttributes({ width: newWidth })
    }, [size, updateAttributes])

    return (
        <NodeViewWrapper className="image-resizer-wrapper" draggable="true">
            <Draggable onDrag={handleResize}>
                <div className="relative inline-block">
                    <img
                        src={node.attrs.src}
                        alt={node.attrs.alt}
                        style={{
                            width: size.width,
                            height: size.height,
                            maxWidth: '100%',
                            borderRadius: '0.5rem',
                            cursor: 'move'
                        }}
                        className="resizable-image"
                        draggable="false"
                    />

                    {/* Handles for resizing */}
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-500 rounded-full cursor-se-resize border-2 border-white shadow-lg" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full cursor-sw-resize border-2 border-white shadow-lg" />
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full cursor-ne-resize border-2 border-white shadow-lg" />
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-500 rounded-full cursor-nw-resize border-2 border-white shadow-lg" />
                </div>
            </Draggable>
        </NodeViewWrapper>
    )
}