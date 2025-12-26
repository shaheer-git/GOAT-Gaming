import React, { useEffect, useState } from 'react'
import GoatWallText from '../../../assets/GoatWallText.svg'
import WallPortrait1 from '../../../assets/WallPortrait-1.png'
import WallPortrait2 from '../../../assets/WallPortrait-2.png'
import WallPortrait3 from '../../../assets/WallPortrait-3.png'
import WallPortrait4 from '../../../assets/WallPortrait-4.jpg'
import WallPortrait5 from '../../../assets/WallPortrait-5.jpg'
import WallPortrait6 from '../../../assets/WallPortrait-6.jpg'
import WallPortrait7 from '../../../assets/WallPortrait-7.jpg'
import WallLandscape11 from '../../../assets/WallLandscape-11.jpg'
import WallLandscape14 from '../../../assets/WallLandscape-14.jpg'
import WallLandscape13 from '../../../assets/WallLandscape-13.jpg'
// import WallLandscape4 from '../../../assets/WallLandscape-4.jpg'
// import WallLandscape5 from '../../../assets/WallLandscape-5.jpg'
// import WallLandscape6 from '../../../assets/WallLandscape-6.jpg'
// import WallLandscape7 from '../../../assets/WallLandscape-7.jpg'
// import WallLandscape8 from '../../../assets/WallLandscape-8.jpg'
// import WallLandscape9 from '../../../assets/WallLandscape-9.jpg'
// import WallLandscape10 from '../../../assets/WallLandscape-10.jpg'
// import WallLandscape11 from '../../../assets/WallLandscape-11.jpg'
// import WallLandscape12 from '../../../assets/WallLandscape-12.jpg'
// import WallLandscape13 from '../../../assets/WallLandscape-13.jpg'
// import WallLandscape14 from '../../../assets/WallLandscape-14.jpg'
// import WallLandscape15 from '../../../assets/WallLandscape-15.jpg'
// import WallLandscape16 from '../../../assets/WallLandscape-16.jpg'
// import WallLandscape17 from '../../../assets/WallLandscape-17.jpg'
// import WallLandscape18 from '../../../assets/WallLandscape-18.jpg'
// import WallLandscape19 from '../../../assets/WallLandscape-19.jpg'
// import WallLandscape20 from '../../../assets/WallLandscape-20.jpg'
// import WallLandscape21 from '../../../assets/WallLandscape-21.jpg'
// import WallLandscape22 from '../../../assets/WallLandscape-22.jpg'
// import WallLandscape23 from '../../../assets/WallLandscape-23.jpg'
// import WallLandscape24 from '../../../assets/WallLandscape-24.jpg'
// import WallLandscape25 from '../../../assets/WallLandscape-25.jpg'
// import WallLandscape26 from '../../../assets/WallLandscape-26.jpg'
// import WallLandscape27 from '../../../assets/WallLandscape-27.jpg'
// import WallLandscape28 from '../../../assets/WallLandscape-28.jpg'
// import WallLandscape29 from '../../../assets/WallLandscape-29.jpg'



const Hero5 = () => {
    const portraitImages = [
        WallPortrait1, WallPortrait2, WallPortrait3, WallPortrait4,
        WallPortrait5, WallPortrait6, WallPortrait7,
    ];

    const landscapeImages = [
        WallLandscape11, WallLandscape13, WallLandscape14,
        // WallLandscape5, WallLandscape6, WallLandscape7, WallLandscape8,
        // WallLandscape9, WallLandscape10, WallLandscape11, WallLandscape12,
        // WallLandscape13, WallLandscape14, WallLandscape15, WallLandscape16,
        // WallLandscape17, WallLandscape18, WallLandscape19, WallLandscape20,
        // WallLandscape21, WallLandscape22, WallLandscape23, WallLandscape24,
        // WallLandscape25, WallLandscape26, WallLandscape27, WallLandscape28,
        // WallLandscape29
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