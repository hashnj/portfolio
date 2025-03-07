/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Navbar: React.FC = () => {
  const nav = useNavigate();
  const location = useLocation();

  const menuItems = ["Showcase", "Projects", "Work", "About"];

  const getActiveIndex = () => {
    if (location.pathname === "/") return 0;
    const currentIndex = menuItems.findIndex((item) =>
      location.pathname.includes(item.toLowerCase())
    );
    return currentIndex !== -1 ? currentIndex : 0;
  };

  const [activeIndex, setActiveIndex] = useState(getActiveIndex());

  useEffect(() => {
    setActiveIndex(getActiveIndex());
  }, [location.pathname]);

  return (
    <nav className="max-w-2xl w-full  z-10 backdrop-blur-xs flex justify-between items-center py-3 text-xl font-semibold  border-black/10 dark:border-zinc-100/20 mx-auto sticky top-0 ">
      <div>
        <button onClick={() => nav("/")} className="cursor-pointer text-2xl">
          Hash-nj
        </button>
      </div>

      <div className="relative flex gap-3 border border-zinc-200/30 rounded-full px-4 justify-center items-center">
        <motion.div
          className={`absolute ml-2 bottom-0 overflow-hidden h-px bg-gradient-to-r from-blue-500/10 via-red-500/70 to-blue-500/10 ${
            activeIndex === 2 ? "px-1 ml-6" : ""
          } ${activeIndex === 1 ? "ml-6" : ""} ${
            activeIndex === 3 ? "ml-3" : ""
          }`}
          initial={false}
          animate={{
            left: `${activeIndex * 24}%`,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {menuItems[activeIndex]}
        </motion.div>
        {menuItems.map((item, index) => {
          const path = index === 0 ? "/" : `/${item.toLowerCase()}`;
          const isActive = location.pathname === path;

          return (
            <div
              key={index}
              className="relative group p-1 flex justify-center items-between"
            >
              <button
                className={`cursor-pointer text-base font-thin transition-colors duration-200 ${
                  isActive
                    ? "text-red-500 font-semibold"
                    : "group-hover:text-red-500"
                } `}
                onClick={() => {
                  nav(path);
                  setActiveIndex(index);
                }}
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>

      <div>
        <a
          href="https://github.com/hashnj"
          target="_blank"
          className="text-2xl cursor-pointer"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
