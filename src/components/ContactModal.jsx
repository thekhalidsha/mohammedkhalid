import { X } from 'lucide-react'
import React from 'react'

const ContactModal = ({ toggleModal }) => {
    return (
        <div className='top-0 fixed h-screen w-full z-50'>
            <div className='backdrop-blur-md backdrop-opacity-100 font-heading font-semibold text-9xl h-full flex justify-center items-center'>
                <div className='absolute min-h-screen w-full -z-10' onClick={toggleModal}></div>
                <div className='max-w-screen-lg w-full mx-auto px-4 py-8 lg:py-16'>
                    <div id="getintouch" class="w-full pb-16">
                        <div class="w-full rounded-3xl overflow-hidden bg-zinc-100 p-6 md:p-12 shadow-xl">
                            <div class="flex flex-row md:flex-row items-start md:items-center justify-between md:gap-8 gap-4">
                                <div class="text-left space-y-1">
                                    <h2 class="font-CooperHewittMedium text-2xl md:text-3xl font-semibold text-[#131313] dark:text-white">Want to Connect?</h2>
                                    <p class="pb-3 md:text-base text-sm text-gray-600 dark:text-gray-400 leading-5 flex-wrap">Connect with me on social media or send me an email.</p>
                                    <div className='icons'>
                                        
                                    </div>
                                </div>
                                <div className='border flex justify-center items-center rounded-full md:p-1'>
                                    <button onClick={toggleModal}>
                                        <X className='max-md:size-5' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactModal