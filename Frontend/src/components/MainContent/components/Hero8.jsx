import React from 'react';
import Text from '../../../assets/LetsPlayTogether.svg';
import FooterBg from '../../../assets/FooterBg.svg';
import LeftFooterImg from '../../../assets/leftFooterImg.png';
import RightFooterImg from '../../../assets/RightFooterImg.png';
import companyLog from '../../../assets/Logo.svg';

const getURLs = (platform) => {
    switch (platform) {
        case 'Instagram':
            return 'https://www.instagram.com/goatgamingcafe?igsh=MWVtOHIzODdpZ2c1Ng==';
        case 'WhatsApp':
            return 'https://wa.me/918884655514';
        case 'Facebook':
            return 'https://www.facebook.com/share/1Bm5tag1Yp/?mibextid=wwXIfr';
        case 'YouTube':
            return 'https://www.youtube.com/@TheGoatGamingCafe';
        default:
            return 'https://www.instagram.com/goatgamingcafe?igsh=MWVtOHIzODdpZ2c1Ng==';
    }
};
const Hero8 = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="p-5 text-start mt-6 mx-[-20px] h-full">
            {/* Title */}
            <img src={Text} alt="Services" className="mx-auto mb-10" />

            <div className="w-full h-full relative hidden lg:block">
                <img src={FooterBg} alt="Footer Background" className="w-full" />
                {/* <img
                    src={LeftFooterImg}
                    alt="Left Footer Background"
                    className="absolute left-0 top-[-25px] md:h-full object-cover"
                /> */}
                <div className="absolute top-[40%] left-[5%] z-10 text-white py-10 px-12 bg-[var(--goat-black)] rounded-2xl w-[90%] sm:w-[70%] md:w-[60%] lg:w-[90%] sm:min-h-[365px] lg:min-h-[300px]">
                    <div className="flex gap-5">
                        <div className="flex flex-col justify-between min-w-[200px]">
                            <div className="mb-8">
                                <img
                                    src={companyLog}
                                    alt="G.O.A.T Gaming Cafe Logo"
                                    className="h-20 w-auto"
                                />
                            </div>
                        </div>

                        <div className="flex gap-12">
                            <div className="space-y-4">
                                <h3 className="font-bold text-sm tracking-wide text-[var(--goat-red)]">
                                    Quick Links
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        { label: 'Home', id: 'hero1' },
                                        { label: 'Why us', id: 'hero2' },
                                        { label: 'Services', id: 'hero3' },
                                        { label: 'Contact us', id: 'hero7' },
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <button
                                                onClick={() => scrollToSection(item.id)}
                                                className="text-sm text-white hover:text-[var(--goat-red)] transition-colors"
                                            >
                                                {item.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-bold text-sm tracking-wide text-[var(--goat-red)]">
                                    Discover
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        { label: 'Gallery', id: 'hero5' },
                                        { label: 'Branches', id: 'hero7' },
                                        { label: 'Franchise', id: 'hero7' },
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <button
                                                onClick={() => scrollToSection(item.id)}
                                                className="text-sm text-white hover:text-[var(--goat-red)] transition-colors"
                                            >
                                                {item.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-bold text-sm tracking-wide text-[var(--goat-red)]">
                                    Connect with us
                                </h3>
                                <ul className="space-y-2">
                                    {['Instagram', 'Facebook', 'YouTube', 'WhatsApp'].map((item, i) => (
                                        <li key={i}>
                                            <a
                                                href={getURLs(item)}
                                                className="text-sm text-white hover:text-[var(--goat-red)] transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="text-[10px] text-white leading-relaxed w-auto mt-6">
                        © 2025 G.O.A.T Gaming Cafe. All rights reserved.<br />
                        Power up responsibly. Stay hydrated. GGiz
                    </div>
                </div>
                <img
                    src={RightFooterImg}
                    alt="Right Footer Background"
                    className="absolute right-0 bottom-0 h-[85%] object-cover z-10"
                />
            </div>

            <div className="w-full relative lg:hidden h-full">
                <img src={FooterBg} alt="Services" className="h-[200px] w-[390px]" />

                {/* <img
                    src={LeftFooterImg}
                    alt="Left Footer Background"
                    className="absolute left-[15px] top-[-10px] h-full object-contain"
                    data-aos="zoom-in"
                /> */}

                <img
                    src={RightFooterImg}
                    alt="Right Footer Background"
                    className="absolute right-0 bottom-[10px] h-[75%] object-contain z-20 hidden md:inline"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                />

                <div className="absolute inset-0 flex items-end justify-center z-10 w-full mb-5">
                    <div className="bg-[var(--goat-black)] rounded-2xl px-4 py-5 sm:px-6 sm:py-6 mx-4 max-w-md w-full flex flex-row sm:flex-row gap-6 items-center justify-center h-[108px]">
                        {/* <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2">
                                    <div className="mb-3">
                                        <img
                                            src={companyLog}
                                            alt="G.O.A.T Gaming Cafe Logo"
                                            className="h-10 w-auto sm:h-12 md:h-14"
                                        />
                                    </div>
                                    <p className="text-white text-[8px] sm:text-[9px] md:text-[10px] text-center sm:text-left leading-tight sm:leading-relaxed">
                                        © 2025 G.O.A.T Gaming Cafe. All rights reserved.<br />
                                        Power up responsibly. Stay hydrated. GGiz
                                    </p>
                                </div> */}

                        <div className="flex flex-col items-center w-full sm:w-1/2">
                            <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold text-center mb-2 sm:mb-3">
                                Follow us on
                            </h3>

                            <div className="flex justify-center gap-3 sm:gap-4 md:gap-5">
                                <a href="#" className="hover:opacity-80 transition-opacity">
                                    <svg
                                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="1.5"
                                    >
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"></line>
                                    </svg>
                                </a>

                                <a href="#" className="hover:opacity-80 transition-opacity">
                                    <svg
                                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="1.5"
                                    >
                                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                        <polygon
                                            points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                                            fill="white"
                                            stroke="none"
                                        ></polygon>
                                    </svg>
                                </a>
                            </div>

                            <p className="text-white text-[9px] sm:text-[10px] md:text-[11px] text-center leading-tight sm:leading-snug pt-2 sm:pt-3 max-w-[240px] sm:max-w-[300px]">
                                © 2025 G.O.A.T Gaming Cafe. All rights reserved.
                                <br className="hidden sm:block" />
                                Power up responsibly. Stay hydrated. GGiz
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero8;
