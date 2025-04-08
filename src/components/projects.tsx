'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Dev Portfolio',
    description: 'A modern developer portfolio with animations and glassmorphism.',
    imageUrl: 'https://source.unsplash.com/600x400/?code,developer',
    tech: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    github: 'https://github.com/yourname/portfolio',
    demo: 'https://yourportfolio.com',
  },
  {
    title: 'E-Commerce Store',
    description: 'A sleek shopping experience with cart, filters, and Stripe checkout.',
    imageUrl: 'https://source.unsplash.com/600x400/?shopping,tech',
    tech: ['React', 'Firebase', 'Stripe'],
    github: 'https://github.com/yourname/ecommerce',
    demo: 'https://ecomstore.live',
  },
  {
    title: 'E-Commerce Store',
    description: 'A sleek shopping experience with cart, filters, and Stripe checkout.',
    imageUrl: 'https://source.unsplash.com/600x400/?shopping,tech',
    tech: ['React', 'Firebase', 'Stripe'],
    github: 'https://github.com/yourname/ecommerce',
    demo: 'https://ecomstore.live',
  },  {
    title: 'E-Commerce Store',
    description: 'A sleek shopping experience with cart, filters, and Stripe checkout.',
    imageUrl: 'https://source.unsplash.com/600x400/?shopping,tech',
    tech: ['React', 'Firebase', 'Stripe'],
    github: 'https://github.com/yourname/ecommerce',
    demo: 'https://ecomstore.live',
  },  {
    title: 'E-Commerce Store',
    description: 'A sleek shopping experience with cart, filters, and Stripe checkout.',
    imageUrl: 'https://source.unsplash.com/600x400/?shopping,tech',
    tech: ['React', 'Firebase', 'Stripe'],
    github: 'https://github.com/yourname/ecommerce',
    demo: 'https://ecomstore.live',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white py-16 px-4"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="relative rounded-xl overflow-hidden shadow-xl bg-white/5 border border-white/10 backdrop-blur-md group transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 + i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-[80%]object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Slide Overlay */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">
                    {project.title}
                  </h3>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="text-sm bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition"
                  >
                    Visit Live
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm md:text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs md:text-sm bg-blue-700/20 text-blue-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-400 transition"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-400 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Glow */}
      <motion.div
        className="absolute w-80 h-80 bg-purple-500 blur-3xl opacity-20 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1.4 }}
        transition={{ duration: 6 }}
        style={{ right: '10%', bottom: '5%' }}
      />

<motion.div
        className="absolute w-80 h-80 bg-blue-500 blur-3xl opacity-20 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1.4 }}
        transition={{ duration: 6 }}
        style={{left: '10%', top: '10%' }}
      />
    </section>
  );
};

export default Projects;
