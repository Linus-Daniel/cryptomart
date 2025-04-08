"use client"
import Contact from "@/components/contact";
import GlassNavBar from "@/components/glassNav";
import Hero from "@/components/Hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { motion } from "framer-motion";

const App = () => {
  return (
    <main 
    className="h-screen w-full bg-gradient-to-bl from-teal-400 backdrop-blur-2xl via-red-300 to-purple-500 "
       
       >
      <motion.div

            >
              <GlassNavBar />
             <Hero />
              <Skills />
             <Projects />
             <Contact /> 
      </motion.div>
    </main>
  );
};

export default App;
