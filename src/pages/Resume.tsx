import React from "react";

const workExperience = [
  {
    date: "December 2024 - January 2025",
    role: "Full-Stack Developer",
    company: "Freelance(Self-Employed)",
    description: "Developed a website using MERN stack for a known client.",
  },
  {
    date: "July 2024 - October 2024",
    role: "Mern Stack Intern",
    company: "Core Techies Pvt. Ltd.",
    description: "Worked on developing a feature rich E-commerce Platform.",
  },
];

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Government Engineering College Bikaner",
    date: "Ongoing",
  },
];

const courses = [
  "Full-Stack Development",
  "Responsive web-design"
  // "Data Structures & Algorithms",
];

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Docker",
  "Framer Motion",
];

const Resume: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* About Section */}
      <section className="mb-8">
        <p className="text-gray-700 dark:text-gray-300">
          I am a 4th-year CS student passionate about full-stack development and
          mentoring others in coding. I specialize in the MERN stack, Next.js,
          and exploring 2D animations and 3D web technologies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        {workExperience.map((job, index) => (
          <div key={index} className="mb-4 p-4 border-l-4 border-blue-500 bg-gray-100 dark:bg-gray-900 rounded-lg">
            <h3 className="text-lg font-semibold">{job.role}</h3>
            <p className="text-gray-600 dark:text-gray-400">{job.company} • {job.date}</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{job.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Education & Courses</h2>

        {/* Education */}
        {education.map((edu, index) => (
          <div key={index} className="mb-4 p-4 border-l-4 border-green-500 bg-gray-100 dark:bg-gray-900 rounded-lg">
            <h3 className="text-lg font-semibold">{edu.degree}</h3>
            <p className="text-gray-600 dark:text-gray-400">{edu.institution} • {edu.date}</p>
          </div>
        ))}

        {/* Courses */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Courses</h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            {courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-500 text-white px-3 py-1 text-sm rounded-lg dark:bg-gray-800 dark:text-gray-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;
