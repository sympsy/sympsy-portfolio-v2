"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToSection = (id: string) => {
    if (pathname === "/") {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollTarget", id);
      router.push("/");
    }
  };

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        z-50
        w-full
        px-5
        md:px-8
        py-5
        md:py-12.5
        flex
        justify-between
        items-center
        text-white
        transition-all
        duration-500
        ${
          scrolled
            ? "bg-black/90 backdrop-blur-md"
            : "bg-transparent"
        }
      `}
    >
      <Link
        href="/"
        className="text-sm sm:text-base md:text-xl tracking-[0.1em]"
      >
        SYMPSY '26
      </Link>

      <div className="flex gap-5 md:gap-8 text-xs sm:text-sm uppercase tracking-widest">

        <button
          onClick={() => navigateToSection("work")}
          className="uppercase hover:opacity-60 transition"
        >
          Work
        </button>

        <Link
          href="/about"
          className="uppercase hover:opacity-60 transition"
        >
          About
        </Link>

        <button
          onClick={() => navigateToSection("contact")}
          className="uppercase hover:opacity-60 transition"
        >
          Contact
        </button>

      </div>
    </nav>
  );
}