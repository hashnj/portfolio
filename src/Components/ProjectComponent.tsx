import { useState, useEffect, useRef } from "react";
import { CgArrowTopRight } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

interface Item {
  images: string[];
  title: string;
  github: string;
  description: string;
  demo: string;
}

interface ProjectComponentProps {
  item: Item;
  index: number;
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({ item }) => {
  const [info, setInfo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <div
      className="relative transition ease-in-out duration-200 cursor-pointer p-6 border border-neutral-800/30 dark:border-neutral-500/50 rounded-xl dark:hover:border-dark-white-100 flex flex-col hover:border-highlight group"
    >
      <button
        className="absolute inset-0 cursor-pointer"
        onClick={() => setInfo(true)}
        aria-label={`View ${item.title} description`}
      ></button>

      <div
        className="relative group flex justify-center items-center h-36 my-2 mb-4 w-full"
        onMouseEnter={() => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
          }
        }}
      >
        {item.images[1] ? (
          <video
            ref={videoRef}
            src={item.images[1]}
            loop
            muted
            className="hidden object-cover rounded-lg group-hover:block"
          />
        ) : null}

        <img
          src={item.images[0] || "/fallback.jpg"}
          alt={item.title}
          className={`max-w-full  object-cover rounded-lg ${
            item.images[1] ? "group-hover:hidden" : ""
          }`}
        />
      </div>

      <div className="flex justify-between items-center relative">
        <p className="font-medium text-lg">{item.title}</p>
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg dark:hover:text-dark-white hover:text-zinc-400 dark:text-dark-white-300 z-10"
          aria-label={`View ${item.title} on GitHub`}
        >
          <FaGithub />
        </a>
      </div>

      <p className="text-zinc-500 dark:text-dark-white-300 h-10 sm:h-full overflow-hidden text-pretty font-mono text-sm mt-2">
        {item.description}
      </p>
      <span className="absolute bottom-14 sm:hidden right-8 text-zinc-500">...</span>

      <div className="flex items-center gap-3 mt-3 z-10">
        <a
          href={item.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-600 hover:text-zinc-400 dark:text-dark-white-300 flex items-center group-hover:text-highlight gap-1"
        >
          Live Demo <CgArrowTopRight />
        </a>
      </div>
    </div>
  );
};

export default ProjectComponent;
