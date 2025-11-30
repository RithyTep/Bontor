export function Footer() {
  return (
    <footer className="hidden md:block border-t border-white/5 py-6 px-8 bg-black">
      <div className="flex items-center justify-between text-xs text-slate-500">
        <p>© 2024 Bontor Music. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
