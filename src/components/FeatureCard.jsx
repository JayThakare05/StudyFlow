import { motion } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description, color, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(79,70,229,0.10)' }}
      className="bg-white rounded-2xl border border-border p-6 flex flex-col gap-4 cursor-default transition-shadow duration-300"
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
        className="mt-auto h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-16"
        style={{ backgroundColor: color + '40' }}
      />
    </motion.article>
  );
}
