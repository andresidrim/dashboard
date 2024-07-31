'use client'

import { SignUp, SignIn } from '@/components/molecules'
import { cn } from '@/service/utils/className'
import { bungeeHairline } from '@/styles/typography/fonts'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/context/user'
import { motion } from 'framer-motion'

const Join = () => {
    const router = useRouter()
    const { user, loading } = useUser()

    useEffect(() => {
        if (!user) return

        router.push(`/user/${user.id}`)
    }, [router, user])

    return (
        <section className='flex w-screen h-screen items-center justify-start overflow-hidden'>
            {loading ? (
                <div className='flex w-full h-full items-center justify-center'>
                    <p className='text-white text-9xl text-center font-extralight tracking-widest'>
                        LOADING
                    </p>
                </div>
            ) : (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut',
                            delay: 0.5,
                        }}
                        className='relative min-w-[552px] h-full'
                    >
                        <div className='absolute bg-white min-w-[552px] w-[552px] min-h-[100vh] rounded-r-[28px]' />
                        <SignUp className='absolute' />
                        <SignIn className='absolute' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut',
                            delay: 0.5,
                        }}
                        className='flex flex-col items-center justify-center w-full'
                    >
                        <h1
                            className={cn(
                                'text-7xl dashboard-glow text-white',
                                bungeeHairline.className
                            )}
                        >
                            DASHBOARD
                        </h1>
                    </motion.div>
                </>
            )}
        </section>
    )
}

export default Join
