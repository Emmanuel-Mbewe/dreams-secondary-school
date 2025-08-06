"use client";

import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">
          About Dreams Secondary School
        </h1>
        <p className="text-gray-700 text-lg mb-8 text-center">
          Empowering minds. Building futures.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To provide high-quality, inclusive, and future-ready education that nurtures students academically, socially, and emotionally. We aim to inspire learners to become innovative thinkers and responsible global citizens.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be a beacon of academic excellence and innovation in Malawi by shaping leaders of tomorrow through integrity, dedication, and opportunity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Core Values</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Integrity</li>
              <li>Excellence</li>
              <li>Innovation</li>
              <li>Respect</li>
              <li>Responsibility</li>
              <li>Teamwork</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Dreams?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Experienced and passionate educators</li>
              <li>Advanced Science and ICT facilities</li>
              <li>Focused departments: Science, Mathematics, Humanities, and ICT</li>
              <li>Supportive and disciplined learning environment</li>
              <li>Student clubs, academic competitions, and mentorship programs</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
