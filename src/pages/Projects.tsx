import { FaGithub } from "react-icons/fa";
import { CgArrowTopRight } from "react-icons/cg";
import ProjectsList from "../Projects";

const Projects = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <h1 className="text-2xl font-semibold mt-10 text-center ">Projects</h1>

      <div className="mt-10 grid sm:grid-cols-2 gap-3 p-2 w-full">
        {ProjectsList.map((item, index) => (
          <div
            key={index}
            className="relative transition ease-in-out duration-200 cursor-pointer p-6 border dark:border-neutral-500/50 rounded-xl dark:hover:border-dark-white-100 flex flex-col hover:border-highlight group"
          >
            <button className="absolute inset-0" onClick={()=>console.log(item)} aria-label={`View ${item.title} description`}></button>

            <div className="flex justify-center items-center py-4 w-full">
              <img
                src={item.images[0] || "/fallback.jpg"} 
                alt={item.title}
                className="max-w-full h-40 object-cover rounded-lg"
              />
            </div>

            <div className="flex justify-between items-center relative">
              <p className="font-medium text-lg">{item.title}</p>

              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg dark:hover:text-dark-white hover:text-zinc-900 dark:text-dark-white-300 z-10"
                aria-label={`View ${item.title} on GitHub`}
              >
                <FaGithub />
              </a>
            </div>

            <p className="text-zinc-500 dark:text-dark-white-300 text-pretty font-mono text-sm mt-2">
              {item.description}
            </p>

            <div className="flex items-center gap-3 mt-3 z-10">
              <a
                href={item.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 dark:text-dark-white-300 flex items-center group-hover:text-highlight gap-1"
              >
                Live Demo <CgArrowTopRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
