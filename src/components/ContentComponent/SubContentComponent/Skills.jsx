import React from "react";
import { motion } from "framer-motion";
const Skills = () => {
  const myskills= [
    {
      icon: "fa-brands fa-react",
      title: "Front-End Development",
      description: "Responsive and optimized web applications with modern frameworks.",
      subicons: ["fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-js", "fa-brands fa-react"],
      SubiconsName: ["HTML5", "CSS3", "JavaScript", "React"]
    },
    {
      icon: "fa-solid fa-code",
      title: "Styling & UI Frameworks",
      description: "modern and maintainable UI components with efficient styling techniques.",
      subicons: ["fa-brands fa-tailwind", "fa-brands fa-bootstrap", "fa-brands fa-css3-alt", "fa-solid fa-code"],
      SubiconsName: ["TailwindCSS", "Bootstrap", "CSS Modules", "ShadCN"]
    },
    {
      icon: "fa-solid fa-cubes",
      title: "State Management",
      description: "Handling application state efficiently for scalable applications.",
      subicons: ["fa-brands fa-react", "fa-brands fa-ne"],
      SubiconsName: ["Context API", "Redux"]
    },
    {
      icon: "fa-solid fa-terminal",
      title: "Back-End Integration",
      description: "Connecting front-end applications to databases and back-end services.",
      subicons: ["fa-brands fa-mongodb","fa-brands fa-node-js", "fa-solid fa-code"],
      SubiconsName: ["MongoDB","Node.js", "REST APIs"]
    },
    {
      icon: "fa-solid fa-wrench",
      title: "Development Tools",
      description: "Optimizing workflows with modern development and build tools.",
      subicons: ["fa-brands fa-npm", "fa-brands fa-node-js", "fa-brands fa-prettier"],
      SubiconsName: ["npm", "Node.js", "Prettier"]
    },
    {
      icon: "fa-brands fa-git-alt",
      title: "Version Control & Deployment",
      description: "Managing code collaboration and deploying applications efficiently.",
      subicons: ["fa-brands fa-git", "fa-brands fa-github", "fa-brands fa-vercel"],
      SubiconsName: ["Git", "GitHub", "Vercel"]
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
            className="block p-4 border border-gray-200 rounded-lg shadow shadow-lg bg-gray-800/50 backdrop-blur-[5px] border-gray-700 hover:bg-teal-300/20"
          >
            <h1 className="py-1 mr-2"><i className={`text-2xl text-teal-300 ${skill.icon}`}></i></h1>
            <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 text-white">
            {skill.title}
            </h5>
            <p className="font-normal text-sm text-center py-1 text-gray-400">
            {skill.description}
            </p>
           {/* sub icons */}
            <div className="flex flex-wrap  w-full mt-4">
              {skill.subicons.map((sub, i) => (
                <span key={i} className="flex text-sm items-center mr-2 px-2 py-1 rounded-md mb-2 text-white bg-teal-300/10"><i className={`text-sm text-teal-300 pr-1 ${sub}`}></i>{skill.SubiconsName[i]}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
