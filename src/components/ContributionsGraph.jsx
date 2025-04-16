import React from 'react'
import GitHubCalendar from 'react-github-calendar'

const ContributionsGraph = () => {
    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto w-full">
                <p className='font-heading font-bold text-4xl text-zinc-700 pb-8'>Contribution Graph <small className='text-base'></small></p>
                <div className='overflow-hidden  border border-zinc-200 w-fit max-w-full p-8 rounded-md bg-zinc-100'>
                    <GitHubCalendar username='thekhalidsha' blockSize={15} />
                </div>
            </div>
        </section>
    )
}

export default ContributionsGraph