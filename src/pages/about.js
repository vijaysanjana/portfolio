import Head from "next/head";
import Image from "next/image";
import { useRef, useEffect, useState } from "react"; // Import useRef from the react module
import sanju from "public/sanju.jpeg";
import { WiDayLightWind } from "react-icons/wi";
import Header from "@/components/Header";

export default function About() {
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
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
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
                        i am a rising senior at{"  "}
                        <a className="highlight" href="https://www.purdue.edu/">
                          purdue university
                        </a>
                        , pursuing a b.s. in{" "}
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
                        . my interests lie in security, fintech, and consulting.
                      </p>
                      <p className="text-lg pt-3 dark:text-white">
                        this summer, i will be working at{" "} <a
                        className="highlight"
                        href="https://www.datadoghq.com/"
                        >
                          datadog
                        </a>
                        {" "}as a software engineer intern, specifically on their{" "} <a
                        className="highlight"
                        href="https://www.datadoghq.com/product/cloud-siem/"
                        >
                          cloud siem
                        </a>
                        {" "}product.
                        </p>
                        <p  className="text-lg pt-3 dark:text-white">
                        aside from this, in the summer of 2024, i worked at{" "}
                        <a
                        className="highlight"
                        href="https://www.societegenerale.com/en"
                        >
                          societe generale,
                        </a>{" "}
                         where i developed tools for equity
                        derivatives trading. on campus, i
                        am the director of project development at
                        {"  "}
                        <a
                          className="highlight"
                          href="https://www.scopeje-consulting.com/"
                        >
                          scope
                        </a>
                        , a student-run consulting firm. i am also part of{" "}
                        <a
                          className="highlight"
                          href="https://www.instagram.com/purduetaal/"
                        >
                          purdue taal
                        </a>
                        , a south asian a cappella group!{" "}
                      </p>
                      <p className="text-lg pt-3 dark:text-white">
                        currently, i am seeking full time software engineer & forward deployed software engineer roles with a 2026 start date. i would love to connect with any company or individual interested in having me on board - i'm always on the hunt for my next big adventure!
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
