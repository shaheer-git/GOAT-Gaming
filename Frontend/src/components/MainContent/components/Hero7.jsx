import React from 'react'
import Text from '../../../assets/LetsConnect.svg'
import GetInTouch from '../../../assets/GetInTouch.svg'
import SeeUsOnGMaps from '../../../assets/SeeUsOnGMaps.svg'


function ContactForm() {
    return (
        <div className="flex justify-center items-center bg-[var(--goat-black)] w-4/5 h-full">
            <div className="bg-[var(--goat-black)] p-8 rounded-2xl w-[500px] shadow-lg">
                <h2 className="text-white text-2xl font-semibold mb-10">Contact</h2>

                <form className="flex flex-col gap-6">
                    {/* Row 1 */}
                    <div className="flex gap-4">
                        <div className="flex flex-col flex-1">
                            <label className="text-white text-sm">
                                Name <span className="text-white">*</span>
                            </label>
                            <input
                                type="text"
                                className="bg-transparent border-b border-[var(--goat-red)] focus:outline-none text-white"
                            />
                        </div>
                        <div className="flex flex-col flex-1">
                            <label className="text-white text-sm">
                                Email <span className="text-white">*</span>
                            </label>
                            <input
                                type="email"
                                className="bg-transparent border-b border-[var(--goat-red)] focus:outline-none text-white"
                            />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex gap-4">
                        <div className="flex flex-col flex-1">
                            <label className="text-white text-sm">
                                Phone <span className="text-white">*</span>
                            </label>
                            <input
                                type="text"
                                className="bg-transparent border-b border-[var(--goat-red)] focus:outline-none text-white"
                            />
                        </div>
                        <div className="flex flex-col flex-1">
                            <label className="text-white text-sm">
                                Subject <span className="text-white">*</span>
                            </label>
                            <input
                                type="text"
                                className="bg-transparent border-b border-[var(--goat-red)] focus:outline-none text-white"
                            />
                        </div>
                    </div>

                    {/* Dropdown */}
                    <div className="flex flex-col">
                        <label className="text-white text-sm mb-4">My Queries About</label>
                        <select className="bg-transparent w-1/4 text-[var(--goat-red)] focus:outline-none text-xs">
                            <option className="bg-[var(--goat-black)] text-white">
                                Slot Booking
                            </option>
                            <option className="bg-[var(--goat-black)] text-white">
                                General Query
                            </option>
                            <option className="bg-[var(--goat-black)] text-white">
                                Support
                            </option>
                        </select>
                    </div>

                    {/* Textarea */}
                    <div className="flex flex-col">
                        <label className="text-white text-sm">
                            Tell us how can we help you{" "}
                            <span className="text-white">*</span>
                        </label>
                        <textarea
                            rows="3"
                            className="bg-transparent border-b border-[var(--goat-red)] focus:outline-none text-white resize-none"
                        ></textarea>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"

                        className="cursor-pointer bg-[var(--goat-red)] text-white font-medium py-3 rounded-md hover:opacity-90 transition"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}



const Hero7 = () => {
    return (
        <div className="p-5 text-start mt-6">
            {/* Title */}
            <img src={Text} alt="Services" className="mx-auto mb-8" />
            <div className='w-full bg-white h-full flex items-center'>
                <div className='w-1/2 h-full border border-[var(--goat-red)] border-r-0 ml-15 flex items-center justify-center flex-col'>
                    <div className='w-full ml-20'>
                        <img src={GetInTouch} alt="GetInTouch" className="w-50 h-50" />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='ml-10'>
                            <p className='font-bold text-xl text-start'>Talk to Us</p>
                            <p className='font-bold text-xl text-start'>We're Always in your Lobby!</p>
                        </div>
                        <div className='ml-10'>
                            <div className='mb-5'>
                                <p className='font-semibold text-[#E91D27] text-sm text-start'>Phone</p>
                                <p className='font-semibold text-[var(--goat-black)] text-sm text-start'>+91 9999999999</p>
                            </div>
                            <div className='mb-5'>
                                <p className='font-semibold text-[#E91D27] text-sm text-start'>Email</p>
                                <p className='font-semibold text-[var(--goat-black)] text-sm text-start'>2oTt1@example.com</p>
                            </div>
                            <div className='mb-5'>
                                <p className='font-semibold text-[#E91D27] text-sm text-start'>Location</p>
                                <p className='font-semibold text-[var(--goat-black)] text-sm text-start w-3/4'>94, Aikya Complex, 7th Cross, Ashoka Pillar Rd, above Dominos Pizza, 1st Block, Jayanagar, Bengaluru, Karnataka 560011</p>
                                <a target='_blank' className='flex items-center gap-2 mt-2 group' href='https://maps.app.goo.gl/hB63RThDwrSafxyt7' >
                                    <p className='font-semibold text-[var(--goat-black)] text-sm text-start underline'>See on Google Map </p>
                                    <img src={SeeUsOnGMaps} alt="" className='w-3 h-3 group-hover:-translate-y-1 transform transition-all duration-300' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 h-full border border-[var(--goat-red)] mr-15 flex items-center justify-center py-[14.5px]'>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Hero7