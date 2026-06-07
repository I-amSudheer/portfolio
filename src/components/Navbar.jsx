// Navbar — fixed top navigation with section anchor links,
// theme toggle, and a mobile hamburger menu.
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Moon, Sun, Code2 } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Security", href: "#security" },
  { label: "Content", href: "#content" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 font-bold text-lg">
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
            <Code2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="gradient-text">Portfolio</span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {l.label}
              <span className="absolute bottom-1 left-3 right-3 h-0.5 gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:shadow-glow transition-all"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          <button
            className="lg:hidden w-10 h-10 rounded-full glass flex items-center justify-center"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1">
              <span className={`w-4 h-0.5 bg-foreground transition ${open ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`w-4 h-0.5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
              <span className={`w-4 h-0.5 bg-foreground transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass mx-4 mt-3 rounded-2xl p-4 flex flex-col gap-1"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}