/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  const name = "Shikhar";

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold text-[#d5dad3] flex gap-[2px] drop-shadow-md">
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut"
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
        <ul className="hidden md:flex gap-6 text-[#e0e0e0] font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item, idx) => (
            <li
              key={idx}
              className="cursor-pointer hover:text-[#00f2fe] transition-colors duration-300 drop-shadow-sm"
            >
              <a href={`#${item.toLowerCase()}`} className='scroll-smooth'>{item}</a>
              
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
