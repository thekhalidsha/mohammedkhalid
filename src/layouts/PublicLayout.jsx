import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ColorChanger from '../components/ColorChanger'

const PublicLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer className={`md:text-right`}/>
            <ColorChanger/>
        </>
    )
}

export default PublicLayout