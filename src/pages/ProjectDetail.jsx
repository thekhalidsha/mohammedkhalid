import { CalendarClockIcon, Github, GithubIcon, InstagramIcon, LinkedinIcon, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import socialLinks from '../data/SocialLinks'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css/github-markdown.css'
import { SiGithub } from '@icons-pack/react-simple-icons'

const ProjectDetail = ({ toggleDetailModal, project }) => {
    const [selectedProject, setSelectedProject] = useState(project)
    const [readme, setReadme] = useState("")
    const socialContacts = socialLinks.filter(item =>
        ['LinkedIn', 'GitHub', 'Instagram'].includes(item.title)
    );
    // console.log(project, selectedProject)
    useEffect(() => {
        if (selectedProject?.readmeUrl) {
            fetch(selectedProject.readmeUrl)
                .then(res => res.text())
                .then(setReadme)
                .catch(() => setReadme("Error loading README"))

        }
    }, [selectedProject])
    return (
        <div className='top-0 left-0 fixed h-screen w-full z-50'>
            <div className='backdrop-blur-md backdrop-opacity-100 font-heading text-9xl h-full flex justify-center items-center'>
                <div className='absolute min-h-screen w-full -z-10' onClick={toggleDetailModal}></div>
                <div className='max-w-screen-xl w-full  h-11/12 mx-auto px-2 py-6'>
                    <div id="getintouch" className="w-full h-full overflow-hidden rounded-xl bg-zinc-200 p-6 md:p-6 shadow-xl">
                        <div className="w-full rounded-md h-full max-h-full overflow-hidden bg-zinc-200  z-50">
                                <div className="text-left flex flex-col border-b">
                                    <div className='flex justify-between py-2 mx-2'>
                                        <h2 className="font-heading text-2xl md:text-3xl font-semibold">{selectedProject.title}</h2>
                                        <div className='flex gap-2 items-center justify-center'>
                                            <a target='_blank' href={selectedProject.github} className="h-10 w-10 font-semibold flex justify-center items-center text-zinc-700 bg-zinc-100 hover:bg-zinc-300 focus:ring-2 focus:outline-none focus:ring-zinc-800 rounded text-sm text-center cursor-pointer">
                                                <SiGithub className='max-lg:size-4 size-5 ' />
                                            </a>
                                            <button onClick={toggleDetailModal} className='h-10 w-10 font-semibold flex justify-center items-center text-zinc-700 bg-zinc-100 hover:bg-zinc-300 focus:ring-2 focus:outline-none focus:ring-zinc-800 rounded text-sm px-2 py-1 text-center cursor-pointer'>
                                                <X className='max-lg:size-4 size-5' />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            <div className="h-full overflow-y-scroll">
                                <div className='max-md:py-1 m-2 text-zinc-700 text-sm cursor-pointer md:p-1'>
                                    <div className="markdown-body p-2 border-0" style={{ backgroundColor: 'transparent' }}>
                                        <ReactMarkdown>
                                            {readme}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectDetail