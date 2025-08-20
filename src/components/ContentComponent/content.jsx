import React from 'react'
import Hero from './SubContentComponent/Hero'
import About from './SubContentComponent/About'
import Project from './SubContentComponent/project'
import Skills from './SubContentComponent/Skills'
import { ContactMe } from './SubContentComponent/ContactMe'

const Content = () => {
  return (
    <div className='bg-[#1f1f3f]'>
      <Hero />
      <About />
      <Project />
      <Skills />
      <ContactMe />
    </div>
  )
}

export default Content