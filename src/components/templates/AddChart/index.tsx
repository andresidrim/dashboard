'use client'

import { cn } from '@/lib/utils'
import { AddChartProps } from './types'
import { ChartForm } from '@/components/molecules'
import { useUser } from '@/context/user'
import { Button } from '@/components/atoms'
import Link from 'next/link'

const AddChart = ({ className, ...props }: AddChartProps) => {
    const { user, loading } = useUser()

    return (
        <section
            className={cn(
                'w-full h-full flex items-center justify-start overflow-hidden',
                className
            )}
            {...props}
        >
            {loading ? (
                'loading'
            ) : user ? (
                <>
                    <ChartForm />
                    <div className='flex items-center justify-center w-full h-full text-white font-bold text-3xl'>
                        PREVIEW HERE
                    </div>
                </>
            ) : (
                <div className='flex flex-col w-full h-full items-center justify-center text-white gap-8'>
                    <h1 className='text-4xl font-bold whitespace-pre-line text-center'>
                        {'Sign In to Add Charts\nto your account'}
                    </h1>
                    <Button
                        asChild
                        className='z-10'
                    >
                        <Link href='/join'>Sign In</Link>
                    </Button>
                </div>
            )}
        </section>
    )
}

export default AddChart
