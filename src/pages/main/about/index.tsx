import React, { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
// import MyModal from "./modal";

function AboutPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="font-barlow" id="about">
      <div className="items-center relative">
        <div className="bar">
          <img
            src="/Line 1.png"
            alt=""
            className="w-28 h-1 absolute top-1 left-96"
          />
          <img
            src="/Line 1.png"
            alt=""
            className="w-44 h-1 absolute top-11 left-80"
          />
          <img
            src="/Line 1.png"
            alt=""
            className="w-28 h-1 absolute top-1 right-96"
          />
          <img
            src="/Line 1.png"
            alt=""
            className="w-44 h-1 absolute top-11 right-80"
          />
        </div>
        <h1 className="text-[40px] text-center">
          À propos <span className="text-colorPink font-barlow">de nous</span>
        </h1>
      </div>
      <div className="principal flex flex-row items-center justify-center gap-10 py-1 px-10">
        <div className="titre w-full flex flex-col items-start justify-center ">
          <div className="flex flex-row justify-center items-center gap-2 ">
            {/* <div className="w-auto h-[75px] flex items-center justify-center rounded-full border-2 border-solid border-colorPink">
              <img src="/aboutic.png" className="w-14 h-14 px-2" alt="" />
            </div> */}
            <div className="">
              <h2 className="text-16xl w-full">
                <span className="font-normal">Votre</span> partenaire de
                confiance
                <span className="font-normal"> dans le domaine des </span>
                solutions pédagogiques
                <span className="font-normal">.</span>
              </h2>
            </div>
          </div>
          <div className="flex ">
            <p className=" font-normal text-lg leading-7 text-justify w-full">
              Bienvenue à l'Ecole Sainte Marie Auxilliatrice, votre partenaire
              innovant en éducation primaire et secondare. Née de la passion
              pour le partage et l'éducation, FMAUX s'est donnée pour mission de
              concrétiser les idées éducatives en réalités tangibles à travers
              des solutions de partages sur mesure. Nous nous spécialisons dans
              l'enseignement innovant des écoliers, collégéens et des lycéens,
              pour répondre aux besoins évolutifs des parents des étudiants.
            </p>
          </div>
          <div className="flex cur">
            <Link className="no-underline" to="/abouts">
              <button className="cursor-pointer flex gap-4 border-2 border-solid border-colorPink text-lg px-5 py-1.5 rounded-lg bg-transparent font-barlow font-normal text-[#747474]">
                Découvrir <img src="/icons8-flèche-30.png" alt="" />
              </button>
            </Link>
          </div>
        </div>
        <div className="image w-full flex justify-center">
          <img src="/vadim.jpg" className="image w-[600px]" alt="" />
        </div>
      </div>
      <div>
        <div className="princi2 flex flex-row items-center justify-center gap-20">
          <div className="flex flex-row items-center justify-center">
            <div className="w-32 h-32 bg-white flex items-center justify-center">
              <div className="tooltip">
                <img
                  src="/icons8-groupe-d'utilisateurs-homme-femme-80.png"
                  className="ico w-20 h-20 "
                  alt=""
                />
                <span className="tooltiptext">Notre équipe</span>
              </div>
            </div>
            <div className="w-32 h-32 bg-white flex items-center justify-center">
              <div className="tooltip">
                <img
                  src="/icons8-philosophie-50.png"
                  className="ico w-20 h-20 "
                  alt=""
                />
                <span className="tooltiptext">Notre philosophie</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="w-32 h-32 bg-white flex items-center justify-center">
              <div className="tooltip">
                <img
                  src="/icons8-engagement-50.png"
                  className="ico w-20 h-20 "
                  alt=""
                />
                <span className="tooltiptext">Notre engagement</span>
              </div>
            </div>
            <div className="w-32 h-32 bg-white flex items-center justify-center">
              <div className="tooltip">
                <img
                  src="/icons8-rejoindre-flèche-64.png"
                  className="ico w-20 h-20 "
                  alt=""
                />
                <span className="tooltiptext">
                  Réjoignez-nous dans notre voyâge
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
