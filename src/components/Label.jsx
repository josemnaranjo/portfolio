const Label = ({ data, isTable }) => {
  return (
    <div className="flex flex-wrap gap-2 ">
      {data.map((tech, index) => {
        return (
          <div
            key={index}
            className={`font-karla  text-white text-center rounded-[20px] ${isTable ? "w-[80px] h-[25px] font-light text-base":"w-[45px] h-[15px] font-medium text-xs"}  bg-organe`}
          >
            {tech}
          </div>
        );
      })}
    </div>
  );
};

export default Label;
