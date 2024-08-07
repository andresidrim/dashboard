'use client'

import * as React from 'react'
import { Label, Pie, PieChart, PieProps } from 'recharts'

import { GraphProps } from '../types'
import { cn } from '@/lib/utils'

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
import { IoTrashSharp } from 'react-icons/io5'
import { useUser } from '@/context/user'

export function PieGraph({
    config,
    data,
    title,
    description,
    resume,
    footer,
    className,
    totalAmount,
    dataKey,
    nameKey,
}: GraphProps & PieProps & { totalAmount: string }) {
    const { user } = useUser()

    return (
        <Card className={cn('flex flex-col', className)}>
            <CardHeader className='relative items-center pb-0'>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                {user && (
                    <button className='text-red-400 z-50 w-fit top-5 right-6 absolute'>
                        <IoTrashSharp size={24} />
                    </button>
                )}
            </CardHeader>
            <CardContent className='flex-1 pb-0'>
                <ChartContainer
                    config={config}
                    className='mx-auto aspect-square max-h-[250px]'
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={data}
                            dataKey={dataKey}
                            nameKey={nameKey}
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (
                                        viewBox &&
                                        'cx' in viewBox &&
                                        'cy' in viewBox
                                    ) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor='middle'
                                                dominantBaseline='middle'
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className='fill-foreground text-3xl font-bold'
                                                >
                                                    {totalAmount}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className='fill-muted-foreground'
                                                >
                                                    Hours Worked
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className='flex-col gap-2 text-sm'>
                <div className='flex items-center gap-2 font-medium leading-none'>
                    {resume}
                </div>
                <div className='leading-none text-muted-foreground'>
                    {footer}
                </div>
            </CardFooter>
        </Card>
    )
}
