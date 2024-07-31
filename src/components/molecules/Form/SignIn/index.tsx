'use client'

import GenericForm from '../GenericForm'
import { cn } from '@/service/utils/className'
import { FormProps } from '../types'
import { Input, Button, Link } from '@/components/atoms'
import { forwardRef, Ref } from 'react'
import { useJoin } from '@/context/form'
import { signIn } from 'next-auth/react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { SignInSchema, signInSchema } from '@/schema/validation'

const SignIn = forwardRef(
    ({ className, ...props }: FormProps, ref: Ref<HTMLFormElement>) => {
        const { current, changeState } = useJoin()

        const {
            register,
            handleSubmit,
            formState: { errors, isSubmitting },
        } = useForm<SignInSchema>({
            resolver: zodResolver(signInSchema),
            mode: 'all',
        })

        const onSubmit: SubmitHandler<SignInSchema> = async (data) => {
            await signIn('credentials', {
                redirect: false,
                email: data.email,
                password: data.password,
            })
        }

        return (
            <GenericForm
                onSubmit={handleSubmit(onSubmit)}
                ref={ref}
                className={cn(
                    'px-24 bg-white min-w-[552px] w-[552px] min-h-[100vh] rounded-r-[28px] form-shadow duration-300 transition-opacity ease-in-out z-10',
                    current &&
                        'opacity-0 duration-300 transition-opacity ease-in-out z-0',
                    className
                )}
                {...props}
            >
                <h1 className='text-black font-bold text-[42px] text-start w-full mb-4'>
                    Sign In
                </h1>
                <Input
                    placeholder='youremail@example.com'
                    {...register('email')}
                    errorMessage={errors.email?.message}
                />
                <Input
                    placeholder='********'
                    type='password'
                    {...register('password')}
                    errorMessage={errors.password?.message}
                />
                <Button
                    className={cn('w-full', current && 'pointer-events-none')}
                    loading={isSubmitting}
                >
                    Sign In
                </Button>
                <Link asChild>
                    <button
                        onClick={() => changeState()}
                        type='button'
                        className={cn(current && 'pointer-events-none')}
                    >
                        Does not have an account? Sign Up
                    </button>
                </Link>
            </GenericForm>
        )
    }
)

SignIn.displayName = 'SignIn'

export default SignIn
