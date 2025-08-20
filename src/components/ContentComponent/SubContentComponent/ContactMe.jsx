import { motion } from "framer-motion";
import { title, view } from "framer-motion/client";
export const ContactMe = () => {
  const informations = [
    {
      icon: "fa-solid fa-location-dot",
      title: "Location",
      description: "Casablanca, Morocco",
    },
    {
      icon: "fa-solid fa-envelope",
      title: "Email",
      description: "younesbchar01@gmail.com",
    },
    {
      icon: "fa-solid fa-phone",
      title: "Phone",
      description: "+212 6 91 64 85 46",
    },
    {
      icon: "fa-solid fa-briefcase",
      title: "Availability",
      description: "Open to opportunities",
    }
    
  ];
  return (
    <div id="contact" className="mx-30  pb-20">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl text-center font-bold text-white my-15 "
      >
        Contact<span className="text-teal-300"> Me</span>
      </motion.h1>
      <div className="grid grid-cols-2 gap-4 ">
        <motion.div
         initial={{ opacity: 0, translateX: -100 }}
         whileInView={{ opacity: 1, translateX: 0 }}
         transition={{ duration: 1 }}
         viewport={{ once: false , amount: 0.2 }}

         className="space-x-8 bg-gray-800 dark:border-gray-700 border-1 border-teal-gray-500 rounded-md p-10 shadow-lg ">
          <h1 className="text-3xl font-bold text-white text-center mb-10">Get in Touch</h1>
          <form className="flex flex-col space-y-4" action="">
            <input
              type="text"
              placeholder="Name"
              className="p-2 w-80 text-white rounded-md bg-teal-300/20 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 w-80 text-white rounded-md bg-teal-300/20 outline-none"
            />
            <textarea
              placeholder="Message"
              className="p-2 w-80 rounded-md text-white bg-teal-300/20 outline-none"
            />
            <button
              type="submit"
              className="bg-teal-300 text-white p-2 rounded-md w-20 hover:bg-teal-400 hover:cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
            >
              Send
            </button>
          </form>
      </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
         whileInView={{ opacity: 1, translateX: 0 }}
         transition={{ duration: 1 }}
         viewport={{ once: false , amount: 0.2 }}
          className="space-x-8 bg-gray-800 dark:border-gray-700 border-1 border-teal-gray-500 rounded-md p-10 shadow-lg">
          <h1 className="text-3xl font-bold text-white text-center mb-4">
            Contact <span className="text-teal-300">Information</span>
          </h1>
          {informations.map((information, index) => (
          <div key={index} className="bg-teal-300/20 hover:bg-teal-300/50 w-105 mb-2 hover:cursor-pointer hover:transform hover:scale-102 transition-all duration-300 flex border-1 border-teal-gray-500 rounded-md p-2 ">
            <div className="text-teal-300 p-2 text-2xl mr-4"><i className={information.icon}></i></div>
            <div>
              <div className="font-bold text-white">{information.title}</div>
              <div className="text-gray-400">{information.description}</div>
            </div>
          </div>
        ))}
        </motion.div>
      </div>
    </div>
  );
};
