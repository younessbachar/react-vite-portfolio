import React from 'react'
import photo from '../../assets/images/myphoto2.png'
const Hero = () => {
  return (
    <div className='h-full mt-10 pt-25 pb-15 text-white flex justify-around'>
      <div className='flex flex-col justify-center items-start space-y-4 p-10'>
        <p className='text-2xl'>Hello, I'm</p>
       <h1 className='text-4xl font-bold text-teal-300'>YOUNESS BACHAR-KHIR</h1>
       <h1 className='text-4xl font-bold'>I'm a web developer</h1>
       <p className='text-sm text-gray-400 mb-10'>I specialize in building full-stack web applications using the MERN stack  <br /> and crafting sleek, responsive interfaces with Tailwind CSS. I’m passionate about clean code,<br /> intuitive design, and turning ideas into interactive experiences.</p>
        <div>
          <button className='text-white border-2 border-teal-300 px-2 py-1 bg-teal-300  rounded-md hover:bg-teal-400 hover:cursor-pointer hover:transform hover:scale-105 transition-all duration-300  border-none px-4 mx-2'>Contact me</button>
          <button className='text-sm hover:text-teal-300 hover:cursor-pointer '>Download CV</button>
        </div>
      </div>
      <div className='flex flex-col z-1 justify-center items-center'>
        <div className='h-70 w-70 rounded-full overflow-hidden shadow-lg relative'>
        <img src={photo} alt="Hero" className='h-75 w-100 absolute top-0 bottom-100' />
        </div>
      </div>
      </div>
  )
}

export default Hero