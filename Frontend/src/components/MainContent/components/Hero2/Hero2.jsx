import React from 'react'
import WhyText from '../../../../assets/WhyText.svg'
import MissionImg from '../../../../assets/GOAT-MIssion.png'
import AboutUsImg from '../../../../assets/GOAT-About-us.png'
import VisionImg from '../../../../assets/GOAT-Vision.png'
import 'imagehover.css/css/imagehover.min.css';
import './hero2.css'


function Hero2() {
    return (
        <>
            <div className="flex items-center justify-center p-5 overflow-hidden">
                <img
                    src={WhyText}
                    alt="why text"
                    className="h-[120px] sm:h-[160px] md:h-[200px]"
                />
            </div>

            <div className="hidden sm:flex items-center justify-center gap-4 md:gap-6 lg:gap-10 px-4 md:px-8">
                {/* Mission Card */}
                <figure className="imghvr-reveal-up h-[280px] md:h-[330px] lg:h-[450px] w-[30%] md:w-[30%] lg:w-[320px] rounded-3xl overflow-hidden relative text-center group cursor-pointer">
                    <img
                        src={MissionImg}
                        alt="Mission"
                        className="h-full w-full object-cover rounded-3xl"
                    />
                    <p className="text-xl md:text-2xl lg:text-6xl font-extrabold text-white mb-4 absolute z-50 bottom-2 w-full group-hover:hidden">
                        Mission
                    </p>
                    <figcaption className="flex flex-col items-center p-3 md:p-4 lg:p-6 bg-white rounded-3xl h-full">
                        <h1 className="text-xl md:text-2xl lg:text-5xl font-extrabold text-black mb-2 md:mb-3 lg:mb-4">
                            Mission
                        </h1>
                        <p className="text-black text-xs md:text-sm lg:text-base text-start leading-relaxed">
                            To deliver exceptional gaming and entertainment services through premium infrastructure, passionate
                            staff, and a deep understanding of what
                            gamers truly value.
                        </p>
                    </figcaption>
                </figure>

                {/* About Us Card */}
                <figure className="imghvr-reveal-up h-[280px] md:h-[330px] lg:h-[450px] w-[30%] md:w-[30%] lg:w-[320px] rounded-3xl overflow-hidden relative text-center group cursor-pointer">
                    <img
                        src={AboutUsImg}
                        alt="About Us"
                        className="h-full w-full object-cover rounded-3xl"
                    />
                    <p className="text-xl md:text-2xl lg:text-6xl font-extrabold text-white mb-4 absolute z-50 bottom-2 w-full group-hover:hidden">
                        About Us
                    </p>
                    <figcaption className="flex flex-col items-center p-3 md:p-4 lg:p-6 bg-white rounded-3xl h-full">
                        <h1 className="text-xl md:text-2xl lg:text-5xl font-bold text-black mb-2 md:mb-3 lg:mb-4">
                            About Us
                        </h1>
                        <p className="text-black text-xs md:text-sm lg:text-base text-start leading-relaxed overflow-auto">
                            Welcome to The G.O.A.T Gaming Café — where gaming isn’t just entertainment, it’s a lifestyle. Designed for casual gamers and esports enthusiasts alike, our space is built to let you play, compete, and connect. From high-performance PCs and next-gen consoles to cozy setups, dynamic lighting, and a café loaded with delicious snacks — everything here is crafted to give you the ultimate gaming experience.

                            At The G.O.A.T, we’re not just a gaming café. We’re your second home.
                        </p>
                    </figcaption>
                </figure>

                {/* Vision Card */}
                <figure className="imghvr-reveal-up h-[280px] md:h-[330px] lg:h-[450px] w-[30%] md:w-[30%] lg:w-[320px] rounded-3xl overflow-hidden relative text-center group cursor-pointer">
                    <img
                        src={VisionImg}
                        alt="Vision"
                        className="h-full w-full object-cover rounded-3xl"
                    />
                    <p className="text-xl md:text-2xl lg:text-6xl font-extrabold text-white mb-4 absolute z-50 bottom-2 w-full group-hover:hidden">
                        Vision
                    </p>
                    <figcaption className="flex flex-col items-center p-3 md:p-4 lg:p-6 bg-white rounded-3xl h-full">
                        <h1 className="text-xl md:text-2xl lg:text-5xl font-bold mb-2 md:mb-3 lg:mb-4">
                            Vision
                        </h1>
                        <p className="text-black text-xs md:text-sm lg:text-base text-start leading-relaxed">
                            To become the leading destination for immersive gaming experiences, blending cutting-edge technology,
                            community spirit, and world-class service.
                        </p>
                    </figcaption>
                </figure>
            </div>

            <div className="flex flex-col sm:hidden items-center justify-center gap-6 px-5">
                <div className="bg-transparent border border-red-500 rounded-3xl p-5 w-full" data-aos="fade-left">
                    <h2 className="text-xl font-bold text-red-500 mb-2">Vision</h2>
                    <p className="text-gray-300 text-sm">
                        To become the leading destination for immersive gaming experiences, blending cutting-edge technology,
                        community spirit, and world-class service.
                    </p>
                </div>

                <div className="bg-transparent border border-red-500 rounded-3xl p-5 w-full" data-aos="fade-right">
                    <h2 className="text-xl font-bold text-red-500 mb-2">About</h2>
                    <p className="text-gray-300 text-sm">
                        Welcome to The G.O.A.T Gaming Café — where gaming isn’t just entertainment, it’s a lifestyle. Designed for
                        casual gamers and esports enthusiasts alike, our space is built to let you play, compete, and connect.
                        From high-performance PCs to cozy setups and a café loaded with snacks — everything here is crafted to
                        give you the ultimate gaming experience.
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                        At The G.O.A.T, we’re not just a gaming café. We’re your second home.
                    </p>
                </div>

                <div className="bg-transparent border border-red-500 rounded-3xl p-5 w-full" data-aos="fade-left">
                    <h2 className="text-xl font-bold text-red-500 mb-2">Mission</h2>
                    <p className="text-gray-300 text-sm">
                        To deliver exceptional gaming and entertainment services through premium infrastructure, passionate
                        staff, and a deep understanding of what gamers truly value.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Hero2
