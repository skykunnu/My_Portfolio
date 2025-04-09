/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "FSL Learning.",
    role: "Full Stack Developer Intern",
    duration: "Aug 2024 - Present",
    description:
      "Worked on developing responsive web applications using React.js, Tailwind CSS, and integrated APIs to enhance user experience."
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function Experience(){
  return (
    <section id="experience" className="w-full bg-gradient-to-br from-[#0a0f1b] via-[#111827] to-[#1c2a3a] text-slate-200 py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-4xl font-bold text-center text-blue-400 inline-block mb-10">Experience</h2>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-[#1f2937] p-6 rounded-xl shadow-md hover:shadow-cyan-400/20 transition"
            >
              <h3 className="text-xl font-semibold text-cyan-400">{exp.role} @ {exp.company}</h3>
              <p className="text-sm text-slate-400 mb-2">{exp.duration}</p>
              <p className="text-slate-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;