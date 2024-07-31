import { InputHTMLAttributes } from 'react'

export type InputProps = {
    errorMessage?: string
} & InputHTMLAttributes<HTMLInputElement>
