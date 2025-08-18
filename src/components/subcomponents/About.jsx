import React from 'react'
import photo from '../../assets/images/myphoto2.png'

const About = () => {
  return (
    <div className='mx-20 flex justify-around items-center py-20 bg-[#1f1f3f] text-white'>
      <div>
        <p className="text-sm text-gray-400 font-bold ">About Me</p>
      <h1 className='text-4xl font-bold text-teal-300 my-4'>I am a developer</h1>
      <h1 className='text-2xl font-bold mb-2'>Who builds modern, responsive apps.</h1>
      <p className='text-sm text-gray-400 text-4'>I'm Youness Bachar-Khir, a web developer from Casablanca. <br /> I build full-stack apps with the MERN stack and design clean,responsive UIs using Tailwind CSS. <br /> I love creating modern, user-friendly web experiences.</p>
      <div className='flex justify-between space-y-2 mt-4'>
        <ul>
          <li className='text-sm text-gray-400 my-2 mb-5'><span>👨‍💻</span>Full-stack web development</li>
          <li className='text-sm text-gray-400 my-2'><span>🎨</span>Responsive design with Tailwind CSS</li>
        </ul>
        <ul>
          <li className='text-sm text-gray-400 my-2 mb-5'><span>🌐</span>MERN stack expertise</li>
          <li className='text-sm text-gray-400 my-2'><span>🚀</span>Passionate about clean code and user experience</li>
        </ul>
      </div>
      <button className='text-white border-2 border-teal-300 px-2 py-1 bg-teal-300 my-4 rounded-md hover:bg-teal-400 hover:cursor-pointer hover:transform hover:scale-105 transition-all duration-300  border-none px-4 mx-2'>Download CV</button>
      </div>
      <div>
        <div className='h-50 w-50 rounded-full overflow-hidden shadow-lg relative'>
            <img src={photo} alt="Hero" className='h-55 w-100 absolute top-0 bottom-100' />
        </div>
      </div>
    </div>
  )
}

export default About