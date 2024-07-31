import { ChartConfig } from '@/service/utils/chartConfig'
import { HTMLAttributes, ReactNode } from 'react'

export type GraphProps = {
    title?: string
    description?: string
    resume?: ReactNode
    footer?: string
    config: ChartConfig
    data: object[]
    id: number | string
} & HTMLAttributes<HTMLDivElement>
