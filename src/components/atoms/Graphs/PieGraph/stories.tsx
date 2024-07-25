import { Meta, StoryObj } from '@storybook/react'
import { PieGraph } from '.'
import { GraphProps } from '../types'
import { TrendingUp } from 'lucide-react'

export default {
    title: 'Components/Atoms/PieGraph',
    component: PieGraph,
} as Meta<GraphProps>

type Story = StoryObj<GraphProps>

export const Defualt: Story = {
    args: {
        title: 'Pie Chart - Donut with Text',
        description: 'January - June 2024',
        config: {
            visitors: {
                label: 'Visitors',
            },
            chrome: {
                label: 'Chrome',
                color: 'hsl(var(--chart-1))',
            },
            safari: {
                label: 'Safari',
                color: 'hsl(var(--chart-2))',
            },
            firefox: {
                label: 'Firefox',
                color: 'hsl(var(--chart-3))',
            },
            edge: {
                label: 'Edge',
                color: 'hsl(var(--chart-4))',
            },
            banana: {
                label: 'Banana',
                color: '#ff0066',
            },
            other: {
                label: 'Other',
                color: 'hsl(var(--chart-5))',
            },
        },
        data: [
            { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
            { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
            { browser: 'firefox', visitors: 287, fill: 'var(--color-firefox)' },
            { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
            { browser: 'other', visitors: 190, fill: 'var(--color-other)' },
            { browser: 'banana', visitors: 114, fill: 'var(--color-banana' },
        ],
        resume: (
            <>
                Trending up by 5.2% this month{' '}
                <TrendingUp className='h-4 w-4' />
            </>
        ),
        footer: 'Showing total visitors for the last 6 months',
    },
}
