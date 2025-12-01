import React from "react";
import photo from "../../../assets/images/myphoto2.png";
import  {motion}  from "framer-motion";

const About = () => {
  return (
    <div className="pt-30 bg-[#1f1f3f] text-white" id="about">
      <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl text-center font-bold text-white  "
          >
          About<span className="text-teal-300"> Me</span>
      </motion.h1>
    <div
      className="px-10 md:px-20 flex justify-around items-center md:flex-row flex-col-reverse md:pt-20 sm:pb-20"
    
    >
      <motion.div
      initial={{ opacity: 0, transform: "translateX(-100px)" }}
      whileInView={{ opacity: 1, transform: "translateX(0)" }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold text-teal-300 my-4">
          I am a full-stack developer
        </h1>
        <h1 className="text-2xl font-bold mb-2">
          Who builds modern, responsive apps.
        </h1>
        <p className="text-sm text-gray-400 text-4">
          I'm Youness Bachar-Khir, a web developer from Casablanca. <br /> I
          build full-stack apps with the MERN stack and design clean,responsive
          UIs using Tailwind CSS. <br /> I love creating modern, user-friendly
          web experiences.
        </p>
        <div className="flex flex-col md:flex-row md:justify-between space-y-2 mt-4 mb-6">
          <ul>
            <li className="text-sm text-gray-400 my-2 mb-5">
              <span>👨‍💻</span>Full-stack web development
            </li>
            <li className="text-sm text-gray-400 my-2">
              <span>🎨</span>Responsive design with Tailwind CSS
            </li>
          </ul>
          <ul>
            <li className="text-sm text-gray-400 my-2 mb-5">
              <span>🌐</span>MERN stack expertise
            </li>
            <li className="text-sm text-gray-400 my-2">
              <span>🚀</span>Passionate about clean code and user experience
            </li>
          </ul>
        </div>
        <motion.a
        whileHover={{scale:1.1}}
        href="/MyCVv.pdf" download={"MyCVv.pdf"} className="text-white px-2 py-2 bg-teal-300 my-4 rounded-md hover:bg-teal-400 hover:cursor-pointer border-none px-4 mx-2">
          Download CV
        </motion.a>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, transform: "translateX(100px)" }}
      whileInView={{ opacity: 1, transform: "translateX(0)" }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      >
        <div className="h-50 w-50 rounded-full overflow-hidden border-3 border-teal-300/40 relative mt-10">
          <img
            src={photo}
            alt="Hero"
            className="h-55 w-100 absolute top-0 bottom-100"
          />
        </div>
      </motion.div>
    </div>
    </div>
  );
};

export default About;
