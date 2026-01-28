import React, { Suspense, lazy } from 'react'
import Hero1 from './components/Hero1'

// Lazy load components below the fold for better initial load performance
const Hero2 = lazy(() => import('./components/Hero2/Hero2'))
const Hero3 = lazy(() => import('./components/Hero3'))
const Hero4 = lazy(() => import('./components/Hero4/Hero4'))
const Hero5 = lazy(() => import('./components/Hero5'))
const Hero6 = lazy(() => import('./components/Hero6/Hero6'))
const Hero7 = lazy(() => import('./components/Hero7'))
const Hero8 = lazy(() => import('./components/Hero8'))

// Loading fallback component
const ComponentLoader = () => (
    <div className="w-full h-[200px] flex items-center justify-center">
        <div className="text-white">Loading...</div>
    </div>
)

const MainContent = () => {
    return (
        <div className='h-full w-full flex flex-col items-center overflow-hidden'>
            {/* Hero1 loads immediately - it's above the fold */}
            <Hero1 />

            <div className='order-4 sm:order-2'>
                <Suspense fallback={<ComponentLoader />}>
                    <Hero2 />
                </Suspense>
            </div>

            <div className='order-2 sm:order-3'>
                <Suspense fallback={<ComponentLoader />}>
                    <Hero3 />
                </Suspense>
            </div>

            <div className='order-3 sm:order-4'>
                <Suspense fallback={<ComponentLoader />}>
                    <Hero4 />
                </Suspense>
            </div>

            <div className='order-5'>
                <Suspense fallback={<ComponentLoader />}>
                    <Hero5 />
                </Suspense>
            </div>

            <div className='order-6'>
                <Suspense fallback={<ComponentLoader />}>
                    <Hero6 />
                </Suspense>
            </div>

            <div className='order-7'>
                <Suspense fallback={<ComponentLoader />}>
                    <Hero7 />
                </Suspense>
            </div>

            <div className='order-8'>
                <Suspense fallback={<ComponentLoader />}>
                    <Hero8 />
                </Suspense>
            </div>
        </div>
    )
}

export default MainContent