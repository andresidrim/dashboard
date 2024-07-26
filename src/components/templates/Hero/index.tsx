import { bungeeHairline } from '@/styles/typography/fonts'
import { cn } from '@/lib/utils'
import { StarsParticles, Button } from '@/components/atoms'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className='flex w-screen h-screen items-center justify-center bg-gradient-to-tr from-purple-950 to-pink-900 overflow-hidden flex-col gap-10'>
            <StarsParticles />
            <div className='flex flex-col gap-2 mt-6'>
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
            </div>
            <Button
                className='button-shadow'
                asChild
            >
                <Link href='/join'>Get Started!</Link>
            </Button>
        </section>
    )
}

export default Hero
