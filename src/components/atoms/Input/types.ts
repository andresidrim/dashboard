import { InputHTMLAttributes } from 'react'

export type InputProps = {
    invalid?: boolean
    errorMessage?: string
} & InputHTMLAttributes<HTMLInputElement>
