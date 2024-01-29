import TitleCard from "../components/TitleCard";
import DescriptionCard from "../components/DescriptionCard";
import PhotoCard from "../components/PhotoCard";
import Pcv from "../views/pcv";
import { useState } from "react";
const Home = () => {
  const [decorationOne, setDecorationOne] = useState(true);
  const [decorationTwo, setDecorationTwo] = useState(false);
  return (
    <div className="bg-gradient-to-b from-green from-90% to-black min-w-fit lg:h-screen">
      <div className="lg:flex lg:justify-center lg:gap-20 px-10 ">
        <div>
          <TitleCard />
          <div className="flex flex-col items-center gap-2">
            <DescriptionCard />
            <div className="lg:flex items-center gap-36 hidden">
              <PhotoCard />
              <nav>
                <ul className="flex flex-col gap-6 ">
                  <li className="">
                    <a
                      href="#proyectos"
                      className="hover:underline hover:underline-offset-8 hover:decoration-organe hover:decoration-2"
                      onClick={() => {
                        setDecorationOne(true);
                        setDecorationTwo(false);
                      }}
                    >
                      <span
                        className={`font-karla  font-bold ${
                          decorationOne ? "text-organe" : "text-white"
                        }`}
                      >
                        proyectos
                      </span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#cv"
                      className="hover:underline hover:underline-offset-8 hover:decoration-organe hover:decoration-2"
                      onClick={() => {
                        setDecorationOne(false);
                        setDecorationTwo(true);
                      }}
                    >
                      <span
                        className={`font-karla  font-bold ${
                          decorationTwo ? "text-organe" : "text-white"
                        }`}
                      >
                        cv
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <footer className="hidden lg:flex lg:flex-col mt-4">
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
          </div>
        </div>
        <div>
          <Pcv />
        </div>
      </div>
    </div>
  );
};

export default Home;
