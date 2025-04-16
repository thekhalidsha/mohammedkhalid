import React from 'react'
import HeroSection from '../components/HeroSection'
import ContributionsGraph from '../components/ContributionsGraph'
import WorkExp from '../components/WorkExp'
import CoreTechs from '../components/CoreTechs'
import AboutSection from '../components/AboutSection'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ContributionsGraph />
            <CoreTechs />
            <WorkExp />
        </>
    )
}

export default HomePage