import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Sparklin",
      period: "Jan 2024 - April 2024",
      details: [
        "Developed and maintained responsive web applications.",
        "Collaborated with designers and backend developers to enhance user experience.",
        "Implemented best practices for code quality and performance optimization."
      ]
    },
    {
      title: "SDE Intern",
      company: "Zemoso Technologies",
      period: "March 2023 - October 2023",
      details: [
        "Assisted in the development of web applications using ReactJS.",
        "Participated in code reviews and contributed to team discussions.",
        "Gained hands-on experience with modern frontend tools and frameworks."
      ]
    },
    {
      title: "Frontend Developer",
      company: "SplashLearn",
      period: "June 2022 - Dec 2022",
      details: [
        "Served as a Frontend Engineer within the B2C-Growth Team, primarily leveraging ReactJS as the core technology stack.",
        "Developed a UI page for the Parent-Student Learning Dashboard, leading to a significant 20% user engagement increase.",
        "Resolved multiple production bugs, including rectifying erroneous and excessive triggering of specific events."
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "SplashLearn",
      period: "Jan 2022 - June 2022",
      details: [
        "Contributed to the development of educational web applications.",
        "Worked closely with the UX team to implement user-friendly interfaces.",
        "Assisted in debugging and optimizing existing code for better performance."
      ]
    }
  ];

  return (
    <div id="experience" className="w-full bg-[#0a192f] pt-20 pb-20 text-gray-300">
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
        {/* Work Experience Header */}
        <div className="flex flex-col gap-8 justify-center items-center">
          <motion.div
            className="pb-8 pl-4 sm:text-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="inline-block border-b-4 border-[#64ffda] text-4xl font-bold text-center">
              Work Experience
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="w-full p-6 rounded-lg bg-[#112240]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-bold text-[#64ffda]">
                  {exp.title}
                </h3>
                <p className="text-lg mb-4">
                  {exp.company} | {exp.period}
                </p>
                
                <ul className="list-disc list-inside pl-5 space-y-2">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;