/* eslint-disable no-unused-vars */
import { MdSportsCricket } from "react-icons/md";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-[#d5dad3] py-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline text-blue-400">
            About Me
          </p>
        </div>
        <p className="text-lg md:text-xl text-[#e0e0e0]">
          Hello! I'm Shikhar Khandelwal, a Frontend Developer based in India. I specialize in building responsive and visually appealing web interfaces using modern technologies like HTML, CSS, JavaScript, React, Tailwind CSS, NodeJs, Express and MongoDB.
        </p>
        <br />
        <p className="text-lg md:text-xl text-[#e0e0e0]">
          I graduated from Jaypee University of Information Technology in the year 2024 with a major in Computer Science and Engineering. I’m deeply interested in frontend as a technology and love exploring how great UI/UX can elevate digital experiences. 
          My goal is to continuously grow and learn while delivering high-quality products and seamless user experiences.
          </p>
      </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='max-w-4xl mx-auto mt-8'
        >
          <h3 className="text-2xl font-semibold text-[#00f2fe] mb-4">
            In My Free Time
          </h3>
          <ul className="list-disc list-inside text-lg text-[#e0e0e0] space-y-2">
            <li>
              Watching any new or old cricket match 🏏
            </li>
            <li>
              Playing cricket with friends and enjoying the outdoors
            </li>
            <li>
              I absolutely love quizzing!
            </li>
            <li>
              Reading about general knowledge
            </li>
          </ul>
        </motion.div>
    </section>
  );
}

export default About;
