import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
    asChild?: boolean
    loading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>
