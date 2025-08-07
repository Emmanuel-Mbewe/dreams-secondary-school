const MathematicsDepartment = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Department of Languages</h1>
        <p className="text-lg text-gray-700">
          Our Languages Department is dedicated to developing analytical and problem-solving skills through comprehensive subjects.
        </p>
      </header>

      <section className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-orange-600 mb-6">Subjects Offered</h2>
        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
          <li>English</li>
          <li>Chichewa</li>
          <li>French</li>
          <li>Chinise</li>
        </ul>

        <h2 className="text-3xl font-semibold text-orange-600 mb-6">Learning Resources</h2>
        <p className="text-gray-700 mb-6">
          We provide access to modern softwares, interactive tools, and a well-stocked language resource library to support learning and research.
        </p>

        <h2 className="text-3xl font-semibold text-orange-600 mb-6">Extra-Curricular Activities</h2>
        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
          <li>English and Chinise club competitions</li>
          <li>Participation in national and regional spelling bee competitions</li>
          <li>Workshops and guest lectures from university professors</li>
        </ul>

        <h2 className="text-3xl font-semibold text-orange-600 mb-6">Meet Our Teachers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 rounded-lg p-4 text-center shadow">
            <img
              src="/images/students/Emma.jpg"
              alt="Ms. Chirwa"
              className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
            />
            <h3 className="font-bold text-lg text-gray-900">Mr. E. Mbewe</h3>
            <p className="text-gray-700">English</p>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 text-center shadow">
            <img
              src="/images/students/Emma.jpg"
              alt="Mr. Kasungu"
              className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
            />
            <h3 className="font-bold text-lg text-gray-900">Mr. Kasungu</h3>
            <p className="text-gray-700">Chichewa</p>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 text-center shadow">
            <img
              src="/images/students/Emma.jpg"
              alt="Ms. Mbale"
              className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
            />
            <h3 className="font-bold text-lg text-gray-900">Ms. Mbale</h3>
            <p className="text-gray-700">French</p>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 text-center shadow">
            <img
              src="/images/students/Emma.jpg"
              alt="Ms. Mbale"
              className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
            />
            <h3 className="font-bold text-lg text-gray-900">Mrs. Mbewe</h3>
            <p className="text-gray-700">Chinise</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MathematicsDepartment;
