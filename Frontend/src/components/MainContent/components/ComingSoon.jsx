import React, { useEffect, useState } from "react";
import LeftFooterImg from "../../../assets/leftFooterImg.png";
import RightFooterImg from "../../../assets/RightFooterImg.png";
import companyLog from "../../../assets/Logo.svg";

const ComingSoon = () => {
    const targetDate = new Date("2025-10-20T00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(timer);
                setTimeLeft({
                    days: "00",
                    hours: "00",
                    minutes: "00",
                    seconds: "00",
                });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({
                days: String(days).padStart(2, "0"),
                hours: String(hours).padStart(2, "0"),
                minutes: String(minutes).padStart(2, "0"),
                seconds: String(seconds).padStart(2, "0"),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div
            className="min-h-screen min-w-screen flex flex-col items-center justify-center text-white relative overflow-hidden"
            style={{ backgroundColor: "var(--goat-black)" }}
        >
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--goat-black)] via-transparent to-[var(--goat-red)] opacity-30"></div>

            {/* Main Content */}
            <div className="z-10 text-center px-6 overflow-hidden">
                <h1
                    className="text-5xl md:text-7xl font-extrabold tracking-wide uppercase"
                    style={{ color: "var(--goat-red)" }}
                >
                    <img src={companyLog} alt="Services" className="mx-auto mb-8" />
                </h1>
                <p className="text-lg md:text-2xl mt-6 text-gray-200">
                    Level up your gaming experience — Coming Soon!
                </p>

                {/* Countdown Timer */}
                <div className="mt-10 flex justify-center flex-wrap gap-6 text-center">
                    {[
                        { label: "Days", value: timeLeft.days },
                        { label: "Hours", value: timeLeft.hours },
                        { label: "Minutes", value: timeLeft.minutes },
                        { label: "Seconds", value: timeLeft.seconds },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center min-w-[80px]">
                            <span
                                className="text-4xl md:text-5xl font-bold"
                                style={{ color: "var(--goat-red)" }}
                            >
                                {item.value}
                            </span>
                            <span className="text-sm md:text-base text-gray-400">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Notify Button */}
                {/* <button
                    className="mt-10 px-8 py-3 rounded-full font-semibold tracking-wide 
          bg-[var(--goat-red)] hover:bg-transparent hover:text-[var(--goat-red)] border-2 border-[var(--goat-red)] transition-all duration-300"
                >
                    Notify Me
                </button> */}
            </div>

            {/* Footer Images */}
            <img
                src={LeftFooterImg}
                alt="Left footer design"
                className="absolute bottom-5 left-5 w-32 sm:w-48 md:w-64 opacity-80"
            />
            <img
                src={RightFooterImg}
                alt="Right footer design"
                className="absolute bottom-5 right-5 w-32 sm:w-48 md:w-64 opacity-80"
            />

            {/* Footer Text */}
            <div className="absolute bottom-8 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Goat Gaming Café. All rights reserved.
            </div>
        </div>
    );
};

export default ComingSoon;
