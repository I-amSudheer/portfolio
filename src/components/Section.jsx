// Section — reusable wrapper for major page sections.
// Renders an animated heading (eyebrow + title + optional description)
// and slots children below it. Used by About, Skills, Projects, etc.
import { motion } from "framer-motion";

export function Section({ id, eyebrow, title, description, children, className = "" }) {
  return (
    <section id={id} className={`relative py-24 px-4 sm:px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {eyebrow && (
            <div className="inline-block px-3 py-1 rounded-full glass text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="gradient-text">{title}</span>
          </h2>
          {description && (
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}