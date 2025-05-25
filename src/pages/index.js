import Head from "next/head";
import { WiDayLightWind } from "react-icons/wi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import anisanju from "public/anisanju.png";
import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import Header from "@/components/Header";


export default function Home() {
  const cursorRef = useRef(null);
  useEffect(() => {
    if (cursorRef.current) {
      const typed = new Typed(cursorRef.current, {
        strings: ["sanjana anand"],
        typeSpeed: 60,
      });
      return () => {
        typed.destroy();
      };
    }
  }, []);

  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div>
      <Head>
        <title>sanjana anand</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="min-h-screen">
        <Header/>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl pt-20 dark:text-white text-align: right">
                hi, i'm
              </h1>
              <div className="relative">
                <span
                  ref={cursorRef}
                  className="text-6xl pb-2 text-lilac-dark font-medium cursor"
                ></span>
                <div className="absolute inset-0">
                  {/* Content goes here */}
                </div>
              </div>
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
              <div className={`fadeIn ${imageLoaded ? "loaded" : ""}`}>
                <Image
                  src={anisanju}
                  alt="anisanju"
                  layout="fixed"
                  onLoadingComplete={() => setImageLoaded(true)}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
