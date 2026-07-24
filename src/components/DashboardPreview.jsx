import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock, BookOpen, TrendingUp, CalendarDays, Flame } from 'lucide-react';

const DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const DATES = [
  { d: 21, active: false }, { d: 22, active: false }, { d: 23, active: false },
  { d: 24, active: true },  { d: 25, active: false }, { d: 26, active: false },
  { d: 27, active: false },
];

const TASKS = [
  { label: 'Submit Physics Lab Report', done: true, subject: 'Physics' },
  { label: 'Chapter 5 — Organic Chemistry', done: true, subject: 'Chemistry' },
  { label: 'Linear Algebra Problem Set', done: false, subject: 'Math' },
  { label: 'History Essay Outline', done: false, subject: 'History' },
  { label: 'Prepare Presentation Slides', done: false, subject: 'CS' },
];

const EXAMS = [
  { subject: 'Calculus II', date: 'Jul 27', days: 3, color: '#4F46E5' },
  { subject: 'Organic Chemistry', date: 'Aug 2', days: 9, color: '#10B981' },
  { subject: 'World History', date: 'Aug 8', days: 15, color: '#F59E0B' },
];

const CHART_BARS = [
  { day: 'Mo', hours: 3.5, pct: 58 },
  { day: 'Tu', hours: 5,   pct: 83 },
  { day: 'We', hours: 2,   pct: 33 },
  { day: 'Th', hours: 6,   pct: 100 },
  { day: 'Fr', hours: 4.5, pct: 75 },
  { day: 'Sa', hours: 1.5, pct: 25 },
  { day: 'Su', hours: 3,   pct: 50 },
];

const SUBJECT_PROGRESS = [
  { label: 'Mathematics', pct: 82, color: '#4F46E5' },
  { label: 'Chemistry', pct: 65, color: '#10B981' },
  { label: 'History', pct: 48, color: '#F59E0B' },
];

const SUBJECT_TAG_COLORS = {
  Physics:   'bg-blue-50 text-blue-600',
  Chemistry: 'bg-emerald-50 text-emerald-600',
  Math:      'bg-violet-50 text-violet-600',
  History:   'bg-amber-50 text-amber-600',
  CS:        'bg-rose-50 text-rose-600',
};

