import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/shared/Navbar'

const PublicLayout = ({ children }) => {
    return (
        <main>
            <Navbar />
            <Outlet />
        </main>
    )
}

export default PublicLayout