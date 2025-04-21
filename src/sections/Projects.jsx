
import mapifyMeImg from "../assets/MapifyMe.png";
import mapifyGif from "../assets/MapifyVideo.gif";
import noteImg from "../assets/Note.jpg";
import noteGif from "../assets/NoteGif.gif";
import memoryImg from "../assets/MemoryGame.jpg";
import memoryGif from "../assets/memoryGif.gif";

function Projects() {
  const projects = [
    {
      title: "MapifyMe",
      description:
        "MapifyMe is a web app that allows users to create and manage profiles. Clicking on any profile highlights its location on an interactive Google Map.",
      Tech: [
        "ReactJs", "Tailwind-CSS", "NodeJs", "ExpressJs", "MongoDB", "Google-Map-API"
      ],
      link: "https://mapifyme-1.onrender.com/",
      image: mapifyMeImg,
      preview: mapifyGif,
    },
    {
      title: "Note-Making App",
      description:
        "A minimal and user-friendly note-making app that lets you quickly create, edit, and organize your notes.",
      Tech: ["HTML", "CSS", "JavaScript", "ReactJs", "Tailwind-CSS"],
      link: "https://note-making-app-iota.vercel.app/",
      image: noteImg,
      preview: noteGif,
    },
    {
      title: "Memory Game",
      description:
        "A sleek and responsive memory card game designed to challenge your focus and sharpen your memory.",
      Tech: ["HTML", "CSS", "JavaScript", "ReactJs", "Tailwind-CSS"],
      link: "https://memory-game-psi-olive.vercel.app/",
      image: memoryImg,
      preview: memoryGif,
    },
  ];

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
            <div
              key={index}
              className="relative group bg-[#112240] p-4 rounded-md shadow-md shadow-[#0e1a2b] overflow-hidden"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-md mb-4">
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                />
              
                <img
                  src={project.preview}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <h3 className="text-xl font-semibold text-[#00f2fe] mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-[#d0d0d0] mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.Tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="border border-[#00f2fe] text-[#00f2fe] bg-[#0f172a] px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-[#00f2fe] text-[#00f2fe] rounded hover:bg-[#00f2fe] hover:text-[#0a192f] transition text-sm"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
