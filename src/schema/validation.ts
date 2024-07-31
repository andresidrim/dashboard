import { z } from 'zod'

export const signInSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must have at least 6 characters'),
})

export type SignInSchema = z.infer<typeof signInSchema>

export const signUpSchema = z.object({
    name: z.string().min(1, 'Name must have at least 1 character'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must have at least 6 characters'),
})

export type SignUpSchema = z.infer<typeof signUpSchema>

export const addChartSchema = z.object({
    title: z.string().min(1, 'Title must have at least 1 character'),
    // description: z
    //     .string()
    //     .min(1, 'Description must have at least 1 character'),
    // selectedCategories: z
    //     .array(z.string())
    //     .min(1, 'At least one category is required'),
    // hours: z.number().positive('Hours must be a positive number'),
})

export type AddChartSchema = z.infer<typeof addChartSchema>
