import React from 'react'
import Logo from './subcomponents/Logo'
import Navbar from './subcomponents/Navbar'

const Header = () => {
  return (
    <div className="w-full bg-[#1f1f3f] z-4 shadow-lg fixed top-0">
      <header className="container mx-auto flex items-center justify-between py-5 px-6">
        {/* Logo */}
        <Logo />
        {/* Navbar */}
        <Navbar />
      </header>
    </div>
  )
}

export default Header