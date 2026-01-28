import React, { useEffect, useState } from 'react'
import LandingPageFrame from '../../../assets/LandingPageFrame.svg'
import GamingCafeText from '../../../assets/gamingCafe.svg'
import TheGoatText from '../../../assets/TheGoatText.svg'
import WallLandscape1 from '../../../assets/WallLandscape-1.webp'
import WallLandscape2 from '../../../assets/WallLandscape-2.webp'
import WallLandscape3 from '../../../assets/WallLandscape-3.webp'
import WallLandscape4 from '../../../assets/WallLandscape-4.webp'
// import WallLandscape5 from '../../../assets/WallLandscape-5.webp'
// import WallLandscape6 from '../../../assets/WallLandscape-6.webp'
// import WallLandscape7 from '../../../assets/WallLandscape-7.webp'
// import WallLandscape8 from '../../../assets/WallLandscape-8.webp'
import WallLandscape9 from '../../../assets/WallLandscape-9.webp'
// import WallLandscape10 from '../../../assets/WallLandscape-10.webp'
// import WallLandscape11 from '../../../assets/WallLandscape-11.webp'
// import WallLandscape12 from '../../../assets/WallLandscape-12.webp'
// import WallLandscape13 from '../../../assets/WallLandscape-13.webp'
import WallLandscape14 from '../../../assets/WallLandscape-14.webp'
import WallLandscape15 from '../../../assets/WallLandscape-15.webp'
// import WallLandscape16 from '../../../assets/WallLandscape-16.webp'
// import WallLandscape17 from '../../../assets/WallLandscape-17.webp'
// import WallLandscape18 from '../../../assets/WallLandscape-18.webp'
import imagePreloader from '../../../utils/imagePreloader'
import { showLoader, hideLoader } from '../../../utils/notificLoader'

const images = [
    WallLandscape1, WallLandscape2, WallLandscape3, WallLandscape4,
    WallLandscape9,
    WallLandscape14, WallLandscape15
];

// Critical images that should be preloaded (SVG images used in Hero1)
const criticalImages = [TheGoatText, LandingPageFrame, GamingCafeText];

const Hero1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        // Show loading notification
        showLoader("Loading images...");

        // Preload all images using the global preloader
        const preloadAllImages = async () => {
            try {
                // Preload critical images first
                await imagePreloader.preloadImages(criticalImages);
                
                // Preload all background images
                await imagePreloader.preloadImages(images);
                
                setImagesLoaded(true);
                hideLoader();
            } catch (error) {
                console.error('Error preloading images:', error);
                setImagesLoaded(true);
                hideLoader();
            }
        };

        preloadAllImages();
    }, []);

    useEffect(() => {
        if (!imagesLoaded) return;
        
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [imagesLoaded]);
    
    return (
        <div id="hero1" className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[748px] w-full sm:w-[100%] md:w-[95%] lg:w-[1041px] mx-auto bg-center relative rounded-3xl overflow-hidden px-4 sm:px-0">

            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                    style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        willChange: index === currentIndex || index === (currentIndex + 1) % images.length ? "opacity" : "auto",
                        maskImage:
                            "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
                        WebkitMaskImage:
                            "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
                    }}
                />
            ))}
            <img
                src={TheGoatText}
                alt="The GOAT"
                loading="eager"
                className="hidden md:block absolute top-6 right-6 sm:top-10 sm:right-10 md:top-30 md:right-14 lg:top-20 lg:right-22 z-20 w-32 sm:w-40 md:w-30 lg:w-auto"
            />

            <img
                src={LandingPageFrame}
                alt="Landing Page Frame"
                loading="eager"
                className="hidden md:block px-3 sm:px-4 md:px-5 rounded-3xl w-[90%] h-[90%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />

            <img
                src={GamingCafeText}
                alt="Gaming Cafe"
                loading="eager"
                className="hidden md:block absolute bottom-6 left-6 sm:bottom-10 sm:left-10 md:bottom-30 md:left-16 lg:bottom-17 lg:left-21 z-20 w-32 sm:w-40 md:w-70 lg:w-auto"
            />
        </div>
    )
}

export default Hero1