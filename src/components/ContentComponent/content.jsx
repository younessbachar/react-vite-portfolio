import React from 'react'
import Hero from './SubContentComponent/Hero'
import About from './SubContentComponent/About'
import Project from './SubContentComponent/project'
import Skills from './SubContentComponent/Skills'
import { ContactMe } from './SubContentComponent/ContactMe'
import socialimage from '../../assets/images/social.png'

const Content = () => {
  return (
    <div className='bg-[#1f1f3f]'>
      <Hero />
      <About />
      <Project />
      <Skills />
      <ContactMe />
      <a href="https://wa.link/lisgyr"><img src={socialimage} className="fixed bottom-10 right-12 w-12 h-12 hover:animate-bounce hover:cursor-pointer "></img></a>
    </div>
  )
}

export default Content