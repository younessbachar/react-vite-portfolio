import React from 'react'
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { myProjects } from './projectsarr';
import "./projects.css";
const Projects = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });
    setArr(newArr);
  };

  return (
    <div className="bg-gradient-to-b from-[#1f1f3f] via-[#23235a] to-[#1f1f3f] py-16 px-4 min-h-screen">
      <h1 className='text-3xl font-bold text-white text-center mb-20 my-4'>
        Explore My Popular <span className='text-teal-300'>Projects</span>
      </h1>
      <main className="flex flex-col md:flex-row gap-8">
        <section className="flex flex-col gap-4 md:w-1/5">
          <button
            onClick={() => {
              setcurrentActive("all");
              setArr(myProjects);
            }}
            className={`py-2 px-4 rounded transition-all duration-200 ${
              currentActive === "all"
                ? "bg-teal-300 text-[#1f1f3f] font-bold"
                : "bg-transparent text-white hover:bg-teal-700"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => handleClick("css")}
            className={`py-2 px-4 rounded transition-all duration-200 ${
              currentActive === "css"
                ? "bg-teal-300 text-[#1f1f3f] font-bold"
                : "bg-transparent text-white hover:bg-teal-700"
            }`}
          >
            HTML & CSS
          </button>
          <button
            onClick={() => handleClick("js")}
            className={`py-2 px-4 rounded transition-all duration-200 ${
              currentActive === "js"
                ? "bg-teal-300 text-[#1f1f3f] font-bold"
                : "bg-transparent text-white hover:bg-teal-700"
            }`}
          >
            JavaScript
          </button>
          <button
            onClick={() => handleClick("react")}
            className={`py-2 px-4 rounded transition-all duration-200 ${
              currentActive === "react"
                ? "bg-teal-300 text-[#1f1f3f] font-bold"
                : "bg-transparent text-white hover:bg-teal-700"
            }`}
          >
            React & MUI
          </button>
          <button
            onClick={() => handleClick("node")}
            className={`py-2 px-4 rounded transition-all duration-200 ${
              currentActive === "node"
                ? "bg-teal-300 text-[#1f1f3f] font-bold"
                : "bg-transparent text-white hover:bg-teal-700"
            }`}
          >
            Node & Express
          </button>
        </section>

        <section className="flex flex-wrap gap-8 md:w-4/5 justify-center">
          <AnimatePresence>
            {arr.map((item) => {
              return (
                <motion.article
                  layout
                  initial={{ transform: "scale(0.4)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ type: "spring", damping: 8, stiffness: 50 }}
                  key={item.imgPath}
                  className="bg-[#23235a] rounded-lg shadow-lg overflow-hidden card"
                >
                  <img width={266} src={item.imgPath} alt="" />

                  <div style={{ width: "266px" }} className="box p-4">
                    <h1 className="title text-lg font-bold text-teal-300">{item.projectTitle}</h1>
                    <p className="sub-title text-gray-300 text-sm my-2">
                      Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                      tempore dolor in, accusantium laudantium accusamus.
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex gap-3">
                        <a href='#'><i className="fa-solid fa-link font-200"></i></a>
                        <a href='#'><i className="fa-brands fa-github"></i></a>
                      </div>
                      <a className="link flex items-center text-teal-300 hover:underline" href="">
                        more
                        <span className="icon-arrow-right ml-1"></span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
};

export default Projects