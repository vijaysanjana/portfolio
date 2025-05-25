import Head from "next/head";
import { useState } from "react";
import Header from "@/components/Header"; // this works now that Header.js is in src/components

export default function Experience() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const courseDescriptions = {
    CS252: "Systems Programming: malloc, custom shell, HTTP server, concurrency.",
    CS355: "Cryptography: encryption, RSA, zero-knowledge proofs, PRGs.",
    MGMT200: "Intro to Accounting: financial statements, ratios, budgeting.",
    ECON251: "Microeconomics: market structures, supply/demand, game theory.",
    HONR199: "Leadership Seminar: public speaking, teamwork, ethical decision-making.",
    MUS132: "Music Theory II: harmony, counterpoint, and 7th chord analysis.",
  };

  const majorCourses = ["CS252", "CS355"];
  const minorCourses = ["MGMT200", "ECON251"];
  const extraCourses = ["HONR199", "MUS132"];

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>experience — sanjana anand</title>
        <meta name="description" content="Internship and coursework experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="min-h-screen">
          {/* Shared header */}
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />

          <div className="bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="md:py-12">
                <div className="max-w-5xl mx-auto">
                  <h1 className="text-4xl font-semibold text-water-dark dark:text-white mb-10">
                    experience
                  </h1>

                  {/* Internships */}
                  <div className="space-y-8 mb-16">
                    <div className="border-l-4 pl-4 border-peach-dark">
                      <h2 className="text-2xl font-medium text-black dark:text-white">
                        Internships
                      </h2>
                    </div>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm">
                        <h3 className="text-lg font-semibold">
                          Datadog – Software Engineer Intern
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Summer 2025 | Cloud SIEM Team
                        </p>
                        <ul className="list-disc list-inside text-sm mt-2 dark:text-white">
                          <li>
                            Built internal tools to detect and investigate cloud attack patterns.
                          </li>
                          <li>Worked with Python, React, and Terraform in production environments.</li>
                        </ul>
                      </div>
                      <div className="border rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm">
                        <h3 className="text-lg font-semibold">
                          Société Générale – Summer Analyst
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Summer 2024 | Equity Derivatives Trading
                        </p>
                        <ul className="list-disc list-inside text-sm mt-2 dark:text-white">
                          <li>Created real-time monitoring dashboards for risk indicators.</li>
                          <li>Automated internal processes to improve trader efficiency.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Coursework */}
                  <div className="space-y-10">
                    <div className="border-l-4 pl-4 border-peach-dark">
                      <h2 className="text-2xl font-medium text-black dark:text-white">Coursework</h2>
                    </div>
                    {[
                      { title: "Major Courses", courses: majorCourses },
                      { title: "Minor Courses", courses: minorCourses },
                      { title: "Extra Courses", courses: extraCourses },
                    ].map(({ title, courses }) => (
                      <div key={title}>
                        <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
                          {title}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {courses.map((code) => (
                            <button
                              key={code}
                              onClick={() => setSelectedCourse(code)}
                              className="px-4 py-1 rounded border border-peach-dark text-peach-dark hover:bg-peach hover:text-white text-sm transition-all"
                            >
                              {code}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal */}
          {selectedCourse && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[90%] max-w-md">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold">{selectedCourse}</h2>
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="text-gray-500 hover:text-black dark:hover:text-white"
                  >
                    &times;
                  </button>
                </div>
                <p className="text-sm text-gray-800 dark:text-white">
                  {courseDescriptions[selectedCourse] || "Description not available."}
                </p>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
