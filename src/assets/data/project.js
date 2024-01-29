import {v4 as uuid} from "uuid";

export const projects = [
  {
    id:uuid(),
    year: "2023",
    title: "Dashboard Naranjo",
    description:
      "Aplicación para registrar el ingreso y salida de trabajadores, calcular sus horas extra y ausencias. Se puede descargar esta información como archivo excel.",
    technologies: [
      "React",
      "Node",
      "Express",
      "Tailwind",
      "Zustand",
      "MySql",
      "Axios",
    ],
    link: "https://github.com/josemnaranjo/libro-asistencia"
  },
  {
    id:uuid(),
    year: "2023",
    title: "Q-Vemos",
    description:
      "Aplicación web que combina el azar con la votación directa de un grupo de usuario para decidir cuál película verán en la velada",
    technologies: [
      "React",
      "Node",
      "Express",
      "Tailwind",
      "MySql",
      "Zustand",
      "Axios",
    ],
    link: "https://github.com/josemnaranjo/libro-asistencia"
  },
  {
    id:uuid(),
    year: "2023",
    title: "Interbook",
    description: "Aplicación web para intercambiar libros",
    technologies: ["React", "Node", "Express", "Mongo"],
    link: "https://github.com/josemnaranjo/libro-asistencia"
  },
  {
    id:uuid(),
    year: "2023",
    title: "Libro de asistencias",
    description:
      "Aplicación para registrar el ingreso y salida de trabajadores, calcular sus horas extra y ausencias. Se puede descargar esta información como archivo excel.",
    technologies: [
      "React",
      "Node",
      "Express",
      "Tailwind",
      "Zustand",
      "MySql",
      "Axios",
    ],
    link: "https://github.com/josemnaranjo/libro-asistencia"
  },
];
