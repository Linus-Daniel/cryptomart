// components/Contact.tsx
'use client';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white py-20 px-4 flex items-center justify-center"
    >
      {/* Glow blob */}
      <motion.div
        className="absolute w-96 h-96 bg-pink-500 blur-3xl opacity-20 rounded-full"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1.5 }}
        transition={{ duration: 3 }}
        style={{ top: '-10%', left: '-10%' }}
      />

      <motion.div
        className="max-w-4xl w-full bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-md shadow-lg z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-300">
          Let’s Connect
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="px-5 py-3 rounded-xl bg-white/10 text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-5 py-3 rounded-xl bg-white/10 text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="md:col-span-2 px-5 py-3 rounded-xl bg-white/10 text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="md:col-span-2 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 px-6 rounded-xl"
          >
            Send Message
          </motion.button>
        </form>

        <div className="mt-10 flex justify-center gap-8 text-xl text-gray-300">
          <motion.a whileHover={{ scale: 1.2 }} href="mailto:ld604068@gmail.com">
            <FaEnvelope />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Linus-Daniel" target="_blank">
            <FaGithub />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://linkedin.com/in/yourprofile" target="_blank">
            <FaLinkedin />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
