import heroData from "../../data/heroData";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6"
    >
      <div className="text-center max-w-3xl">
        <p className="text-cyan-400 text-lg mb-3">
          Hello, I'm
        </p>

        <h1 className="text-6xl font-bold mb-4">
          {heroData.name}
        </h1>

        <h2 className="text-2xl text-gray-300 mb-6">
          {heroData.role}
        </h2>

        <p className="text-gray-400 leading-8">
          {heroData.description}
        </p>

        <div className="mt-8 flex justify-center gap-5">
          <button className="px-6 py-3 bg-cyan-500 rounded-lg hover:bg-cyan-600 transition">
            View Projects
          </button>

          <button className="px-6 py-3 border border-cyan-500 rounded-lg hover:bg-cyan-500 transition">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;