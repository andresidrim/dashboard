'use client'

import { Slot } from '@radix-ui/react-slot'
import { forwardRef, Ref } from 'react'
import { LinkProps } from './types'
import { cn } from '@/service/utils/className'

const Link = forwardRef(
    (
        { asChild, children, className, ...props }: LinkProps,
        ref: Ref<HTMLAnchorElement>
    ) => {
        const Component = asChild ? Slot : 'a'

        return (
            <Component
                ref={ref}
                className={cn(
                    'text-black opacity-65 text-lg font-semibold underline decoration-transparent hover:decoration-black hover:opacity-100 transition-all duration-150 ease-in-out',
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        )
    }
)

Link.displayName = 'Link'

export default Link
