"use client";

import { motion } from "framer-motion";
import GlassCard from "./glassCard";
import { Typewriter } from "react-simple-typewriter";
import nextjs from "@/assets/nextjs.svg";
import js from "@/assets/js.svg";
import nodejs from "@/assets/node.svg";
import reactjs from "@/assets/react.svg";
import Image from "next/image";
import devImage from "@/assets/dev.png";
import devImage2 from "@/assets/dev2.png";

const techIcons = [
  { src: nodejs, alt: "Node.js" },
  { src: nextjs, alt: "Next.js" },
  { src: reactjs, alt: "React" },
  { src: js, alt: "JavaScript" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white px-4 py-12 flex flex-col md:flex-row items-center justify-center overflow-hidden">
      {techIcons.map((icon, i) => (
        <motion.div
          key={i}
          className="w-24 h-24 absolute opacity-50"
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4 + i,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
          style={{
            left: `${15 + i * 20}%`,
            top: `${20 + i * 10}%`,
          }}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            className={`w-full ${icon.alt === "Next.js" && "bg-white rounded-full"} h-full object-contain`}
            priority
          />
        </motion.div>
      ))}

      <div className="flex flex-col justify-between md:flex-row gap-8 w-full max-w-full items-center z-10">
        {/* Left Glass Card with hover + tap */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <GlassCard
            title="Frontend Dev"
            content="Responsive UIs with React & Tailwind."
            imageUrl={devImage}
            animationDirection="left"
          />
        </motion.div>

        {/* Center Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I’m <span className="text-blue-400">Vandu</span>
          </h1>
          <h2 className="text-2xl mb-4 text-gray-300">
            <Typewriter
              words={[
                "Full-Stack Developer 💻",
                "React & Next.js Expert ⚛️",
                "Loves UI Animations ✨",
                "Backend Architect 🧠",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </h2>
          <p className="text-md text-gray-400 mb-6 max-w-md">
            Building high-performance web experiences that are modern, secure,
            and delightful. Always striving to improve and deliver amazing user
            experiences.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#projects"
              className="px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="px-5 py-3 border border-white hover:bg-white hover:text-black rounded-xl transition"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right Glass Card */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <GlassCard
            title="Backend Dev"
            content="APIs with Node, Express & MongoDB."
            imageUrl={devImage2}
            animationDirection="right"
          />
        </motion.div>
      </div>

      {/* Glow background layer */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 3, ease: "easeOut" }}
        style={{ bottom: "-10%", right: "-10%" }}
      />
    </section>
  );
};

export default Hero;
