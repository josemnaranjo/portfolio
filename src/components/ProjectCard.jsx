import Label from "./Label";
import { AiOutlineExport } from "react-icons/ai";
import { useState } from "react";

const ProjectCard = ({ title, description, technologies, link }) => {
  const [showIcon, setShowIcon] = useState(true);

  return (
    <a
      className="w-[32.125rem] h-[13.5rem] mb-4 flex gap-3 items-center justify-center rounded-xl hover:border hover:border-light hover:shadow-projectAndCVCard"
      onMouseEnter={() => setShowIcon(false)}
      onMouseLeave={() => setShowIcon(true)}
      href={link}
      target="blank"
    >
      <img src="/src/assets/images/Captura de pantalla 2024-01-03 a la(s) 11.51 1.png" />
      <div className="h-[8.438rem] flex flex-col gap-[0.375rem]">
        <div className="w-[12.813rem] font-lato font-bold text-organe flex items-center gap-2">
          {title} <AiOutlineExport size={15} hidden={showIcon} />
        </div>
        <div className="w-[12.813rem] font-karla font-light text-sm text-light">
          {description}
        </div>
        <div className=" w-[12.813rem]">
          <Label data={technologies} />
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
