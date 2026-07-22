"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function Home() {

  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");

    if (target) {
      sessionStorage.removeItem("scrollTarget");

      requestAnimationFrame(() => {
        document
          .getElementById(target)
          ?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  return (
    <main>
      <Hero />
      <Work />
      <Contact />
    </main>
  );
}