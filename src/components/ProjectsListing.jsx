import { ArrowRightCircle, ArrowUpRightFromCircleIcon, GlobeIcon, SquareArrowOutUpRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import projectsData from '../data/Projects'
import { SiPhp } from '@icons-pack/react-simple-icons'
import ProjectDetail from '../pages/ProjectDetail'

const ProjectsListing = () => {
    const [openDetailModal, setopenDetailModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null)

    const handleOpenModal = (project) => {
        setSelectedProject(project)
        // console.log(project)
        setopenDetailModal(true)

    }
    const toggleDetailModal = () => {
        setopenDetailModal((prev) => !prev)
    }
    return (
        <div>
            <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12 py-8 ">
                {projectsData.sort((a, b) => b.id - a.id).map((project, key) => {
                    return (
                        <div key={key} className='bg-zinc-50 dark:bg-primary-bg border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-2 md:p-4 rounded-lg'>
                            <div className="flex items-center gap-x-4">
                                {
                                    project.image ?
                                        <img
                                            alt={project.title}
                                            loading="lazy"
                                            width="60"
                                            height="60"
                                            decoding="async"
                                            data-nimg="1"
                                            className="dark:bg-zinc-800 bg-zinc-100 rounded-md md:p-2"
                                            src={project.image}

                                        />
                                        :
                                        project.icon ? <project.icon className="dark:bg-zinc-800 bg-zinc-100 rounded-md md:p-2" width={60} height={60} />
                                            :
                                            <GlobeIcon className="dark:bg-zinc-800 bg-zinc-100 rounded-md md:p-2" width={60} height={60} />
                                }
                                <div>
                                    <h2 className="text-lg tracking-wide mb-1">{project.title}</h2>
                                    <div className="text-sm dark:text-zinc-400 text-zinc-600">{project.description}</div>
                                </div>
                            </div>
                            <div className='pt-2 flex justify-between'>
                                <a target='_blank' href={project.link} className="font-semibold flex justify-between gap-2 items-center text-zinc-700 bg-zinc-200 hover:bg-zinc-300 focus:ring-2 focus:outline-none focus:ring-zinc-800 rounded text-sm px-2 py-1 text-center cursor-pointer">
                                    Live Demo <GlobeIcon className='max-lg:size-4 size-5' />
                                </a>
                                <button onClick={() => handleOpenModal(project)} className="flex justify-between gap-2 items-center font-semibold text-white bg-zinc-700 hover:bg-zinc-800 focus:ring-2 focus:outline-none focus:ring-zinc-300 rounded text-sm px-2 py-1 text-center cursor-pointer">
                                    Read More <ArrowUpRightFromCircleIcon className='max-lg:size-4 size-5' />
                                </button>
                            </div>
                        </div>
                    )
                })}
            </section>
            {openDetailModal && <ProjectDetail toggleDetailModal={toggleDetailModal} project={selectedProject} />}
        </div>
    )
}

export default ProjectsListing