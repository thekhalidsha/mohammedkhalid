import { HandMetal } from 'lucide-react'
import React from 'react'
import coreTools from '../data/CoreTools'

const CoreTechs = () => {
    return (
        <section className='max-w-screen-xl px-4 py-8 mx-auto w-full'>
            <div className="flex flex-col items-center font-heading">
                <div className="w-full md:my-8 my-3">
                    <h2 className="font-heading font-bold text-4xl text-zinc-700 pb-4">Core <span className="">Technologies</span></h2>
                    <p className="mb-1 text-base sm:text-lg font-normal text-gray-700 dark:text-gray-400">
                        My go-to stack for turning concepts into code.
                    </p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center items-center text-center">
                    {coreTools.sort(() => Math.random() - 0.5).map((tool, key) => {
                        return (
                            <div key={key} className="relative inline-block">
                                <div>
                                    <div className="group hover:bg-zinc-800 text-4xl bg-zinc-50 shadow-[0_2px_2px_0_rgba(7, 10, 45, 0.37)] backdrop-blur-[2.5px] border border-zinc-300 rounded-full md:p-4 md:w-16 md:h-16 p-3 w-12 h-12 flex items-center justify-center cursor-pointer">
                                        <span className="sr-only">{tool.name}</span>
                                        <tool.icon className='group-hover:invert size-8 text-zinc-700' />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </section>
    )
}

export default CoreTechs