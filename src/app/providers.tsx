'use client'

import FormProvider from '@/context/form'
import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import UserProvider from '@/context/user'

export const Providers = ({ children }: { children: ReactNode }) => (
    <SessionProvider refetchOnWindowFocus={false}>
        <UserProvider>
            <FormProvider>{children}</FormProvider>
        </UserProvider>
    </SessionProvider>
)
