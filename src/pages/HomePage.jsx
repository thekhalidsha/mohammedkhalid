import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ContributionsGraph from '../components/ContributionsGraph'
import WorkExp from '../components/WorkExp'
import Footer from '../components/Footer'
import CoreTechs from '../components/CoreTechs'
import AboutSection from '../components/AboutSection'
import QuoteCard from '../components/QuoteCard'

const HomePage = () => {
    return (
        <>
            {/* <Navbar /> */}
            <HeroSection />
            <AboutSection />
            <QuoteCard />
            <ContributionsGraph />
            <CoreTechs />
            <WorkExp />
            {/* <Footer/> */}
        </>
    )
}

export default HomePage