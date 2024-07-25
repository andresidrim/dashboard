import { AnchorHTMLAttributes } from 'react'

export type LinkProps = {
    asChild?: boolean
} & AnchorHTMLAttributes<HTMLAnchorElement>
