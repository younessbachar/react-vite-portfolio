import React from "react";
import { motion } from "framer-motion";
const Skills = () => {
  const myskills= [
    {
      icon: "fa-brands fa-react",
      title: "Front-End Development",
      description: "Responsive and optimized web applications with modern frameworks.",
      subicons: "subicont"
    },
    {
      icon: "fa-solid fa-code",
      title: "Styling & UI Frameworks",
      description: "modern and maintainable UI components with efficient styling techniques.",
      subicons: "icon"
    },
    {
      icon: "fa-solid fa-cubes",
      title: "State Management",
      description: "Handling application state efficiently for scalable applications.",
      subicons: "icon"
    },
    {
      icon: "fa-solid fa-terminal",
      title: "Back-End Integration",
      description: "Connecting front-end applications to databases and back-end services.",
      subicons: "icon"
    },
    {
      icon: "fa-solid fa-wrench",
      title: "Development Tools",
      description: "Optimizing workflows with modern development and build tools.",
      subicons: "icon"
    },
    {
      icon: "fa-brands fa-git-alt",
      title: "Version Control & Deployment",
      description: "Managing code collaboration and deploying applications efficiently.",
      subicons: "icon"
    },
  ]
  return (
    <div className="px-10 md:px-30 pt-20" id="skills">
      <motion.h1
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="text-4xl text-center font-bold text-white my-15">
        My <span className="text-teal-300">Skills</span>
      </motion.h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {myskills.map((skill, index)=>(
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 , delay: index * 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="block p-4 border border-gray-200 rounded-lg shadow shadow-lg bg-gray-800 border-gray-700 hover:bg-teal-300/20"
          >
            <h1 className="pb-6 mr-2"><i className={`text-2xl text-teal-300 ${skill.icon}`}></i></h1>
            <h5 className="mb-2 text-center text-xl font-bold tracking-tight text-gray-900 text-white">
            {skill.title}
            </h5>
            <p className="font-normal text-sm text-center py-2 text-gray-400">
            {skill.description}
            </p>
            <p className="font-normal  text-gray-400">{skill.subicons}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
