const ScienceDepartment = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Science Department</h1>
        <p className="text-lg text-gray-700">
          Our Science Department offers a comprehensive curriculum in Physics, Chemistry, and Biology, backed by state-of-the-art laboratory facilities to foster practical learning and critical thinking.
        </p>
      </header>

      <section className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-orange-600 mb-6">Courses Offered</h2>
        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
          <li>Physics: Mechanics, Electricity, Waves, Modern Physics</li>
          <li>Chemistry: Organic, Inorganic, Physical Chemistry</li>
          <li>Biology: Cell Biology, Genetics, Ecology, Human Physiology</li>
          <li>Integrated Science for lower grades</li>
        </ul>

        <h2 className="text-3xl font-semibold text-orange-600 mb-6">Facilities & Resources</h2>
        <p className="text-gray-700 mb-6">
          The department boasts modern laboratories equipped with the latest scientific apparatus to ensure hands-on learning. Safety protocols are strictly observed to create a safe and encouraging learning environment.
        </p>

        <h2 className="text-3xl font-semibold text-orange-600 mb-6">Extra-Curricular Activities</h2>
        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
          <li>Science club with monthly experiments and projects</li>
          <li>Participation in science fairs and competitions</li>
          <li>Field trips to science museums and research centers</li>
        </ul>

        <h2 className="text-3xl font-semibold text-orange-600 mb-6">Meet Our Teachers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Example teacher cards */}
          <div className="bg-gray-100 rounded-lg p-4 text-center shadow">
            <img
              src="/images/teachers/mr-kamanga.jpg"
              alt="Mr. Kamanga"
              className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
            />
            <h3 className="font-bold text-lg text-gray-900">Mr. Kamanga</h3>
            <p className="text-gray-700">Physics Teacher</p>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 text-center shadow">
            <img
              src="/images/teachers/ms-moyo.jpg"
              alt="Ms. Moyo"
              className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
            />
            <h3 className="font-bold text-lg text-gray-900">Ms. Moyo</h3>
            <p className="text-gray-700">Chemistry Teacher</p>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 text-center shadow">
            <img
              src="/images/teachers/mr-ngoma.jpg"
              alt="Mr. Ngoma"
              className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
            />
            <h3 className="font-bold text-lg text-gray-900">Mr. Ngoma</h3>
            <p className="text-gray-700">Biology Teacher</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScienceDepartment;
