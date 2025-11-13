'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { setActivePosition } from '@/app/actions/position/setActivePosition'

interface Position {
    _id: string
    name: string
    level?: string
    unit?: string
    permissions?: string[]
}

interface PositionContextType {
    positions: Position[]
    activePosition: Position | null
    setActive: (position: Position) => Promise<void>
    loading: boolean
}

const PositionContext = createContext<PositionContextType | undefined>(undefined)

export function PositionProvider({
    children,
    initialPositions,
    initialActiveId,
}: {
    children: ReactNode
    initialPositions: Position[]
    initialActiveId: string | null
}) {
    const [positions] = useState<Position[]>(initialPositions)
    const [activePosition, setActivePositionState] = useState<Position | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const setupActivePosition = async () => {
            let active: Position | null = null

            if (initialActiveId) {
                // اگر کوکی داشت
                active = positions.find(p => p._id === initialActiveId) || null
            }

            // اگر کوکی نداشت یا نقش پیدا نشد → اولین نقش رو انتخاب کن
            if (!active && positions.length > 0) {
                active = positions[0]
                // ذخیره در کوکی برای دفعات بعد
                await setActivePosition(active._id)
            }

            setActivePositionState(active)
            setLoading(false)
        }

        setupActivePosition()
    }, [initialActiveId, positions])

    const setActive = async (position: Position) => {
        setActivePositionState(position)
        await setActivePosition(position._id)
    }

    return (
        <PositionContext.Provider value={{ positions, activePosition, setActive, loading }}>
            {children}
        </PositionContext.Provider>
    )
}

export const usePosition = () => {
    const ctx = useContext(PositionContext)
    if (!ctx) throw new Error('usePosition must be used within PositionProvider')
    return ctx
}