import React from 'react'
import Container from './Container'
import { AlignRight, MenuIcon } from 'lucide-react'

const Navbar = ({className}) => {
    return (
        <Container className={`${className}`}>
            <div className="flex h-full w-full justify-around items-center">
                <div>About</div>
                <div>Resume</div>
                <div>Portfolio</div>
                <div>Blog</div>
                <div>Contact</div>
            </div>
        </Container>
    )
}

export default Navbar