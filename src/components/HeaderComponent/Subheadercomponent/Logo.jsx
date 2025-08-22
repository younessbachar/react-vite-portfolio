import React from 'react'
import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="hover:cursor-pointer hover:scale-105 w-full pl-10 transition-transform duration-300"
    >
      <a href="/">
        <span className="font-bold text-2xl md:text-3xl text-teal-300">
          BY-folio
        </span>
      </a>
    </motion.div>
  )
}

export default Logo
