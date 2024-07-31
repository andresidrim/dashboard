'use server'

import NextAuth from 'next-auth'
import { signOut } from 'next-auth/react'
import Credentials from 'next-auth/providers/credentials'
import { getUserByEmail, getUserById } from '@/service/utils/fetchData'
import bcrypt from 'bcryptjs'

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

                const { success, user } = await getUserByEmail(
                    credentials.email
                )

                if (!success || !user) return null

                const validPassword = await bcrypt.compare(
                    credentials.password,
                    user.password
                )

                if (!validPassword) return null

                return {
                    id: String(user.id),
                    email: user.email,
                    name: user.name,
                }
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
    callbacks: {
        async session({ session, token }) {
            // Ensure token.sub is present
            if (!token.sub) {
                session.user = undefined
                return session
            }

            // Fetch user by ID
            const { success, user } = await getUserById(token.sub)

            if (!success || !user) {
                // Invalidate the session if the user no longer exists
                await signOut()
                session.user = undefined
            } else {
                // Populate session with user data
                session.user = {
                    email: user.email,
                    name: user.name,
                }
            }

            return session
        },
    },
})

export { handler as GET, handler as POST }
