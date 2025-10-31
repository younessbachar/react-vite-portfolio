import { useState } from "react";
import photo from "../../../assets/images/1.jpeg";
import portfolio from "../../../assets/images/portfolio.png";
import bysystem from "../../../assets/images/bysystem.png";
import tailwindcss from "../../../assets/images/tailwindcss.png";
import Btask from "../../../assets/images/B-Task.png";



import { motion } from "framer-motion";
const Project = () => {
  const data = [
    {
      title: "BY-folio",
      description:
        "Description of BY-folio goes here. It includes details about the technologies used, features, and any other relevant information.",
      image: portfolio,
      category: ["React.js", "TailwindCSS","View All"],
      github: "https://github.com/younessbachar/react-vite-portfolio",
      preview: "https://by-folio.vercel.app/",
    },
    {
      title: "BY-System",
      description:
        "Description of BY-System goes here. It includes details about the technologies used, features, and any other relevant information.",
      image: bysystem,
      category: ["Node.js", "Full Stack Development", "View All"],
      github: "https://github.com/younessbachar/BY-System",
      preview: "https://nodejs-project-xrrt.onrender.com/",
    },
    {
      title: "TailwindCSS",
      description:
        "Description of TailwindCSS goes here. It includes details about the technologies used, features, and any other relevant information.",
      image: tailwindcss,
      category: ["TailwindCSS", "View All"],
      github: "https://github.com/younessbachar/tailwind-project",
      preview: "https://younessbachar.github.io/tailwind-project/",
    },
    {
      title: "B-Task",
      description:
        "Description of B-Task goes here. It includes details about the technologies used, features, and any other relevant information.",
      image: Btask,
      category: ["React.js", "View All"],
      github: "https://github.com/younessbachar/myapp",
      preview: "https://myapp-44b7b.web.app/",
    },
  ];

  const skills = [
    "View All",
    "React.js",
    "Node.js",
    "Full Stack Development",
    "TailwindCSS",
  ];

  const [activeTab, setActiveTab] = useState("View All");

  return (
    <div className="px-10 md:px-30 my-10 pt-20" id="projects">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-4xl text-center font-bold text-white my-4 mb-10"
      >
        Explore My<span className="text-teal-300"> Projects</span>
      </motion.h1>
      {/* tabs */}
      <div className="md:flex hidden w-full  flex justify-center flex-wrap flex  gap-3 mb-10">
        {skills.map((skill, index) => (
          <motion.button
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            key={index}
            onClick={() => setActiveTab(skill)}
            className={` border border-gray-200 bg-gray-800/50 backdrop-blur-[5px] rounded-lg shadow-sm  px-6 py-2 text-center ${
              activeTab === skill
                ? "bg-teal-300"
                : "border-gray-700  hover:bg-teal-300/50 hover:cursor-pointer hover:border-white/60 hover:shadow-lg"
            }`}
          >
            <h5 className="text-base font-bold text-white">
              {skill}
            </h5>
          </motion.button>
        ))}
      </div>
      {/*Phone tabs */}
      <select className="md:hidden block w-full my-4 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-300 focus:border-teal-300" onChange={(e) => setActiveTab(e.target.value)}>
        {skills.map((skill, index) => (
          <option key={index}>{skill}</option>
        ))}
      </select>


      {/* projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data
          .filter(
            (project) =>
              project.category.includes(activeTab) ||
              project.category === activeTab
          )
          .map((project, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
              key={index}
              class=" border border-gray-200 rounded-lg shadow-2xl hover:bg-teal-300/20 bg-gray-800/50 backdrop-blur-[5px] border-gray-700"
            >
              <img
                class="rounded-2xl p-1 object-cover h-52 w-full "
                src={project.image}
                alt=""
              />

              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">
                  {project.title}
                </h5>
                <p class="mb-3 font-normal text-gray-400">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-400/30 rounded-lg hover:bg-teal-400 hover:transform hover:scale-105 transition-all duration-300 border-none"
                  >
                    <p>View</p>
                    <i className="fa-brands fa-github text-xl ml-3 text-white "></i>
                  </a>
                  <div>
                    <a href={project.preview}>
                      <p className="text-white hover:text-teal-400 hover:cursor-pointer hover:transform hover:scale-105 transition-all duration-300">
                        preview
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Project;
