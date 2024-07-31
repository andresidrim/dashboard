'use client'

import GenericForm from '../GenericForm'
import { cn } from '@/service/utils/className'
import { FormProps } from '../types'
import { Input, Button, Checkbox } from '@/components/atoms'
import { ChangeEvent, FormEvent, forwardRef, Ref, useState } from 'react'
import { categories } from '@/service/utils/chartConfig'
import { insertChartDataById } from '@/service/utils/insertData'
import { useRouter } from 'next/navigation'
import { useUser } from '@/context/user'

const ChartForm = forwardRef(
    ({ className, ...props }: FormProps, ref: Ref<HTMLFormElement>) => {
        const { user } = useUser()

        const router = useRouter()

        const [loading, setLoading] = useState<boolean>(false)
        const [title, setTitle] = useState<string>('')
        const [selectedCategories, setSelectedCategories] = useState<string[]>(
            []
        )
        const [hours, setHours] = useState<number[]>([])

        const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
            const { value, checked } = e.target
            setSelectedCategories((prevSelected) => {
                if (checked) {
                    return [...prevSelected, value]
                } else {
                    return prevSelected.filter((category) => category !== value)
                }
            })
        }

        const handleSubmit = async (e: FormEvent) => {
            setLoading(true)

            e.preventDefault()

            if (!user || !user.id) {
                setLoading(false)
                return
            }

            await insertChartDataById(user.id, title, hours, selectedCategories)

            setLoading(false)

            router.push('/user')
        }

        return (
            <GenericForm
                onSubmit={handleSubmit}
                ref={ref}
                className={cn(
                    'px-24 bg-white min-w-[552px] w-[552px] min-h-[100vh] h-full rounded-r-[28px] form-shadow duration-300 transition-opacity ease-in-out z-10',
                    className
                )}
                {...props}
            >
                <h1 className='text-black font-bold text-[42px] text-start w-full mb-4'>
                    Create Chart
                </h1>
                <Input
                    placeholder='Chart Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <h2 className='w-full font-bold text-xl'>Select Categories</h2>
                <div className='grid grid-cols-2 place-items-center w-full gap-10'>
                    {categories.map((category) => (
                        <Checkbox
                            key={category.id}
                            className='text-sm cursor-pointer'
                            value={category.id}
                            onChange={handleCheckboxChange}
                        >
                            {category.label}
                        </Checkbox>
                    ))}
                </div>
                {selectedCategories.map((category, idx) => (
                    <Input
                        key={idx}
                        placeholder={category}
                        onChange={(e) =>
                            setHours((prevHours) => {
                                const updatedHours = [...prevHours]
                                updatedHours[idx] = Number(e.target.value)
                                return updatedHours
                            })
                        }
                    />
                ))}
                <Button
                    className={cn('w-full')}
                    loading={loading}
                >
                    Create Chart
                </Button>
            </GenericForm>
        )
    }
)

ChartForm.displayName = 'ChartForm'

export default ChartForm
