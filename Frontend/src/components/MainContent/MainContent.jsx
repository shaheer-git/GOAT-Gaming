import React from 'react'
import Hero1 from './components/Hero1'
import Hero2 from './components/Hero2/Hero2'
import Hero3 from './components/Hero3'
import Hero4 from './components/Hero4/Hero4'
import Hero5 from './components/Hero5'
import Hero6 from './components/Hero6/Hero6'
import Hero7 from './components/Hero7'
import Hero8 from './components/Hero8'

const MainContent = () => {
    return (
        <div className='h-full w-full flex flex-col items-center overflow-hidden'>
                <Hero1 />

            <div className='order-4 sm:order-2'>
                <Hero2 />
            </div>

            <div className='order-2 sm:order-3'>
                <Hero3 />
            </div>

            <div className='order-3 sm:order-4'>
                <Hero4 />
            </div>

            <div className='order-5'>
                <Hero5 />
            </div>

            <div className='order-6'>
                <Hero6 />
            </div>

            <div className='order-7'>
                <Hero7 />
            </div>

            <div className='order-8'>
                <Hero8 />
            </div>
        </div>
    )
}

export default MainContent