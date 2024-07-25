'use client'

import { Slot } from '@radix-ui/react-slot'
import { forwardRef, Ref } from 'react'
import { cn } from '@/service/utils/className'
import { ButtonProps } from './types'

const Button = forwardRef(
    (
        { asChild, loading, children, className, ...props }: ButtonProps,
        ref: Ref<HTMLButtonElement>
    ) => {
        const Component = asChild ? Slot : 'button'

        return (
            <Component
                ref={ref}
                className={cn(
                    'flex items-center justify-center bg-pink-600 py-3 px-4 rounded-sm text-xl font-semibold hover:bg-pink-700 active:bg-pink-800 transition-all duration-200 ease-in-out outline outline-none focus-visible:outline-pink-600 focus-visible:outline-offset-8 min-w-5 min-h-5',
                    loading && 'opacity-80',
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        )
    }
)

Button.displayName = 'Button'

export default Button
