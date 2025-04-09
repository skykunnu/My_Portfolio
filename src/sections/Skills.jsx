/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaGithub, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const skillsData = [
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3Alt />, label: "CSS" },
  { icon: <IoLogoJavascript />, label: "JavaScript" },
  { icon: <FaReact />, label: "React" },
  { icon: <RiTailwindCssFill />, label: "Tailwind CSS" },
  { icon: <FaNode />, label: "NodeJS" },
  { icon: <SiExpress />, label: "Express" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <FaGithub />, label: "Github" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="w-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-[#e0e0e0] py-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline text-blue-400">
            Skills
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {skillsData.map((skill, idx) => (
            <motion.div
              key={idx}
              className="shadow-md shadow-[#0e1a2b] hover:scale-110 duration-300 py-6 px-4 rounded-lg bg-[#112240]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="text-5xl flex flex-col items-center text-[#00f2fe]">
                {skill.icon}
                <p className="text-lg font-semibold text-[#d5dad3] mt-2">
                  {skill.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
