import { Meta, StoryObj } from '@storybook/react'
import Button from '.'
import { ButtonProps } from './types'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default {
    title: 'Components/Atoms/Button',
    component: Button,
} as Meta<ButtonProps>

type Story = StoryObj<ButtonProps>

export const Default: Story = {
    args: {
        children: 'Default',
    },
}

export const AsChild: Story = {
    args: {
        asChild: true,
        children: <a href='https://google.com'>As Child</a>,
    },
}

export const Loading: Story = {
    args: {
        loading: true,
        children: (
            <AiOutlineLoading3Quarters
                size={28}
                className='animate-spin'
            />
        ),
    },
}
