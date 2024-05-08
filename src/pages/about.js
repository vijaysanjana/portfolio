import Head from "next/head";
import Image from "next/image";
import { useRef, useEffect, useState } from "react"; // Import useRef from the react module
import sanju from "public/sanju.jpg";
import { WiDayLightWind } from "react-icons/wi";

export default function Home() {
  const cursorRef = useRef(null);
  useEffect(() => {
    if (cursorRef.current) {
      const typed = new Typed(cursorRef.current, {
        strings: ["sanjana anand"],
        typeSpeed: 60,
        // Other options and callbacks can be added here
      });

      // Clean up the Typed.js instance when component unmounts
      return () => {
        typed.destroy();
      };
    }
  }, []);

  const [darkMode, setDarkMode] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>sanjana anand</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="pt-5 pb-2 mb-12 flex justify-between">
            <h1 className="text-2xl font-satoshi dark:text-white">SA</h1>
            <ul className="flex items-center space-x-5">
              <li>
                <a
                  href="/"
                  class="peach-und inline-block text-black dark:text-white resume-link relative bg-gradient-to-r from-peach to-peach-dark bg-clip-text text-transparent transition-all duration-300 ease-in-out"
                >
                  home
                </a>
              </li>
              <li>
                <a class="peach-und inline-block text-black dark:text-white resume-link relative bg-gradient-to-r from-peach to-peach-dark bg-clip-text text-transparent transition-all duration-300 ease-in-out">
                  about
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1QEdSSXV2NgM_48Zn0beNcMvNKKB3UwA1/view?usp=sharing"
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
          <div className="bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="md:py-20">
                <div className="max-w-5xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center justify-center drop-shadow-2xl">
                      <div
                        className={`fadeIn ${
                          imageLoaded ? "loaded" : ""
                        } rounded-full overflow-hidden`}
                      >
                        <Image
                          src={sanju}
                          alt="about"
                          width="40%" // specify the width
                          height="40%" // specify the height to match the width
                          onLoadingComplete={() => setImageLoaded(true)}
                          className="object-cover"
                        />
                      </div>
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
                        . i'll be graduating in 2026 with a b.s. in{" "}
                        <a
                          className="highlight"
                          href="https://www.cs.purdue.edu/"
                        >
                          computer science
                        </a>{" "}
                        (security track) and minors in{" "}
                        <a
                          className="highlight"
                          href="https://www.business.purdue.edu/"
                        >
                          management
                        </a>{" "}
                        and{" "}
                        <a
                          className="highlight"
                          href="https://www.cla.purdue.edu/academic/rueffschool/"
                        >
                          music theory
                        </a>
                        . my interests lie in security, ml/ai, and the
                        intersection between tech and business.
                      </p>
                      <p className="text-lg pt-3 dark:text-white">
                        this summer, i'll be interning at{" "}
                        <a
                          className="highlight"
                          href="https://www.societegenerale.com/en"
                        >
                          societe generale
                        </a>{" "}
                        as a software developer. recently, i had the opportunity
                        to join{" "}
                        <a
                          className="highlight"
                          href="https://www.palantir.com/"
                        >
                          palantir technologies
                        </a>{" "}
                        as a fellow in their spring launch program. on campus, i
                        am a project manager at
                        {"  "}
                        <a
                          className="highlight"
                          href="https://www.scopeje-consulting.com/"
                        >
                          scope
                        </a>
                        , a student-run consulting firm. I am also part of{" "}
                        <a
                          className="highlight"
                          href="https://www.instagram.com/purduetaal/"
                        >
                          purdue taal
                        </a>
                        , a south asian a cappella group!{" "}
                      </p>
                      <p className="text-lg pt-3 dark:text-white">
                        i am currently seeking software-oriented internship
                        opportunities for fall 2024 or spring/summer 2025 -
                        primarily in the nyc, chicago, and seattle areas, but i
                        am open to anything! feel free to contact me if you
                        think i could be a fit for a role you are filling!
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
