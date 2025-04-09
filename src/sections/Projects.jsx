/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "MapifyMe",
      description:
        "MapifyMe is a web app that allows users to create and manage profiles clicking on any profile highlights its location on an interactive Google Map.",
      Tech: [
        "ReactJs",
        "Tailwind-CSS",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "Google-Map-API",
      ],
      link: "https://mapifyme-1.onrender.com/",
    },
    {
      title: "Note-Making App",
      description:
        "A minimal and user-friendly note-making app that lets you quickly create, edit, and organize your notes.",
      Tech: ["HTML", "CSS", "JavaScript", "ReactJs", "Tailwind-CSS"],
      link: "https://note-making-app-iota.vercel.app/",
    },
    {
      title: "Memory Game",
      description:
        "A sleek and responsive memory card game designed to challenge your focus and sharpen your memory.",
      Tech: ["HTML", "CSS", "JavaScript", "ReactJs", "Tailwind-CSS"],
      link: "https://memory-game-psi-olive.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-[#e0e0e0] py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline text-blue-400">
            Projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#112240] p-6 rounded-md shadow-md shadow-[#0e1a2b] hover:scale-105 duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-[#00f2fe] mb-2">
                {project.title}
              </h3>
              <p className="text-[#d0d0d0] my-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.Tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="border border-[#00f2fe] text-[#00f2fe] bg-[#0f172a] p-2 rounded-full text-xs font-medium tracking-wide shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 mt-2 border border-[#00f2fe] text-[#00f2fe] rounded hover:bg-[#00f2fe] hover:text-[#0a192f] transition"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
