const TitleCard = () => {
  return (
    <div>
      <div className="lg:mt-20 lg:w-[39.5rem] lg:h-[14.5rem] flex flex-col gap-4">
        <div className=" font-lato text-xl font-black text-organe lg:h-[3.25rem]">
          Josemaria Naranjo
        </div>

        <div className="font-lato text-lead font-base text-organe italic lg:w-[17.75rem] lg:h-8 ">
          Desarrollador fullstack
        </div>

        <div className="lg:w-[39.5rem] pr-6">
          <p className="font-karla text-base leading-6 font-base text-light lg:leading-7 ">
            Cuento con{" "}
            <span className="font-black underline underline-offset-2">
              {" "}
              2 años de experiencia
            </span>{" "}
            en el desarrollo de aplicaciones web utilizando el stack{" "}
            <span className="font-black italic">MERN</span> (Mongo, Express,
            React y Node) para proyectos personales, y estoy siempre en la
            búsqueda de oportunidades para perfeccionar mis habilidades y
            mantenerme al tanto de las últimas tecnologías.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
