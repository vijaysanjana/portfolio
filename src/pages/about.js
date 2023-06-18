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
                  href="https://drive.google.com/file/d/1CMsqAMIZF5ynjCL43SfFhI_SWJVAMGS-/view?usp=sharing"
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
                      <Image
                        style={{
                          borderRadius: "50%",
                          height: "80%",
                          width: "80%",
                          layout: "responsive",
                          objectFit: "cover",
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
                        intersection between tech and business.
                      </p>
                      <p className="text-lg pt-3 dark:text-white">
                        this summer, i had the opportunity to join{" "}
                        <a
                          className="highlight"
                          href="https://pluralsight.com/"
                        >
                          pluralsight
                        </a>{" "}
                        in their software apprenticeship program. i'm also
                        planning to join{" "}
                        <a className="highlight" href="https://www.rtx.com/">
                          raytheon technologies
                        </a>{" "}
                        as a fellow in their leadership academy this fall. on
                        campus, i am a project manager at
                        {"  "}
                        <a
                          className="highlight"
                          href="https://www.scopeje-consulting.com/"
                        >
                          scope
                        </a>
                        , a student-run consulting firm.{" "}
                      </p>
                      <p className="text-lg pt-3 dark:text-white">
                        i am currently seeking software-oriented internship
                        opportunities for summer 2024 - primarily in the nyc,
                        chicago, and seattle areas, but i am open to anything!
                        feel free to contact me if you think i could be a fit
                        for a role you are filling!
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
