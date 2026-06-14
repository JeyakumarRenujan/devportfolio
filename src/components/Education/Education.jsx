import educationData from "../../data/educationData";

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-900 py-48 px-6 text-white"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Education
        </h2>

        <div className="space-y-8">

          {educationData.map((item) => (

            <div
              key={item.id}
              className="border-l-4 border-cyan-400 pl-6"
            >
              <h3 className="text-cyan-400 text-xl font-bold">
                {item.year}
              </h3>

              <h4 className="text-2xl mt-2">
                {item.title}
              </h4>

              <p className="text-gray-400">
                {item.institution}
              </p>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;