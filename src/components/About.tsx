import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="w-full bg-[#0a192f]  pt-20 pb-20 text-gray-300">
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
        <div className="grid grid-cols-1 gap-8 ">
          <motion.div
            className="pb-8 pl-4  sm:text-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="inline border-b-4 border-[#64ffda] text-4xl font-bold">
              About
            </p>
          </motion.div>
          <div />
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <motion.div
            className="text-4xl font-bold sm:text-right"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              I am Chitransh Srivastava, and I am pleased to have you here.
              Please take a moment to explore my work and experience.
            </p>
          </motion.div>
          <motion.div
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

        <div className="grid grid-cols-1 gap-8  justify-center items-center mt-16">
          <motion.div
            className="pb-8 pl-4 pt-10 sm:text-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="inline border-b-4 border-[#64ffda] text-4xl font-bold text-center">
              Work Experience
            </p>
          </motion.div>
          <div />
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#64ffda]">
              Frontend Developer
            </h3>
            <p className="text-lg">Sparklin | June 2022 - Present</p>
            <ul className="list-disc list-inside">
              <li>Developed and maintained responsive web applications.</li>
              <li>
                Collaborated with designers and backend developers to enhance
                user experience.
              </li>
              <li>
                Implemented best practices for code quality and performance
                optimization.
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#64ffda]">SDE Intern</h3>
            <p className="text-lg">Zemoso Technologies | Jan 2022 - May 2022</p>
            <ul className="list-disc list-inside">
              <li>
                Assisted in the development of web applications using ReactJS.
              </li>
              <li>
                Participated in code reviews and contributed to team
                discussions.
              </li>
              <li>
                Gained hands-on experience with modern frontend tools and
                frameworks.
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#64ffda]">
              Frontend Developer
            </h3>
            <p className="text-lg">SplashLearn | Jan 2021 - June 2021 </p>
            <ul className="list-disc list-inside">
              <li>
                {" "}
                Served as a Frontend Engineer within the B2C-Growth Team,
                primarily leveraging ReactJS as the core technology stack.{" "}
              </li>
              <li>
                Developed a UI page for the Parent-Student Learning Dashboard,
                leading to a significant 20% user engagement increase.
              </li>
              <li>
                {" "}
                Resolved multiple production bugs, including rectifying
                erroneous and excessive triggering of specific events, thereby
                mitigating widespread issues for all users.
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#64ffda]">
              Frontend Developer Intern
            </h3>
            <p className="text-lg">SplashLearn | June 2021 - Dec 2021</p>
            <ul className="list-disc list-inside">
              <li>
                Contributed to the development of educational web applications.
              </li>
              <li>
                Worked closely with the UX team to implement user-friendly
                interfaces.
              </li>
              <li>
                Assisted in debugging and optimizing existing code for better
                performance.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
