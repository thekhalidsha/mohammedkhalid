import React from 'react'
import ProjectsHeader from '../components/ProjectsHeader'
import ProjectsListing from '../components/ProjectsListing'

const Projects = () => {
  return (
    <div className='max-w-screen-xl w-full mx-auto px-4 py-8 lg:py-16 '>
        <ProjectsHeader/>
        {/* <ProjectsListing/> */}
    </div>
  )
}

export default Projects