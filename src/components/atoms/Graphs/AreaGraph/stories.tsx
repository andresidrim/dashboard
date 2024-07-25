import { Meta, StoryObj } from '@storybook/react'
import { AreaGraph } from '.'
import { GraphProps } from '../types'
import { TrendingUp } from 'lucide-react'
import { Area } from 'recharts'

export default {
    title: 'Components/Atoms/AreaGraph',
    component: AreaGraph,
} as Meta<GraphProps>

type Story = StoryObj<GraphProps>

export const Default: Story = {
    args: {
        title: 'Area Chart - Stacked',
        description: 'Showing total visitors for the last 6 months',
        resume: (
            <>
                Trending up by 5.2% this month{' '}
                <TrendingUp className='ml-2 h-4 w-4' />
            </>
        ),
        footer: 'January - June 2024',
        children: (
            <>
                <Area
                    dataKey='mobile'
                    type='natural'
                    fill='var(--color-mobile)'
                    fillOpacity={0.4}
                    stroke='var(--color-mobile)'
                    stackId='a'
                />
                <Area
                    dataKey='desktop'
                    type='natural'
                    fill='var(--color-desktop)'
                    fillOpacity={0.4}
                    stroke='var(--color-desktop)'
                    stackId='a'
                />
            </>
        ),
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
        data: [
            { month: 'January', desktop: 186, mobile: 80 },
            { month: 'February', desktop: 305, mobile: 200 },
            { month: 'March', desktop: 237, mobile: 120 },
            { month: 'April', desktop: 73, mobile: 190 },
            { month: 'May', desktop: 209, mobile: 130 },
            { month: 'June', desktop: 214, mobile: 140 },
        ],
    },
}
