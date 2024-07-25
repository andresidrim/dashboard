import React from 'react'
import type { Preview } from '@storybook/react'
import '../src/app/globals.css'
import { Providers } from '../src/app/providers'

const preview: Preview = {
    decorators: [
        (Story) => (
            <Providers>
                <div className='grid place-content-center min-h-[100vh] w-full'>
                    <Story />
                </div>
            </Providers>
        ),
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    tags: ['autodocs'],
}

export default preview
