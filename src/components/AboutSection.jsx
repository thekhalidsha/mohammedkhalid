import React from 'react'

const AboutSection = () => {
    return (
        <section className='max-w-screen-xl px-4 py-8 mx-auto lg:py-16 w-full'>
            <div class="">
                <h2 class="font-heading font-bold text-4xl text-zinc-700 pb-8">About Me</h2>
                <div class="max-w-7xl">
                    <div class="grid grid-cols-1 gap-y-6 lg:grid-cols-7 lg:gap-x-20">
                        <div class="lg:col-span-3 lg:order-last">
                            <div class="relative overflow-hidden">
                                <img
                                    alt="coding desktop screen"
                                    loading="lazy"
                                    width="100"
                                    height="100"
                                    decoding="async"
                                    data-nimg="1"
                                    class="object-cover rounded-md w-full h-full"
                                    sizes="100vw"
                                    src="https://www.frankiefab.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmac-ondesk.c9108cb4.jpg&w=640&q=75"
                                    style={{ color: "transparent", width: "100%", height: "auto" }}
                                />
                            </div>
                        </div>
                        <div class="lg:col-span-4">
                            <p class="text-base md:text-lg font-normal text-gray-700 dark:text-gray-400">
                                Proficient in a range of web technologies and software development methodologies.
                            </p>
                            <hr class="my-4 text-zinc-500" />
                            <p className='text-zinc-700'>I am a self-driven, career-oriented software engineer specializing in front-end development and open-source, currently pursuing a bachelors degree in computer science. My expertise lies in building interactive web applications on the client side. Primarily working with technologies like JavaScript, Next.js, TypeScript and Python.</p>
                            <ul class="grid grid-cols-1 md:mt-6 mt-4 sm:grid-cols-2 sm:mt-6 gap-x-8 gap-y-4 sm:gap-y-4">
                                <li class="flex items-start font-normal text-gray-600 dark:text-white">
                                    <span class="w-6 h-6 shrink-0 text-cyan-500"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-accessibility"
                                    >
                                            <circle cx="16" cy="4" r="1"></circle>
                                            <path d="m18 19 1-7-6 1"></path>
                                            <path d="m5 8 3-3 5.5 3-2.36 3.5"></path>
                                            <path d="M4.24 14.5a5 5 0 0 0 6.88 6"></path>
                                            <path d="M13.76 17.5a5 5 0 0 0-6.88-6"></path></svg></span
                                    ><span class="ml-2 text-sm md:text-base">Web Accessibility</span>
                                </li>
                                <li class="flex items-start font-normal text-gray-600 dark:text-white">
                                    <span class="w-6 h-6 shrink-0 text-cyan-500"
                                    ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tablet">
                                            <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                                            <line x1="12" x2="12.01" y1="18" y2="18"></line></svg></span
                                    ><span class="ml-2 text-sm md:text-base">Progressive Web App</span>
                                </li>
                                <li class="flex items-start font-normal text-gray-600 dark:text-white">
                                    <span class="w-6 h-6 shrink-0 text-cyan-500"
                                    ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chrome">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <circle cx="12" cy="12" r="4"></circle>
                                            <line x1="21.17" x2="12" y1="8" y2="8"></line>
                                            <line x1="3.95" x2="8.54" y1="6.06" y2="14"></line>
                                            <line x1="10.88" x2="15.46" y1="21.94" y2="14"></line></svg></span
                                    ><span class="ml-2 text-sm md:text-base">Browser Extension Development</span>
                                </li>
                                <li class="flex items-start font-normal text-gray-600 dark:text-white">
                                    <span class="w-6 h-6 shrink-0 text-cyan-500"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-monitor-smartphone"
                                    >
                                            <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path>
                                            <path d="M10 19v-3.96 3.15"></path>
                                            <path d="M7 19h5"></path>
                                            <rect width="6" height="10" x="16" y="12" rx="2"></rect></svg></span
                                    ><span class="ml-2 text-sm md:text-base">Mobile First Responsive Design</span>
                                </li>
                                <li class="flex items-start font-normal text-gray-600 dark:text-white">
                                    <span class="w-6 h-6 shrink-0 text-cyan-500"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-app-window"
                                    >
                                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                            <path d="M10 4v4"></path>
                                            <path d="M2 8h20"></path>
                                            <path d="M6 4v4"></path></svg></span
                                    ><span class="ml-2 text-sm md:text-base">Application Programming Interface</span>
                                </li>
                                <li class="flex items-start font-normal text-gray-600 dark:text-white">
                                    <span class="w-6 h-6 shrink-0 text-cyan-500"
                                    ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="2" x2="22" y1="12" y2="12"></line>
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></span
                                    ><span class="ml-2 text-sm md:text-base">Content Management System</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutSection