"use client";

import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-orange-700 mb-6 text-center">
          About Zomba Vocational Training Centre (ZVTC)
        </h1>
        <p className="text-gray-700 text-lg mb-8 text-center">
          The Key To a Perfect Future.
        </p>

        <div className="space-y-10">
          {/* Mission */}
          <section>
            <h2 className="text-orange-500 text-2xl font-semibold text-gray-800 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To provide high-quality, competency-based vocational and executive
              training that equips learners with practical skills, professional
              knowledge, and entrepreneurial capacity for employment and
              self-reliance.
            </p>
          </section>

          {/* Vision */}
          <section>
            <h2 className="text-orange-500 text-2xl font-semibold text-gray-800 mb-2">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To be a leading vocational training institution in Malawi,
              recognized for excellence in skills development, innovation, and
              workforce readiness.
            </p>
          </section>

          {/* Core Values */}
          <section>
            <h2 className="text-orange-500 text-2xl font-semibold text-gray-800 mb-2">
              Our Core Values
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Integrity</li>
              <li>Excellence</li>
              <li>Practical Skills Development</li>
              <li>Innovation</li>
              <li>Respect</li>
              <li>Teamwork</li>
            </ul>
          </section>

          {/* Why Choose ZVTC */}
          <section>
            <h2 className="text-orange-500 text-2xl font-semibold text-gray-800 mb-2">
              Why Choose ZVTC?
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Industry-focused vocational and executive programs</li>
              <li>Hands-on training using modern tools and workshops</li>
              <li>Qualified and experienced instructors</li>
              <li>Strong emphasis on self-employment and entrepreneurship</li>
              <li>Supportive learning environment and career guidance</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
