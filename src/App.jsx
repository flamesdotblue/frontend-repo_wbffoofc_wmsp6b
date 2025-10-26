import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-950 font-[Inter] text-white">
      <Hero />
      <Projects />
      <Experience />
      <Contact />
      <footer className="border-t border-white/10 bg-neutral-950/60 py-8 text-center text-sm text-neutral-400 backdrop-blur">
        <p>
          Designed with precision and care — Inspired by Apple’s design language. Built with React, Tailwind, Framer Motion, and Spline.
        </p>
      </footer>
    </div>
  );
};

export default App;
