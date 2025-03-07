/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import useTheme from "../hooks/useTheme";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiDesktop, CiLight } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const themeOrder = ["light", "dark", "system"];

  useEffect(() => {
    setActiveIndex(themeOrder.indexOf(theme));
  }, [theme]);

  return (
    <footer className="w-full h-14 flex items-center justify-between px-10 border-t border-zinc-100/30">
      <div className="text-lg font-semibold cursor-default">
        <span
          onClick={() => window.open("https://github.com/hashnj", "_blank")}
          className="cursor-pointer text-xl font-bold"
        >
          hashnj
        </span>
        <span className="text-zinc-500 text-sm px-1">-</span>
        <span className="text-black/40 dark:text-zinc-400 text-base">
          Nikhilesh Joshi
        </span>
      </div>

      <div className="flex gap-2.5 text-xl">
        <a
          href="https://github.com/hashnj"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer hover:text-blue-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/NikhileshJosh17"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer hover:text-blue-500"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/nikhilesh-joshi-hashnj"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className="relative border border-zinc-300/50 rounded-full py-1 px-2 flex items-center">
        <motion.div
          className="absolute  gap-1 bg-zinc-500/50 rounded-full p-3"
          initial={false}
          animate={{ x: activeIndex * 24 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />
        {themeOrder.map((mode, index) => (
          <button
            key={mode}
            className={`relative cursor-pointer hover:bg-zinc-400/30 rounded-full p-1 z-10`}
            onClick={() => {
              setTheme(mode as "light" | "dark" | "system");
              setActiveIndex(index);
            }}
            aria-label={`${mode} Mode`}
          >
            {mode === "light" ? (
              <CiLight />
            ) : mode === "dark" ? (
              <MdOutlineDarkMode />
            ) : (
              <CiDesktop />
            )}
          </button>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
