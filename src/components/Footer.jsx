import React from 'react'

const Footer = ({className}) => {
  return (
    <section className='w-full'>
        <div className={`max-w-screen-xl px-4 py-8 mx-auto lg:py-12 w-full border-t border-zinc-200 `}>
            <p className={`text-center font-heading font-normal text-xs ${className}`}>Copyright © Mohammed Khalid 2025 All rights Reserved</p>
        </div>
    </section>
  )
}

export default Footer