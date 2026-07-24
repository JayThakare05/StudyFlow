import { motion } from 'framer-motion';

const UNIVERSITIES = [
  { name: 'Nova University', abbr: 'NU' },
  { name: 'Bright Institute', abbr: 'BI' },
  { name: 'SkillHub', abbr: 'SH' },
  { name: 'LearnSphere', abbr: 'LS' },
  { name: 'FutureTech', abbr: 'FT' },
  { name: 'Global Academy', abbr: 'GA' },
];

export default function TrustedBy() {
  return (
    <section className="py-16 border-y border-border bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-muted mb-10"
        >
          Trusted by students at
        </motion.p>

        <div className="grid grid-cols-6 gap-4">
          {UNIVERSITIES.map(({ name, abbr }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-xl border border-border bg-surface flex items-center justify-center text-sm font-bold text-muted grayscale group-hover:grayscale-0 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300">
                {abbr}
              </div>
              <span className="text-xs text-muted font-medium text-center grayscale opacity-70 group-hover:opacity-100 group-hover:text-ink transition-all duration-300">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
