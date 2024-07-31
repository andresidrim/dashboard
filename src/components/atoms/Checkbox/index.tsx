'use client'

import { cn } from '@/lib/utils'
import Button from '../Button'
import { CheckboxProps } from './types'
import { useRef } from 'react'

const Checkbox = ({ children, className, ...props }: CheckboxProps) => {
    const ref = useRef<HTMLInputElement>(null)

    return (
        <Button
            className={cn('has-[:checked]:opacity-60', className)}
            asChild
        >
            <label className='relative inline-flex items-center'>
                <input
                    ref={ref}
                    type='checkbox'
                    className='absolute select-none opacity-0 inset-0 z-[-1]'
                    {...props}
                />
                {children}
            </label>
        </Button>
    )
}

export default Checkbox
