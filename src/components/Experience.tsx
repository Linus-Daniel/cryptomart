// components/Experience.tsx
'use client';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const timeline = [
  {
    role: 'Frontend Developer',
    company: 'Tech Studio',
    date: '2023 - Present',
    description: 'Built responsive UIs with React, Tailwind, and Framer Motion. Maintained design systems and worked closely with designers.',
  },
  {
    role: 'Backend Developer',
    company: 'CodeBase Inc.',
    date: '2022 - 2023',
    description: 'Developed REST APIs using Node.js, Express, and MongoDB. Implemented JWT auth and WebSocket features.',
  },
  {
    role: 'Intern - Full Stack',
    company: 'DevLaunch',
    date: '2021 - 2022',
    description: 'Contributed to frontend and backend features of internal tools. Learned best practices and Agile development.',
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white py-20 px-6"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="relative border-l-2 border-blue-500 max-w-4xl mx-auto pl-6 space-y-10">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            className="relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 + i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-4 top-1.5 bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg">
              <FaBriefcase />
            </div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl px-6 py-4 hover:shadow-md hover:scale-[1.02] transition-transform">
              <h3 className="text-xl font-semibold text-blue-400">{item.role}</h3>
              <p className="text-sm text-gray-300">{item.company} • {item.date}</p>
              <p className="mt-2 text-gray-400 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background light glow */}
      <motion.div
        className="absolute w-80 h-80 bg-blue-500 opacity-20 blur-3xl rounded-full z-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 5 }}
        style={{ top: '10%', right: '-10%' }}
      />
    </section>
  );
};

export default Experience;
