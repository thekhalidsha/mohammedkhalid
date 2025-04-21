import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const NotFound = () => {
    return (
        <section className='flex flex-col items-center justify-between min-h-screen border'>
            <Navbar />
            <header className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 w-full border-zinc-200 border rounded-2xl">
                <h1 className="font-heading font-semibold text-center font-incognito tracking-tight sm:text-6xl text-3xl lg:leading-[3.7rem] leading-tight mt-6 mb-3">Error 404!</h1>
                <p className="text-center text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">Oopsies! This page does not exist on this site.</p>
            </header>
            <Footer className={`md:text-center`}/>
        </section>
    )
}

export default NotFound