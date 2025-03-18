import { X } from "lucide-react";
import { useState, useRef } from "react";
import { CgArrowTopRight } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

interface Item {
  images: string[];
  title: string;
  github: string;
  tags:string[];
  description: string;
  demo: string;
}

interface ProjectComponentProps {
  item: Item;
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({ item }) => {
  const [info, setInfo] = useState(false);
  const cardVideoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const handleCloseModal = () => {
    setInfo(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
  };

  return (
    <>
      {info && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-neutral-950/40 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div
            className="w-[90%] md:w-3/5 lg:w-2/5 bg-neutral-900 rounded-2xl border border-neutral-200/30 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-neutral-200/20">
              <h1 className="text-xl md:text-2xl font-semibold">{item.title}</h1>
              <button onClick={handleCloseModal} className="rounded p-1 hover:bg-neutral-800">
                <X className="md:size-6" />
              </button>
            </div>

            <div className="relative w-full h-56 md:h-72 flex justify-center items-center  rounded-t-lg overflow-hidden">
              {item.images[1] ? (
                <video
                  ref={modalVideoRef}
                  src={item.images[1]}
                  loop
                  muted
                  autoPlay
                  playsInline
                  className="absolute w-full p-4  object-cover"
                />
              ) : (
                <img
                  src={item.images[0] || "/fallback.jpg"}
                  alt={item.title}
                  className="absolute w-4/5 h-full object-cover"
                />
              )}
            </div>

            <div className="p-6 space-y-4">

              <div className="flex flex-wrap gap-2  ">
                {item.tags.map(t=><div className="border border-neutral-400/30 px-2 py-1 rounded-lg">{t}</div> )}
              </div>
              
              <p className="text-neutral-300 text-sm leading-relaxed">{item.description}</p>

              <div className="flex items-center gap-4">
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 text-neutral-400 hover:text-white"
                >
                  <FaGithub className="size-5" /> GitHub
                </a>
                {item.demo && (
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-1 text-neutral-400 hover:text-white"
                  >
                    Live Demo <CgArrowTopRight />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="relative p-6 border border-neutral-800/30 dark:border-neutral-500/50 rounded-xl transition hover:border-highlight cursor-pointer group"
        onClick={() => setInfo(true)}
      >
        <div
          className="relative w-full h-40 md:h-44 flex justify-center items-center bg-black rounded-lg overflow-hidden"
          onMouseEnter={() => {
            if (cardVideoRef.current) {
              cardVideoRef.current.currentTime = 0;
              cardVideoRef.current.play();
            }
          }}
        >
          {item.images[1] ? (
            <video
              ref={cardVideoRef}
              src={item.images[1]}
              loop
              muted
              playsInline
              className="absolute w-full  object-cover hidden group-hover:block"
            />
          ) : null}

          <img
            src={item.images[0] || "/fallback.jpg"}
            alt={item.title}
            className={`absolute w-full  object-cover ${
              item.images[1] ? "group-hover:hidden" : ""
            }`}
          />
        </div>

        <div className="flex justify-between items-center mt-4">
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white"
          >
            <FaGithub className="size-5" />
          </a>
        </div>

        <p className="text-neutral-500 text-sm mt-2 line-clamp-3">{item.description}</p>

        {item.demo && (
          <div className="mt-3">
            <a
              href={item.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm flex items-center gap-1 text-neutral-400 hover:text-white"
            >
              Live Demo <CgArrowTopRight />
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectComponent;
