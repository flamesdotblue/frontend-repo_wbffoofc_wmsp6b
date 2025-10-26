import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    // Placeholder success interaction (no backend wired by default)
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="w-full scroll-mt-24 bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center text-3xl font-semibold md:text-4xl"
        >
          Let’s build something delightful
        </motion.h2>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm text-neutral-300">Name</span>
              <input
                required
                name="name"
                value={form.name}
                onChange={onChange}
                className="rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none ring-0 transition placeholder:text-neutral-500 focus:border-blue-400/40"
                placeholder="Your name"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm text-neutral-300">Email</span>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className="rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none ring-0 transition placeholder:text-neutral-500 focus:border-blue-400/40"
                placeholder="you@domain.com"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2">
            <span className="text-sm text-neutral-300">Message</span>
            <textarea
              required
              rows={5}
              name="message"
              value={form.message}
              onChange={onChange}
              className="rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none ring-0 transition placeholder:text-neutral-500 focus:border-blue-400/40"
              placeholder="Tell me about your idea..."
            />
          </label>

          <div className="flex items-center justify-between">
            <p className={`text-sm ${sent ? 'text-green-300' : 'text-neutral-400'}`}>
              {sent ? 'Message sent! I will get back to you soon.' : 'I usually reply within 24 hours.'}
            </p>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-6 py-3 text-blue-100 transition hover:border-blue-500/60 hover:bg-blue-500/20"
            >
              Send Message
              <Send className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
