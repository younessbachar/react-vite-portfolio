import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const navitems = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Skills", href: "skills" },
    { name: "Contact", href: "contact" },
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/youness-bachar-khir-565934316/", icon: "fa-brands fa-linkedin", label: "LinkedIn" },
    { href: "https://www.instagram.com/youness_bachar_khir/", icon: "fa-brands fa-instagram", label: "Instagram" },
    { href: "https://github.com/younessbachar", icon: "fa-brands fa-github", label: "GitHub" },
    { href: "mailto:younesbchar01@gmail.com", icon: "fa-solid fa-envelope", label: "Email" },
  ];

  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-12 py-4 text-white relative">
      {/* Desktop Menu */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="hidden md:flex"
      >
        <ul className="flex space-x-12 ">
          {navitems.map((item, index) => (
            <li
              key={index}
              className="relative cursor-pointer text-teal-100 hover:text-teal-300/80"
            >
              <Link
                to={item.href}
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={() => setActive(item.href)}
                className={active === item.href ? "text-teal-300" : ""}
              >
                {item.name}
              </Link>
              {active === item.href && (
                <motion.div
                  layoutId="indicator"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-teal-300/50 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Social Icons (desktop) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="hidden md:flex items-center space-x-4 text-2xl"
      >
        {socialLinks.map((s, i) => (
          <a key={i} href={s.href} aria-label={s.label}>
            <i className={` ${s.icon} hover:text-teal-300`}></i>
          </a>
        ))}
      </motion.div>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden fixed top-2 right-2 text-3xl text-teal-300 cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center space-y-6 py-6 md:hidden z-40"
        >
          {navitems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => {
                  setActive(item.href);
                  setIsOpen(false);
                }}
                className={`${
                  active === item.href ? "text-teal-300" : "text-teal-100 hover:text-teal-300/80"
                } text-lg`}
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Social icons inside mobile menu */}
          <div className="flex items-center space-x-6 text-2xl mt-4">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.href} aria-label={s.label}>
                <i className={`fa-brands ${s.icon} hover:text-teal-300`}></i>
              </a>
            ))}
          </div>
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
