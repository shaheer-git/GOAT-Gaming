import React from 'react'
import companyLog from '../../assets/Logo.svg'
import ContactUsArrow from '../../assets/ContactUsArrow.svg'

const Navbar = () => {
    return (
        <div className='h-[12vh] w-full text-[var(--goat-red)] text-center text-2xl flex items-center gap-5 mb-4'>
            <div className='w-1/6 h-full'>
                <img src={companyLog} alt="" />
            </div>
            <div className='w-full bg-white 0 h-[60px] rounded-full flex items-center justify-around'>
                <div className="group py-3 px-6 rounded-full hover:bg-black cursor-pointer transition-colors duration-300">
                    <p className="text-black text-sm group-hover:text-white transition-colors duration-300">
                        Home
                    </p>
                </div>
                <div className='group py-3 px-6 rounded-full hover:bg-black cursor-pointer transition-colors duration-300'>
                    <p className='text-black text-sm group-hover:text-white transition-colors duration-300'>About Us</p>
                </div>
                <div className='group py-3 px-6 rounded-full hover:bg-black cursor-pointer transition-colors duration-300'>
                    <p className='text-black text-sm group-hover:text-white transition-colors duration-300'>Services</p>
                </div>
                <div className='group py-3 px-6 rounded-full hover:bg-black cursor-pointer transition-colors duration-300'>
                    <p className='text-black text-sm group-hover:text-white transition-colors duration-300'>Gallery</p>
                </div>
                <div className='group py-3 px-6 rounded-full hover:bg-black cursor-pointer transition-colors duration-300'>
                    <p className='text-black text-sm group-hover:text-white transition-colors duration-300'>Franchise</p>
                </div>
            </div>
            <div className="w-[20%] bg-[var(--goat-red)] h-[8vh] rounded-full flex items-center gap-4 px-3 justify-around group cursor-pointer">
                <p className="text-black text-sm">Contact Us</p>
                <img
                    src={ContactUsArrow}
                    alt="contact us"
                    className="transition-transform duration-300 group-hover:translate-x-2"
                />
            </div>

        </div>
    )
}

export default Navbar