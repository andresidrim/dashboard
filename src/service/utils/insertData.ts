'use server'

import { createClient } from './supabase/server'
import { cookies } from 'next/headers'
import bcrypt from 'bcryptjs'
import { ChartConfig, generateChartData, generateConfig } from './chartConfig'

const cookieStore = cookies()
const supabase = createClient(cookieStore)

export const insertUser = async (
    name: string,
    email: string,
    password: string
): Promise<{ success: boolean; message: string }> => {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)

    const { error } = await supabase.from('users').insert({
        name,
        email,
        password: hashedPassword,
        updated_at: new Date(),
    })

    if (error) {
        console.error(error.code, error.message, error.details, error.hint)
        return { success: false, message: error.message }
    }

    console.log('User Created Successfully!')
    return { success: true, message: 'User Created Successfully!' }
}

export const insertChartDataById = async (
    userId: number | string,
    title: string,
    hoursWorked: number[],
    category: string[]
): Promise<{ success: boolean; message: string }> => {
    const chartConfig: ChartConfig = generateConfig(category)
    const chartData = generateChartData(category, hoursWorked)
    const totalHours = hoursWorked.reduce((acc, cur) => acc + cur, 0)

    const { error } = await supabase.from('data').insert({
        title,
        category,
        hours_worked: hoursWorked,
        user_id: userId,
        config: chartConfig,
        data: chartData,
        total_hours: totalHours,
        updated_at: new Date(),
    })

    if (error) {
        console.error(error.code, error.message, error.details, error.hint)
        return { success: false, message: error.message }
    }

    console.log('Chart Created')
    return { success: true, message: 'Chart Created' }
}
