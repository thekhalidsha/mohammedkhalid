import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ContributionsGraph from '../components/ContributionsGraph'
import WorkExp from '../components/WorkExp'
import Footer from '../components/Footer'
import CoreTechs from '../components/CoreTechs'
import AboutSection from '../components/AboutSection'
import QuoteCard from '../components/QuoteCard'
import ContactModal from '../components/ContactModal'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <QuoteCard>
                If you ever spot me in the wild, don't hesitate to say hello! Let's grab a drink and geek-out over the latest advancements in front-end development or discuss our favorite programming language. ⚡
            </QuoteCard>
            <ContributionsGraph />
            <CoreTechs />
            <WorkExp />
        </>
    )
}

export default HomePage