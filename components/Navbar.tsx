"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        z-50
        w-full
        px-8
        py-12.5
        flex
        justify-between
        items-center
        text-white
        transition-all
        duration-500
        h-2
        ${
          scrolled
            ? "bg-black/90 backdrop-blur-md"
            : "bg-transparent"
        }
      `}
    >
      <Link
  href="/"
  className="text-xl tracking-[0.1em]"
>
  SYMPSY '26
</Link>

      <div className="flex gap-8 text-sm uppercase tracking-widest">
        <a
          href="#work"
          className="hover:opacity-60 transition"
        >
          Work
        </a>

          <a
  href="/about"
  className="hover:opacity-60 transition"
>
  About
</a>

        <a
          href="#contact"
          className="hover:opacity-60 transition"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}