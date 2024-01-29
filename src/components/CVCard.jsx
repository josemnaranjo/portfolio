const CVCard = ({ years, title, institution, description }) => {
  return (
    <div className="w-[32.125rem] h-[11rem] mb-4 flex gap-4 items-center justify-center">
      <div className="h-[4rem]">
        <div className="font-lato font-medium text-special text-organe">
          {years}
        </div>
      </div>
      <div className="flex flex-col justify-between h-[4rem]">
        <div className="font-lato font-extrabold text-organe w-[17.813rem]">
          {title}
        </div>
        <div className="font-lato font-medium text-special text-light w-[17.813rem]">
          {" "}
          {institution}
        </div>
        <div className="font-karla font-extralight text-sm text-light w-[17.813rem]">
          {description}
        </div>
      </div>
    </div>
  );
};

export default CVCard;
