import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const timeline = [
  {
    role: 'Developer',
    company: 'Apple',
    period: '2023 — Present',
    points: [
      'Shipped high-fidelity features across multiple platforms with a focus on performance and accessibility.',
      'Collaborated on design systems and internal tooling to streamline developer workflows.',
    ],
  },
  {
    role: 'Fellow',
    company: 'T-Hub',
    period: '2022',
    points: [
      'Built prototypes for startups, integrating ML services and modern web stacks.',
      'Co-led hackathons and mentored early-stage teams.',
    ],
  },
  {
    role: 'Hackathons',
    company: 'Multiple Wins',
    period: '2019 — 2022',
    points: [
      'Top placements in AI/UX-focused competitions with emphasis on delightful interactions.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full scroll-mt-24 bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-semibold md:text-4xl"
        >
          Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0" />

          <ol className="space-y-8">
            {timeline.map((item, idx) => (
              <motion.li
                key={`${item.company}-${idx}`}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative ml-10 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="absolute -left-10 top-6 flex size-10 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10 text-blue-300">
                  <Briefcase className="size-5" />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-medium text-white/90">
                    {item.role} — <span className="text-blue-300">{item.company}</span>
                  </h3>
                  <span className="text-sm text-neutral-400">{item.period}</span>
                </div>
                <ul className="mt-3 list-inside list-disc space-y-1 text-neutral-300">
                  {item.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
