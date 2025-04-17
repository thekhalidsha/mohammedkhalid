import { CalendarClockIcon, Github, GithubIcon, InstagramIcon, LinkedinIcon, X } from 'lucide-react'
import React from 'react'
import socialLinks from '../data/SocialLinks'

const ContactModal = ({ toggleModal }) => {
    const socialContacts = socialLinks.filter(item =>
        ['LinkedIn', 'GitHub', 'Instagram'].includes(item.title)
    );
    console.log(socialContacts)

    return (
        <div className='top-0 left-0 fixed h-screen w-full z-50'>
            <div className='backdrop-blur-md backdrop-opacity-100 font-heading text-9xl h-full flex justify-center items-center'>
                <div className='absolute min-h-screen w-full -z-10' onClick={toggleModal}></div>
                <div className='max-w-screen-sm h-1/2 mx-auto px-4 py-8 lg:py-16'>
                    <div id="getintouch" className="w-full h-full">
                        <div className="w-full rounded-3xl overflow-hidden h-auto bg-zinc-100 p-6 md:p-6 shadow-xl z-50">
                            <div className="">
                                <div className="text-left flex flex-col">
                                    <div>
                                        <h2 className="font-heading text-2xl md:text-3xl font-semibold">Want to Connect?</h2>
                                        <p className="pb-3 md:text-base text-sm text-gray-600 dark:text-gray-400 leading-5 flex-wrap">Connect with me on social media or send me an email.</p>
                                    </div>
                                    <div className='text-sm font-normal flex flex-col'>
                                        <a href="mailto:thekhalidsha@gmail.com">thekhalidsha@gmail.com</a>
                                        <div className='p-4 flex items-center justify-between gap-2 max-md:flex-wrap'>
                                            {socialContacts.map((social, key) => {
                                                return (
                                                    <a key={key} href={social.link} title='Linked In' className='group hover:border-zinc-700 inline-block border rounded-md p-1 border-zinc-500'>
                                                        <social.icon className='size-6 text-zinc-500 group-hover:text-zinc-700' />
                                                    </a>
                                                )
                                            })}
                                            <a href="hhttps://cal.com/thekhalidsha/15min" target='_blank' title='Schedule a Meeting' className='group hover:border-zinc-700 inline-block border rounded-md p-1 border-zinc-500'>
                                                <CalendarClockIcon className='size-6 text-zinc-500 group-hover:text-zinc-700' />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                                <div onClick={toggleModal} className='max-md:py-1 bg-zinc-700 hover:bg-zinc-100 hover:text-zinc-700 text-zinc-100 m-2 text-sm cursor-pointer  border flex justify-center items-center rounded-full md:p-1'>
                                    Close
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