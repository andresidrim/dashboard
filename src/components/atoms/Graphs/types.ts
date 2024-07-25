import { ChartConfig } from '@/components/ui/chart'
import { HTMLAttributes, ReactNode } from 'react'

export type GraphProps = {
    title?: string
    description?: string
    resume?: ReactNode
    footer?: string
    config: ChartConfig
    data: object[]
} & HTMLAttributes<HTMLDivElement>