function Panel({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-2xl border border-border p-4 ${className}`}>
      {children}
    </div>
  );
}

function PanelTitle({ children }) {
  return <p className="text-xs font-semibold text-ink mb-3">{children}</p>;
}

export default function DashboardPreview() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3"
          >
            Inside the app
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl font-extrabold text-ink tracking-tight"
          >
            Your command center
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-muted text-base max-w-lg mx-auto leading-relaxed"
          >
            A clean, focused dashboard that keeps everything visible — from
            upcoming exams to daily study hours — without the clutter.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-3xl border border-border bg-surface p-4 shadow-[0_8px_48px_rgba(79,70,229,0.08)]"
        >
          <div className="bg-white rounded-2xl border border-border px-5 py-3 flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-primary flex items-center justify-center">
                <BookOpen className="w-3 h-3 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-bold text-ink">
                Study<span className="text-primary">Flow</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              {['Dashboard', 'Tasks', 'Analytics', 'Notes'].map((item) => (
                <span
                  key={item}
                  className={`text-xs font-medium ${item === 'Dashboard' ? 'text-primary' : 'text-muted'}`}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-surface border border-border">
                <Flame className="w-3 h-3 text-orange-500" />
                <span className="text-[11px] font-semibold text-ink">12 day streak</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                A
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-3 flex flex-col gap-3">
              <Panel>
                <div className="flex items-center justify-between mb-3">
                  <PanelTitle>July 2025</PanelTitle>
                  <CalendarDays className="w-3.5 h-3.5 text-muted" />
                </div>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {DAYS.map((d) => (
                    <span key={d} className="text-[10px] font-medium text-muted py-0.5">
                      {d}
                    </span>
                  ))}
                  {DATES.map(({ d, active }) => (
                    <button
                      key={d}
                      className={`text-[11px] font-semibold rounded-lg py-1 transition-colors ${
                        active
                          ? 'bg-primary text-white'
                          : 'text-ink hover:bg-surface'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </Panel>

              <Panel>
                <PanelTitle>Upcoming Exams</PanelTitle>
                <div className="flex flex-col gap-2.5">
                  {EXAMS.map(({ subject, date, days, color }) => (
                    <div key={subject} className="flex items-center gap-2.5">
                      <div
                        className="w-1.5 h-8 rounded-full flex-shrink-0"
                        style={{ backgroundColor: color }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-semibold text-ink truncate">{subject}</p>
                        <p className="text-[10px] text-muted">{date}</p>
                      </div>
                      <span
                        className="text-[10px] font-bold px-1.5 py-0.5 rounded-md"
                        style={{ backgroundColor: color + '14', color }}
                      >
                        {days}d
                      </span>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>

            <div className="col-span-5 flex flex-col gap-3">
              <Panel>
                <div className="flex items-center justify-between mb-1">
                  <PanelTitle>Weekly Study Hours</PanelTitle>
                  <span className="text-[10px] text-muted font-medium">This week · 25.5h total</span>
                </div>
                <div className="flex items-end gap-2 h-28 pt-2">
                  {CHART_BARS.map(({ day, hours, pct }, i) => (
                    <div key={day} className="flex-1 flex flex-col items-center gap-1">
                      <span className="text-[9px] text-muted font-medium">{hours}h</span>
                      <div className="w-full rounded-md overflow-hidden bg-surface flex items-end" style={{ height: '72px' }}>
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 + i * 0.05, ease: 'easeOut' }}
                          className={`w-full rounded-md ${day === 'Th' ? 'bg-primary' : 'bg-primary/25'}`}
                        />
                      </div>
                      <span className={`text-[9px] font-semibold ${day === 'Th' ? 'text-primary' : 'text-muted'}`}>
                        {day}
                      </span>
                    </div>
                  ))}
                </div>
              </Panel>

              <Panel>
                <div className="flex items-center justify-between mb-3">
                  <PanelTitle>Today's Tasks</PanelTitle>
                  <span className="text-[10px] font-medium text-muted">
                    {TASKS.filter((t) => t.done).length}/{TASKS.length} done
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {TASKS.map(({ label, done, subject }) => (
                    <div key={label} className="flex items-center gap-2.5 group">
                      {done ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      ) : (
                        <Circle className="w-3.5 h-3.5 text-border flex-shrink-0" />
                      )}
                      <span
                        className={`text-[11px] flex-1 truncate ${
                          done ? 'line-through text-muted' : 'text-ink font-medium'
                        }`}
                      >
                        {label}
                      </span>
                      <span
                        className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-md flex-shrink-0 ${
                          SUBJECT_TAG_COLORS[subject]
                        }`}
                      >
                        {subject}
                      </span>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>

            <div className="col-span-4 flex flex-col gap-3">
              <Panel>
                <PanelTitle>Subject Progress</PanelTitle>
                <div className="flex flex-col gap-4">
                  {SUBJECT_PROGRESS.map(({ label, pct, color }, i) => (
                    <div key={label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-medium text-ink">{label}</span>
                        <span className="text-[11px] font-bold" style={{ color }}>{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-surface rounded-full overflow-hidden border border-border">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.4 + i * 0.1, ease: 'easeOut' }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>

              <Panel>
                <PanelTitle>Study Stats</PanelTitle>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { icon: Clock, label: 'Today', value: '6.5h', color: 'text-primary', bg: 'bg-primary/10' },
                    { icon: TrendingUp, label: 'Streak', value: '12d', color: 'text-orange-500', bg: 'bg-orange-50' },
                    { icon: CheckCircle2, label: 'Done', value: '47', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                    { icon: BookOpen, label: 'Subjects', value: '6', color: 'text-violet-600', bg: 'bg-violet-50' },
                  ].map(({ icon: Icon, label, value, color, bg }) => (
                    <div key={label} className={`rounded-xl p-2.5 ${bg} flex flex-col gap-1`}>
                      <Icon className={`w-3.5 h-3.5 ${color}`} />
                      <p className={`text-base font-bold ${color}`}>{value}</p>
                      <p className="text-[10px] text-muted">{label}</p>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
