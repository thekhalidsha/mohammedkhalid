import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/shared/Navbar'
import Container from '../../components/shared/Container'
import ProfileCard from '../../components/ProfileCard'
import SectionCard from '../../components/SectionCard'

const PublicLayout = ({ children }) => {
    return (
        <main>
            <Container className={`h-screen bg-canvas text-t_primary flex justify-center items-center p-16 `}>
                <Container className={`h-full w-full grid grid-cols-3 gap-6`}>
                    <ProfileCard className={`border border-jet rounded-3xl p-2 bg-primary`} />
                    <Container className={`col-span-2 h-full w-full border border-jet rounded-3xl p-2 bg-primary lg:flex flex-col gap-4`}>
                        <Navbar className={`hidden lg:block border border-jet rounded-2xl h-1/6`} />
                        <SectionCard className={`w-full border border-jet rounded-2xl p-2 bg-primary`} />
                    </Container>
                </Container>
            </Container>
        </main>
    )
}

export default PublicLayout