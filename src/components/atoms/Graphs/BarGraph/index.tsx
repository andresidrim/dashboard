'use client'

import { IoTrashSharp } from 'react-icons/io5'
import { BarChart, CartesianGrid, XAxis } from 'recharts'

import { GraphProps } from '../types'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart'
import { removeChartById } from '@/service/utils/removeData'

export function BarGraph({
    children,
    config,
    data,
    title,
    description,
    resume,
    footer,
    className,
    id,
    ...props
}: GraphProps) {
    return (
        <Card
            className={className}
            {...props}
        >
            <CardHeader className='relative'>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <button
                    className='text-red-400 z-50 w-fit top-5 right-6 absolute'
                    onClick={async () => {
                        await removeChartById(id)
                        location.reload()
                    }}
                >
                    <IoTrashSharp size={24} />
                </button>
            </CardHeader>
            <CardContent>
                <ChartContainer config={config}>
                    <BarChart
                        accessibilityLayer
                        data={data}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey='month'
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator='dashed' />}
                        />
                        {children}
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className='flex-col items-start gap-2 text-sm'>
                <div className='flex gap-2 font-medium leading-none'>
                    {resume}
                </div>
                <div className='leading-none text-muted-foreground'>
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}
