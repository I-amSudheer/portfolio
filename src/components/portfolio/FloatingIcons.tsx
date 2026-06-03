import { motion } from "framer-motion";
import { Atom, Coffee, Lock, Database, GitBranch, Server } from "lucide-react";

const icons = [
  { Icon: Atom, x: "5%", y: "20%", d: 0 },
  { Icon: Coffee, x: "92%", y: "30%", d: 1 },
  { Icon: Lock, x: "10%", y: "75%", d: 2 },
  { Icon: Database, x: "88%", y: "70%", d: 1.5 },
  { Icon: GitBranch, x: "50%", y: "10%", d: 0.5 },
  { Icon: Server, x: "45%", y: "92%", d: 2.5 },
];

export function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden hidden md:block">
      {icons.map((it, i) => (
        <motion.div
          key={i}
          style={{ left: it.x, top: it.y }}
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8 + it.d, repeat: Infinity, ease: "easeInOut", delay: it.d }}
          className="absolute w-12 h-12 rounded-2xl glass flex items-center justify-center text-primary/40"
        >
          <it.Icon className="w-5 h-5" />
        </motion.div>
      ))}
    </div>
  );
}