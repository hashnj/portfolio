import React from "react";
import { 
  FaArrowRight,
  // FaGithub
 } from "react-icons/fa";
import ProjectsList from "../Projects";
import ProjectComponent from "../Components/ProjectComponent";
import ExperienceSection from "../Components/ExperienceSection";
import EducationSection from "../Components/Education";
import { useNavigate } from "react-router-dom";
import Skills from "../Components/Skills";

const Home: React.FC = () => {
  const nav = useNavigate();
  return (
    <div className="flex flex-col w-full ">
      <div className="pt-8 sm:py-6">
        <h1 className="text-xl sm:text-3xl font-bold text-red-700 ">
          Hey, I am Nikhilesh Joshi !
        </h1>
        <p className="text-base pt-2 sm:text-lg sm:pt-6">
          A full-stack developer specializing in the MERN stack. Focused on
          building intuitive and high-performance web applications with touch of
          modern design.
        </p>
        <span className="sm:text-xl font-thin">
          Let’s build something awesome!
        </span>
        <div className="flex gap-2 mt-4 sm:text-xl">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=joshinikhilesh46@gmail.com&su=Let's%20Work%20Together&"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-500/60 text-red-950  px-2 py-1 rounded-lg"
          >
            Open For Work <FaArrowRight />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhilesh-joshi-hashnj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-zinc-300/60 text-zinc-950 px-2 py-1 rounded-lg"
          >
            @hashnj
          </a>
        </div>
      </div>
      {/* projects */}
      <div className="py-6 px-2 cursor-default w-full ">
      <h2 className="text-2xl sm:text-3xl font-bold  mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {ProjectsList.map(
            (item, index) =>
              index < 2 && (
                <ProjectComponent item={item} index={index}/>
              )
          )}
        </div>
        <div className="w-full p-2 flex justify-center items-center">
          <button 
            className="flex justify-center items-center gap-1 font-mono text-zinc-600 cursor-pointer hover:text-zinc-400 p-2"
            onClick={()=>nav('/projects')}  
          >
            View more <FaArrowRight />
          </button>
        </div>
      </div>
      {/** end projects */}

      <div className="border-l-1 border-gray-400 dark:border-gray-300/30 px-2 mx-auto">
        
      {/* Experience */}
      <div className="">
        <ExperienceSection/>
      </div>
      {/* Education */}
      <div className="">
        <EducationSection/>  
      </div>
      </div>
      <div className="flex flex-col">
      <Skills/>
      </div>
    </div>
  );
};

export default Home;

{
  /*      
      <svg xmlns="http://www.w3.org/2000/svg" width='105' height='105' className="rounded-xl " viewBox="0 0 155 65">
          <text y="50" font-family='"Brush Script MT", cursive' font-size="68" fill="black" stroke="white" stroke-width="1">#NJ</text>
      </svg> */
}
