'use server'

import { createClient } from './supabase/client'
import { WorkChart, User } from '../db/types'
import { ChartConfig, generateChartData, generateConfig } from './chartConfig'

const supabase = createClient()

export const getUserByEmail = async (
    email: string
): Promise<{ success: boolean; user?: User; message: string }> => {
    const { data, error } = await supabase
        .from('users')
        .select()
        .eq('email', email)
        .single()

    if (error) {
        console.error(error.code, error.message, error.details, error.hint)
        return { success: false, message: error.message }
    }

    if (!data) {
        console.error('User Not Found')
        return { success: false, message: 'User Not Found' }
    }

    const user: User = data

    console.log('User Found')
    return { success: true, user, message: 'User Found' }
}

export const getUserById = async (
    id: number | string
): Promise<{ success: boolean; user?: User; message: string }> => {
    const { data, error } = await supabase
        .from('users')
        .select()
        .eq('id', id)
        .single()

    if (error) {
        console.error(error.code, error.message, error.details, error.hint)
        return { success: false, message: error.message }
    }

    if (!data) {
        console.error('User Not Found')
        return { success: false, message: 'User Not Found' }
    }

    const user: User = data

    console.log('User Found')
    return { success: true, user, message: 'User Found' }
}

export const getChartsByUserId = async (
    userId: number | string
): Promise<{
    success: boolean
    chartInfo?: WorkChart[]
    message: string
}> => {
    const { data, error } = await supabase
        .from('data')
        .select()
        .eq('user_id', userId)

    if (error) {
        console.error(error.code, error.message, error.details, error.hint)
        return { success: false, message: error.message }
    }

    if (!data) {
        console.error('Chart Not Found')
        return { success: false, message: 'Chart Not Found' }
    }

    const chartInfo: WorkChart[] = data

    return { success: true, chartInfo, message: 'worked' }
}
