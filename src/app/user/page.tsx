'use client'

import { useRouter } from 'next/navigation'
import { useUser } from '@/context/user'
import { useEffect } from 'react'
import { Button } from '@/components/atoms'
import Link from 'next/link'

export default function RedirectUser() {
    const { user, loading } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (!user) return

        router.push(`/user/${user.id}`)
    }, [loading, router, user])

    return (
        <div className='flex flex-col items-center justify-center text-white w-screen h-screen overflow-hidden'>
            {loading ? (
                'loading'
            ) : user ? (
                user.name
            ) : (
                <>
                    <h1 className='text-5xl'>You are not logged in</h1>
                    <Button asChild>
                        <Link href='/join'>Sign In</Link>
                    </Button>
                </>
            )}
        </div>
    )
}
