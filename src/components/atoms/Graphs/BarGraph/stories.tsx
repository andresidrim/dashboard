import { Meta, StoryObj } from '@storybook/react'
import { BarGraph } from '.'
import { GraphProps } from '../types'
import { Bar } from 'recharts'
import { TrendingUp } from 'lucide-react'

export default {
    title: 'Components/Atoms/BarGraph',
    component: BarGraph,
} as Meta<GraphProps>

type Story = StoryObj<GraphProps>

export const Default: Story = {
    args: {
        title: 'Bar Chart - Multiple',
        description: 'January - June 2024',
        children: (
            <>
                <Bar
                    dataKey='desktop'
                    fill='var(--color-desktop)'
                    radius={4}
                />
                <Bar
                    dataKey='mobile'
                    fill='var(--color-mobile)'
                    radius={4}
                />
            </>
        ),
        resume: (
            <>
                Trending up by 5.2% this month{' '}
                <TrendingUp className='h-4 w-4' />
            </>
        ),
        footer: 'Showing total visitors for the last 6 months',
        data: [
            { month: 'January', desktop: 186, mobile: 80 },
            { month: 'February', desktop: 305, mobile: 200 },
            { month: 'March', desktop: 237, mobile: 120 },
            { month: 'April', desktop: 73, mobile: 190 },
            { month: 'May', desktop: 209, mobile: 130 },
            { month: 'June', desktop: 214, mobile: 140 },
        ],
        config: {
            desktop: {
                label: 'Desktop',
                color: 'hsl(var(--chart-1))',
            },
            mobile: {
                label: 'Mobile',
                color: 'hsl(var(--chart-2))',
            },
        },
    },
}
