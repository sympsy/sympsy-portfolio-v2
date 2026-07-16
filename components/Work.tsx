"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const projects = [
  {
    title: "‘LEFLEUR’ EDITORIAL SPEC",
    images: [
      "/work/project-01/01.webp",
      "/work/project-01/02.webp",
      "/work/project-01/03.webp",
      "/work/project-01/04.webp",
      "/work/project-01/05.webp",
      "/work/project-01/06.webp",
    ],
  },
];

export default function Work() {

  // Force browser to fetch + decode images immediately
  useEffect(() => {
    projects.forEach((project) => {
      project.images.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.decode?.();
      });
    });
  }, []);

  return (
    <section className="relative bg-black px-6 md:px-12 py-24">

      {projects.map((project) => (
        <div key={project.title}>

          {/* Image Warmup Layer */}
          <div className="
            fixed
            inset-0
            pointer-events-none
            opacity-0
            -z-10
            overflow-hidden
          ">
            {project.images.map((image) => (
              <img
                key={image}
                src={image}
                alt=""
                loading="eager"
                decoding="sync"
              />
            ))}
          </div>


          {/* Title */}
          <p
            id="work"
            className="
              scroll-mt-25      
              mb-5
              md:mb-10
              text-xs
              uppercase
              tracking-[0.5em]
              text-white/60
            "
          >
            {project.title}
          </p>


          {/* Desktop Editorial Layout */}
          <div className="relative h-[200vh] hidden md:block">

            {project.images.map((image, index) => (

              <motion.img
                key={image}
                src={image}
                alt={`${project.title} ${index + 1}`}
                draggable={false}
                loading="eager"
                decoding="sync"

                initial={{
                  opacity: 0,
                  y: 60,
                  filter: "blur(12px)",
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}

                viewport={{
                  once: false,
                  amount: 0.25,
                }}

                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}

                className={`
                  absolute
                  object-cover
                  select-none

                  ${
                    index === 0
                      ? "top-0 left-0 w-[36%]"
                      : index === 2
                      ? "top-[5%] right-[4%] w-[28%]"
                      : index === 1
                      ? "top-[2%] left-[35%] w-[35%]"
                      : index === 3
                      ? "top-[42%] right-[12%] w-[25%]"
                      : index === 4
                      ? "top-[46%] left-[5%] w-[25%]"
                      : "top-[50%] right-[36%] w-[33%]"
                  }
                `}
              />

            ))}

          </div>



          {/* Mobile Layout */}
          <div className="md:hidden relative">

            {project.images.map((image, index) => (

              <motion.div

                key={image}

                initial={{
                  opacity: 0,
                  y: 50,
                  filter: "blur(15px)",
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}

                viewport={{
                  once: false,
                  amount: 0.25,
                }}

                transition={{
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}

                className={`
                  relative
                  aspect-[2/3]
                  overflow-hidden

                  ${
                    index === 0
                      ? "ml-0 w-[90%]"
                      : index === 1
                      ? "ml-auto w-[82%] -mt-20"
                      : index === 2
                      ? "mx-auto w-[88%] -mt-16"
                      : index === 3
                      ? "ml-auto w-[75%] -mt-24"
                      : index === 4
                      ? "ml-[5%] w-[82%] -mt-20"
                      : "ml-[17%] w-[78%] -mt-15"
                  }
                `}
              >

                <img
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  draggable={false}
                  loading="eager"
                  decoding="sync"
                  className="
                    h-full
                    w-full
                    object-cover
                    select-none
                  "
                />

              </motion.div>

            ))}

          </div>


        </div>
      ))}

    </section>
  );
}