import React from 'react'
import Container from './Container'
import { AlignRight, MenuIcon } from 'lucide-react'

const Navbar = () => {
    return (
        <Container className={'fixed w-auto border'}>
            <nav className="">
                <ul className="flex justify-between items-center p-16">
                    <li className="text-2xl font-bold">
                        Kodejex
                    </li>
                    <li className="text-2xl font-bold"> <AlignRight /> </li>
                </ul>
            </nav>

        </Container>
    )
}

export default Navbar