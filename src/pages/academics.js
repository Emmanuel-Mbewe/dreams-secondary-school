const executiveCourses = [
  "Professional Diploma in Education",
  "Nutrition and Food Security",
  "Community Development",
  "Social Work",
  "Public Health",
  "Environmental Science",
  "ICT",
  "Agribusiness Management",
  "Hotel and Hospitality Management",
  "Human Resource Management",
  "HIV/AIDS Management",
];

const vocationalCourses = [
  "Automobile Mechanics",
  "Electrical Installation",
  "Plumbing",
  "Tailoring and Fashion Design",
];

const Academics = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
    from-orange-100 via-white to-gray-100 py-16 px-6 md:px-20">
      
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-orange-700 text-4xl font-bold text-gray-900 mb-3">
          Courses at ZVTC
        </h1>
        <p className="text-lg text-gray-700">
          Executive and vocational programs designed to equip learners with
          practical, professional, and career-ready skills.
        </p>
      </header>

      {/* Courses Section */}
      <section className="max-w-7xl mx-auto grid gap-14 md:grid-cols-2">
        {/* Executive Courses */}
        <div className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-semibold text-orange-600 mb-8">
            Executive Courses
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {executiveCourses.map((course, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl p-5 text-white
                bg-gradient-to-br from-orange-500 via-orange-600 to-red-500
                shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_white,_transparent_60%)]"></div>
                <p className="relative font-semibold text-lg">
                  {course}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vocational Courses */}
        <div className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-semibold text-orange-600 mb-8">
            Vocational Courses
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {vocationalCourses.map((course, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl p-5 text-white
                bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600
                shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_white,_transparent_60%)]"></div>
                <p className="relative font-semibold text-lg">
                  {course}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="max-w-4xl mx-auto mt-24 text-center">
        <h3 className="text-3xl font-semibold text-gray-900 mb-4">
          Supporting Student Success
        </h3>
        <p className="text-gray-700 mb-8">
          We provide academic guidance, hands-on training, and career support
          to help our learners succeed professionally and personally.
        </p>
        <button
          onClick={() => (window.location.href = "/admissions")}
          className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full font-semibold transition duration-300 shadow-lg"
        >
          Apply Now
        </button>
      </section>
    </div>
  );
};

export default Academics;
