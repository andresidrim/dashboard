'use server'

import { WorkChart } from '../db/types'
import { createClient } from './supabase/server'
import { cookies } from 'next/headers'

const cookieStore = cookies()
const supabase = createClient(cookieStore)

export const removeChartById = async (
    id: number | string
): Promise<{ success: boolean; message: string; deletedChart?: WorkChart }> => {
    const { data, error } = await supabase.from('data').delete().eq('id', id)

    if (error) {
        console.error(error.code, error.message, error.details, error.hint)
        return { success: false, message: error.message }
    }

    if (!data) {
        console.error('Chart does not exist')
        return { success: false, message: 'Chart does not exist' }
    }

    const deletedChart: WorkChart = data

    console.log('Chart deleted')
    return { success: true, message: 'Chart deleted', deletedChart }
}
