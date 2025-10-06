import React, { useEffect, useState } from 'react'
import GoatWallText from '../../../assets/GoatWallText.svg'
import WallPortrait1 from '../../../assets/WallPortrait-1.png'
import WallPortrait2 from '../../../assets/WallPortrait-2.png'
import WallPortrait3 from '../../../assets/WallPortrait-3.png'
import WallPortrait4 from '../../../assets/WallPortrait-4.jpg'
import WallPortrait5 from '../../../assets/WallPortrait-5.jpg'
import WallPortrait6 from '../../../assets/WallPortrait-6.jpg'
import WallPortrait7 from '../../../assets/WallPortrait-7.jpg'
import WallLandscape1 from '../../../assets/WallLandscape-1.jpg'
import WallLandscape2 from '../../../assets/WallLandscape-2.jpg'
import WallLandscape3 from '../../../assets/WallLandscape-3.png'
import WallLandscape4 from '../../../assets/WallLandscape-4.jpg'



const Hero5 = () => {
    const portraitImages = [
        WallPortrait1, WallPortrait2, WallPortrait3, WallPortrait4,
        WallPortrait5, WallPortrait6, WallPortrait7,
    ];

    const landscapeImages = [
        WallLandscape1, WallLandscape2, WallLandscape3, WallLandscape4,
    ];

    const [portraitIndex, setPortraitIndex] = useState(0);
    const [landscapeIndex, setLandscapeIndex] = useState(0);

    useEffect(() => {
        const portraitInterval = setInterval(() => {
            setPortraitIndex((prev) => (prev + 1) % portraitImages.length);
        }, 3000);

        const landscapeInterval = setInterval(() => {
            setLandscapeIndex((prev) => (prev + 1) % landscapeImages.length);
        }, 3500);

        return () => {
            clearInterval(portraitInterval);
            clearInterval(landscapeInterval);
        };
    }, []);

    return (
        <div className="p-5 text-center mt-6" id="hero5">
            {/* Title */}
            <img src={GoatWallText} alt="Services" className="mx-auto mb-8" />

            <div className="w-full h-[456px] flex gap-4">
                {/* Landscape */}
                <div className="w-full h-[456px] border-[var(--goat-red)] border rounded-2xl overflow-hidden relative">
                    {landscapeImages.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt="landscape"
                            className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl transition-opacity duration-[2000ms] ease-in-out ${i === landscapeIndex ? "opacity-100" : "opacity-0"}`}
                        />
                    ))}
                </div>

                {/* Portrait */}
                <div className="hidden lg:block w-[30%] h-[456px] border-[var(--goat-red)] border rounded-2xl overflow-hidden relative">
                    {portraitImages.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt="portrait"
                            className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl transition-opacity duration-[2000ms] ease-in-out ${i === portraitIndex ? "opacity-100" : "opacity-0"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero5