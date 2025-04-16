import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="h-screen w-full bg-[#0a192f]">
      <div className="mx-auto flex h-full max-w-[1000px] flex-col justify-center px-8">
        <motion.p
          className="text-[#64ffda]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          className="text-4xl font-bold text-[#ccd6f6] sm:text-7xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Chitransh Srivastava
        </motion.h1>
        <motion.h2
          className="text-4xl font-bold text-[#8892b0] sm:text-7xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I'm a Frontend Developer.
        </motion.h2>
        <motion.p
          className="max-w-[700px] py-4 text-[#8892b0]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I'm a frontend developer specializing in building exceptional digital
          experiences. With expertise in React, TypeScript, and modern frontend
          technologies, I focus on creating responsive, user-friendly web
          applications.
        </motion.p>
        <div>
          <motion.a
            href="#projects"
            className="group my-2 flex items-center border-2 border-[#ccd6f6] px-6 py-3 text-[#ccd6f6] hover:border-[#64ffda] hover:bg-[#64ffda] hover:bg-opacity-20 hover:text-[#64ffda] w-max"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            View Work
            <span className="ml-3 duration-300 group-hover:rotate-90">
              <HiArrowNarrowRight />
            </span>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
