import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ContactModal from './ContactModal';
import { FileDownIcon, LucideMenu, SquareArrowOutUpRightIcon } from 'lucide-react';

const Navbar = () => {
    const [openMenu, setopenMenu] = useState(false);
    const [openModal, setopenModal] = useState(false);

    const toggleModal = () =>{
        setopenModal((prev)=> !prev)
    }
    const toggleMenu = () =>{
        setopenMenu((prev)=> !prev)
    }
    return (
        <>
            <nav className="sticky backdrop-blur-lg w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 max-md:p-0 max-md:pt-4 ${!openMenu && 'max-md:pb-4'}`}>
                    <Link to="/" className="flex items-center justify-center space-x-3 rtl:space-x-reverse max-md:ml-4">
                        <span className="text-zinc-700 hover:text-black font-heading self-center text-3xl  rounded-lg p-1 border-zinc-400 font-semibold whitespace-nowrap dark:text-white">MK</span>
                    </Link>
                    <div className="max-md:mr-4 flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <a href='/docs/Mohammed Khalid_07_2025.pdf' target='_blank' className="flex justify-between gap-2 items-center text-white bg-zinc-700 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm px-4 py-2 text-center cursor-pointer">
                            Resume <SquareArrowOutUpRightIcon className='max-lg:size-4 size-5'/>
                        </a>
                        <button onClick={toggleMenu} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <LucideMenu className='fill-zinc-700 text-zinc-700'/>
                        </button>
                    </div>
                    <div className={`items-center justify-between ${openMenu ? 'block' : 'hidden'} max-lg:mt-4 max-md:bg-zinc-100 w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <ul className={`${openMenu ? 'max-md:translate-x-0' : 'max-md:translate-x-full'} transform transition-transform duration-500  text-zinc-700 flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
                            <li>
                                <Link to="/" className=" block py-2 px-3 rounded-sm md:bg-transparent md:p-0 hover:text-highlight" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="portfolio" className="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent hover:text-highlight md:p-0">Portfolio</Link>
                            </li>
                            <li>
                                <button onClick={toggleModal} className="hover:text-highlight block cursor-pointer py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent  md:p-0">Contact</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {openModal && <ContactModal toggleModal={toggleModal}/>}
        </>
    )
}

export default Navbar