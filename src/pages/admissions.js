const Admissions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Admissions at Dreams Secondary School</h1>
        <p className="text-lg text-gray-700">
          Join our vibrant community! Learn about our admission process, requirements, and how to apply.
        </p>
      </header>

      <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-orange-600 mb-6">Admission Process</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4 mb-8">
          <li>
            <strong>Submit Application:</strong> Complete the online application form or obtain a physical form from the school office.
          </li>
          <li>
            <strong>Entrance Exam:</strong> Attend the entrance examination scheduled by the school.
          </li>
          <li>
            <strong>Interview:</strong> Selected candidates will be invited for an interview with the admissions committee.
          </li>
          <li>
            <strong>Notification:</strong> Admission results will be communicated within two weeks after the interview.
          </li>
          <li>
            <strong>Enrollment:</strong> Successful candidates complete enrollment by submitting required documents and paying fees.
          </li>
        </ol>

        <h2 className="text-3xl font-semibold text-orange-600 mb-6">Admission Requirements</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>Completed application form</li>
          <li>Birth certificate or national ID</li>
          <li>Previous school report cards or transcripts</li>
          <li>Passport size photographs (2 copies)</li>
          <li>Entrance exam fee payment receipt</li>
        </ul>

        <div className="text-center">
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            Get in Touch to Apply
          </button>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
