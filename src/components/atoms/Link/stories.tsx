import { Meta, StoryObj } from '@storybook/react'
import Link from '.'
import { LinkProps } from './types'

export default {
    title: 'Components/Atoms/Link',
    component: Link,
} as Meta<LinkProps>

type Story = StoryObj<LinkProps>

export const Default: Story = {
    args: {
        children: 'Default',
        href: 'https://google.com',
    },
}

export const AsChild: Story = {
    args: {
        asChild: true,
        children: <button>AsChild</button>,
    },
}
