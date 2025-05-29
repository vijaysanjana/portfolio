import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";

export default function Experience() {
  const [selectedCourse, setSelectedCourse] = useState(null);

const courseDescriptions = {
  "Object-Oriented Programming": "<u>CS 18000</u>: Introduced problem-solving and algorithmic thinking using a high-level language. Covered conditionals, iteration, object-oriented design, data structures, searching/sorting, file I/O, GUI development, and debugging techniques.",
  "Discrete Mathematics": "<u>CS 18200</u>: Covered logic and proofs, set theory, functions, recursion, graph theory, finite state machines, and computability. Focused on formal reasoning and the mathematical underpinnings of algorithms.",
  "Programming in C": "<u>CS 240000</u>: Explored systems-level programming in C, including pointers, memory allocation, file I/O, data structures, the C preprocessor, and concurrency within the UNIX environment.",
  "Data Structures & Algorithms": "<u>CS 25100</u>: Focused on algorithm analysis and implementation of data structures including trees, heaps, hash tables, and graphs. Covered sorting algorithms, graph traversal, and runtime complexity.",
  "Systems Programming": "<u>CS 25200</u>: Covered low-level memory and pointer management, multithreading, process control, system calls, file I/O, and socket programming. Included shell scripting, UNIX tools, debugging, and embedded systems fundamentals.",
  "Introduction to Cryptography": "<u>CS 35500</u>: Explored classical and modern ciphers, including Caesar, RSA, and AES. Covered key exchange, digital signatures, hash functions, block and stream ciphers, and secure protocols.",
  "Software Testing": "<u>CS 40800</u>: Focused on testing strategies, debugging, and verification. Covered control/data flow analysis, regression testing, test adequacy, mutation testing, and automated testing tools.",
  "Introductory Accounting": "<u>MGMT 20000</u>: Introduced financial statements and their interpretation. Covered how business activities and management decisions impact reported financial information.",
  "Microeconomics": "<u>ECON 25100</u>: Examined individual decision-making, market incentives, and resource allocation. Emphasized the role of public policy in shaping market outcomes and economic efficiency.",
  "Management Accounting I": "<u>Management Accounting I</u>: Focused on internal accounting for decision-making, including budgeting, product costing, performance evaluation, and production management.",
  "Management Information Systems": "<u>MGMT 38200</u>: Explored how organizations manage and leverage information technology. Covered real-world case studies on strategic decision-making, system implementation, and emerging tech in business.",
  "Management of Human Resources": "<u>MGMT 44301</u>: Covered HR strategies including staffing, compensation, job analysis, and legal considerations. Emphasized recruitment, development, and the role of unions in the workplace.",
  "Music Theory I": "<u>MUS 13200</u>: Introduced tonal harmony and melodic analysis through listening, writing, and keyboard skills. Focused on foundational theory and aural training for musicians.",
  "Jazz History": "<u>MUS 37500</u>: Explored the historical development and stylistic evolution of jazz, focusing on key artists, movements, and cultural impact.",
  "Studio Voice": "<u>MUS 35200</u>: Offered performance-based vocal training across genres in a masterclass setting. Included individual and group coaching with required in-class performances.",
  "Multivariate Calculus": "<u>MA 26100</u>: Covered planes, curves, and surfaces in three dimensions. Topics included partial derivatives, multiple integrals, and an introduction to vector calculus.",
  "Linear Algebra": "<u>MA 26500</u>: Introduced systems of equations, matrix operations, vector spaces, eigenvalues/eigenvectors, and diagonalization. Emphasized both theoretical foundations and applied problem solving.",
  "Statistical Methods": "<u>STAT 51100</u>: Covered descriptive statistics, probability, sampling distributions, hypothesis testing, and regression. Included binomial, Poisson, and normal distributions, as well as ANOVA and contingency tables."
};


  const compSciMajorCourses = ["Object-Oriented Programming", "Discrete Mathematics", "Programming in C", "Computer Architecture", "Data Structures & Algorithms", "Systems Programming", "Introduction to Cryptography", "Software Testing", "Multivariate Calculus", "Linear Algebra", "Statistical Methods"];
  const managementMinorCourses = ["Microeconomics", "Introductory Accounting", "Management Accounting I", "Management Information Systems", "Management of Human Resources"];
  const musicMinorCourses = ["Music Theory I", "Jazz History", "Studio Voice"];

  return (
    <div>
      <Head>
        <title>experience — sanjana anand</title>
        <meta name="description" content="Internship and coursework experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white dark:bg-gray-900 px-6 sm:px-10">
        <section className="min-h-screen">
          <Header />

          <div className="bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="md:py-8">
                <div className="max-w-5xl mx-auto">
                  <h1 className="text-3xl sm:text-4xl font-bold text-water-dark dark:text-white mb-8">
                    experience
                  </h1>

                  {/* Internships */}
                  <div className="space-y-6 mb-16">
                    <div className="border-l-4 pl-4 border-peach-dark mb-4">
                      <h2 className="text-2xl font-semibold text-black dark:text-white">
                        professional experience
                      </h2>
                    </div>

                    <div className="space-y-6">
                      <div className="border rounded-lg p-5 bg-white dark:bg-gray-800 shadow-sm">
                        <h3 className="text-lg font-semibold text-black dark:text-white">
                          Datadog – Software Engineer Intern
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Summer 2025 | Cloud SIEM Team
                        </p>
                        <ul className="list-disc list-inside text-sm mt-2 dark:text-white">
                          <li>Working on Datadog’s Cloud SIEM platform, which ingests and analyzes logs at scale to detect security threats in
                          real time across cloud environments.</li>
                        </ul>
                      </div>
                      <div className="border rounded-lg p-5 bg-white dark:bg-gray-800 shadow-sm">
                        <h3 className="text-lg font-semibold text-black dark:text-white">
                          Scope Consulting – Director of Project Development
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Feb. 2023 - Present | Executive Board
                        </p>
                        <ul className="list-disc list-inside text-sm mt-2 dark:text-white">
                          <li>Overseeing 50+ club members in 8 different projects within Technology and Management Consulting.</li>
                          <li>Driving project delivery by coordinating technical roadmaps and facilitating communication between PMs and Executive
                          Board.</li>
                        </ul>
                      </div>
                      <div className="border rounded-lg p-5 bg-white dark:bg-gray-800 shadow-sm">
                        <h3 className="text-lg font-semibold text-black dark:text-white">
                          Société Générale – Software Engineer intern
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Summer 2024 | Equity Derivatives Trading Team
                        </p>
                        <ul className="list-disc list-inside text-sm mt-2 dark:text-white">
                          <li>Worked on the bank’s internal PnL calculation tool and automated internal processes to improve trader efficency.</li>
                          <li>Created functionality for PnL tool to fully operate based on data from Azure Data Lake as opposed to local data.</li>
                        </ul>
                      </div>
                      <div className="border rounded-lg p-5 bg-white dark:bg-gray-800 shadow-sm">
                        <h3 className="text-lg font-semibold text-black dark:text-white">
                          Palantir Technologies – Spring Launch Participant
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Spring 2024
                        </p>
                        <ul className="list-disc list-inside text-sm mt-2 dark:text-white">
                          <li>1 of 17 accepted into company’s selective NYC Launch Cohort to work with Palantir Foundry and the Artificial
                          Intelligence Platform, as well as shadow Palantir Engineers</li>
                          <li>Constructed a Pandemic Response dashboard, and utilized LLMs via Palantir AIP.</li>
                        </ul>
                      </div>
                      <div className="border rounded-lg p-5 bg-white dark:bg-gray-800 shadow-sm">
                        <h3 className="text-lg font-semibold text-black dark:text-white">
                          New Jersey Office of Homeland Security – Cybersecurity Intern
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Summer 2021
                        </p>
                        <ul className="list-disc list-inside text-sm mt-2 dark:text-white">
                          <li>Strengthened public school cybersecurity measures to aid in 40% increase in technology usage due to Covid.</li>
                          <li>Conducted research on security threats posed by 3 popular IoT devices and drafted a mitigation strategy.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Coursework */}
                  <div className="space-y-8">
                    <div className="border-l-4 pl-4 border-peach-dark mb-4">
                      <h2 className="text-2xl font-semibold text-black dark:text-white">
                        coursework
                      </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { title: "Computer Science Major Courses", courses: compSciMajorCourses },
                        { title: "Management Minor Courses", courses: managementMinorCourses },
                        { title: "Music Minor Courses", courses: musicMinorCourses },
                      ].map(({ title, courses }) => (
                        <div key={title} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                          <h3 className="text-md font-semibold mb-3 text-black dark:text-white">
                            {title}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {courses.map((code) => (
                              <button
                                key={code}
                                onClick={() => setSelectedCourse(code)}
                                className="px-3 py-1 rounded border border-peach-dark text-peach-dark hover:bg-peach hover:text-white text-xs sm:text-sm transition-all"
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
                <p
  className="text-sm text-gray-800 dark:text-white"
  dangerouslySetInnerHTML={{
    __html: courseDescriptions[selectedCourse] || "Description not available.",
  }}
/>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
