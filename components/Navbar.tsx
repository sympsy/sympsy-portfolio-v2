export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-8 py-8 flex justify-between items-center text-white">
      <div className="text-xl tracking-[0.1em]">
        SYMPSY '26
      </div>

      <div className="flex gap-8 text-sm uppercase tracking-widest">
        <a href="#work" className="hover:opacity-60 transition">
          Work
        </a>

        <a href="#about" className="hover:opacity-60 transition">
          About
        </a>

        <a href="#contact" className="hover:opacity-60 transition">
          Contact
        </a>
      </div>
    </nav>
  );
}