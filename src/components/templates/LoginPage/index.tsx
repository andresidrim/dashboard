import StarsParticles from '@/components/atoms/StarsParticles'
import { SignUp, SignIn } from '@/components/molecules'
import { cn } from '@/service/utils/className'
import { bungeeHairline } from '@/styles/typography/fonts'

const LoginPage = () => {
    return (
        <section className='flex w-screen h-screen items-center justify-start bg-gradient-to-tr from-purple-950 to-pink-900 overflow-hidden'>
            <StarsParticles />
            <div className='relative min-w-[552px] h-full'>
                <div className='absolute bg-white min-w-[552px] w-[552px] min-h-[100vh] rounded-r-[28px]' />
                <SignUp className='absolute' />
                <SignIn className='absolute' />
            </div>
            <div className='flex flex-col items-center justify-center w-full'>
                <h1
                    className={cn(
                        'text-7xl dashboard-glow text-white',
                        bungeeHairline.className
                    )}
                >
                    DASHBOARD
                </h1>
            </div>
        </section>
    )
}

export default LoginPage
