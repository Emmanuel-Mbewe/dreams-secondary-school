const Academics = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Courses at ZVTC
        </h1>
        <p className="text-lg text-gray-700">
          We offer a wide range of executive and vocational programs designed to
          equip students with practical skills, professional knowledge, and
          career-ready competencies.
        </p>
      </header>

      {/* Courses Section */}
      <section className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
        {/* Executive Courses */}
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Executive Courses
          </h2>
          <p className="text-gray-700 mb-4">
            Our executive courses are designed for professionals and community
            leaders seeking to advance their knowledge and leadership skills.
          </p>
          <ul className="list-decimal list-inside text-gray-600 space-y-1">
            <li>Professional Diploma in Education</li>
            <li>Nutrition and Food Security</li>
            <li>Community Development</li>
            <li>Social Work</li>
            <li>Public Health</li>
            <li>Environmental Science</li>
            <li>ICT</li>
            <li>Agribusiness Management</li>
            <li>Hotel and Hospitality Management</li>
            <li>Human Resource Management</li>
            <li>HIV/AIDS Management</li>
          </ul>
        </div>

        {/* Vocational Courses */}
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Vocational Courses
          </h2>
          <p className="text-gray-700 mb-4">
            Our vocational programs focus on hands-on training to prepare
            students for self-employment and industry-based careers.
          </p>
          <ul className="list-decimal list-inside text-gray-600 space-y-1">
            <li>Automobile Mechanics</li>
            <li>Electrical Installation</li>
            <li>Plumbing</li>
            <li>Tailoring and Fashion Design</li>
          </ul>
        </div>
      </section>

      {/* Additional Info */}
      <section className="max-w-4xl mx-auto mt-16 text-center">
        <h3 className="text-3xl font-semibold text-gray-900 mb-4">
          Supporting Student Success
        </h3>
        <p className="text-gray-700 mb-6">
          We provide academic guidance, practical training, and career support
          to ensure our learners succeed both professionally and personally.
        </p>
        <button
          onClick={() => (window.location.href = "/admissions")}
          className="bg-blue-700 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
        >
          Apply Now
        </button>
      </section>
    </div>
  );
};

export default Academics;
