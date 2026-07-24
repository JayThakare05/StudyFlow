import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Priya Menon',
    role: 'Pre-Med · Nova University',
    avatar: 'PM',
    avatarBg: '#4F46E5',
    quote:
      `StudyFlow completely changed how I approach exam season. The countdown timers keep me accountable and the analytics showed me I was spending too much time on subjects I already understood.`,
    stars: 5,
  },
  {
    name: 'James Okafor',
    role: 'Computer Science · FutureTech',
    avatar: 'JO',
    avatarBg: '#10B981',
    quote:
      `I went from missing deadlines every week to having everything under control. The task manager is incredibly intuitive — it feels like it was built specifically for students, not just adapted from corporate tools.`,
    stars: 5,
  },
  {
    name: 'Sofia Reyes',
    role: 'Architecture · Global Academy',
    avatar: 'SR',
    avatarBg: '#8B5CF6',
    quote:
      `The Smart Notes feature is a game-changer. I can dump all my ideas mid-lecture and they're instantly organized by subject. My GPA went from 3.2 to 3.8 after just one semester with StudyFlow.`,
    stars: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-white border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3"
          >
            Student reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl font-extrabold text-ink tracking-tight"
          >
            Students love StudyFlow
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-muted text-base max-w-lg mx-auto leading-relaxed"
          >
            Real results from real students. Here's what they say after switching
            to a smarter way of studying.
          </motion.p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ name, role, avatar, avatarBg, quote, stars }, i) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-surface rounded-2xl border border-border p-6 flex flex-col gap-4 cursor-default transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(79,70,229,0.08)]"
            >
              <Stars count={stars} />

              <blockquote className="text-sm text-ink leading-relaxed flex-1">
                "{quote}"
              </blockquote>

              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: avatarBg }}
                >
                  {avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{name}</p>
                  <p className="text-xs text-muted">{role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
