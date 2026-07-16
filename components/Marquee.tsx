"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const text =
    "[A VISUAL STUDY BY SYMPSY]  →  CREATIVE DIRECTION  →  FILM  →  PHOTOGRAPHY  →  VISUAL STORYTELLING  →  ";

  return (
   <div className="absolute top-16 z-20 w-full overflow-hidden bg-black border-t border-white/0 border-b">
      <motion.div
        className="
          flex
          w-max
          whitespace-nowrap
          py-5
          text-2
          uppercase
          tracking-[0.5em]
          opacity-0
          
        "
        animate={{
          x: "-50%",
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="flex">
          <span className="pr-2">{text.repeat(4)}</span>
          <span className="pr-2">{text.repeat(4)}</span>
        </div>
      </motion.div>
    </div>
  );
}