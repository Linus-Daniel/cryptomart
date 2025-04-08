'use client';

import { motion } from 'framer-motion';

const navItems = ['Home', 'About', 'Services', 'Contact'];

const GlassNavBar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-4 flex justify-between items-center z-50"
    >
      <h1 className="text-white font-bold text-xl">Logo</h1>
      <ul className="flex gap-6 text-white font-medium">
        {navItems.map((item, index) => (
          <li key={index} className="hover:text-blue-400 transition duration-300 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default GlassNavBar;
