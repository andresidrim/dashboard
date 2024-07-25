import { Meta, StoryObj } from '@storybook/react'
import Input from '.'
import { InputProps } from './types'

export default {
    title: 'Components/Atoms/Input',
    component: Input,
} as Meta<InputProps>

type Story = StoryObj<InputProps>

export const Default: Story = {
    args: {
        placeholder: 'Default',
        type: 'text',
    },
}

export const Password: Story = {
    args: {
        placeholder: 'Password',
        type: 'password',
    },
}

export const Invalid: Story = {
    args: {
        type: 'password',
        placeholder: 'Invalid',
        invalid: true,
        errorMessage: 'Password must contain at least 8 characters',
    },
}
