import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Clock, BarChart3, StickyNote } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

const QUICK_STATS = [
  { icon: CheckCircle2, label: 'Tasks Done', value: '24', color: 'text-emerald-500' },
  { icon: Clock, label: 'Study Hours', value: '6.5h', color: 'text-primary' },
  { icon: BarChart3, label: 'This Week', value: '+18%', color: 'text-violet-500' },
];

const TASKS = [
  { label: 'Math Assignment', done: true, tag: 'Due Today' },
  { label: 'Physics Reading Ch.7', done: false, tag: '2 days' },
  { label: 'Essay Draft — Lit', done: false, tag: '4 days' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-16 flex items-center overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 60% 40%, rgba(99,102,241,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-2 gap-16 items-center py-24">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-pulse" />
            AI-Powered Study Planner
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-[3.5rem] leading-[1.1] font-extrabold text-ink tracking-tight"
          >
            Study Smarter.<br />
            <span className="text-primary">Not Harder.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="mt-5 text-lg text-muted leading-relaxed max-w-md"
          >
            StudyFlow organizes your academic life — tasks, exams, notes, and
            analytics — so you can focus on what actually matters: learning.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="mt-8 flex items-center gap-4"
          >
            <motion.a
              href="#get-started"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-sm font-semibold shadow-elevated hover:bg-accent transition-colors duration-200"
            >
              Start Free
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="#demo"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-white text-sm font-semibold text-ink hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
            >
              <Play className="w-4 h-4 text-primary" />
              View Demo
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="mt-10 flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {['#818cf8', '#6366f1', '#4f46e5'].map((bg, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-white"
                  style={{ backgroundColor: bg }}
                />
              ))}
            </div>
            <p className="text-sm text-muted">
              Trusted by <span className="font-semibold text-ink">12,000+</span> students worldwide
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 48, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative"
        >
          <div className="relative bg-white rounded-2xl border border-border shadow-[0_8px_40px_rgba(79,70,229,0.12)] p-5 overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs font-medium text-muted">Good morning, Alex 👋</p>
                <h2 className="text-sm font-bold text-ink mt-0.5">Today's Overview</h2>
              </div>
              <div className="text-xs font-medium text-muted bg-surface px-2.5 py-1 rounded-lg border border-border">
                Thursday, Jul 24
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              {QUICK_STATS.map(({ icon: Icon, label, value, color }) => (
                <div
                  key={label}
                  className="bg-surface rounded-xl border border-border p-3 flex flex-col gap-1"
                >
                  <Icon className={`w-4 h-4 ${color}`} />
                  <p className="text-lg font-bold text-ink">{value}</p>
                  <p className="text-[11px] text-muted leading-tight">{label}</p>
                </div>
              ))}
            </div>

            <div className="bg-surface rounded-xl border border-border p-3.5 mb-3">
              <div className="flex items-center justify-between mb-2.5">
                <p className="text-xs font-semibold text-ink">Pending Tasks</p>
                <span className="text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  3 left
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {TASKS.map(({ label, done, tag }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        done
                          ? 'border-emerald-400 bg-emerald-400'
                          : 'border-border bg-white'
                      }`}
                    >
                      {done && (
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 10">
                          <path
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M1.5 5l2.5 2.5 4.5-4"
                          />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`text-xs flex-1 ${
                        done ? 'line-through text-muted' : 'text-ink'
                      }`}
                    >
                      {label}
                    </span>
                    <span className="text-[10px] text-muted bg-white border border-border rounded-md px-1.5 py-0.5">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface rounded-xl border border-border p-3.5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-ink">Study Progress</p>
                <span className="text-xs font-semibold text-primary">72%</span>
              </div>
              <div className="h-1.5 bg-border rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '72%' }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
                  className="h-full rounded-full bg-primary"
                />
              </div>
              <p className="text-[10px] text-muted mt-1.5">
                Weekly goal · 18 of 25 hours completed
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute -bottom-4 -left-4 bg-white border border-border rounded-xl px-3.5 py-2.5 shadow-card flex items-center gap-2.5"
          >
            <div className="w-7 h-7 rounded-lg bg-violet-100 flex items-center justify-center">
              <StickyNote className="w-3.5 h-3.5 text-violet-600" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-ink">Smart Note saved</p>
              <p className="text-[10px] text-muted">2 minutes ago</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="absolute -top-3 -right-4 bg-white border border-border rounded-xl px-3.5 py-2.5 shadow-card flex items-center gap-2.5"
          >
            <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center">
              <Clock className="w-3.5 h-3.5 text-red-500" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-ink">Calculus Exam</p>
              <p className="text-[10px] text-muted">in 3 days · 09:00 AM</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
