'use client'

import GenericForm from '../GenericForm'
import { cn } from '@/service/utils/className'
import { FormProps } from '../types'
import { Input, Button, Link } from '@/components/atoms'
import { forwardRef, Ref } from 'react'
import { useJoin } from '@/context/form'
import { signIn } from 'next-auth/react'

import { insertUser } from '@/service/utils/insertData'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signUpSchema, SignUpSchema } from '@/schema/validation'

const SignUp = forwardRef(
    ({ className, ...props }: FormProps, ref: Ref<HTMLFormElement>) => {
        const { current, changeState } = useJoin()

        const {
            register,
            handleSubmit,
            formState: { errors, isSubmitting },
        } = useForm<SignUpSchema>({
            resolver: zodResolver(signUpSchema),
            mode: 'all',
        })

        const onSubmit: SubmitHandler<SignUpSchema> = async (data) => {
            await insertUser(data.name, data.email, data.password)

            await signIn('credentials', {
                redirect: false,
                name: data.name,
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
                    {...register('name')}
                    errorMessage={errors.name?.message}
                />
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
                    className={cn('w-full', !current && 'pointer-events-none')}
                    loading={isSubmitting}
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
