import React from 'react'
import Container from '../shared/Container'

const HeroSection = () => {
  return (
    <Container className={'w-full h-screen pt-48 bg-primary md:bg-linear-90 from-[67%] to-[33%] from-primary md:to-secondary'}>
      <div className='w-10/12 border mx-auto'>
        <div className='p-20'>
          <p className='font-extrabold text-6xl text-secondary'>Frontend <br /> Developer<span className='line-height-dot md:text-9xl text-white'>.</span></p>
          <p className='py-6 text-xl text-white'>I like to craft solid and scalable frontend products with great user experiences.</p>
        </div>
      </div>
    </Container>
  )
}

export default HeroSection