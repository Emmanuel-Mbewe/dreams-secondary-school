const ICTDepartment = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">ICT Department</h1>
        <p className="text-lg text-gray-700">
          The ICT Department empowers students with essential digital skills, covering computer science fundamentals, programming, networking, and digital literacy.
        </p>
      </header>

      <section className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-orange-600 mb-6">Courses Offered</h2>
        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
          <li>Computer Fundamentals and Digital Literacy</li>
          <li>Programming: Java, Python, Web Development</li>
          <li>Networking and Cybersecurity Basics</li>
          <li>Database Management</li>
          <li>Software Applications and Tools</li>
        </ul>

        <h2 className="text-3xl font-semibold text-orange-600 mb-6">Facilities & Resources</h2>
        <p className="text-gray-700 mb-6">
          Our computer labs are equipped with modern hardware and software, providing a hands-on environment for students to experiment and learn.
        </p>

        <h2 className="text-3xl font-semibold text-orange-600 mb-6">Extra-Curricular Activities</h2>
        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
          <li>ICT Club for coding challenges and hackathons</li>
          <li>Workshops on emerging technologies and career talks</li>
          <li>Participation in regional tech competitions</li>
        </ul>

        <h2 className="text-3xl font-semibold text-orange-600 mb-6">Meet Our Teachers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 rounded-lg p-4 text-center shadow">
            <img
              src="/images/students/Emma.jpg"
              alt="Mr. Phiri"
              className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
            />
            <h3 className="font-bold text-lg text-gray-900">Mr. Phiri</h3>
            <p className="text-gray-700">Computer Science & Programming</p>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 text-center shadow">
            <img
              src="/images/students/Emma.jpg"
              alt="Ms. Ngwira"
              className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
            />
            <h3 className="font-bold text-lg text-gray-900">Ms. Ngwira</h3>
            <p className="text-gray-700">Networking & Cybersecurity</p>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 text-center shadow">
            <img
              src="/images/students/Emma.jpg"
              alt="Mr. Chilanga"
              className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
            />
            <h3 className="font-bold text-lg text-gray-900">Mr. Chilanga</h3>
            <p className="text-gray-700">Software Applications</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ICTDepartment;
