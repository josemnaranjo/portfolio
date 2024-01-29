const DescriptionCard = () => {
  return (
    <div className="mt-6 lg:w-[39.5rem] flex flex-col gap-2 font-karla font-light text-base text-light leading-6">
      <div className="pr-7">
        <p>
          Tengo{" "}
          <span className="font-black underline underline-offset-2">
            seis años de experiencia en gestión de proyectos{" "}
          </span>{" "}
          y sé trabajar en equipo, gracias al tiempo en el que me desempeñé como
          productor ejecutivo en Cinestación.
        </p>
      </div>
      <div className="pr-7">
        <p>
          Mi pasión es enfrentar desafíos que requieran combinar{" "}
          <span className="italic">lógica</span> con {""}
          <span className="italic">creatividad</span>. Me motiva abordar
          problemas complejos y encontrar soluciones innovadoras y efectivas.
        </p>
      </div>
    </div>
  );
};

export default DescriptionCard;
