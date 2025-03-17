import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    year: "December 2024 - January 2025",
    title: "Full-Stack Developer",
    company: "Freelance(Self-Employed)",
    description: "Developed a website using MERN stack for a known client.",
  },
  {
    year: "July 2024 - October 2024",
    title: "Mern Stack Intern",
    company: "Core Techies Pvt. Ltd.",
    description: "Worked on developing a feature rich E-commerce Platform.",
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto ">
      <h2 className="text-2xl sm:text-3xl font-bold  mb-8 text-center">Experience</h2>

      <div className="relative border-gray-300 dark:border-gray-700 ">
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

            <div className=" p-4 sm:p-6 rounded-lg shadow-lg max-w-xl w-full border-gray-600/30 dark:border-gray-600/40 border-2">
              <span className="text-sm text-gray-400">{exp.year}</span>
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-500">{exp.company}</p>
              <p className="mt-2 text-gray-600">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
