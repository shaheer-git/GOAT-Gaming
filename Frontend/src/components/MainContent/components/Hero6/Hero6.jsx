import React from 'react'
import 'imagehover.css/css/imagehover.min.css';
import Text from '../../../../assets/GoatLocationText.svg'
import LocationImg1 from '../../../../assets/GoatLocation-1.webp'
import RightArrowIcon from '../../../../assets/RightArrowIcon.svg'
import './Hero6.css'

const Hero6 = () => {
    return (
        <div className="p-5 text-center mt-6">
            {/* Title */}
            <img src={Text} alt="Services" className="mx-auto mb-8" />

            <div className='flex justify-center items-center gap-3 sm:gap-4 md:gap-6 w-full'>

                <figure className="imghvr-reveal-up w-[45%] sm:w-[40%] md:w-[379px] h-[200px] sm:h-[250px] md:h-[361px] rounded-3xl overflow-hidden relative text-center flex-shrink-0 hover:cursor-pointer group">
                    <img src={LocationImg1} alt="Jayanagar" className="h-full w-full object-cover rounded-3xl" />
                    <p className="text-xl sm:text-2xl md:text-2xl font-bold text-black mb-2 absolute z-50 bottom-2 w-full text-start ml-3 sm:ml-4">Jayanagar</p>
                    <figcaption className="p-3 sm:p-6 rounded-3xl text-center flex justify-center items-center backdrop-blur-xs">
                        <div className="flex items-center justify-center gap-2 sm:gap-3 h-[70px] sm:h-[100px] group">
                            <p className="text-sm sm:text-lg font-bold text-black text-start group-hover:underline">
                                Direct me there
                            </p>
                            <img
                                src={RightArrowIcon}
                                alt=""
                                className="w-4 h-4 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-rotate-50"
                            />
                        </div>
                    </figcaption>
                    <div className="absolute bottom-0 left-0 right-0 h-2/6 backdrop-blur-xs bg-gradient-to-t from-white/100 via-white/25 to-white/0"/>
                </figure>

                <figure className="imghvr-reveal-up w-[45%] sm:w-[40%] md:w-[379px] h-[200px] sm:h-[250px] md:h-[361px] rounded-3xl overflow-hidden relative text-center flex-shrink-0 hover:cursor-pointer group">
                    <img src={LocationImg1} alt="Bellandur" className="h-full w-full object-cover rounded-3xl" />
                    <p className="text-xl sm:text-2xl md:text-2xl font-bold text-black mb-2 absolute z-50 bottom-2 w-full text-start ml-3 sm:ml-4">Bellandur</p>
                    <figcaption className="p-3 sm:p-6 rounded-3xl text-center flex justify-center items-center">
                        <div className="flex items-center justify-center gap-2 sm:gap-3 h-[70px] sm:h-[100px] group">
                            <p className="text-sm sm:text-lg font-bold text-black text-start">
                                Coming soon
                            </p>
                            <img
                                src={RightArrowIcon}
                                alt=""
                                className="w-4 h-4 sm:w-6 sm:h-6 transition-transform duration-300 hidden"
                            />
                        </div>
                    </figcaption>
                    <div className='absolute bottom-0 left-0 right-0 h-2/6 bg-gradient-to-t from-white'></div>
                </figure>
            </div>
        </div>
    )
}

export default Hero6