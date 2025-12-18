const Admissions = () => {
  return (
   <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
    from-orange-100 via-white to-gray-100 py-16 px-6 md:px-20">
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-orange-700 text-4xl font-bold text-gray-900 mb-4">
          Admissions at Zomba Vocational Training Centre (ZVTC)
        </h1>
        <p className="text-lg text-gray-700">
          Begin your journey at ZVTC. Learn about our admission process,
          entry requirements, and how to apply for our executive and
          vocational programs.
        </p>
      </header>

      {/* Admission Details */}
      <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-orange-500 text-3xl font-semibold text-blue-700 mb-6">
          Admission Process
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4 mb-8">
          <li>
            <strong>Obtain Application Form:</strong> Collect a physical
            application form from the ZVTC office or download it online.
          </li>
          <li>
            <strong>Submit Application:</strong> Submit the completed form
            together with all required documents.
          </li>
          <li>
            <strong>Verification:</strong> Applications are reviewed to
            confirm that minimum entry requirements are met.
          </li>
          <li>
            <strong>Admission Notification:</strong> Successful applicants
            are informed through official communication.
          </li>
          <li>
            <strong>Enrollment:</strong> Admitted students complete
            registration by paying the required fees and submitting final
            documents.
          </li>
        </ol>

        <h2 className="text-orange-500 text-3xl font-semibold text-blue-700 mb-6">
          Admission Requirements
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>Completed ZVTC application form</li>
          <li>Malawi School Certificate of Education (MSCE)</li>
          <li>Copy of National ID or Birth Certificate</li>
          <li>Previous academic certificates or transcripts</li>
          <li>Two (2) passport-size photographs</li>
        </ul>

        <div className="text-center">
          <button
            onClick={() => (window.location.href = "/contact")}
            className="bg-orange-800 hover:bg-orange-800 text-white px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            Get in Touch to Apply
          </button>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
