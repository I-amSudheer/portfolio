import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <>
      <motion.div
        animate={{ x: pos.x - 6, y: pos.y - 6, scale: hover ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.2 }}
        className="hidden md:block fixed top-0 left-0 w-3 h-3 rounded-full gradient-primary pointer-events-none z-[100]"
      />
      <motion.div
        animate={{ x: pos.x - 20, y: pos.y - 20, scale: hover ? 1.8 : 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="hidden md:block fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-primary/50 pointer-events-none z-[100]"
      />
    </>
  );
}