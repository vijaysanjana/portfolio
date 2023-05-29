import Head from "next/head";
import { WiDayLightWind } from "react-icons/wi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import laptop from "public/laptop.png";
import memoji from "public/memoji2.png";
import about from "public/about.png";
import { useState } from "react";
import sanju from "public/sanju.jpg";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>sanjana anand</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="pt-8 pb-2 mb-12 flex justify-between">
            <h1 className="text-2xl font-satoshi dark:text-white">SA</h1>
            <ul className="flex items-center space-x-5">
              <li>
                <a
                  href="https://drive.google.com/file/d/1Wc0qjXwNOLfndWHlvzlj_AOOCs7l8fWX/view?usp=sharing"
                  class="peach-und inline-block text-black dark:text-white resume-link relative bg-gradient-to-r from-peach to-peach-dark bg-clip-text text-transparent transition-all duration-300 ease-in-out"
                >
                  resumé
                </a>
              </li>
              <li>
                <WiDayLightWind
                  onClick={() => setDarkMode(!darkMode)}
                  className={`cursor-pointer text-2xl text-black dark:text-white transition-colors duration-300`}
                />
              </li>
            </ul>
          </nav>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl pt-20 dark:text-white text-align: right">
                hi, i'm
              </h1>
              <h2 className="typed text-6xl pb-2 text-lilac-dark font-medium">
                sanjana anand
              </h2>
              <h3 className="text-3xl pt-3 italic dark:text-white">
                cs @ purdue
              </h3>
              <h3 className="text-3xl italic dark:text-white">
                software engineer
              </h3>
              <ul className="flex items-center space-x-5 py-10 text:#151515 dark:text-white">
                <li>
                  <a href="https://github.com/vijaysanjana">
                    <AiFillGithub className="text-3xl cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/vijaysanjana/">
                    <AiFillLinkedin className="text-3xl cursor-pointer" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center drop-shadow-2xl">
              <Image src={laptop} alt="laptop" />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="py-12 md:py-20">
                <div className="max-w-5xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center justify-center drop-shadow-2xl pt-5 ">
                      <Image
                        style={{
                          objectFit: "cover",
                          width: "380px",
                          height: "380px",
                          overflow: "hidden",
                          borderRadius: "50%",
                        }}
                        src={sanju}
                        alt="about"
                      />
                    </div>
                    <div className="flex flex-col justify-center pt-10 ">
                      <h3 className="text-3xl font-medium text-water-dark">
                        about me!
                      </h3>
                      <p className="text-lg pt-3 dark:text-white">
                        i am a student at{"  "}
                        <a className="highlight" href="https://www.purdue.edu/">
                          purdue university
                        </a>
                        . i'll be graduating in 2025 with a b.s. in{" "}
                        <a
                          className="highlight"
                          href="https://www.cs.purdue.edu/"
                        >
                          computer science
                        </a>{" "}
                        (software engineering track) and a minor in{" "}
                        <a
                          className="highlight"
                          href="https://www.business.purdue.edu/"
                        >
                          management
                        </a>
                        . my interests lie in security, ml/ai, and the
                        intersection between tech and business. this summer, i'm
                        joining{" "}
                        <a
                          className="highlight"
                          href="https://pluralsight.com/"
                        >
                          pluralsight
                        </a>{" "}
                        as an intern. i've also been working as a project
                        manager at
                        {"  "}
                        <a
                          className="highlight"
                          href="https://www.scopeje-consulting.com/"
                        >
                          scope consulting
                        </a>
                        , a student-run consulting firm on campus. although i am
                        primarily based in nj/ny, i am open to work in all
                        locations in the summer as well as remote work during
                        the academic year!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
