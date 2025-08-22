import React from 'react'
import photo from '../../../assets/images/myphoto2.png'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <div className='min-h-screen lg:px-20 pt-32 pb-15 text-white flex flex-col-reverse justify-around items-center lg:flex-row ' id='home'>
      <motion.div
         initial={{ opacity: 0, translateX: -100 }}
         whileInView={{ opacity: 1, translateX: 0 }}
         transition={{ duration: 1 }}
         viewport={{ once: true }}
         className='lg:w-1/2 w-full lg:text-left space-y-4 p-10'>
        <p className='text-2xl'>Hello, I'm</p>
       <h1 className='text-4xl font-bold text-teal-300'>YOUNESS BACHAR-KHIR</h1>
       <h1 className='text-4xl font-bold'>I'm a Full stack developer</h1>
       <p className='text-sm text-gray-400 mb-10'>I specialize in building full-stack web applications using the MERN stack  <br /> and crafting sleek, responsive interfaces with Tailwind CSS. I’m passionate about clean code,<br /> intuitive design, and turning ideas into interactive experiences.</p>
        <div>
          <motion.button
          initial={{opacity:0, scale:0.8}}
          whileInView={{opacity:1, scale:1}}
          transition={{duration:1.3}}
          viewport={{once:true}}
          whileHover={{scale:1.1}}
          onClick={()=>{document.getElementById('contact').scrollIntoView({behavior:"smooth"})}}
          className='text-white border-none py-1 bg-teal-300  rounded-md hover:bg-teal-400 hover:cursor-pointer hover:transform hover:scale-105 transition-all duration-300 px-2 mx-2'>Contact me</motion.button>
          <motion.a href="/MyCV.pdf" className='text-sm hover:text-teal-300 hover:cursor-pointer'  download="MyCV.pdf" >Download CV</motion.a>
        </div>
        
      </motion.div>
      <motion.div
       initial={{ opacity: 0, translateX: 100 }}
       whileInView={{ opacity: 1, translateX: 0 }}
       transition={{ duration: 1.2 }}
       viewport={{ once: true }}
       className='z-1 flex justify-center md:pl-30 md:w-1/2 w-full'>
        <div className='h-68 w-68 rounded-full overflow-hidden text-start border-4 border-teal-300/20 shadow-lg shadow-teal-300/20'>
        <img src={photo} alt="Hero" className='h-full w-full' />
        </div>
      </motion.div>
      </div>
  )
}

export default Hero