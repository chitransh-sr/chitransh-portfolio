import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="w-full bg-[#0a192f] pt-20 pb-20 text-gray-300">
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
        <div className="flex flex-col gap-8">
          <motion.div
            className="pb-8 pl-4 sm:text-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="inline-block border-b-4 border-[#64ffda] text-4xl font-bold">
              About
            </p>
          </motion.div>
        </div>

        <div className="relative flex flex-col sm:flex-row">
          <motion.div
            className="text-4xl font-bold sm:w-1/2 sm:pr-8 pr-4 sm:text-right"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              I am Chitransh Srivastava, and I am pleased to have you here.
              Please take a moment to explore my skills and experience.
            </p>
          </motion.div>
          <div className="relative my-8 sm:my-0">
            <div
              className="absolute left-1/2 top-1/2 h-1 w-[90%] -translate-x-1/2 -translate-y-1/2 transform bg-[#64ffda] rounded-full 
                         sm:left-1/2 sm:top-0 sm:h-full sm:w-1 sm:-translate-x-1/2 sm:translate-y-0"
            />
          </div>

          <motion.div
            className="sm:w-1/2 sm:ml-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="mb-4">
              I am a passionate Frontend Developer with experience at companies
              like Sparklin, Zemoso Technologies, and SplashLearn. I specialize
              in creating dynamic, responsive web applications using ReactJS,
              TypeScript, and modern frontend technologies.
            </p>
            <p>
              I graduated with a B.Tech in Computer Science from G.L. Bajaj
              Institute Of Technology And Management (2018-2022) with an 82.9%
              score. I'm dedicated to building exceptional software that
              improves user experiences and solves real-world problems.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://drive.google.com/file/d/1bA3m0smWYIvXlmpROlyjgKaTmjt88vdP/view?usp=sharing"
            download="Chitransh_Srivastava_Resume"
            target="_blank"
            className="px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] font-medium rounded-md hover:bg-[#64ffda22] transition-colors duration-300"
          >
            View Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
