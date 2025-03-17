import React, { useState } from "react";
import SkillList from "../Skills";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const emptyList = new Array(8).fill(null);

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl  font-bold text-center  py-2 w-full md:text-3xl">
        Skills & Technologies
      </h2>
      <div className="overflow-hidden rounded-xl ">
      <div className="relative flex flex-col items-center h-full  p-4  scale-110 ">
        <div className="flex h-21 overflow-hidden flex-wrap justify-center gap-4">
          {emptyList.map((_, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              viewport={{ once: true }}
              key={`top-${index}`}
              className="rounded-xl w-[84px] hover:scale-95 duration-300 h-[84px] border border-gray-700/30 dark:border-gray-200/15"
            ></motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 my-4">
          {SkillList.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              viewport={{ once: true }}
              key={index}
              className="rounded-xl flex justify-center items-center border border-gray-700/40 dark:border-neutral-100/30 dark:bg-gray-950 p-4 transition-all duration-300 hover:scale-110"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                boxShadow:
                  hoveredIndex === index ? `0 0 15px ${item.color}` : "none",
              }}
            >
              <a
                className="inset-0 flex items-center"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.logo}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap h-21 overflow-hidden justify-center gap-4">
          {emptyList.map((_, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              viewport={{ once: true }}
              key={`bottom-${index}`}
              className="rounded-xl w-[84px] h-[84px] hover:scale-95 duration-300 border border-gray-700/30 dark:border-gray-200/15"
            ></motion.div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Skills;
