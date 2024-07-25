import { bungeeHairline } from '@/styles/typography/fonts'
import { cn } from '@/lib/utils'
import StarsParticles from '@/components/atoms/StarsParticles'

const Hero = () => {
    return (
        <section className='flex w-screen h-screen items-center justify-center bg-gradient-to-tr from-purple-950 to-pink-900 overflow-hidden flex-col gap-2'>
            <StarsParticles />
            <h1
                className={cn(
                    'text-7xl dashboard-glow text-white',
                    bungeeHairline.className
                )}
            >
                DASHBOARD
            </h1>
            <p className='text-white text-lg whitespace-pre-line text-center'>
                {
                    'Manage and Control your productivity\neasily and quickly with Dashboard'
                }
            </p>
        </section>
    )
}

export default Hero
