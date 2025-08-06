"use client";

import React from "react";

const newsArticles = [
  {
    title: "Dreams Secondary School Opens New Science Lab",
    date: "2025-07-14",
    description:
      "Our new state-of-the-art science lab was officially inaugurated last week, providing students with hands-on experience and advanced learning resources.",
    link: "#",
  },
  {
    title: "Mathematics Department Wins Regional Competition",
    date: "2025-06-19",
    description:
      "Congratulations to our Mathematics team for winning the regional math olympiad, showcasing excellent problem-solving skills and teamwork.",
    link: "#",
  },
  {
    title: "ICT Club Hosts Annual Coding Hackathon",
    date: "2025-05-09",
    description:
      "Our ICT Club hosted its annual hackathon, where students competed in coding challenges, innovation, and teamwork.",
    link: "#",
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-32 px-4 sm:px-6 lg:px-8">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-600 mb-8">Latest News</h1>
        <p className="text-lg text-gray-700 mb-10">
          Stay updated with the latest news and events happening at Dreams Secondary School.
        </p>

        <div className="space-y-8">
          {newsArticles.map((article, index) => (
            <article
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{article.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date(article.date))}
              </p>
              <p className="text-gray-700 mb-4">{article.description}</p>
              <a href={article.link} className="text-orange-600 hover:underline">
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
