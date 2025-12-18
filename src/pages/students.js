"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import students from "../data/students.json";

/* ---------------- Slideshow ---------------- */
const StudentSlideshow = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      4500
    );
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-80 md:h-[24rem] rounded-xl overflow-hidden shadow-xl">
      <Image
        src={images[index]}
        alt="ZVTC Student"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-center"
      />
    </div>
  );
};

/* ---------------- Page ---------------- */
const StudentGalleryPage = () => {
  const images = students.map((s) => s.photoUrl);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-6 md:px-16 py-20">
      {/* Header */}
      <header className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-extrabold text-orange-700 mb-4">
          Life at ZVTC
        </h1>
        <p className="text-lg text-gray-700">
          A vibrant learning environment combining practical skills,
          academic excellence, and real-world experience.
        </p>
      </header>

      {/* Split Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <StudentSlideshow images={images} />

        {/* Program Highlights */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-orange-500">
            Our Training Programs
          </h2>

          <ul className="space-y-4 text-lg">
            <li className="flex gap-3">
              <span className="text-orange-700 text-2xl">✔</span>
              <span>Hands-on vocational and technical training</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange-700 text-2xl">✔</span>
              <span>Industry-aligned curriculum</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange-700 text-2xl">✔</span>
              <span>Experienced instructors and mentors</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange-700 text-2xl">✔</span>
              <span>Career and entrepreneurship support</span>
            </li>
          </ul>

          {/* CTA */}
          <div className="pt-6 flex gap-4">
            <Link
              href="/academics"
              className="bg-orange-800 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Explore Programs
            </Link>

            <Link
              href="/portal"
              className="border-2 border-orange-800 text-orange-800 hover:bg-orange-800 hover:text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Student Portal
            </Link>
          </div>
        </div>
      </section>

      {/* Thumbnails */}
      <section className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-20">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative h-40 rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={img}
              alt={`Student ${i + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default StudentGalleryPage;
