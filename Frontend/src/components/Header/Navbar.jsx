import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import companyLog from "../../assets/Logo.svg";
import ContactUsArrow from "../../assets/ContactUsArrow.svg";
import CallIcon from "../../assets/CallIcon.svg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="md:relative sticky top-0 z-50 md:bg-none bg-[var(--goat-black)] h-[12vh] w-full flex items-center justify-between px-4 py-8 mb-4 md:px-0 lg:px-0">
            <div className="flex items-center justify-between w-full md:hidden">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-white p-2"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <img
                    src={companyLog}
                    alt="G.O.A.T"
                    className="h-10 object-contain"
                />

                <button className="text-white p-2" onClick={() => window.open("tel:+91 9019095749")} >
                    <img src={CallIcon} alt="call Now" srcset=""className="h-8" />
                </button>
            </div>

            <div className="hidden md:flex h-[12vh] w-full text-[var(--goat-red)] text-center text-2xl items-center gap-4 lg:gap-6 mb-4">
                <div className="w-1/6 h-full flex items-center">
                    <img src={companyLog} alt="" className="max-h-10 md:max-h-12 lg:max-h-14" />
                </div>
                <div className='w-full h-[50px] md:h-[55px] lg:h-[60px] rounded-full flex items-center justify-around px-2'>
                    <div className="group py-3 px-6 rounded-full hover:bg-[var(--goat-red)] cursor-pointer transition-colors duration-300"
                        onClick={() => {
                            const hero1 = document.getElementById('hero1');
                            if (hero1) {
                                hero1.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        <p className="text-white text-xs md:text-sm group-hover:text-white transition-colors duration-300">
                            Home
                        </p>
                    </div>
                    <div className='group py-3 px-6 rounded-full hover:bg-[var(--goat-red)] cursor-pointer transition-colors duration-300'
                        onClick={() => {
                            const hero4 = document.getElementById('hero4');
                            if (hero4) {
                                hero4.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>
                        <p className='text-white text-xs md:text-sm group-hover:text-white transition-colors duration-300'>About Us</p>
                    </div>
                    <div className='group py-3 px-6 rounded-full hover:bg-[var(--goat-red)] cursor-pointer transition-colors duration-300'
                        onClick={() => {
                            const hero3 = document.getElementById('hero3');
                            if (hero3) {
                                hero3.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>
                        <p className='text-white text-xs md:text-sm group-hover:text-white transition-colors duration-300'>Services</p>
                    </div>
                    <div className='group py-3 px-6 rounded-full hover:bg-[var(--goat-red)] cursor-pointer transition-colors duration-300'
                        onClick={() => {
                            const hero5 = document.getElementById('hero5');
                            if (hero5) {
                                hero5.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>
                        <p className='text-white text-xs md:text-sm group-hover:text-white transition-colors duration-300'>Gallery</p>
                    </div>
                    <div className='group py-3 px-6 rounded-full hover:bg-[var(--goat-red)] cursor-pointer transition-colors duration-300'>
                        <p className='text-white text-xs md:text-sm group-hover:text-white transition-colors duration-300'>Franchise</p>
                    </div>
                </div>
                <div className="w-[25%] md:w-[22%] lg:w-[20%] bg-[var(--goat-red)] h-[7vh] md:h-[7.5vh] lg:h-[8vh] rounded-full flex items-center gap-2 md:gap-3 lg:gap-4 px-2 md:px-3 justify-around group cursor-pointer"
                    onClick={() => {
                        const hero7 = document.getElementById('hero7');
                        if (hero7) {
                            hero7.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}>
                    <p className="text-black text-xs md:text-sm whitespace-nowrap">Contact Us</p>
                    <img
                        src={ContactUsArrow}
                        alt="contact us"
                        className="transition-transform duration-300 group-hover:translate-x-2 w-4 md:w-5"
                    />
                </div>
            </div>

            {menuOpen && (
                <div className="absolute top-[12vh] left-0 w-full bg-[var(--goat-black)] text-white flex flex-col items-center py-6 space-y-4 md:hidden z-50">
                    {["Home", "About Us", "Services", "Gallery", "Franchise"].map(
                        (item, index) => (
                            <p
                                key={index}
                                className="text-lg hover:text-[var(--goat-red)] transition-colors cursor-pointer"
                                onClick={() => {
                                    setMenuOpen(false);

                                    let sectionId = "";
                                    switch (item) {
                                        case "Home": sectionId = "hero1"; break;
                                        case "About Us": sectionId = "hero4"; break;
                                        case "Services": sectionId = "hero3"; break;
                                        case "Gallery": sectionId = "hero5"; break;
                                        case "Franchise": sectionId = "hero6"; break;
                                    }

                                    if (sectionId) {
                                        const section = document.getElementById(sectionId);
                                        section?.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                            >
                                {item}
                            </p>
                        )
                    )}
                    <button
                        className="bg-[var(--goat-red)] text-black py-2 px-6 rounded-full mt-4"
                        onClick={() => {
                            setMenuOpen(false);
                            const section = document.getElementById("hero7");
                            section?.scrollIntoView({ behavior: "smooth" });
                        }}>
                        Contact Us
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;