import { WiDayLightWind } from "react-icons/wi";
import { useDarkMode } from "../context/DarkModeContext";

export default function Header() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <nav className="pt-5 pb-2 mb-12 flex justify-between">
      <h1 className="text-2xl font-satoshi dark:text-white">SA</h1>
      <ul className="flex items-center space-x-5">
        <li>
          <a
            href="/"
            className="peach-und inline-block text-black dark:text-white resume-link relative bg-gradient-to-r from-peach to-peach-dark bg-clip-text text-transparent transition-all duration-300 ease-in-out"
          >
            home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="peach-und inline-block text-black dark:text-white resume-link relative bg-gradient-to-r from-peach to-peach-dark bg-clip-text text-transparent transition-all duration-300 ease-in-out"
          >
            about
          </a>
        </li>
        <li>
          <a
            href="/experience"
            className="peach-und inline-block text-black dark:text-white resume-link relative bg-gradient-to-r from-peach to-peach-dark bg-clip-text text-transparent transition-all duration-300 ease-in-out"
          >
            experience
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1o08oOaKF-4fXX64bpRwWIZMBE1knu6Y7/view?usp=sharing"
            className="peach-und inline-block text-black dark:text-white resume-link relative bg-gradient-to-r from-peach to-peach-dark bg-clip-text text-transparent transition-all duration-300 ease-in-out"
          >
            resumé
          </a>
        </li>
      </ul>
    </nav>
  );
}
