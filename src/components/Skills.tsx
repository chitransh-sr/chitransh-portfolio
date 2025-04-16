import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiSass,
} from "react-icons/si";

const Skills = () => {
  const technologies = [
    { id: 1, name: "HTML", icon: <SiHtml5 size={50} /> },
    { id: 2, name: "CSS", icon: <SiCss3 size={50} /> },
    { id: 3, name: "JavaScript", icon: <SiJavascript size={50} /> },
    { id: 4, name: "ReactJS", icon: <SiReact size={50} /> },
    { id: 5, name: "TypeScript", icon: <SiTypescript size={50} /> },
    { id: 6, name: "SCSS", icon: <SiSass size={50} /> },
    { id: 7, name: "Tailwind CSS", icon: <SiTailwindcss size={50} /> },
    { id: 8, name: "Git/GitHub", icon: <SiGit size={50} /> },
  ];

  return (
    <div id="skills" className="w-full bg-[#0a192f] pt-20 text-gray-300">
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="inline border-b-4 border-[#64ffda] text-4xl font-bold">
            Skills
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 py-8 text-center sm:grid-cols-3 md:grid-cols-4">
          {technologies.map(({ id, name, icon }) => (
            <motion.div
              key={id}
              className="mx-auto rounded-md p-6 shadow-md shadow-[#040c16] duration-500 hover:scale-110"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: id * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-[#64ffda]">{icon}</div>
              <p className="mt-4">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
