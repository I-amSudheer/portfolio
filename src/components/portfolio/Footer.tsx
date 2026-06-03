export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4 text-center text-sm text-muted-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="gradient-text font-bold text-lg mb-2">Full Stack Developer · Security-Focused Engineer · Content Creator · Freelancer</div>
        <div>© {new Date().getFullYear()} Crafted with care.</div>
      </div>
    </footer>
  );
}