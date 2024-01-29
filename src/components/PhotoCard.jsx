import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import perfil from "../assets/images/perfil.jpg";
import "./photoCard.css";

const PhotoCard = () => {
  return (
    <div className=" mt-8 w-[9.563rem] h-64 flex flex-col justify-center items-center gap-6">
      <img
        src={perfil}
        alt="profile photo"
        className="w-[8.75rem] h-[8.5rem] rounded-[6.875rem]"
      />
      <div className="w-[6.875rem] h-[2.938rem] flex justify-center items-center gap-2">
        <a href="https://github.com/josemnaranjo" target="blank">
          <AiFillGithub size={30} className="contactIcon" />
        </a>
        <a
          href="https://www.linkedin.com/in/josemaria-n-5aa73015/"
          target="blank"
        >
          <AiFillLinkedin size={30} className="contactIcon" />
        </a>
        <a
          href={"../assets/docs/CV_Josemaria_Naranjo.pdf"}
          download={"CV_Josemaria Naranjo"}
        >
          <AiOutlineFileText size={30} className="contactIcon" />
        </a>
      </div>
    </div>
  );
};

export default PhotoCard;
