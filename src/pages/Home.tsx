import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="py-6">
        <h1 className="text-3xl font-bold text-red-700 ">
          Hey, I am Nikhilesh Joshi !
        </h1>
        <p className="text-lg pt-6">
          A full-stack developer specializing in the MERN stack. Focused on
          building intuitive and high-performance web applications with touch of
          modern design.
        </p>
        <span className="text-xl font-thin">
          Let’s build something awesome!
        </span>
        <div className="flex gap-2 mt-4 text-xl">
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
      <div className="py-6" >
        <h2 className="text-xl font-bold">Projects</h2>
        <div></div>
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
