import React from 'react';
import Text from '../../../assets/LetsPlayTogether.svg'
import FooterBg from '../../../assets/FooterBg.svg'
import LeftFooterImg from '../../../assets/leftFooterImg.png'
import RightFooterImg from '../../../assets/RightFooterImg.png'
import companyLog from '../../../assets/Logo.svg'

const Hero8 = () => {
    return (
        <div className="p-5 text-start mt-6">
            {/* Title */}
            <img src={Text} alt="Services" className="mx-auto mb-8" />
            <div className='w-full h-full relative'>
                <img src={FooterBg} alt="Services" className="mx-auto mb-8" />
                <img
                    src={LeftFooterImg}
                    alt="Left Footer Background"
                    className="absolute left-23 top-[-25px] h-full object-cover"
                />
                <div className="absolute top-[40%] left-[70px] z-10 text-white py-16 px-8 w-6/7 bg-[var(--goat-black)] rounded-2xl h-[280px]">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
                            {/* Left Section - Logo and Copyright */}
                            <div className="space-y-6 w-2/5">
                                {/* Logo Section */}
                                <div className="flex flex-col items-center space-y-3">
                                    <img
                                        src={companyLog}
                                        alt="G.O.A.T Gaming Cafe Logo"
                                        className="h-23 w-auto"
                                    />
                                </div>

                                {/* Copyright */}
                                <div className="text-[9px] text-white leading-relaxed w-auto">
                                    © 2025 G.O.A.T Gaming Cafe. All rights reserved.<br />
                                    Power up responsibly. Stay hydrated. GGiz
                                </div>
                            </div>

                            <div className="flex w-full text-left">
                                {/* Quick Links */}
                                <div className="space-y-6">
                                    <h3 className="font-bold text-sm tracking-wide" style={{ color: 'var(--goat-red)' }}>
                                        Quick Links
                                    </h3>
                                    <ul className="space-y-3">
                                        {['Home', 'Why us', 'Services', 'Contact us'].map((item, i) => (
                                            <li key={i}>
                                                <a
                                                    href="#"
                                                    className="group relative text-sm text-white block transition-all duration-300"
                                                >
                                                    {item}
                                                    {/* underline effect */}
                                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Discover */}
                                <div className="space-y-6">
                                    <h3 className="font-bold text-sm tracking-wide" style={{ color: 'var(--goat-red)' }}>
                                        Discover
                                    </h3>
                                    <ul className="space-y-3">
                                        {['Gallery', 'Branches', 'Franchise'].map((item, i) => (
                                            <li key={i}>
                                                <a
                                                    href="#"
                                                    className="group relative text-sm text-white block transition-all duration-300"
                                                >
                                                    {item}
                                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Connect With Us */}
                                <div className="space-y-6">
                                    <h3 className="font-bold text-sm tracking-wide" style={{ color: 'var(--goat-red)' }}>
                                        Connect with us
                                    </h3>
                                    <ul className="space-y-3">
                                        {['Instagram', 'Facebook', 'YouTube', 'WhatsApp'].map((item, i) => (
                                            <li key={i}>
                                                <a
                                                    href="#"
                                                    className="group relative text-sm text-white block transition-all duration-300"
                                                >
                                                    {item}
                                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={RightFooterImg}
                    alt="Right Footer Background"
                    className="absolute right-0 top-10 h-full object-cover z-10 py-10"
                />
            </div>
        </div>
    );
};

export default Hero8;
