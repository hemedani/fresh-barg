'use server'

import { cookies } from 'next/headers'

export async function getActivePositionId() {
    const cookieStore = await cookies()
    return cookieStore.get('active_position_id')?.value || null
}