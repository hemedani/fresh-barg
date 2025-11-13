'use server'

import { cookies } from 'next/headers'

export async function setActivePosition(positionId: string) {
    const cookieStore = await cookies()
    cookieStore.set('active_position_id', positionId, {
        httpOnly: false,    // کلاینت بتونه بخونه
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 30, // ۳۰ روز
    })
}