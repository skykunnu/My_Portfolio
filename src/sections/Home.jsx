/* eslint-disable no-unused-vars */
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Shikhar from "../assets/Shikhar.jpeg"

function Home() {
  return (
<section id='home' className="min-h-screen flex items-center justify-center px-6 pt-20 pb-5 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
<motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-[#00f2fe] text-lg">Hey, my name is</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mt-2">
          Shikhar Khandelwal
        </h1>
        <img
          loading='lazy'
          src={Shikhar}
          alt="Shikhar Khandelwal"
          className="w-32 h-32 rounded-full mx-auto mt-4 border-1 shadow-md"
        />
        <h2 className="text-2xl md:text-4xl font-semibold text-[#e0e0e0] mt-4">
          I'm a Frontend Developer
        </h2>
        <p className="text-[#c0c0c0] mt-6 max-w-3xl mx-auto">
          focused on building responsive front-end web applications
          integrating back-end technologies.
        </p>

        <motion.div
          className="flex justify-center items-center gap-6 mt-6 text-xl text-[#e0e0e0]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <a href="https://github.com/skykunnu" className="hover:text-[#00f2fe] transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shikhar-khandelwal-a6921a160/" className="hover:text-[#00f2fe] transition">
            <FaLinkedin />
          </a>
          <a href="mailto:skykunnu@gmail.com" className="hover:text-[#00f2fe] transition">
            <FaEnvelope />
          </a>
        </motion.div>

        <motion.div
          className="mt-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href=""
            className="inline-block px-6 py-3 border border-[#00f2fe] text-[#00f2fe] rounded hover:bg-[#00f2fe] hover:text-[#0f3460] transition duration-300"
          >
            View Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
