'use client'

import React, { useEffect, useMemo } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadStarsPreset } from '@tsparticles/preset-stars'
import { type ISourceOptions } from '@tsparticles/engine'

const StarsParticles = ({ className }: { className?: string }) => {
    useEffect(() => {
        initParticlesEngine(async (engine) => await loadStarsPreset(engine))
    }, [])

    const options: ISourceOptions = useMemo(
        () => ({
            fpsLimit: 144,
            background: {
                opacity: 0,
            },
            particles: {
                opacity: {
                    value: 0.3,
                },
            },
            preset: 'stars',
        }),
        []
    )

    return (
        <Particles
            className={className}
            id='tsparticles'
            options={options}
        />
    )
}

export default StarsParticles
