import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "ShopNow (E-commerce Website)",
      description:
        "Engineered a fully responsive, modern e-commerce platform using React and JavaScript, designing a dynamic product catalog, cart system, and search/filtering functionalities to optimize user navigation and drive engagement.",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      demoLink: "https://e-commerce-theta-gold.vercel.app/",
      codeLink: "https://github.com/chitransh-sr/e-commerce",
    },
    {
      id: 2,
      name: "Portfolio Website",
      description:
        "Engineered a responsive personal portfolio using HTML, CSS, and React.js, featuring interactive components, dynamic project showcases, and modern UI/UX with a mobile-first approach to demonstrate technical proficiency and professional accomplishments.",
      technologies: ["React.js", "HTML", "CSS"],
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      demoLink: "https://chitransh-sr.github.io/portfolio-react/",
      codeLink: "https://github.com/chitransh-sr",
    },
    {
      id: 3,
      name: "ICICI Bank's Nirvana",
      description:
        "Developed the user interface for ICICI Bank's net banking platform 'Nirvana' in alignment with precise client requirements, utilizing Angular, SASS, and SCSS for efficient, maintainable CSS and building dynamic, responsive web applications.",
      technologies: ["Angular", "SASS", "SCSS"],
      image:
        "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      demoLink: "https://sparklin.com",
      codeLink: "#",
    },
    {
      id: 4,
      name: "Parent-Student Learning Dashboard",
      description:
        "Developed a UI page for the Parent-Student Learning Dashboard at SplashLearn, leading to a significant 20% user engagement increase. Used ReactJS to create an intuitive interface that improved the educational experience for users.",
      technologies: ["ReactJS", "JavaScript", "HTML", "CSS"],
      image:
        "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      demoLink: "https://splashlearn.com",
      codeLink: "#",
    },
  ];

  return (
    <div id="projects" className="w-full bg-[#0a192f] py-20 text-gray-300">
      <div className="mx-auto flex h-full w-full max-w-[1200px] flex-col justify-center p-4">
        <motion.div
          className="pb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="inline border-b-4 border-[#64ffda] text-4xl font-bold">
            Projects
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map(
            ({
              id,
              name,
              description,
              technologies,
              image,
              demoLink,
              codeLink,
            }) => (
              <motion.div
                key={id}
                className="overflow-hidden rounded-md shadow-lg shadow-[#040c16]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: id * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={image}
                  alt={name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#ccd6f6]">{name}</h3>
                  <p className="my-4 text-[#8892b0]">{description}</p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={`${id}-${tech}`}
                        className="rounded-full bg-[#64ffda] bg-opacity-20 px-3 py-1 text-sm text-[#64ffda]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded border-2 border-[#64ffda] px-4 py-2 text-[#64ffda] hover:bg-[#64ffda] hover:bg-opacity-20"
                    >
                      Deployed Link
                    </a>
                    {id < 3 && (
                      <a
                        href={codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded border-2 border-[#ccd6f6] px-4 py-2 text-[#ccd6f6] hover:bg-[#ccd6f6] hover:bg-opacity-20"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
