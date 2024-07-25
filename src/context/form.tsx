'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

type formProviderProps = { children: ReactNode }

type formContextData = {
    current: boolean
    changeState: () => void
}

export const FormContext = createContext({} as formContextData)

const FormProvider = ({ children }: formProviderProps) => {
    const [current, setCurrent] = useState<boolean>(true)

    const changeState = () => {
        setCurrent((currState) => !currState)
    }

    return (
        <FormContext.Provider value={{ current, changeState }}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () => {
    const context = useContext<formContextData>(FormContext)

    if (!context) throw new Error('useForm must be used within a FormProvider')

    return context
}

export default FormProvider