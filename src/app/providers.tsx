'use client'

import FormProvider from '@/context/form'
import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

export const Providers = ({ children }: { children: ReactNode }) => (
    <SessionProvider refetchOnWindowFocus={false}>
        <FormProvider>{children}</FormProvider>
    </SessionProvider>
)
