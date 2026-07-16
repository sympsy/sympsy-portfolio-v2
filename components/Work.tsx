export default function Work() {
  const projects = [
    {
      title: "‘LEFLEUR’",
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

  return (
    <section className="bg-black px-6 md:px-12 py-0">

      {projects.map((project) => (
        <div key={project.title}>

          {/* Title */}
          <p
            className="
              mb-20
              text-xs
              uppercase
              tracking-[0.5em]
              text-white/60
            "
          >
            {project.title}
          </p>


          {/* Images */}
          <div className="space-y-0">

            {project.images.map((image, index) => (

              <div
                key={image}
                className={`
                  ${
                    index === 0
                        ? "w-full md:w-[38%]"
                        : index === 1
                        ? "ml-auto w-full md:w-[28%]"
                        : index === 2
                        ? "mx-auto w-full md:w-[32%]"
                        : index === 3
                        ? "ml-auto w-full md:w-[25%]"
                        : index === 4
                        ? "w-full md:w-[38%]"
                        : "mx-auto w-full md:w-[30%]"
                  }
                `}
              >

                <img
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  className="
                    w-full
                    object-cover
                  "
                />

              </div>

            ))}

          </div>

        </div>
      ))}

    </section>
  );
}