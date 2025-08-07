const HumanitiesDepartment = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Humanities Department</h1>
        <p className="text-lg text-gray-700">
          The Humanities Department nurtures critical thinking and cultural awareness through courses in History, Geography, Literature, and Social Studies.
        </p>
      </header>

      <section className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-orange-600 mb-6">Courses Offered</h2>
        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
          <li>History: World and African History</li>
          <li>Geography: Physical and Human Geography</li>
          <li>English Literature and Language</li>
          <li>Social Studies and Civics</li>
          <li>Religious and Moral Education</li>
        </ul>

        <h2 className="text-3xl font-semibold text-orange-600 mb-6">Learning Resources</h2>
        <p className="text-gray-700 mb-6">
          We provide a rich collection of books, digital archives, and multimedia resources to support deep exploration of cultural and social topics.
        </p>

        <h2 className="text-3xl font-semibold text-orange-600 mb-6">Extra-Curricular Activities</h2>
        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
          <li>Debate and public speaking club</li>
          <li>History and culture field trips</li>
          <li>Community service projects and social campaigns</li>
        </ul>

        <h2 className="text-3xl font-semibold text-orange-600 mb-6">Meet Our Teachers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 rounded-lg p-4 text-center shadow">
            <img
              src="/images/students/Emma.jpg"
              alt="Mr. Nkosi"
              className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
            />
            <h3 className="font-bold text-lg text-gray-900">Mr. Nkosi</h3>
            <p className="text-gray-700">History & Social Studies</p>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 text-center shadow">
            <img
              src="/images/students/Emma.jpg"
              alt="Ms. Banda"
              className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
            />
            <h3 className="font-bold text-lg text-gray-900">Ms. Banda</h3>
            <p className="text-gray-700">English Literature</p>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 text-center shadow">
            <img
              src="/images/students/Emma.jpg"
              alt="Mr. Chilowa"
              className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
            />
            <h3 className="font-bold text-lg text-gray-900">Mr. Chilowa</h3>
            <p className="text-gray-700">Geography & Civics</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanitiesDepartment;
