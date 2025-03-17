import React from "react";

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-neutral-300 dark:bg-neutral-950 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
        About Me
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-serif tracking-wide">
        I'm <span className="font-semibold">Nikhilesh Joshi</span>, a 4th-year CS major at 
        <span className="font-semibold"> Government Engineering College Bikaner</span>. I work across both front-end and back-end 
        technologies and am currently exploring <span className="font-semibold">3D web development with Three.js</span>, 
        alongside the <span className="font-semibold">MERN stack and Next.js</span>.
      </p>

      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        I enjoy solving problems, building efficient applications, and continuously learning new technologies. Currently, 
        I’m exploring career opportunities and open to roles where I can apply my skills and grow as a developer.
      </p>

      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        I’m always eager to collaborate on interesting projects, so feel free to reach out if you'd like to connect or work together!
      </p>

      <div className="mt-6 text-center">
        <a
          href="mailto:joshinikhilesh46@gmail.com"
          className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg transition"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default About;
