"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import students from "../../data/students.json";

const sections = {
  DASHBOARD: "dashboard",
  PROFILE: "profile",
  RESULTS: "results",
  ATTENDANCE: "attendance",
  ASSIGNMENTS: "assignments",
  SETTINGS: "settings",
};

const School = () => {
  const [studentIdInput, setStudentIdInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loggedInStudent, setLoggedInStudent] = useState(null);
  const [error, setError] = useState("");
  const [activeSection, setActiveSection] = useState(sections.DASHBOARD);
  const [isEditing, setIsEditing] = useState(false);
  const [editableInfo, setEditableInfo] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();

    const student = students.find(
      (s) => s.studentId === studentIdInput && s.password === passwordInput
    );

    if (student) {
      setLoggedInStudent(student);
      setEditableInfo({
        phone: student.phone,
        email: student.email,
        address: student.address,
      });
      setError("");
      setActiveSection(sections.DASHBOARD);
    } else {
      setError("Invalid Student ID or Password.");
    }
  };

  const handleLogout = () => {
    setLoggedInStudent(null);
    setStudentIdInput("");
    setPasswordInput("");
    setError("");
    setIsEditing(false);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setLoggedInStudent((prev) => ({
      ...prev,
      phone: editableInfo.phone,
      email: editableInfo.email,
      address: editableInfo.address,
    }));
    setIsEditing(false);
  };

  // Navbar height assumed 64px (h-16)
  const containerPaddingTop = "pt-20";

  if (!loggedInStudent) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center bg-gray-100 px-4 ${containerPaddingTop}`}
      >
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
        >
          <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
            Student Portal
          </h2>

          {error && (
            <p className="mb-6 text-center text-red-600 font-semibold">{error}</p>
          )}

          <label
            className="block mb-2 font-semibold text-gray-700"
            htmlFor="studentId"
          >
            Student ID
          </label>
          <input
            id="studentId"
            type="text"
            value={studentIdInput}
            onChange={(e) => setStudentIdInput(e.target.value)}
            required
            className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <label
            className="block mb-2 font-semibold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            required
            className="w-full p-3 mb-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-orange-600 text-white p-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  // SideNav component
  const SideNav = () => {
    const navItems = [
      { label: "Dashboard", key: sections.DASHBOARD },
      { label: "Profile", key: sections.PROFILE },
      { label: "Exam Results", key: sections.RESULTS },
      { label: "Attendance", key: sections.ATTENDANCE },
      { label: "Assignments", key: sections.ASSIGNMENTS },
      { label: "Settings", key: sections.SETTINGS },
    ];

    return (
      <nav className="flex flex-col bg-white shadow-lg rounded-lg p-4 w-64 h-[calc(100vh-5rem)] sticky top-[5rem]">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Student Portal
        </h2>

        {navItems.map(({ label, key }) => (
          <button
            key={key}
            className={`mb-3 text-left px-4 py-3 rounded-lg font-semibold transition text-lg
              ${
                activeSection === key
                  ? "bg-orange-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-blue-100"
              }`}
            onClick={() => {
              setActiveSection(key);
              setIsEditing(false);
            }}
          >
            {label}
          </button>
        ))}

        <button
          onClick={handleLogout}
          className="mt-auto bg-red-900 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition font-semibold text-lg"
        >
          Logout
        </button>
      </nav>
    );
  };

  // Dashboard section - simple welcome + summary
  const DashboardSection = () => (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Welcome, {loggedInStudent.name}!</h2>
      <p className="text-gray-700 text-lg">
        Here’s a quick overview of your profile and progress.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold mb-2">Class</h3>
          <p className="text-gray-800 text-2xl">{loggedInStudent.class}</p>
        </div>

        <div className="bg-green-100 p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold mb-2">Subjects</h3>
          <p className="text-gray-800 text-2xl">{Object.keys(loggedInStudent.results).length}</p>
        </div>

        <div className="bg-yellow-100 p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold mb-2">Average Score</h3>
          <p className="text-gray-800 text-2xl">
            {(
              Object.values(loggedInStudent.results).reduce((a, b) => a + b, 0) /
              Object.values(loggedInStudent.results).length
            ).toFixed(1)}
            %
          </p>
        </div>
      </div>
    </div>
  );

  // Profile section
  const ProfileSection = () => (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full">
      <div className="flex flex-col items-center mb-10">
        <img
          src={loggedInStudent.photoUrl}
          alt="Student Photo"
          className="w-36 h-36 rounded-full object-cover mb-5 border-4 border-orange-700"
        />
        <h1 className="text-4xl font-extrabold mb-1 text-gray-900">
          {loggedInStudent.name}
        </h1>
        <p className="text-gray-700 text-lg">Student ID: {loggedInStudent.studentId}</p>
        <p className="text-gray-700 text-lg mb-6">Class: {loggedInStudent.class}</p>

        <div className="w-full max-w-md space-y-4">
          <div>
            <label className="block text-gray-600 font-semibold mb-1">Date of Birth:</label>
            <p>{loggedInStudent.dateOfBirth}</p>
          </div>

          <div>
            <label className="block text-gray-600 font-semibold mb-1">Phone:</label>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={editableInfo.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            ) : (
              <p>{loggedInStudent.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-600 font-semibold mb-1">Email:</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={editableInfo.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            ) : (
              <p>{loggedInStudent.email}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-600 font-semibold mb-1">Address:</label>
            {isEditing ? (
              <textarea
                name="address"
                value={editableInfo.address}
                onChange={handleChange}
                rows={3}
                className="w-full p-2 border border-gray-300 rounded resize-none"
              />
            ) : (
              <p>{loggedInStudent.address}</p>
            )}
          </div>

          <div className="flex justify-between mt-6">
            {isEditing ? (
              <>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Save
                </button>
              </>
            ) : (
              <button
                onClick={handleEditToggle}
                className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
              >
                Edit Info
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // Results section
  const ResultsSection = () => {
 const generatePDF = async () => {
  const doc = new jsPDF();

  // Load images asynchronously
  const loadImage = (src) =>
    new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
    });

  // Load all images
  const logoImg = await loadImage("/images/Dreams_Secondary_School.png");
  const teacherSignImg = await loadImage("/images/Teacher_Signature.png");
  const headTeacherSignImg = await loadImage("/images/Signature.png");

  // Add school logo top-left (x=10, y=10, width=30, height auto scaled)
  doc.addImage(logoImg, "PNG", 10, 10, 30, (logoImg.height * 30) / logoImg.width);

  // Add school name centered
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("Dreams Secondary School", 105, 25, null, null, "center");

  // Report title below school name
  doc.setFontSize(16);
  doc.setFont("helvetica", "normal");
  doc.text("Student Exam Report", 105, 35, null, null, "center");

  // Student info
  doc.setFontSize(12);
  doc.text(`Name: ${loggedInStudent.name}`, 14, 50);
  doc.text(`Class: ${loggedInStudent.class}`, 14, 58);
  doc.text(`Student ID: ${loggedInStudent.studentId}`, 14, 66);

  // Prepare table data
  const resultsData = Object.entries(loggedInStudent.results).map(
    ([subject, score]) => [subject, `${score}%`]
  );

  // Add table (use jsPDF-AutoTable)
  autoTable(doc, {
    startY: 75,
    head: [["Subject", "Score"]],
    body: resultsData,
    styles: { halign: "center" },
    headStyles: { fillColor: [255, 165, 0] },
  });

  // Position for signatures (below table)
  const finalY = doc.lastAutoTable.finalY || 75;

  // Add teacher signature and label
  doc.text("Teacher's Signature:", 14, finalY + 30);
  doc.addImage(
    teacherSignImg,
    "PNG",
    14,
    finalY + 35,
    50,
    (teacherSignImg.height * 50) / teacherSignImg.width
  );

  // Add head teacher signature and label
  doc.text("Head Teacher's Signature:", 150, finalY + 30);
  doc.addImage(
    headTeacherSignImg,
    "PNG",
    150,
    finalY + 35,
    50,
    (headTeacherSignImg.height * 50) / headTeacherSignImg.width
  );

  // Save PDF
  doc.save(`School_Report_For_${loggedInStudent.name}.pdf`);
};



    return (
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full">
        <div className="flex justify-between items-center mb-6 border-b border-gray-300 pb-3">
          <h2 className="text-3xl font-bold text-gray-800">Exam Results</h2>
          <button
            onClick={generatePDF}
            className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-lg text-sm font-semibold"
          >
            Download Report
          </button>
        </div>

        <table className="w-full text-left border-collapse shadow-sm rounded-lg overflow-hidden">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-4 font-semibold border-b border-blue-300">Subject</th>
              <th className="p-4 font-semibold border-b border-blue-300">Score (%)</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(loggedInStudent.results).map(([subject, score]) => (
              <tr key={subject} className="odd:bg-white even:bg-blue-50">
                <td className="p-4 border-b border-blue-200">{subject}</td>
                <td className="p-4 border-b border-blue-200">{score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Attendance section (mock data)
  const AttendanceSection = () => {
    // Just mock some data here
    const attendanceData = {
      Mathematics: "92%",
      English: "88%",
      Science: "95%",
      History: "90%",
      Geography: "85%",
    };

    return (
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-300 pb-3 text-gray-800">
          Attendance
        </h2>

        <table className="w-full text-left border-collapse shadow-sm rounded-lg overflow-hidden">
          <thead className="bg-green-100">
            <tr>
              <th className="p-4 font-semibold border-b border-green-300">Subject</th>
              <th className="p-4 font-semibold border-b border-green-300">Attendance %</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(attendanceData).map(([subject, attendance]) => (
              <tr key={subject} className="odd:bg-white even:bg-green-50">
                <td className="p-4 border-b border-green-200">{subject}</td>
                <td className="p-4 border-b border-green-200">{attendance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Assignments section (mock data)
  const AssignmentsSection = () => {
    const assignments = [
      { id: 1, subject: "Mathematics", title: "Algebra Homework", dueDate: "2025-08-10", status: "Completed" },
      { id: 2, subject: "Science", title: "Lab Report", dueDate: "2025-08-15", status: "Pending" },
      { id: 3, subject: "English", title: "Essay on Shakespeare", dueDate: "2025-08-12", status: "In Progress" },
    ];

    return (
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-300 pb-3 text-gray-800">
          Assignments
        </h2>

        <table className="w-full text-left border-collapse shadow-sm rounded-lg overflow-hidden">
          <thead className="bg-yellow-100">
            <tr>
              <th className="p-4 font-semibold border-b border-yellow-300">Subject</th>
              <th className="p-4 font-semibold border-b border-yellow-300">Title</th>
              <th className="p-4 font-semibold border-b border-yellow-300">Due Date</th>
              <th className="p-4 font-semibold border-b border-yellow-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map(({ id, subject, title, dueDate, status }) => (
              <tr key={id} className="odd:bg-white even:bg-yellow-50">
                <td className="p-4 border-b border-yellow-200">{subject}</td>
                <td className="p-4 border-b border-yellow-200">{title}</td>
                <td className="p-4 border-b border-yellow-200">{dueDate}</td>
                <td className="p-4 border-b border-yellow-200">{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Settings section (placeholder)
  const SettingsSection = () => (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full">
      <h2 className="text-3xl font-bold mb-6 border-b border-gray-300 pb-3 text-gray-800">
        Settings
      </h2>
      <p className="text-gray-700"></p>
    </div>
  );

  return (
    <div className={`min-h-screen bg-gray-50 ${containerPaddingTop} flex`}>
      {/* Side nav */}
      <SideNav />

      {/* Main content */}
      <main className="flex-grow p-8">
        {activeSection === sections.DASHBOARD && <DashboardSection />}
        {activeSection === sections.PROFILE && <ProfileSection />}
        {activeSection === sections.RESULTS && <ResultsSection />}
        {activeSection === sections.ATTENDANCE && <AttendanceSection />}
        {activeSection === sections.ASSIGNMENTS && <AssignmentsSection />}
        {activeSection === sections.SETTINGS && <SettingsSection />}
      </main>
    </div>
  );
};

export default School;
