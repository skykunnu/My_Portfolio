/* eslint-disable no-unused-vars */
import { FaEnvelope, FaPhoneAlt, FaLinkedin,FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
function Contacts() {
    const fadeIn = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      };
  return (
    <section id="contact" className="w-full bg-[#0a192f] text-gray-300 py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.h2 variants={fadeIn} className="text-4xl font-bold inline text-blue-400">Contact</motion.h2>
        <motion.p variants={fadeIn} className="text-gray-400 mt-4">Feel free to reach out for collaborations or just a friendly hello 👋</motion.p>

        <motion.div variants={fadeIn} className="mt-10 space-y-6">
          <motion.div variants={fadeIn} className="flex items-center justify-center gap-4 text-lg">
            <FaEnvelope className="text-cyan-400" />
            <a href="mailto:skykunnu@gmail.com" className="hover:text-cyan-400 transition">skykunnu@gmail.com</a>
          </motion.div>

          <motion.div variants={fadeIn} className="flex items-center justify-center gap-4 text-lg">
            <FaPhoneAlt className="text-cyan-400" />
            <a href="tel:+919610002187" className="hover:text-cyan-400 transition">+919610002187</a>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeIn} className="mt-10 flex justify-center gap-6 text-2xl">
          <a href="https://github.com/skykunnu" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shikhar-khandelwal-a6921a160/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition">
            <FaLinkedin />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contacts;
