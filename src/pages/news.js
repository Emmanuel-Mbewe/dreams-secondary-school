"use client";

import React from "react";

const newsArticles = [
  {
    title: "ZVTC Graduates Complete Electrical Installation Program",
    date: "2025-10-19",
    description:
      "Trainees from the Electrical Installation program successfully completed their training, demonstrating practical competence and industry readiness.",
    link: "#",
  },
  {
    title: "ZVTC Launches New Automotive Training Workshop",
    date: "2025-07-14",
    description:
      "Zomba Vocational Training Centre has officially opened a modern automobile mechanics workshop to enhance hands-on training for trainees.",
    link: "#",
  },
  {
    title: "ICT Trainees Host Practical Skills Exhibition",
    date: "2025-05-09",
    description:
      "ICT trainees at ZVTC showcased their skills in software applications, networking, and digital literacy during a practical skills exhibition.",
    link: "#",
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-32 px-4 sm:px-6 lg:px-8">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-orange-700 text-4xl font-bold text-blue-700 mb-8">
          Latest News & Updates
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          Stay informed about the latest news, events, and developments at
          Zomba Vocational Training Centre (ZVTC).
        </p>

        <div className="space-y-8">
          {newsArticles.map((article, index) => (
            <article
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {article.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date(article.date))}
              </p>
              <p className="text-gray-700 mb-4">
                {article.description}
              </p>
              <a
                href={article.link}
                className="text-blue-700 hover:underline font-medium"
              >
                Read More
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;
