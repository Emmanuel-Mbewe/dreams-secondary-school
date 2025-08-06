"use client";

import { useState } from "react";
import teachers from "../../data/teachers.json";
import studentsData from "../../data/students.json";

const sections = {
  DASHBOARD: "dashboard",
  PROFILE: "profile",
  STUDENTS: "students",
  ATTENDANCE: "attendance",
  SETTINGS: "settings",
};

const TeacherPortal = () => {
  // Auth state
  const [teacherIdInput, setTeacherIdInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loggedInTeacher, setLoggedInTeacher] = useState(null);
  const [error, setError] = useState("");

  // UI state
  const [activeSection, setActiveSection] = useState(sections.DASHBOARD);
  const [isEditing, setIsEditing] = useState(false);
  const [editableInfo, setEditableInfo] = useState({});

  // Student filter state
  const [classFilter, setClassFilter] = useState("All");

  // Login handler
  const handleLogin = (e) => {
    e.preventDefault();

    const teacher = teachers.find(
      (t) => t.teacherId === teacherIdInput && t.password === passwordInput
    );

    if (teacher) {
      setLoggedInTeacher(teacher);
      setEditableInfo({
        email: teacher.email,
        phone: teacher.phone,
        address: teacher.address,
      });
      setActiveSection(sections.DASHBOARD);
      setError("");
    } else {
      setError("Invalid Teacher ID or Password.");
    }
  };

  // Logout handler
  const handleLogout = () => {
    setLoggedInTeacher(null);
    setTeacherIdInput("");
    setPasswordInput("");
    setError("");
    setIsEditing(false);
    setActiveSection(sections.DASHBOARD);
  };

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setLoggedInTeacher((prev) => ({
      ...prev,
      email: editableInfo.email,
      phone: editableInfo.phone,
      address: editableInfo.address,
    }));
    setIsEditing(false);
  };

  // Filter students by class
  const classes = ["All", ...new Set(studentsData.map((s) => s.class))];
  const filteredStudents =
    classFilter === "All"
      ? studentsData
      : studentsData.filter((s) => s.class === classFilter);

  // If not logged in, show login form
  if (!loggedInTeacher) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 pt-20">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Teacher Portal
          </h2>
          {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
          <label className="block mb-2 font-semibold text-gray-700">Teacher ID</label>
          <input
            type="text"
            value={teacherIdInput}
            onChange={(e) => setTeacherIdInput(e.target.value)}
            required
            className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
          />
          <label className="block mb-2 font-semibold text-gray-700">Password</label>
          <input
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            required
            className="w-full mb-6 p-3 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  // Side navigation
  const SideNav = () => {
    const items = [
      { key: sections.DASHBOARD, label: "Dashboard" },
      { key: sections.PROFILE, label: "Profile" },
      { key: sections.STUDENTS, label: "Students" },
      { key: sections.ATTENDANCE, label: "Attendance" },
      { key: sections.SETTINGS, label: "Settings" },
    ];

    return (
      <nav className="w-64 p-4 bg-white shadow-lg rounded-lg h-[calc(100vh-5rem)] sticky top-[5rem] flex flex-col">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Teacher</h2>
        {items.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => {
              setActiveSection(key);
              setIsEditing(false);
            }}
            className={`block w-full text-left px-4 py-2 rounded-lg mb-2 font-medium ${
              activeSection === key
                ? "bg-orange-600 text-white"
                : "text-gray-700 hover:bg-orange-100"
            }`}
          >
            {label}
          </button>
        ))}
        <button
          onClick={handleLogout}
          className="mt-auto bg-red-700 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </nav>
    );
  };

  // Sections
  const DashboardSection = () => (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl w-full">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome, {loggedInTeacher.name}
      </h2>
      <p className="text-gray-700 text-lg">
        You’re currently teaching:{" "}
        <span className="font-semibold">{loggedInTeacher.subject}</span>
      </p>
    </div>
  );

  const ProfileSection = () => (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl w-full">
      <div className="flex flex-col items-center mb-8">
        <img
          src={loggedInTeacher.photoUrl}
          className="w-32 h-32 rounded-full border-4 border-orange-700 object-cover mb-4"
          alt="Teacher profile"
        />
        <h2 className="text-2xl font-bold">{loggedInTeacher.name}</h2>
        <p className="text-gray-600">Subject: {loggedInTeacher.subject}</p>
        <p className="text-gray-600 mb-4">ID: {loggedInTeacher.teacherId}</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block font-semibold text-gray-600">Phone:</label>
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={editableInfo.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          ) : (
            <p>{loggedInTeacher.phone}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold text-gray-600">Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={editableInfo.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          ) : (
            <p>{loggedInTeacher.email}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold text-gray-600">Address:</label>
          {isEditing ? (
            <textarea
              name="address"
              value={editableInfo.address}
              onChange={handleChange}
              rows={3}
              className="w-full p-2 border rounded"
            />
          ) : (
            <p>{loggedInTeacher.address}</p>
          )}
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          {isEditing ? (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </>
          ) : (
            <button
              onClick={handleEditToggle}
              className="bg-orange-600 text-white px-6 py-2 rounded"
            >
              Edit Info
            </button>
          )}
        </div>
      </div>
    </div>
  );

 const StudentsSection = () => {
  const [classFilter, setClassFilter] = useState("All");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editableStudent, setEditableStudent] = useState(null);
  const [isEditingStudent, setIsEditingStudent] = useState(false);

  const classes = ["All", ...new Set(studentsData.map((s) => s.class))];

  const filteredStudents =
    classFilter === "All"
      ? studentsData
      : studentsData.filter((s) => s.class === classFilter);

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
    setEditableStudent(student);
    setIsEditingStudent(false);
  };

  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setEditableStudent((prev) => ({ ...prev, [name]: value }));
  };

  // Handle result score change
  const handleResultChange = (subject, value) => {
    // Ensure numeric and between 0-100 (simple validation)
    const score = Math.min(100, Math.max(0, Number(value) || 0));
    setEditableStudent((prev) => ({
      ...prev,
      results: {
        ...prev.results,
        [subject]: score,
      },
    }));
  };

  const handleSaveStudent = () => {
    setSelectedStudent(editableStudent);
    setIsEditingStudent(false);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-6xl w-full flex gap-6">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">My Students</h2>

        <div className="mb-6">
          <label className="mr-2 font-semibold">Filter by Class:</label>
          <select
            value={classFilter}
            onChange={(e) => setClassFilter(e.target.value)}
            className="border border-gray-300 rounded p-2"
          >
            {classes.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead className="bg-orange-600 text-white sticky top-0">
              <tr>
                <th className="py-3 px-6 text-left">Photo</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Class</th>
                <th className="py-3 px-6 text-left">Phone</th>
                <th className="py-3 px-6 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr
                  key={student.studentId}
                  onClick={() => handleSelectStudent(student)}
                  className={`border-b border-gray-200 hover:bg-gray-100 cursor-pointer ${
                    selectedStudent?.studentId === student.studentId
                      ? "bg-orange-100"
                      : ""
                  }`}
                >
                  <td className="py-3 px-6">
                    <img
                      src={student.photoUrl}
                      alt={student.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </td>
                  <td className="py-3 px-6">{student.name}</td>
                  <td className="py-3 px-6">{student.class}</td>
                  <td className="py-3 px-6">{student.phone}</td>
                  <td className="py-3 px-6">{student.email}</td>
                </tr>
              ))}
              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-96 bg-gray-50 p-6 rounded-lg shadow-lg overflow-y-auto max-h-[700px]">
        {!selectedStudent ? (
          <p className="text-gray-500">Select a student to view details</p>
        ) : (
          <>
            <div className="flex flex-col items-center mb-6">
              <img
                src={selectedStudent.photoUrl}
                alt={selectedStudent.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold">{selectedStudent.name}</h3>
              <p className="text-gray-600">ID: {selectedStudent.studentId}</p>
              <p className="text-gray-600">Class: {selectedStudent.class}</p>
            </div>

            {isEditingStudent ? (
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={editableStudent.name}
                    onChange={handleStudentChange}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700">Class</label>
                  <input
                    type="text"
                    name="class"
                    value={editableStudent.class}
                    onChange={handleStudentChange}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={editableStudent.phone}
                    onChange={handleStudentChange}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={editableStudent.email}
                    onChange={handleStudentChange}
                    className="w-full p-2 border rounded"
                  />
                </div>

                {/* Results editing */}
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">Results</label>
                  {Object.entries(editableStudent.results).map(([subject, score]) => (
                    <div key={subject} className="flex items-center mb-2 gap-2">
                      <span className="w-24 font-medium">{subject}</span>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={score}
                        onChange={(e) => handleResultChange(subject, e.target.value)}
                        className="w-20 p-1 border rounded"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-end gap-3 mt-4">
                  <button
                    onClick={() => setIsEditingStudent(false)}
                    className="px-4 py-2 rounded border border-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveStudent}
                    className="px-4 py-2 bg-green-600 text-white rounded"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="space-y-2 mb-6">
                  <p><strong>Phone:</strong> {selectedStudent.phone}</p>
                  <p><strong>Email:</strong> {selectedStudent.email}</p>

                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Results:</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {Object.entries(selectedStudent.results).map(([subject, score]) => (
                        <li key={subject}>
                          {subject}: {score}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => setIsEditingStudent(true)}
                  className="w-full bg-orange-600 text-white py-2 rounded"
                >
                  Edit Student
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};



  const AttendanceSection = () => (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl w-full">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Mark Attendance</h2>
      <p className="text-gray-600">Feature under development.</p>
    </div>
  );

  const SettingsSection = () => (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl w-full">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Settings</h2>
      <p className="text-gray-600">Customize preferences here.</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20 flex">
      <SideNav />
      <main className="flex-grow p-8">
        {activeSection === sections.DASHBOARD && <DashboardSection />}
        {activeSection === sections.PROFILE && <ProfileSection />}
        {activeSection === sections.STUDENTS && <StudentsSection />}
        {activeSection === sections.ATTENDANCE && <AttendanceSection />}
        {activeSection === sections.SETTINGS && <SettingsSection />}
      </main>
    </div>
  );
};

export default TeacherPortal;
