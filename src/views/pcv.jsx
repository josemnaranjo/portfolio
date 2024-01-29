import ProjectCard from "../components/ProjectCard";
import CVCard from "../components/CVCard";
import { projects } from "../assets/data/project";
import { cv } from "../assets/data/cv";
import { useNavigate } from "react-router-dom";
import { AiFillDownCircle } from "react-icons/ai";
import { AiFillUpCircle } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";

const Pcv = () => {
  const [showArrow, setShowArrow] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  const handleScroll = (event) =>
    setScrollPosition(event.currentTarget.scrollTop);
  return (
    <main
      className="lg:overflow-auto lg:h-[42rem] lg:scroll-smooth no-scrollbar mt-4 lg:mt-36 flex flex-col items-center lg:items-start"
      onScroll={handleScroll}
    >
      <article id="proyectos">
        {projects?.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          );
        })}
      </article>
      <button
        className="font-karla font-normal text-lead text-light my-6"
        onClick={() => navigate("/projects")}
      >
        {" "}
        <p
          className="flex items-center gap-1 hover:underline"
          onMouseEnter={() => setShowArrow(false)}
          onMouseLeave={() => setShowArrow(true)}
        >
          ver todos los proyectos{" "}
          <AiOutlineArrowRight hidden={showArrow} size={25} />{" "}
        </p>
      </button>
      <article id="cv">
        {cv?.map((c, index) => {
          return (
            <CVCard
              key={index}
              years={c.years}
              title={c.title}
              institution={c.institution}
              description={c.description}
              id="cv"
            />
          );
        })}
      </article>
      <div id="end"></div>
      {scrollPosition > 200 ? (
        <a href="#proyectos">
          <AiFillUpCircle
            size={40}
            color="orange"
            className="hidden lg:flex lg:fixed xl:bottom-[1.875rem] lg:bottom-[15.625rem] ml-60 animate-bounce"
          />{" "}
        </a>
      ) : (
        <a href="#end">
          <AiFillDownCircle
            size={40}
            color="orange"
            className="hidden lg:flex lg:fixed xl:bottom-[1.875rem] lg:bottom-[15.625rem] ml-60 animate-bounce"
          />
        </a>
      )}

      <footer className="lg:hidden mt-10 text-center">
        <p className="font-karla font-medium text-light text-sm">
          Diseñado en Figma. Construido en React y Tailwind. Deployado en
          Vercel.
        </p>
        <a
          href="https://www.flaticon.es/iconos-gratis/mandarina"
          title="mandarina iconos"
          className="font-karla font-medium text-light text-sm"
        >
          Mandarina iconos creados por Paul J. - Flaticon
        </a>
      </footer>
    </main>
  );
};

export default Pcv;
