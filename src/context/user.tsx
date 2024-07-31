'use client'

import {
    createContext,
    ReactNode,
    useContext,
    useState,
    useEffect,
} from 'react'
import { User } from '@/service/db/types'
import { getUserByEmail } from '@/service/utils/fetchData'
import { useSession } from 'next-auth/react'

type userProviderProps = { children: ReactNode }

type userContextData = {
    user: User | null
    loading: boolean
}

export const UserContext = createContext({} as userContextData)

const UserProvider = ({ children }: userProviderProps) => {
    const { data } = useSession()

    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const getUser = async () => {
            if (!data || !data.user || !data.user.email) {
                setLoading(false)
                return
            }

            const { user, success, message } = await getUserByEmail(
                data.user.email
            )

            setLoading(false)

            if (!user || !success) {
                throw new Error(message)
            }

            setUser(user)
        }

        if (!data) {
            setLoading(false)
            return
        }
        getUser()
    }, [data])

    return (
        <UserContext.Provider value={{ user, loading }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext<userContextData>(UserContext)

    if (!context) throw new Error('useUser must be used within a UserProvider')

    return context
}

export default UserProvider
