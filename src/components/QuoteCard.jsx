import { Quote } from 'lucide-react'
import React from 'react'

const QuoteCard = ({className, children}) => {
    return (
        <section className={`max-w-screen-xl mx-auto w-full ${className}`}>
            <blockquote className="relative overflow-hidden tracking-tight text-lg lg:py-6 lg:pl-6 pr-12 p-4 border dark:border-zinc-800 border-zinc-200 rounded-md">
                <Quote size={'4.5rem'} className='absolute -top-3 -right-3 -rotate-12 dark:text-zinc-800 text-zinc-200 -z-10'/> 
                {children}
            </blockquote>

        </section>
    )
}

export default QuoteCard