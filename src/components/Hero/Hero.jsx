import heroData from "../../data/heroData";

function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[var(--bg)]
        px-6
        pt-24
        pb-12
        scroll-mt-24
      "
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Greeting */}
        <p
          className="
            text-[var(--primary)]
            text-lg
            sm:text-xl
            font-medium
            mb-3
          "
        >
          Hello, I'm
        </p>

        {/* Name */}
        <h1
          className="
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            font-extrabold
            mb-6
            bg-clip-text
            text-transparent
          "
          style={{
            backgroundImage:
              "linear-gradient(to right,#F97316,#FDBA74,#F97316)",
          }}
        >
          {heroData.name}
        </h1>

        {/* Role */}
        <h2
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            text-[var(--heading)]
            font-semibold
            mb-6
          "
        >
          {heroData.role}
        </h2>

        {/* Description */}
        <p
          className="
            text-[var(--text)]
            text-base
            sm:text-lg
            leading-8
            max-w-3xl
            mx-auto
          "
        >
          {heroData.description}
        </p>

        {/* Buttons */}
        <div
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            justify-center
            items-center
            gap-5
          "
        >

          <a
            href="#projects"
            className="
              w-full
              sm:w-auto
              text-center
              px-8
              py-4
              rounded-xl
              bg-[var(--primary)]
              text-white
              hover:bg-[var(--secondary)]
              transition
              duration-300
              hover:scale-105
            "
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="
              w-full
              sm:w-auto
              text-center
              px-8
              py-4
              rounded-xl
              border
              border-[var(--primary)]
              text-[var(--heading)]
              hover:bg-[var(--accent)]
              transition
              duration-300
              hover:scale-105
            "
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;