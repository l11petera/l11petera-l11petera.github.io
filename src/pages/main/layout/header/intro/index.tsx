import { FunctionComponent } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { url } from "inspector";

const IntroPage: FunctionComponent = () => {
  return (
    <section id="" className="font-barlow">
      {/* <div className="vide h-24 w-full"></div> */}
      {/* <div className="flex w-full h-full">
        <img className="w-full h-[650px]" src="/vadim.jpg" alt="" />
      </div> */}
      <div className="principal princip flex flex-row items-center justify-center gap-10 px-10">
        <div className="titre titre1 w-full flex flex-col items-center justify-center">
          <div className="soustitre text-center items-center justify-center">
            {" "}
            <h1 className="text-29xl text-white font-bold w-full">
              <span className="font-barlow">Bienvenue chez FM</span>
              <span className="text-colorPink font-barlow">Aux</span>
            </h1>
            <h2 className="font-barlow text-11xl text-white">
              <span>“Education pour </span>
              <span className="text-colorPink">tout</span>
              <span> le monde”</span>
            </h2>
            <div className="flex flex-col items-center justify-center gap-7">
              <span className="pt font-barlow text-[18px] text-white w-96">
                Votre partenaire de confiance dans le monde de l'éducation en
                constante évolution.
              </span>
              <div className="flex-1 flex flex-row items-center justify-center gap-10">
                <a href="gmail.com" className="text-center">
                  <img
                    className="w-[24.5px] h-[25px] grayscale"
                    alt=""
                    src="/gmail-1@2x.png"
                  />
                </a>
                <a href="">
                  <img
                    className="w-[24.5px] h-[25px] grayscale"
                    alt=""
                    src="/whatsapp1-1@2x.png"
                  />
                </a>
                <a href="https://www.linkedin.com/company/vividmind-mg/">
                  <img
                    className="w-[24.5px] h-[25px] grayscale"
                    alt=""
                    src="/pngegg4@2x.png"
                  />
                </a>
              </div>
              <a href="#about" className="no-underline">
                <button className="cursor-pointer flex gap-3 rounded-lg  px-10 py-2.5 font-barlow font-medium text-xl text-white bg-colorPink  hover:bg-limegreen-300">
                  Commencer <img src="/icons8-flèche-24.png" alt="" />
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="image image1 w-full flex justify-center ">
          <img
            className="image w-[520px]"
            loading="lazy"
            alt=""
            src="vadim.jpg"
          />
        </div> */}
      </div>
    </section>
  );
};

export default IntroPage;
