const Academics = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Academics at Dreams Secondary School</h1>
        <p className="text-lg text-gray-700">
          Our academic programs are designed to nurture critical thinking, creativity, and lifelong learning in a supportive environment.
        </p>
      </header>

      <section className="max-w-5xl mx-auto grid gap-12 md:grid-cols-3">
        {/* Science Department */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-orange-600 mb-3">Science Department</h2>
          <p className="text-gray-700 mb-4">
            We offer Physics, Chemistry, Biology, and integrated Science courses, complete with well-equipped labs for hands-on experiments.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Experienced science teachers</li>
            <li>Modern laboratory facilities</li>
            <li>Science clubs and competitions</li>
          </ul>
        </div>

        {/* Mathematics Department */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-orange-600 mb-3">Mathematics Department</h2>
          <p className="text-gray-700 mb-4">
            Our curriculum covers pure and applied mathematics, fostering analytical skills and problem-solving abilities.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Interactive learning sessions</li>
            <li>Math clubs and contests</li>
            <li>Use of technology in teaching</li>
          </ul>
        </div>

        {/* Humanities Department */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-orange-600 mb-3">Humanities Department</h2>
          <p className="text-gray-700 mb-4">
            We offer History, Geography, Literature, and other humanities subjects that encourage cultural understanding and critical thinking.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Experienced and passionate teachers</li>
            <li>Field trips and cultural activities</li>
            <li>Debates and essay competitions</li>
          </ul>
        </div>
      </section>

      {/* Additional info */}
      <section className="max-w-4xl mx-auto mt-16 text-center">
        <h3 className="text-3xl font-semibold text-gray-900 mb-4">Supporting Student Success</h3>
        <p className="text-gray-700 mb-6">
          Beyond classroom teaching, we provide tutoring programs, career counseling, and extracurricular activities to help our students thrive academically and personally.
        </p>
        <button
          onClick={() => window.location.href = '/admissions'}
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
        >
          Apply Now
        </button>
      </section>
    </div>
  );
};

export default Academics;
