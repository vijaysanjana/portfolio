import Head from "next/head";
import { WiDayLightWind } from "react-icons/wi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import laptop from "public/laptop.png";
import memoji from "public/memoji2.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sanjana Anand Portfolio</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-8 mb-12 flex justify-between">
            <h1 className="text-2xl font-satoshi dark:text-white">SA</h1>
            <ul className="flex items-center space-x-5">
              <li>
                <a
                  href="#"
                  class="inline-block text-black dark:text-white resume-link relative bg-gradient-to-r from-peach to-peach-dark bg-clip-text text-transparent transition-all duration-300 ease-in-out"
                >
                  resumé
                  <span class="absolute bottom-0 left-0 bg-peach-dark h-1 w-0 transition-all duration-300 ease-in-out"></span>
                </a>
              </li>
              <li>
                <WiDayLightWind
                  onClick={() => setDarkMode(!darkMode)}
                  className={`cursor-pointer text-2xl text-black dark:text-white transition-colors duration-300 hover:text-peach`}
                />
              </li>
            </ul>
          </nav>
          <div className="flex justify-center">
            <div className="w-1/2 pl-10 px-20 text-left items-center justify-center p-10">
              <h1 className="text-2xl pt-20 dark:text-white">hi, i'm</h1>
              <h2 className="text-6xl pb-2 text-lilac-dark font-medium">
                sanjana anand
              </h2>
              <h3 className="text-3xl pt-3 italic dark:text-white">
                cs @ purdue
              </h3>
              <h3 className="text-3xl italic dark:text-white">
                software engineer
              </h3>
            </div>
            <div className="mx-auto w-1/2 items-center drop-shadow-2xl">
              <Image src={laptop} alt="laptop" />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="py-12 md:py-20">
                <div className="max-w-5xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center drop-shadow-2xl">
                      \\some image here
                    </div>
                    <div className="flex flex-col justify-center pt-10 ">
                      <h3 className="text-3xl font-medium text-water-dark">
                        who am i?
                      </h3>
                      <p className="text-lg pt-3 dark:text-white">
                        🎓 computer science student at purdue university
                      </p>
                      <p className="text-lg pt-3 dark:text-white">
                        👩‍💼 project manager at scope consulting
                      </p>
                      <p className="text-lg pt-3 dark:text-white">
                        💡 interested in machine learning, security, and web
                        development
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
