export default function Contact() {
  return (
    <section
      id="contact"
      className="
        scroll-mt-22
        bg-black
        text-white
        px-6
        md:px-12
        py-40
      "
    >

      <div className="max-w-5xl">

        <p
          className="
            mb-10
            text-xs
            uppercase
            tracking-[0.5em]
            text-white/50
          "
        >
          Contact
        </p>


        <h2
          className="
            text-5xl
            md:text-8xl
            font-light
            tracking-tight
            leading-none
          "
        >
          Let’s create
          <br />
          something memorable.
        </h2>


        <div
          className="
            mt-20
            flex
            flex-col
            gap-6
            text-sm
            uppercase
            tracking-[0.3em]
            text-white/60
          "
        >

          <a
            href="mailto:hello@sympsy.com"
            className="
              hover:text-white
              transition
            "
          >
            Email → hello@sympsy.com
          </a>


          <a
            href="https://instagram.com/sympsyy"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:text-white
              transition
            "
          >
            Instagram → @sympsyy
          </a>

        </div>


        <div
          className="
            mt-40
            border-t
            border-white/10
            pt-8
            text-xs
            uppercase
            tracking-[0.4em]
            text-white/40
          "
        >
          SYMPSY '26
        </div>

      </div>

    </section>
  );
}