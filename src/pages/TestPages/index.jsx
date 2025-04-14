import { EasyFullScreen } from '@thekhalidsha/easy-fullscreen'
import React from 'react'

const TestPages = () => {
  return (
    <div>
      <EasyFullScreen
        // direction="horizontal"
        SliderWidth="100vw"   
        SliderHeight="100vh"
        showDots={true}       
        dotColor="gray"        
        activeDotColor="blue"  
        navDotsPosition="top"  
        className=""
        SlideHeight=""
        SlideWidth=""
        // autoPlay='100'
      >
        <div>
          <h2>Slide 1</h2>
          <p>This is the first slide.</p>
        </div>
        <div>
          <h2>Slide 2</h2>
          <p>This is the second slide.</p>
        </div>
        <div >
          <h2>Slide 3</h2>
          <p>This is the third slide.</p>
        </div>
      </EasyFullScreen>
    </div>
  )
}

export default TestPages