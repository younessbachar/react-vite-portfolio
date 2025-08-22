import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="hover:cursor-pointer min-w-40 ml-10 sm:pl-20 md:w-1/3 hover:scale-105 transition-transform duration-300"
    >
      <a
        href="/"
        className="font-bold w-full text-2xl md:text-3xl text-teal-300"
      >
        BY-folio
      </a>
    </motion.div>
  );
};

export default Logo;
