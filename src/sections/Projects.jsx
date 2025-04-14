/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import mapifyMeImg from "../assets/MapifyMe.png";
import mapifyvideo from "../assets/mapifyVideo.mp4";
import noteVideo from "../assets/NoteVideo.mp4";
import noteImg from "../assets/Note.jpg";
import MemoryImg from "../assets/MemoryGame.jpg"
import MemoryVideo from "../assets/MemoryVideo.mp4";
import { useRef, useState } from "react";

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "MapifyMe",
      description:
        "MapifyMe is a web app that allows users to create and manage profiles. Clicking on any profile highlights its location on an interactive Google Map.",
      Tech: [
        "ReactJs",
        "Tailwind-CSS",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "Google-Map-API",
      ],
      link: "https://mapifyme-1.onrender.com/",
      image: mapifyMeImg,
      video: mapifyvideo,
    },
    {
      title: "Note-Making App",
      description:
        "A minimal and user-friendly note-making app that lets you quickly create, edit, and organize your notes.",
      Tech: ["HTML", "CSS", "JavaScript", "ReactJs", "Tailwind-CSS"],
      link: "https://note-making-app-iota.vercel.app/",
      image: noteImg,
      video: noteVideo,
    },
    {
      title: "Memory Game",
      description:
        "A sleek and responsive memory card game designed to challenge your focus and sharpen your memory.",
      Tech: ["HTML", "CSS", "JavaScript", "ReactJs", "Tailwind-CSS"],
      link: "https://memory-game-psi-olive.vercel.app/",
      image: MemoryImg,
      video: MemoryVideo,
    },
  ];

  const videoRefs = useRef([]);
  return (
    <section
      id="projects"
      className="w-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-[#e0e0e0] py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline text-blue-400">Projects</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="w-full h-80 perspective">
              <motion.div
                className="relative w-full h-full transition-transform duration-900 transform-style preserve-3d rounded-md shadow-md shadow-[#0e1a2b]"
                animate={{
                  rotateY: hoveredIndex === index ? 180 : 0,
                }}
                onHoverStart={() => {
                  const video = videoRefs.current[index];
                  if (video) {
                    video.play();
                  }
                }}
                onHoverEnd={() => {
                  const video = videoRefs.current[index];
                  if (video) {
                    video.pause();
                    video.currentTime = 0;
                  }
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front Side */}
                <div
                  className="absolute w-full h-full bg-[#112240] p-6 rounded-md"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <h3 className="text-2xl font-semibold text-[#00f2fe] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#d0d0d0] my-2 text-sm">
                    {project.description}
                  </p>
                  <div
                    className="tech flex flex-wrap gap-2 my-3"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {project.Tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="border border-[#00f2fe] text-[#00f2fe] bg-[#0f172a] px-2 py-1 rounded-full text-xs font-medium tracking-wide shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 mt-2 border border-[#00f2fe] text-[#00f2fe] rounded hover:bg-[#00f2fe] hover:text-[#0a192f] transition text-sm"
                  >
                    View Project
                  </a>
                </div>

                {/* Back Side */}
                <div
                  className="w-full h-full rounded-md overflow-hidden p-2 before:hidden after:hidden xl:[.grid>div:nth-child(4n+1)_&]:before:block xl:[.grid>div:nth-child(4n+1)_&]:after:block lg:max-xl:[.grid>div:nth-child(3n+1)_&]:before:block lg:max-xl:[.grid>div:nth-child(3n+1)_&]:after:block sm:max-lg:[.grid>div:nth-child(2n+1)_&]:before:block sm:max-lg:[.grid>div:nth-child(2n+1)_&]:after:block max-sm:before:block max-sm:after:block relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="relative aspect-[672/494] overflow-hidden rounded-xl outline outline-gray-950/5">
                    <img
                      src={project.image}
                      className="w-full h-full object-contain"
                    />
                    <div>
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        muted
                        playsInline
                        preload="none"
                        className="absolute inset-0 w-full h-full object-contain"
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
