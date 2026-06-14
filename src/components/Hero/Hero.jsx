import heroData from "../../data/heroData";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[var(--bg)] px-6 scroll-mt-24"
    >
      <div className="text-center max-w-4xl">

        {/* Greeting */}
        <p className="text-[var(--primary)] text-xl mb-4 font-medium">
          Hello, I'm
        </p>

        {/* Name */}
        <h1
          className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right,#E35336,#F4A460,#A0522D)",
          }}
        >
          {heroData.name}
        </h1>

        {/* Role */}
        <h2 className="text-3xl text-[var(--heading)] mb-8">
          {heroData.role}
        </h2>

        {/* Description */}
        <p className="text-[var(--text)] text-lg leading-8 max-w-3xl mx-auto">
          {heroData.description}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">

          <a
            href="#projects"
            className="px-8 py-4 rounded-xl
            bg-[var(--primary)]
            hover:bg-[var(--secondary)]
            transition duration-300
            hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-xl
            border
            border-[var(--primary)]
            text-[var(--heading)]
            hover:bg-[var(--primary)]/20
            transition duration-300
            hover:scale-105"
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;