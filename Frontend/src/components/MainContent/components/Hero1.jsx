import React, { useEffect, useState } from 'react'
import cardBgImg1 from '../../../assets/LandingPageFrameImg-1.jpg'
import cardBgImg2 from '../../../assets/LandingPageFrameImg-2.jpg'
import cardBgImg3 from '../../../assets/LandingPageFrameImg-3.jpg'
import cardBgImg4 from '../../../assets/LandingPageFrameImg-4.jpg'
import cardBgImg5 from '../../../assets/LandingPageFrameImg-5.jpg'
import cardBgImg6 from '../../../assets/LandingPageFrameImg-6.jpg'
import cardBgImg7 from '../../../assets/LandingPageFrameImg-7.jpg'
import LandingPageFrame from '../../../assets/LandingPageFrame.svg'
import GamingCafeText from '../../../assets/gamingCafe.svg'
import TheGoatText from '../../../assets/TheGoatText.svg'

const images = [
    cardBgImg1,
    cardBgImg2,
    cardBgImg3,
    cardBgImg4,
    cardBgImg5,
    cardBgImg6,
    cardBgImg7,
];


const Hero1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000); // 4s per image
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="h-[748px] w-[1041px] bg-center relative rounded-3xl overflow-hidden">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                    style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        maskImage:
                            "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
                        WebkitMaskImage:
                            "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
                    }}
                />
            ))}
            <img src={TheGoatText} alt="" className='absolute top-20 right-22 z-20' />
            {/* Foreground frame image (not affected by fade) */}
            <img
                src={LandingPageFrame}
                alt="LandingPageFrame"
                className="px-5 rounded-3xl w-[90%] h-[90%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <img src={GamingCafeText} alt="" className='absolute bottom-17 left-21 z-20' />
        </div>
    )
}

export default Hero1
