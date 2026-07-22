"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "./Marquee";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* <Marquee /> */}

      {/* Mobile Hero Image */}
      <div className="absolute top-0 bottom-0 left-0 right-0 z-0 md:hidden">
        <Image
          src="/hero-mobile_dune1.webp"
          alt=""
          fill
          priority
          className="object-cover"
          style={{
            objectPosition: "50% 30%",
          }}
        />
      </div>

      {/* Desktop Hero Image */}
      <div
        className="
          absolute
          top-1
          bottom-0
          left-0
          right-0
          hidden
          md:block
          overflow-hidden
        "
      >
        <Image
          src="/hero-desktop.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          style={{
            transform: "scale(1.2) translateX(10%) translateY(12%)",
            objectPosition: "center",
            opacity: 1,
          }}
        />
      </div>

      {/* Left Fade */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/50
          md:from-black
          via-black/25
          md:via-black/65
          to-transparent
        "
      />

      {/* Top & Bottom Fade 20 */}
      <div
        className="
          absolute
          top-0
          md:top-11
          bottom-0
          left-0
          right-0
          bg-gradient-to-b
          from-black/50
          md:from-black
          via-transparent
          to-black
        "
      />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          flex-col
          justify-between
          px-8
          py-24
          md:py-32
          text-white
        "
      >

        {/* Empty Spacer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Hero Text */}
        <div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.4,
            }}
            className="
              text-4xl
              sm:text-5xl
              md:text-9xl
              font-light
              tracking-tight
            "
          >
            Jaheim Simpson
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="
              mt-3.5
              md:mt-6
              max-w-xs
              sm:max-w-sm
              text-sm
              sm:text-base
              md:text-xl
              uppercase
              tracking-[0.1em]
              leading-relaxed
              text-white/70
            "
          >
            Sympsy is a creative director and visual artist
            exploring cinematic storytelling through film,
            photography, and visual design.
          </motion.p>

        </div>

      </div>

    </section>
  );
}