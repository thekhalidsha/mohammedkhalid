import React from 'react'

const Container = ({className, children}) => {
  return (
    // linear-gradient(90deg, #4831d4 67%, #ccf381 33%)
    <section className={`max-h-screen w-full  ${className}`}>
        {children}
    </section>
  )
}

export default Container