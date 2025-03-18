import ProjectsList from "../Projects";
import ProjectComponent from "../Components/ProjectComponent";

const Projects = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <h1 className="text-3xl font-bold mt-4 text-center ">Projects</h1>

      <div className="mt-10 grid sm:grid-cols-2 gap-3 p-2 w-full">
        {ProjectsList.map((item) => (
          <ProjectComponent item={item}  />
        ))}
      </div>
    </div>
  );
};

export default Projects;
