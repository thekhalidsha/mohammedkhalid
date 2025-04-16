import { Github, Instagram } from 'lucide-react'
import React from 'react'
import me from './../assets/me.png'
import socialLinks from '../data/SocialLinks'
const HeroSection = () => {
    return (
        <>
            <section className="">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mx-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl text-zinc-700 font-heading">
                            Hey, <br /> I'm Mohammed Khalid.
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            <q>
                                Software Engineer by passion, educator by purpose, and an open-source contributor at heart.
                            </q>
                        </p>
                        <ul className="flex items-end flex-wrap gap-4  my-10">
                            {socialLinks.map((social, index) => (
                                <li key={index}>
                                    <a
                                        rel="noopener"
                                        target="_blank"
                                        className="flex items-end pr-2 border-b dark:border-b-zinc-800 border-zinc-400 group"
                                        href={social.link}
                                    >
                                        <div className="flex items-end h-full">
                                            <social.icon className="size-6 flex-shrink-0 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300" />
                                        </div>
                                        <p className="ml-1 flex leading-4 group-hover:text-zinc-500">
                                            {social.title}
                                        </p>
                                    </a>
                                </li>
                            ))}

                        </ul>
                    </div>
                    <div className="grayscale-100 brightness-90 lg:flex lg:mt-0 lg:col-span-5 flex-col lg:flex-row max-sm:w-3/4 max-lg:w-1/2 mx-auto max-lg:p-2">
                        <div style={{ opacity: 1, transform: "none" }}><div>
                            <img src={me} alt="" className='lg:w-[450px] w-full h-full  rounded-full drop-shadow-xl drop-shadow-zinc-700  ' />
                            {/* <svg viewBox="0 0 1273 906" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-[450px] w-full h-full"><g><path className="path" d="M318.587 315.483V510.936L477.544 431.391V236.949M318.587 315.483L159.63 236.949M318.587 315.483L477.544 236.949M318.587 315.483V509.925L159.63 589.469M318.587 315.483L159.63 237.286L0.673828 315.483M318.587 315.483L159.63 394.016M477.544 236.949L318.587 158.753L159.63 236.949M477.544 236.949V432.402M477.544 236.949L318.587 158.416L477.544 80.2192L636.5 158.416L477.544 236.949ZM159.63 236.949V79.5451M159.63 589.469V394.016M159.63 589.469L0.673828 509.925V315.483M0.673828 315.483L159.63 394.016M159.63 79.5451L318.587 1.34863L477.544 79.5451L318.587 158.079L159.63 79.5451ZM795.457 395.701V237.286M795.457 237.286L636.5 159.09L477.544 237.286M795.457 237.286L636.5 315.82M477.544 237.286V431.728L601.139 491.762M477.544 237.286L636.5 315.82M636.5 315.82V472.887M954.414 668.003V473.561M954.414 473.561L795.457 395.364L636.5 473.561L795.457 552.094M954.414 473.561L795.457 552.094M954.414 473.561V669.014M954.414 473.561L795.457 395.027L954.414 316.831L1113.37 395.027L954.414 473.561ZM795.457 552.094L636.5 473.898L477.544 552.094M795.457 552.094L636.5 630.628M477.544 552.094V746.534L636.5 826.078V630.628M477.544 552.094L636.5 630.628M795.457 709.498V904.949M795.457 709.498L636.5 630.965M795.457 709.498L954.414 630.965M795.457 904.949L954.414 825.404V630.965M795.457 904.949L636.5 825.404V630.965M636.5 630.965L795.457 552.768L954.414 630.965M1113.37 552.431V747.882M1113.37 552.431L954.414 473.898M1113.37 552.431L1272.33 473.898M1113.37 747.882L1272.33 668.34V473.898M1113.37 747.882L954.414 668.34V473.898M954.414 473.898L1113.37 395.701L1272.33 473.898" stroke="url(#paint-linear)" stroke-opacity="0.6" stroke-width="2"></path></g><path d="M154 586C154 583.239 156.239 581 159 581V581C161.761 581 164 583.239 164 586V586C164 588.761 161.761 591 159 591V591C156.239 591 154 588.761 154 586V586Z" fill="#27B173"></path><path d="M154 393C154 390.239 156.239 388 159 388V388C161.761 388 164 390.239 164 393V393C164 395.761 161.761 398 159 398V398C156.239 398 154 395.761 154 393V393Z" fill="#27B173"></path><path d="M788 551C788 548.239 790.239 546 793 546V546C795.761 546 798 548.239 798 551V551C798 553.761 795.761 556 793 556V556C790.239 556 788 553.761 788 551V551Z" fill="#27B173"></path><path d="M1108 551C1108 548.239 1110.24 546 1113 546V546C1115.76 546 1118 548.239 1118 551V551C1118 553.761 1115.76 556 1113 556V556C1110.24 556 1108 553.761 1108 551V551Z" fill="#27B173"></path><path d="M1108 398C1108 395.239 1110.24 393 1113 393V393C1115.76 393 1118 395.239 1118 398V398C1118 400.761 1115.76 403 1113 403V403C1110.24 403 1108 400.761 1108 398V398Z" fill="#27B173"></path><path d="M788 237C788 234.239 790.239 232 793 232V232C795.761 232 798 234.239 798 237V237C798 239.761 795.761 242 793 242V242C790.239 242 788 239.761 788 237V237Z" fill="#27B173"></path><defs><linearGradient id="paint-linear" x1="1272.23" y1="479.474" x2="506.242" y2="-216.277" gradientUnits="userSpaceOnUse"><stop stop-color="#27b173"></stop><stop offset="0.619553" stop-color="#1a663f"></stop><stop offset="0.93102" stop-color="#26312d"></stop></linearGradient><clipPath><rect width="1273" height="906" fill="white"></rect></clipPath></defs></svg> */}
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection