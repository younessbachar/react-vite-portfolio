import React from 'react'
import Hero from './subcomponents/Hero'
import About from './subcomponents/About'
import Projects from './subcomponents/projects'

const Content = () => {
  return (
    <div className='bg-[#1f1f3f]'>
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default Content