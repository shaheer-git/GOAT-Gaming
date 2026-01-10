import React, { useEffect, useState } from 'react'
import GoatWallText from '../../../assets/GoatWallText.svg'
import WallPortrait1 from '../../../assets/WallPortrait-1.webp'
import WallPortrait2 from '../../../assets/WallPortrait-2.webp'
import WallPortrait3 from '../../../assets/WallPortrait-3.webp'
import WallPortrait4 from '../../../assets/WallPortrait-4.webp'
import WallPortrait5 from '../../../assets/WallPortrait-5.webp'
import WallPortrait6 from '../../../assets/WallPortrait-6.webp'
import WallPortrait7 from '../../../assets/WallPortrait-7.webp'
import WallPortrait8 from '../../../assets/WallPortrait-8.webp'
import WallPortrait9 from '../../../assets/WallPortrait-9.webp'
import WallLandscape1 from '../../../assets/WallLandscape-1.webp'
import WallLandscape2 from '../../../assets/WallLandscape-2.webp'
import WallLandscape3 from '../../../assets/WallLandscape-3.webp'
import WallLandscape4 from '../../../assets/WallLandscape-4.webp'
import WallLandscape5 from '../../../assets/WallLandscape-5.webp'
import WallLandscape6 from '../../../assets/WallLandscape-6.webp'
import WallLandscape7 from '../../../assets/WallLandscape-7.webp'
import WallLandscape8 from '../../../assets/WallLandscape-8.webp'
import WallLandscape9 from '../../../assets/WallLandscape-9.webp'
import WallLandscape10 from '../../../assets/WallLandscape-10.webp'
import WallLandscape11 from '../../../assets/WallLandscape-11.webp'
import WallLandscape12 from '../../../assets/WallLandscape-12.webp'
import WallLandscape13 from '../../../assets/WallLandscape-13.webp'
import WallLandscape14 from '../../../assets/WallLandscape-14.webp'
import WallLandscape15 from '../../../assets/WallLandscape-15.webp'
import WallLandscape16 from '../../../assets/WallLandscape-16.webp'
import WallLandscape17 from '../../../assets/WallLandscape-17.webp'
import WallLandscape18 from '../../../assets/WallLandscape-18.webp'



const Hero5 = () => {
    const portraitImages = [
        WallPortrait1, WallPortrait2, WallPortrait3, WallPortrait4,
        WallPortrait5, WallPortrait6, WallPortrait7, WallPortrait8,
        WallPortrait9
    ];

    const landscapeImages = [
        WallLandscape1, WallLandscape2, WallLandscape3,
        WallLandscape5, WallLandscape6, WallLandscape7, WallLandscape8,
        WallLandscape9, WallLandscape10, WallLandscape11, WallLandscape12,
        WallLandscape13, WallLandscape14, WallLandscape15, WallLandscape16,
        WallLandscape17, WallLandscape18
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