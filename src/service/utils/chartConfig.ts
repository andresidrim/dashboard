import { colors } from '@/styles/graphs/colors'

export type ChartCategory = {
    id: string
    label: string
    color: string
}

export type ChartConfig = {
    [key: string]: {
        label: string
        color: string
    }
}

export const categories: ChartCategory[] = [
    {
        id: 'frontend',
        label: 'Frontend Development',
        color: 'hsl(var(--chart-1))',
    },
    {
        id: 'backend',
        label: 'Backend Development',
        color: 'hsl(var(--chart-2))',
    },
]

export const generateConfig = (selectedCategories: string[]): ChartConfig => {
    const config: ChartConfig = {}

    selectedCategories.forEach((id) => {
        const foundCategory = categories.find((category) => category.id === id)

        if (foundCategory) {
            config[foundCategory.id] = {
                label: foundCategory.label,
                color: foundCategory.color,
            }
        }
    })

    return config
}

export const generateChartData = (
    selectedCategories: string[],
    hours: number[]
) => {
    return selectedCategories.map((category, idx) => ({
        category,
        fill: colors[idx],
        hours: hours[idx] || 0,
        [category]: hours[idx] || 0,
    }))
}
