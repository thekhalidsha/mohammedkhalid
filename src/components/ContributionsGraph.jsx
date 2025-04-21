import React from 'react'
import GitHubCalendar from 'react-github-calendar'

const ContributionsGraph = () => {
    const myTheme = {
        light: ['#ebedf0', 'var(--graph-2)', 'var(--graph-3)', 'var(--graph-4)', 'var(--graph-5)',], 
        // light: ['#ebedf0', '#9f9fa9', '#71717b', '#52525c', '#27272a',], 
        // dark: ['#161b22', '#ffcccc', '#ff9999', '#ff6666', '#27272a'],
      };
      
    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto w-full">
                <p className='font-heading font-bold text-4xl text-zinc-800 pb-8'>Contribution Graph <small className='text-base'></small></p>
                <div className='overflow-hidden  border border-zinc-200 w-fit max-w-full p-8 rounded-md bg-zinc-100'>
                    <GitHubCalendar theme={myTheme} username='thekhalidsha' blockSize={15} />
                </div>
            </div>
        </section>
    )
}

export default ContributionsGraph