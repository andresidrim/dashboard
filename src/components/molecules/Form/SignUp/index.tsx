'use client'

import GenericForm from '../GenericForm'
import { cn } from '@/service/utils/className'
import { FormProps } from '../types'
import { Input, Button, Link } from '@/components/atoms'
import { forwardRef, Ref, useState } from 'react'
import { useForm } from '@/context/form'

const SignUp = forwardRef(
    ({ className, ...props }: FormProps, ref: Ref<HTMLFormElement>) => {
        const { current, changeState } = useForm()

        const [name, setName] = useState<string>('')
        const [email, setEmail] = useState<string>('')
        const [password, setPassword] = useState<string>('')

        return (
            <GenericForm
                ref={ref}
                className={cn(
                    'px-24 bg-white min-w-[552px] w-[552px] min-h-[100vh] rounded-r-[28px] form-shadow duration-300 transition-opacity ease-in-out z-10',
                    !current &&
                        'opacity-0 duration-300 transition-opacity ease-in-out z-0',
                    className
                )}
                {...props}
            >
                <h1 className='text-black font-bold text-[42px] text-start w-full mb-4'>
                    Sign Up
                </h1>
                <Input
                    placeholder='Full Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    placeholder='youremail@example.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder='********'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    className={cn('w-full', !current && 'pointer-events-none')}
                >
                    Sign Up
                </Button>
                <Link asChild>
                    <button
                        onClick={() => changeState()}
                        type='button'
                        className={cn(!current && 'pointer-events-none')}
                    >
                        Already has an account? Sign In
                    </button>
                </Link>
            </GenericForm>
        )
    }
)

SignUp.displayName = 'SignUp'

export default SignUp
