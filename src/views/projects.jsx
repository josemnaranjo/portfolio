import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { projects } from "../assets/data/project";
import ProjectsTable from "../components/ProjectsTable";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-b from-green from-90% to-black h-screen lg:px-32 px-4">
      <button className="mt-8" onClick={() => navigate("/")}>
        <p className="font-karla text-organe flex items-center gap-1">
          <AiOutlineArrowLeft />
          Josemaria Naranjo
        </p>
      </button>
      <h1 className="font-lato text-light lg:text-xl text-lead mt-2 lg:mt-4 ">
        Todos los proyectos
      </h1>
      <table className="mt-12 w-full border-collapse  text-left font-lato text-white">
        <thead className="sticky top-0 z-10 px-6 border-b border-organe">
          <tr className="text-light font-semibold text-base">
            <th className="py-4 pr-8">Año</th>
            <th className="py-4 pr-8 ">Proyecto</th>
            <th className="hidden lg:table-cell py-4 pr-8">Descripción</th>
            <th className="hidden lg:table-cell py-4 pr-8">Tecnologías</th>
            <th className="py-4 pr-8">Link</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => {
            return (
              <ProjectsTable
                key={p.id}
                year={p.year}
                title={p.title}
                description={p.description}
                technologies={p.technologies}
                link={p.link}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
