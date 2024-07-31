'use client'

import { bungeeHairline } from '@/styles/typography/fonts'
import { cn } from '@/service/utils/className'
import { Button } from '@/components/atoms'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className='flex w-screen h-screen items-center justify-center overflow-hidden flex-col gap-10'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                viewport={{ once: true }}
                className='flex flex-col gap-2 mt-6'
            >
                <h1
                    className={cn(
                        'text-7xl dashboard-glow text-white',
                        bungeeHairline.className
                    )}
                >
                    DASHBOARD
                </h1>
                <p className='text-white text-lg whitespace-pre-line text-center font-extralight tracking-widest'>
                    {
                        'Manage and Control your productivity\neasily and quickly with Dashboard'
                    }
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
                viewport={{ once: true }}
            >
                <Button
                    className='button-shadow'
                    asChild
                >
                    <Link href='/join'>Get Started!</Link>
                </Button>
            </motion.div>
        </section>
    )
}

export default Hero
