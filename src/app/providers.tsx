'use client'

import FormProvider from '@/context/form'
import { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => (
    <FormProvider>{children}</FormProvider>
)
