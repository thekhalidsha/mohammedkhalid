import React from 'react'
import Container from '../shared/Container'
import user from './../../assets/user-img.jfif'
import { Github, Instagram, Linkedin, MailIcon, MapPin, PhoneIcon } from 'lucide-react'

const ProfileCard = ({ className }) => {
    return (
        <Container className={`h-auto mx-auto ${className} flex justify-center items-center p-6 overflow-y-auto overflow-x-hidden`}>
            <div className='flex flex-col justify-between items-center'>
                <div className=" w-full flex flex-col gap-4 py-6 border-b border-jet">
                    <div className='mx-auto text-center flex justify-center'>
                        <img src={user} className='rounded-2xl grayscale hover:grayscale-0 w-6/12' />
                    </div>
                    <div className='text-xs flex flex-col gap-2 justify-center items-center'>
                        <h2 className='lg:text-xl font-bold text-center text-highlight'>
                            Mohammed Khalid
                        </h2>
                        <p className='rounded-md bg-secondary px-2 py-1.5'>Software Engineer</p>
                    </div>
                </div>
                {/* <div className="border-b-2 w-11/12 text-jet"></div> */}
                <div className="w-full  grid grid-cols-1 border-b border-jet">
                    <div className="p-2 flex gap-4 items-center">
                        <div className="border rounded-md border-jet bg-secondary p-2">
                            <MailIcon />
                        </div>
                        <div className='info'>
                            <p className='text-t_secondary uppercase text-xs'>Email</p>
                            <p className='text-t_primary text-sm'>thekhalidsha@gmail.com</p>
                        </div>
                    </div>
                    <div className="p-2 flex gap-4 items-center">
                        <div className="border rounded-md border-jet bg-secondary p-2">
                            <PhoneIcon />
                        </div>
                        <div className='info'>
                            <p className='text-t_secondary uppercase text-xs'>Phone</p>
                            <p className='text-t_primary text-sm'>+91 7994748874</p>
                        </div>
                    </div>
                    <div className="p-2 flex gap-4 items-center">
                        <div className="border rounded-md border-jet bg-secondary p-2">
                            <MapPin />
                        </div>
                        <div className='info'>
                            <p className='text-t_secondary uppercase text-xs'>Location</p>
                            <p className='text-t_primary text-sm'>Trivandrum, Kerala</p>
                        </div>
                    </div>
                </div>
                <div className="social w-full flex gap-5 justify-center p-2">
                    <div className="flex justify-between items-center border cursor-pointer rounded-md border-jet bg-secondary p-2">
                        <Github width={'20px'} />
                    </div>
                    <div className="flex justify-between items-center border cursor-pointer rounded-md border-jet bg-secondary p-2">
                        <Linkedin width={'20px'} />
                    </div>
                    <div className="flex justify-between items-center border cursor-pointer rounded-md border-jet bg-secondary p-2">
                        <Instagram width={'20px'} />
                    </div>
                    {/* <div className="border rounded-md border-jet bg-secondary p-2">
                        <MapPin />
                    </div> */}
                </div>
            </div>
        </Container>
    )
}

export default ProfileCard