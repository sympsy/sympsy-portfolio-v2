export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-32">

      <section className="min-h-[80vh] flex items-center">
        <h1 className="text-5xl md:text-7xl tracking-tight max-w-5xl">
          SYMPSY is a creative director
          and filmmaker based in Ontario,
          Canada, exploring cinematic
          storytelling through film,
          photography, and visual design.
        </h1>
      </section>


      <section className="max-w-3xl py-32">
        <p className="text-xl md:text-2xl leading-relaxed text-white/70">
          Built around a passion for storytelling
          and community, SYMPSY exists to share
          meaningful stories while creating
          opportunities through visual expression.
<br /><br />
          Every project begins with a question:
          why does this story matter?
          <br /><br />
          SYMPSY focuses on the narrative behind
          every image, capturing the intention,
          emotion, and people that bring ideas
          to life.
        </p>
      </section>


      <section className="py-32">
        <h2 className="text-sm uppercase tracking-widest text-white/50 mb-8">
          Capabilities
        </h2>

        <div className="text-4xl md:text-6xl space-y-4">
          <p>01 — Film</p>
          <p>02 — Photography</p>
          <p>03 — Creative Direction</p>
        </div>
      </section>


      <section className="max-w-3xl py-32">
        <p className="text-xl md:text-2xl leading-relaxed text-white/70">
          SYMPSY works with brands,
          artists, and creatives to develop
          intentional visual stories that connect
          people and ideas.
        </p>
      </section>


    </main>
  );
}