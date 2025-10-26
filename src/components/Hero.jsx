import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-neutral-950 text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-60 w-60 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 pt-28 md:pt-36">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
          <span className="text-sm text-blue-200">Futuristic • Minimal • Apple-inspired</span>
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-balance text-4xl font-semibold tracking-tight md:text-6xl"
        >
          Vaibhav Jakkula — <span className="text-blue-400">Developer at Apple</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-lg text-neutral-300 md:text-xl"
        >
          Building delightful, high-performance experiences with React, Swift, and Machine Learning. Crafted with precision, elegance, and a love for detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-3 text-blue-200 backdrop-blur-md transition hover:border-blue-400/60 hover:bg-blue-500/20"
          >
            View Projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <div className="ml-1 inline-flex items-center gap-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-neutral-200 transition hover:border-white/20 hover:bg-white/10"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-neutral-200 transition hover:border-white/20 hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-neutral-200 transition hover:border-white/20 hover:bg-white/10"
              aria-label="Email"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </motion.div>

        {/* Quick About chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-2 flex flex-wrap gap-2"
        >
          {['React', 'Swift', 'Python', 'ML', 'Design Systems'].map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300 backdrop-blur">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
