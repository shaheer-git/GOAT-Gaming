import React from 'react'
import ServicesText from '../../../assets/GoatServicesText.svg'

const serviceProviding = [
    "Gaming Cafe",
    "Consoles",
    "Racing Simulator",
    "Streaming Room",
    "PC Building",
    "Hardware Sales",
    "Hardware Rentals",
    "Birthday Parties & Events"
]

const desktopRows = [
    serviceProviding.slice(0, 4),
    serviceProviding.slice(4, 7),
    serviceProviding.slice(7)
]

const Hero3 = () => {
    return (
        <div className="p-5 text-center mt-6" id="hero3">
            {/* Title */}
            <img src={ServicesText} alt="Services" className="mx-auto mb-8" />

            <div className="flex flex-col items-center gap-2 sm:gap-4">
                {desktopRows.map((row, rowIndex) => (
                    <div 
                        key={rowIndex} 
                        className="flex flex-wrap justify-center gap-2 sm:gap-4"
                    >
                        {row.map((service, index) => (
                            <div 
                                key={index} 
                                className="
                                    text-white 
                                    px-3 py-1 sm:px-4 sm:py-2 
                                    rounded-full 
                                    text-sm sm:text-lg md:text-2xl lg:text-3xl 
                                    font-bold
                                    whitespace-nowrap
                                "
                            >
                                {service}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hero3
