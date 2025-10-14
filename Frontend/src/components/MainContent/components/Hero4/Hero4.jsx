import React, { useState, useEffect } from 'react'
import FeedbackText from '../../../../assets/FeedbackText.svg'

const reviews = [
    {
        rating: 5,
        text: "Amazing cafe for PC gamers in Bangalore. Everything seems well thought; the silent rooms, latest peripherals and probably the cheapest 360hz setup for fps gamers (Costed me only 100rs per hour). Even if you spend only 1 hour here, it will be a quality gaming session. No hassle only fragging.",
        name: "Mohammed Sameer",
        userImg: null,
        reviews: "8 reviews",
        photos: "2 photos"
    },
    {
        rating: 5,
        text: "Amazing cafe for PC gamers in Bangalore. Everything seems well thought; the silent rooms, latest peripherals and probably the cheapest 360hz setup for fps gamers (Costed me only 100rs per hour). Even if you spend only 1 hour here, it will be a quality gaming session. No hassle only fragging.",
        name: "Mohammed Sameer",
        userImg: null,
        reviews: "8 reviews",
        photos: "2 photos"
    },
    {
        rating: 5,
        text: "Amazing cafe for PC gamers in Bangalore. Everything seems well thought; the silent rooms, latest peripherals and probably the cheapest 360hz setup for fps gamers (Costed me only 100rs per hour). Even if you spend only 1 hour here, it will be a quality gaming session. No hassle only fragging.",
        name: "Mohammed Sameer",
        userImg: null,
        reviews: "8 reviews",
        photos: "2 photos"
    },
];

function ReviewCards() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const cardsToShow = isMobile ? 1 : 3;
    const shouldSlide = reviews.length > cardsToShow;
    const maxSlides = shouldSlide ? reviews.length - cardsToShow : 0;

    useEffect(() => {
        if (!shouldSlide || isHovered) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % reviews.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [shouldSlide, isHovered, reviews.length]);


    return (
        <div
            className="relative overflow-hidden py-8 lg:py-12"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Desktop View - 3 cards */}
            <div className="hidden lg:block px-8">
                <div
                    className="flex transition-transform duration-500 ease-in-out items-center gap-8"
                    style={{
                        transform: `translateX(-${(currentSlide * 100) / cardsToShow}%)`,
                    }}
                >
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} review={review} isMobile={false} />
                    ))}
                </div>
            </div>

            <div className="block lg:hidden px-4">
                <div className="flex flex-col items-center gap-4">
                    <ReviewCard review={reviews[currentSlide]} isMobile={true} />
                </div>
            </div>

            {/* Slide indicators */}
            {shouldSlide && (
                <div className="flex justify-center mt-6 gap-2">
                    {Array(isMobile ? reviews.length : maxSlides + 1).fill().map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                                ? 'bg-red-500 w-6'
                                : 'bg-gray-600 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

function ReviewCard({ review, isMobile }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative rounded-2xl p-5 cursor-pointer overflow-hidden
                     transform transition-all duration-500 hover:-translate-y-3 flex-shrink-0
                     shadow-lg shadow-[var(--goat-black)]/50 ${isMobile
                    ? 'w-full max-w-md h-auto min-h-[350px]'
                    : 'w-[450px] h-[400px]'
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                background: 'var(--goat-black)',
            }}
        >
            {/* Red Orb Background Effect */}
            <div
                className={`absolute transition-all duration-700 ease-out`}
                style={{
                    left: '0%',
                    right: '0%',
                    width: '100%',
                    height: '100%',
                    top: isHovered ? '-40%' : '40%',
                    background: 'var(--goat-red)',
                    borderRadius: '50%',
                    transform: `translateY(${isHovered ? '-20px' : '0px'})`,
                    opacity: 0.3,
                    boxShadow: `
                        0 ${isHovered ? '10px' : '5px'} ${isHovered ? '30px' : '15px'} rgba(233, 29, 39, ${isHovered ? '0.4' : '0.2'}),
                        0 ${isHovered ? '20px' : '10px'} ${isHovered ? '60px' : '30px'} rgba(233, 29, 39, ${isHovered ? '0.3' : '0.15'}),
                        inset 0 0 ${isHovered ? '40px' : '20px'} rgba(233, 29, 39, ${isHovered ? '0.2' : '0.1'})
                    `,
                    filter: `blur(25px)`,
                }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Stars */}
                <div className="flex text-red-500 mb-3 text-lg">
                    {Array(review.rating)
                        .fill()
                        .map((_, i) => (
                            <span key={i}>★</span>
                        ))}
                </div>

                {/* Review text */}
                <p className="text-white text-sm mb-5 text-start leading-relaxed flex-grow overflow-hidden">
                    {review.text}
                </p>

                {/* User section */}
                <div className="flex items-center gap-3 mt-auto">
                    {review.userImg ? (
                        <img
                            src={review.userImg}
                            alt={review.name}
                            className="w-10 h-10 rounded-full border-2 border-gray-700"
                        />
                    ) : (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center border-2 border-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                    )}
                    <div>
                        <p className="text-red-500 font-semibold text-start text-sm">
                            {review.name}
                        </p>
                        <p className="text-gray-400 text-xs text-start">
                            {review.reviews} · {review.photos}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Hero4 = () => {
    return (
        <div className="p-5 text-center" id="hero4">
            <img
                src={FeedbackText}
                alt="feedback"
                className="mx-auto mb-8 overflow-hidden"
                data-aos="zoom-in"
            />
            <ReviewCards />
        </div>
    )
}

export default Hero4