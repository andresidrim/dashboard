import NextAuth from 'next-auth'
import { signOut } from 'next-auth/react'
import Credentials from 'next-auth/providers/credentials'
// import { validateUser } from '@/services/lib/fetchData'
// import { supabase } from '@/services/lib/supabaseClient'
// import { User } from '@/data/types'

const handler = NextAuth({
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                if (!credentials) return null

                const { email, password } = credentials

                if (
                    email === 'andrecorreasidrim@gmail.com' &&
                    password === 'senha'
                ) {
                    return {
                        id: '1',
                        name: 'André Sidrim',
                        email: 'andrecorreasidrim@gmail.com',
                    }
                }

                return null
            },
        }),
    ],
    session: {
        strategy: 'jwt',
        maxAge: 86400, // 24 hours in seconds
        updateAge: 1800, // 30 minutes in seconds
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
    // callbacks: {
    //     async session({ session, token }) {
    //         // Check if user still exists
    //         const { data, error } = await supabase
    //             .from('users')
    //             .select()
    //             .eq('id', token.sub)
    //             .single()

    //         const myUser: User = data

    //         if (error || !myUser) {
    //             // If user no longer exists, return an empty session object
    //             await signOut()
    //             return { ...session, user: undefined }
    //         }

    //         return session
    //     },
    // },
})

export { handler as GET, handler as POST }
