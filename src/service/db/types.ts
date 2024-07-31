import { ChartConfig } from '../utils/chartConfig'

export type User = {
    id: number
    created_at: Date
    updated_at: Date
    name: string
    email: string
    password: string
    team_id?: number
}

export type WorkChart = {
    id: number
    created_at: Date
    updated_at: Date
    title: string
    hours_worked: number[]
    category: string[]
    user_id: number
    config: ChartConfig
    data: object[]
    total_hours: number
}
