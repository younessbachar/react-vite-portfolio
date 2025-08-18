import React from 'react'

const Navbar = () => {
  return (
    <div className='mr-20'>
          <ul className="flex space-x-20">
          <li className='transition-all duration-300 hover:transform hover:scale-115'>
            <a href="#home" className="text-white hover:text-teal-300 ">Home</a>
          </li>
          <li className='transition-all duration-300 hover:transform hover:scale-115'>
            <a href="#about" className="text-white hover:text-teal-300">About</a>
          </li>
          <li className='transition-all duration-300 hover:transform hover:scale-115'>
            <a href="#projects" className="text-white hover:text-teal-300">Projects</a>
          </li>
          <li className='transition-all duration-300 hover:transform hover:scale-115'>
            <a href="#home" className="text-white hover:text-teal-300 ">Skills</a>
          </li>
          <li className='transition-all duration-300 hover:transform hover:scale-115'>
            <a href="#contact" className="text-white hover:text-teal-300">Contact</a>
          </li>
        </ul>
    </div>
  )
}

export default Navbar