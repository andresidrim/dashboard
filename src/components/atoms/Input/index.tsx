'use client'

import { forwardRef, Ref, useState } from 'react'
import { cn } from '@/service/utils/className'
import { InputProps } from './types'
import { IoEye, IoEyeOff } from 'react-icons/io5'

const Input = forwardRef(
    (
        {
            invalid,
            errorMessage,
            type = 'text',
            className,
            ...props
        }: InputProps,
        ref: Ref<HTMLInputElement>
    ) => {
        const [visible, setVisible] = useState<boolean>(false)

        return (
            <div className='flex flex-col items-start justify-center gap-2 w-full'>
                <div
                    className={cn(
                        type === 'password' &&
                            'relative flex gap-4 items-center justify-center',
                        'w-full'
                    )}
                >
                    <input
                        ref={ref}
                        className={cn(
                            'bg-transparent px-3 py-1 border-solid border-b border-b-black text-black outline outline-none placeholder:italic text-lg w-full',
                            invalid && 'border-b-2 border-b-red-600',
                            className
                        )}
                        type={
                            type === 'password'
                                ? visible
                                    ? 'text'
                                    : 'password'
                                : type
                        }
                        {...props}
                    />
                    <button
                        type='button'
                        onClick={() => setVisible((currState) => !currState)}
                        className={cn(
                            type !== 'password' && 'hidden',
                            'absolute text-black right-0 translate-x-8'
                        )}
                    >
                        {visible ? <IoEye size={20} /> : <IoEyeOff size={20} />}
                    </button>
                </div>
                <span
                    className={cn(
                        !invalid && 'hidden',
                        'text-red-600 font-semibold'
                    )}
                >
                    {errorMessage}
                </span>
            </div>
        )
    }
)

Input.displayName = 'Input'

export default Input
