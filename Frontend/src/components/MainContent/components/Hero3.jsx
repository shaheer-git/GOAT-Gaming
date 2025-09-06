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
const Hero3 = () => {
    return (
        <div className="p-5 text-center">
            {/* Title */}
            <img src={ServicesText} alt="Services" className="mx-auto mb-8" />

            <div>
                <div className="flex flex-wrap justify-center gap-4">
                    {serviceProviding.map((service, index) => (
                        <div key={index} className="text-white px-4 py-2 rounded-full text-3xl font-bold">
                            {service}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Hero3