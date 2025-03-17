import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

interface EducationItem {
  year: string;
  degree: string;
  uni: string;
}

const experiences: EducationItem[] = [
  {
    year: "August 2021 - June 2025 (Expected)",
    degree: "B.Tech",
    uni: "Government Engineering College Bikaner",
  },
  {
    year: "June 2024 (Expected)",
    degree: "MERN Stack Cohort",
    uni: "100xDevs",
  },
  {
    year: "April 2023 ",
    degree: "Responsive Web Design Certification",
    uni: "freeCodeCamp",
  },
];

const EducationSection: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto ">
      <h2 className="text-2xl sm:text-3xl font-bold mb-16 text-center">Education & Courses</h2>

      <div className="relative -top-10 border-gray-300 dark:border-gray-700 ">
        {experiences.map((exp, index) => (
          <motion.div
                      key={index}
                      className="mb-8 ml-6 sm:ml-10 relative"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute -left-7 top-13 sm:-left-10 w-4 h-4 sm:w-5 sm:h-5 dark:text-gray-600 text-gray-400 rounded-full"><FaArrowRight/></div>
          
                      <div className=" p-4 sm:p-6 rounded-lg shadow-lg max-w-md sm:max-w-lg border-gray-600/30 dark:border-gray-600/40 border-2">
                        <span className="text-sm text-gray-400">{exp.year}</span>
                        <h3 className="text-lg font-semibold">{exp.degree}</h3>
                        <p className="text-sm text-gray-500">{exp.uni}</p>
                      </div>
                    </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
