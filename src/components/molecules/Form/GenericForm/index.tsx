import { forwardRef, Ref } from 'react'
import { FormProps } from '../types'
import { cn } from '@/service/utils/className'

const GenericForm = forwardRef(
    (
        { children, className, ...props }: FormProps,
        ref: Ref<HTMLFormElement>
    ) => {
        return (
            <form
                ref={ref}
                className={cn(
                    'bg-transparent flex items-center justify-center w-full h-fit gap-12 flex-col',
                    className
                )}
                {...props}
            >
                {children}
            </form>
        )
    }
)

GenericForm.displayName = 'Form'

export default GenericForm
