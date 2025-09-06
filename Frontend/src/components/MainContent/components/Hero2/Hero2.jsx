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
            <div className='flex items-center justify-center p-5 overflow-hidden'>
                <img src={WhyText} alt="why text" srcSet="" className='h-[150px]' />
            </div>
            <div className="flex items-center gap-10">
                {/* Mission Card */}
                <figure className="imghvr-reveal-up h-[400px] w-[320px] rounded-3xl overflow-hidden relative text-center flex-shrink-0 hover:cursor-pointer group">
                    <img src={MissionImg} alt="Mission" className="h-full w-full object-cover rounded-3xl" />
                    <p className="text-4xl font-extrabold text-white mb-4 absolute z-50 bottom-2 w-full group-hover:hidden">Mission</p>
                    <figcaption className="flex flex-col items-center justify-center p-6 rounded-3xl">
                        <h1 className="text-4xl font-extrabold text-black mb-4">Mission</h1>
                        <p className="text-black text-sm text-start">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur in molestiae minus, esse optio excepturi doloribus alias nostrum, quos reiciendis sunt accusantium accusamus eaque, sapiente incidunt voluptatum hic molestias placeat!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime soluta quam doloremque iste dolorem ad saepe debitis. Sed qui recusandae perspiciatis debitis blanditiis, sapiente eius asperiores laborum obcaecati, magni quos!
                        </p>
                    </figcaption>
                </figure>

                {/* About Us Card */}
                <figure className="imghvr-reveal-up h-[400px] w-[320px] rounded-3xl overflow-hidden relative text-center flex-shrink-0 cursor-pointer group">
                    <img src={AboutUsImg} alt="About Us" className="h-full w-full object-cover rounded-3xl" />
                    <p className="text-4xl font-extrabold text-white mb-4 absolute z-50 bottom-2 w-full group-hover:hidden">About Us</p>
                    <figcaption className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl">
                        <h1 className="text-4xl font-bold text-black mb-4">About Us</h1>
                        <p className="text-black text-sm text-start">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, optio accusamus fuga repellendus perspiciatis quasi? Provident, eaque delectus? Maiores eaque explicabo a doloribus ratione aut veniam porro. Inventore, architecto aliquid?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sint. Necessitatibus, excepturi alias beatae magni facere ipsum laboriosam perspiciatis dignissimos, minus autem quaerat, modi dolorem quidem reiciendis fugit labore earum.
                        </p>
                    </figcaption>
                </figure>

                {/* Vision Card */}
                <figure className="imghvr-reveal-up h-[400px] w-[320px] rounded-3xl overflow-hidden relative text-center flex-shrink-0 cursor-pointer group-">
                    <img src={VisionImg} alt="Vision" className="h-full w-full object-cover rounded-3xl" />
                    <p className="text-4xl font-extrabold text-white mb-4 absolute z-50 bottom-2 w-full group-hover:hidden">Vision</p>
                    <figcaption className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl">
                        <h1 className="text-4xl font-bold mb-4">Vision</h1>
                        <p className="text-black text-sm text-start">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatibus rem laboriosam asperiores tempore quis nam in, eaque, itaque nulla aliquam vero ducimus soluta doloribus reiciendis dolore sapiente vel repudiandae!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quo in libero quos eligendi, fugit tempore animi et quaerat mollitia nostrum totam fugiat esse harum molestias impedit id quis. Sint!
                        </p>
                    </figcaption>
                </figure>

            </div>
        </>
    )
}

export default Hero2