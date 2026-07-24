import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section
      id="get-started"
      aria-labelledby="cta-heading"
      className="py-24 bg-surface border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl bg-primary px-12 py-16 text-center"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 70% at 50% 120%, rgba(99,102,241,0.5) 0%, transparent 70%)',
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-white/10"
          />

          <div className="relative z-10 flex flex-col items-center gap-6 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Free forever — no credit card required
            </div>

            <h2
              id="cta-heading"
              className="text-4xl font-extrabold text-white tracking-tight leading-tight"
            >
              Ready to Boost Your<br />Productivity?
            </h2>

            <p className="text-white/75 text-base leading-relaxed">
              Join 12,000+ students who use StudyFlow to organize their academic
              life, hit their goals, and study with confidence.
            </p>

            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-primary text-sm font-bold shadow-[0_4px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_32px_rgba(0,0,0,0.2)] transition-shadow duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Start Learning Free — create your StudyFlow account"
            >
              Start Learning Free
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
