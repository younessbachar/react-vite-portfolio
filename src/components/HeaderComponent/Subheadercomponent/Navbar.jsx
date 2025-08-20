import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [active, setActive] = useState("home")

  const navitems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Skills', href: 'skills' },
    { name: 'Contact', href: 'contact' }
  ]
  return (
    <div className='mr-10'>
          <ul className="flex space-x-15">
            {navitems.map((item, index) => (
              <li key={index} className="relative text text-teal-100 hover:text-teal-300/80 cursor-pointer ">
                <Link to={item.href} spy={true} smooth={true} duration={500} activeClass='text-teal-300' onSetActive={() => setActive(item.href)}>{item.name}</Link>
                {active === item.href && 
                <motion.div 
                 layoutId="indicator"
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-teal-300/50 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                
                }
              </li>
            ))}
          
        </ul>
    </div>
  )
}

export default Navbar