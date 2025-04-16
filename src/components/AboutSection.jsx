import React from 'react'
import image from './../assets/about_image.png'
import QuoteCard from './QuoteCard'
const AboutSection = () => {
    return (
        <section className='max-w-screen-xl px-4 py-8 mx-auto w-full'>
            <div className="">
                <div className="max-w-7xl">
                    <div className=" flex items-center max-lg:flex-wrap gap-y-6  lg:gap-x-20">
                        <div className="lg:col-span-3 lg:order-last max-lg:hidden">
                            <div className="relative overflow-hidden">
                                <img
                                    alt="coding desktop screen"
                                    loading="lazy"
                                    // width="150%"
                                    // height="100"
                                    decoding="async"
                                    // data-nimg="1"
                                    className="ml-20 rounded-md h-auto max-lg:w-2/3 mx-auto"
                                    // sizes="100vw"
                                    src={image}
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-4">
                            <h2 className="font-heading w-full font-bold text-4xl  text-zinc-700 pb-8">About Me</h2>
                            {/* <p className="text-base md:text-lg font-normal text-gray-700 dark:text-gray-400">
                                Proficient in a range of web technologies and software development methodologies.
                            </p> */}
                            <p className='text-zinc-700'>
                                I’m a passionate Software Engineer, Tech Educator, and an active Open-Source Contributor. With a love for clean code and impactful solutions, I specialize in crafting responsive web applications and mentoring aspiring developers. Whether I’m writing code, teaching concepts, or building community through open-source, I strive to make tech both accessible and meaningful.
                            </p>
                            <hr className="my-4 mb-0 text-zinc-500" />
                            <QuoteCard className="px-4 py-8">
                                If you spot me around, don't be shy—let’s chat! Whether it’s tech, food, or just life in general, I’m always down for a conversation. Maybe even grab a bite while we’re at it!
                            </QuoteCard>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutSection