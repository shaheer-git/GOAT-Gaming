import React from 'react'
import FeedbackText from '../../../assets/FeedbackText.svg'


const reviews = [
    {
        name: "Albert",
        text: "By Far the Best gaming cafe for PC gamers in Bangalore. Everything seems well thought; the silent rooms, latest peripherals and probably the cheapest 360hz setup for fps gamers (Costed me only 100rs per hour). Even if you spend only 1 hour here, it will be a quality gaming session. No hassle only fragging",
        rating: 5,
        userImg: "", // replace with real avatar
    },
    {
        name: "Shrikant",
        text: "By Far the Best gaming cafe for PC gamers in Bangalore. Everything seems well thought; the silent rooms, latest peripherals and probably the cheapest 360hz setup for fps gamers (Costed me only 100rs per hour). Even if you spend only 1 hour here, it will be a quality gaming session. No hassle only fragging",
        rating: 5,
        userImg: "",
    },
    {
        name: "Mohammed Sameer",
        text: "By Far the Best gaming cafe for PC gamers in Bangalore. Everything seems well thought; the silent rooms, latest peripherals and probably the cheapest 360hz setup for fps gamers (Costed me only 100rs per hour). Even if you spend only 1 hour here, it will be a quality gaming session. No hassle only fragging",
        rating: 5,
        userImg: "",
    },
];

function ReviewCards() {
    return (
        <div className="flex gap-6 justify-center">
            {reviews.map((review, index) => (
                <div
                    key={index}
                    className="w-[300px] bg-gradient-to-b from-[var(--goat-black)] to-[#e91d275c] rounded-2xl p-5 
                     transform transition-all duration-500 hover:-translate-y-2 
                     hover:from-[#e91d275c] hover:to-[var(--goat-black)] cursor-pointer shadow-gray-800 shadow-lg shadow-blur"
                >
                    {/* Stars */}
                    <div className="flex text-[var(--goat-red)] mb-3">
                        {Array(review.rating)
                            .fill()
                            .map((_, i) => (
                                <span key={i}>★</span>
                            ))}
                    </div>
                    {/* Review text */}
                    <p className="text-white text-sm mb-5 text-start">{review.text}</p>

                    {/* User section */}
                    <div className="flex items-center gap-3">
                        {review.userImg ? <img
                            src={review.userImg}
                            alt={review.name}
                            className="w-8 h-8 rounded-full"
                        /> :
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        }
                        <div>
                            <p className="text-[var(--goat-red)] font-semibold text-start">{review.name}</p>
                            <p className="text-gray-400 text-xs text-start">8 reviews · 2 photos</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

const Hero4 = () => {
    return (
        <div className="p-5 text-center">
            <img src={FeedbackText} alt="feedback" className="mx-auto mb-8" />
            <ReviewCards />
        </div>
    )
}

export default Hero4