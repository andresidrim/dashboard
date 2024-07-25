'use client'

import { AreaChart, CartesianGrid, XAxis } from 'recharts'

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

export function AreaGraph({
    children,
    title,
    resume,
    description,
    footer,
    config,
    data,
    className,
    ...props
}: GraphProps) {
    return (
        <Card
            className={className}
            {...props}
        >
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={config}>
                    <AreaChart
                        accessibilityLayer
                        data={data}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey='month'
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator='dot' />}
                        />
                        {children}
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className='flex w-full items-start gap-2 text-sm'>
                    <div className='grid gap-2'>
                        <div className='flex items-center gap-2 font-medium leading-none'>
                            {resume}
                        </div>
                        <div className='flex items-center gap-2 leading-none text-muted-foreground'>
                            {footer}
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
