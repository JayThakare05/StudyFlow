import { motion } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description, color, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -5, transition: { duration: 0.2, ease: 'easeOut' } }}
      className="bg-white rounded-2xl border border-border p-6 flex flex-col gap-4 cursor-default hover:shadow-[0_12px_32px_rgba(79,70,229,0.09)] transition-shadow duration-300"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: color + '14' }}
      >
        <Icon className="w-5 h-5" style={{ color }} strokeWidth={2} />
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-sm font-semibold text-ink">{title}</h3>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>

      <div
        className="mt-auto h-0.5 w-8 rounded-full"
        style={{ backgroundColor: color + '35' }}
      />
    </motion.article>
  );
}
