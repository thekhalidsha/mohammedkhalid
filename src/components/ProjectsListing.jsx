import React from 'react'

const ProjectsListing = () => {
    return (
        <div>
            <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
                <a className="flex items-center gap-x-4 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg" href="/projects/legendarysuni"
                ><img
                        alt="Legendarysuni"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2"
                        src="https://victoreke.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fux9nag6z%2Fproduction%2F7e21d18dd6e2fb678304dc81df953bc64066c2eb-240x240.png&amp;w=128&amp;q=75"
                        style={{color: "transparent"}}
                    />
                    <div>
                        <h2 className="text-lg tracking-wide mb-1">Legendarysuni</h2>
                        <div className="text-sm dark:text-zinc-400 text-zinc-600">Singer/Songwriter Electronic Press Kit</div>
                    </div></a
                ><a className="flex items-center gap-x-4 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg" href="/projects/rocketmeme"
                ><img
                        alt="Rocketmeme"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2"
                        src="https://victoreke.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fux9nag6z%2Fproduction%2Fe84f7c0ae7aa493eadb2943eb0aadc3d81c2dfe2-716x716.png&amp;w=128&amp;q=75"
                        style={{color: "transparent"}}
                    />
                    <div>
                        <h2 className="text-lg tracking-wide mb-1">Rocketmeme</h2>
                        <div className="text-sm dark:text-zinc-400 text-zinc-600">Simple and intuitive meme generator</div>
                    </div></a
                >
            </section>

        </div>
    )
}

export default ProjectsListing