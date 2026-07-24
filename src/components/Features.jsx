import { motion } from 'framer-motion';
import { CheckSquare, AlarmClock, BarChart2, StickyNote } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FEATURES = [
  {
    icon: CheckSquare,
    title: 'Task Management',
    description:
      'Organize every assignment, project, and deadline in one place. Prioritize what matters and never fall behind.',
    color: '#4F46E5',
  },
  {
    icon: AlarmClock,
    title: 'Exam Countdown',
    description:
      'Set exam dates and watch live countdowns keep you accountable. Get smart reminders as the day approaches.',
    color: '#10B981',
  },
  {
    icon: BarChart2,
    title: 'Study Analytics',
    description:
      'Visualize weekly study hours, subject-level progress, and productivity trends to keep improving.',
    color: '#F59E0B',
  },
  {
    icon: StickyNote,
    title: 'Smart Notes',
    description:
      'Capture ideas instantly and let AI surface the right note at the right time — organized by subject.',
    color: '#8B5CF6',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3"
          >
            Everything you need
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl font-extrabold text-ink tracking-tight"
          >
            Built for serious students
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-muted text-base max-w-xl mx-auto leading-relaxed"
          >
            Four powerful tools, one seamless experience. StudyFlow removes the
            chaos from academic life so you can focus on deep work.
          </motion.p>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {FEATURES.map(({ icon, title, description, color }, i) => (
            <FeatureCard
              key={title}
              icon={icon}
              title={title}
              description={description}
              color={color}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
