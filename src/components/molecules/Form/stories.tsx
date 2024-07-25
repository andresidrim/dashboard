import { Meta, StoryObj } from '@storybook/react'
import { SignUp } from '.'
import { FormProps } from './types'

export default {
    title: 'Components/Molecules/Form',
} as Meta<FormProps>

type Story = StoryObj<FormProps>

export const Default: Story = {
    render: () => <SignUp />,
}
