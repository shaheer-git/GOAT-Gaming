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
            <Hero2 />
            <Hero3 />
            <Hero4 />
            <Hero5 />
            <Hero6 />
            <Hero7 />
            <Hero8 />
        </div>
    )
}

export default MainContent