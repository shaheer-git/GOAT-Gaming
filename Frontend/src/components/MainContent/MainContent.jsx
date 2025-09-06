import React from 'react'
import Hero1 from './components/Hero1'
import Hero2 from './components/Hero2/Hero2'
import Hero3 from './components/Hero3'
import Hero4 from './components/Hero4'

const MainContent = () => {
    return (
        <div className='h-full w-full flex flex-col items-center'>
            <Hero1 />
            <Hero2 />
            <Hero3 />
            <Hero4 />
        </div>
    )
}

export default MainContent