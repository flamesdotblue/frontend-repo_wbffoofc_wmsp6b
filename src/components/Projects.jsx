import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'NeonUI — Design System',
    desc: 'A polished, accessible component library with motion-first patterns and glassmorphism.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'SwiftVision ML',
    desc: 'On-device ML demos for iOS with Core ML and real-time inference optimizations.',
    tags: ['Swift', 'Core ML', 'Vision'],
    link: '#',
  },
  {
    title: 'Edge GPT Toolkit',
    desc: 'Satellite microservices for LLM-powered applications with robust observability.',
    tags: ['Python', 'FastAPI', 'LLMs'],
    link: '#',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6 } }),
};

const Projects = () => {
  return (
    <section id="projects" className="relative w-full scroll-mt-24 bg-neutral-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-semibold md:text-4xl"
        >
          Featured Projects
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              href={p.link}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur transition hover:border-white/20"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl transition group-hover:bg-blue-500/20" />
              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-white/90">{p.title}</h3>
                  <ExternalLink className="size-4 text-blue-300 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mb-5 text-sm text-neutral-300">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
