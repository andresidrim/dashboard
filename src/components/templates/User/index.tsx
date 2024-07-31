'use client'

import { UserPageProps } from './types'
import { cn } from '@/service/utils/className'
import { BarGraph, Button, PieGraph } from '@/components/atoms'
import { signOut } from 'next-auth/react'
import { Bar } from 'recharts'
import Link from 'next/link'
import { getChartsByUserId, getUserById } from '@/service/utils/fetchData'
import { useEffect, useState } from 'react'
import { colors } from '@/styles/graphs/colors'
import { WorkChart, type User } from '@/service/db/types'

const User = ({ id, className, ...props }: UserPageProps) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [chart, setChart] = useState<WorkChart[]>()

    useEffect(() => {
        const getUser = async () => {
            const { success, user } = await getUserById(id)

            if (!success || !user) {
                setLoading(false)
                return
            }

            setUser(user)
            setLoading(false)
        }

        if (user) {
            setLoading(false)
            return
        }
        getUser()
    }, [id, user])

    useEffect(() => {
        const getData = async () => {
            if (!user || !user.id || chart) return

            const { success, chartInfo } = await getChartsByUserId(user.id)
            console.log(chartInfo)

            if (!success || !chartInfo) return

            setChart(chartInfo)
        }

        getData()
    }, [chart, user])

    return (
        <section
            className={cn(
                'flex flex-col items-center justify-center w-full h-full text-white p-10',
                className
            )}
            {...props}
        >
            {loading ? (
                'Loading'
            ) : user ? (
                <div className='flex flex-col gap-4 w-full h-full items-center justify-center z-10'>
                    <h1 className='text-2xl font-semibold mb-10'>
                        {user.name}
                    </h1>
                    {chart ? (
                        <div className='grid grid-cols-2 gap-10'>
                            {chart.map((c, idx) => (
                                <BarGraph
                                    key={idx}
                                    id={String(c.id)}
                                    config={c.config}
                                    data={c.data}
                                    title={c.title}
                                    description='asdasd'
                                    className='min-w-[600px] w-[50%]'
                                >
                                    {c.category.map((category, idx) => (
                                        <Bar
                                            key={idx}
                                            dataKey={category}
                                            type='natural'
                                            fill={colors[idx]}
                                            fillOpacity={0.75}
                                            stroke={colors[idx]}
                                            stackId='a'
                                        />
                                    ))}
                                </BarGraph>
                            ))}
                            {chart.map((c, idx) => (
                                <PieGraph
                                    id={String(c.id)}
                                    key={idx}
                                    config={c.config}
                                    data={c.data}
                                    dataKey='hours'
                                    nameKey='category'
                                    title={c.title}
                                    totalAmount={String(c.total_hours)}
                                    className='min-w-[600px] w-[50%]'
                                />
                            ))}
                        </div>
                    ) : (
                        'No Charts Found'
                    )}
                    <Button
                        className='z-10'
                        asChild
                    >
                        <Link href={`/user/${id}/add-chart`}>Add Chart</Link>
                    </Button>
                    <Button
                        className='z-10'
                        onClick={async () => await signOut()}
                    >
                        Sign Out
                    </Button>
                </div>
            ) : (
                'User Not Found'
            )}
        </section>
    )
}

export default User
