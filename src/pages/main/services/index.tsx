import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import Overlay from "../layout/header/navbar/Overlay";
import { toast } from "react-toastify";

function ServicesPages() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    society: "",
    fonction: "",
    besoin: "",
    budget: "",
    message: "",
    file: "",
  });

  const openNav = () => setIsNavOpen(true);
  const closeNav = () => setIsNavOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/envoyer-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("🦄 Email envoyé avec succès!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log("E-mail envoyé avec succès");
      } else {
        console.error("Erreur lors de l'envoi de l'e-mail");
      }
    } catch (error) {
      toast.error("😲 Échec de l'envoi de mail", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error("Erreur lors de la requête", error);
    }
  };

  return (
    <div className="font-barlow">
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
          Nos <span className="text-colorPink font-barlow">services</span>
        </h1>
      </div>
      <div className="principal flex flex-row items-center justify-center gap-10 px-10">
        <div className="image w-full flex justify-center">
          <img src="/version.png" className="image w-[520px]" alt="" />
        </div>
        <div className="titre w-full flex flex-col items-start justify-start">
          <div className="flex flex-row justify-center  items-center gap-2">
            <div className="w-auto h-[75px] flex items-center justify-center rounded-full border-2 border-solid border-colorPink">
              <img src="/Ser.png" className="w-14 h-14 px-2" alt="" />
            </div>
            <div className="">
              <h2 className="font-normal w-full text-16xl">
                Développement
                <span className="font-bold">de projets digitaux </span> sur
                mesure
              </h2>
            </div>
          </div>
          <div className="">
            <div className=" flex flx-row justify-start items-start">
              <div className="">
                <img
                  className="w-6 mr-2"
                  src="/icons8-case-à-cocher-vérifiée-30.png"
                  alt=""
                />
              </div>
              <div>
                <span className="font-barlow text-[18px]">
                  Développement application web et/ou mobile sur mesure
                </span>
              </div>
            </div>
            <div className=" flex flx-row justify-start items-start">
              <div className="">
                <img
                  className="w-6 mr-2"
                  src="/icons8-case-à-cocher-vérifiée-30.png"
                  alt=""
                />
              </div>
              <div>
                <span className="font-barlow text-[18px]">
                  Refonte site Internet
                </span>
              </div>
            </div>
            <div className=" flex flx-row justify-start items-start">
              <div className="">
                <img
                  className="w-6 mr-2"
                  src="/icons8-case-à-cocher-vérifiée-30.png"
                  alt=""
                />
              </div>
              <div>
                <span className="font-barlow text-[18px]">
                  Développement back-end et API
                </span>
              </div>
            </div>
            <div className="flex flx-row justify-start items-start mt-4">
              <Link className="no-underline" to="/services">
                <button className="cursor-pointer gap-3 flex border-2 border-solid border-lawngreen text-lg px-5 py-1.5 rounded-lg bg-transparent font-barlow font-normal text-[#747474]">
                  Découvrir
                  <img src="/icons8-flèche-30.png" alt="" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="serPrinc flex flex-row items-center justify-center gap-0 mt-4">
        <div className="serPrinc1 flex flex-row w-full items-center justify-center">
          <div className="first h-[600px] w-1/2 bg-colorPink flex flex-col items-center justify-center gap-10 px-5">
            <span className="text-21xl items-center justify-center w-40 text-white font-semibold">
              Autres domaines d’expertise
            </span>
            <div className="">
              <span className="text-white">Prêt à démarrer votre projet ?</span>
            </div>
            <div>
              <button
                onClick={openNav}
                className="cursor-pointer flex gap-3 font-barlow font-medium text-xl text-white py-2 px-6 w-66 bg-transparent border-2 border-solid border-white rounded-lg hover:bg-limegreen-300"
              >
                Obtenir un devis <img src="/icons8-flèche-24.png" alt="" />
              </button>
            </div>
          </div>
          <div className="second h-[600px] w-1/2 bg-[#96b74a] flex flex-col items-start justify-start px-5">
            <div className="flex flex-row mt-5 justify-center text-white gap-10">
              <div className="w-64">
                <span className="text-21xl   text-white font-semibold">
                  Infogérence
                </span>
                <div className=" flex flx-row justify-start items-start mt-8">
                  <div className="">
                    <img
                      className="w-6 mr-2"
                      src="/icons8-case-à-cocher-vérifiée-30.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <span className="font-barlow text-[18px]">
                      Supervision des infrastructures serveur, stockage et
                      réseau hébergé.
                    </span>
                  </div>
                </div>
                <div className=" flex flx-row justify-start items-start mt-4">
                  <div className="">
                    <img
                      className="w-6 mr-2"
                      src="/icons8-case-à-cocher-vérifiée-30.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <span className="font-barlow text-[18px]">
                      Administration et maintenance préventive
                    </span>
                  </div>
                </div>
                <div className=" flex flx-row justify-start items-start mt-4">
                  <div className="">
                    <img
                      className="w-6 mr-2"
                      src="/icons8-case-à-cocher-vérifiée-30.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <span className="font-barlow text-[18px]">
                      Sécurisation réseau et systèmes
                    </span>
                  </div>
                </div>
                <Link className="no-underline " to="/info-dev">
                  <button className="cursor-pointer gap-3 mt-10 flex border-2 border-solid border-white text-white text-lg font-medium px-5 py-1.5 rounded-lg bg-transparent font-barlow ">
                    Découvrir
                    <img src="/icons8-flèche-24.png" alt="" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="serPrinc1 flex flex-row w-full items-center justify-center">
          <div className="first h-[600px] w-1/2 bg-[#96b74a] flex flex-col items-start justify-start px-5">
            <div className="flex flex-row mt-5 justify-center text-white gap-10">
              <div className="w-64">
                <span className="text-21xl  text-white font-semibold">
                  DevOps
                </span>
                <div className=" flex flx-row justify-start items-start mt-8">
                  <div className="">
                    <img
                      className="w-6 mr-2"
                      src="/icons8-case-à-cocher-vérifiée-30.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <span className="font-barlow text-[18px]">
                      Système d'intégration continue et de déploiement continu
                    </span>
                  </div>
                </div>
                <div className=" flex flx-row justify-start items-start mt-4">
                  <div className="">
                    <img
                      className="w-6 mr-2"
                      src="/icons8-case-à-cocher-vérifiée-30.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <span className="font-barlow text-[18px]">
                      Architecture microservice
                    </span>
                  </div>
                </div>
                <div className=" flex flx-row justify-start items-start mt-4">
                  <div className="">
                    <img
                      className="w-6 mr-2"
                      src="/icons8-case-à-cocher-vérifiée-30.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <span className="font-barlow text-[18px]">
                      Orchestration et mise à l'échelle des services applicatifs
                    </span>
                  </div>
                </div>
                <div className=" flex flx-row justify-start items-start mt-4">
                  <div className="">
                    <img
                      className="w-6 mr-2"
                      src="/icons8-case-à-cocher-vérifiée-30.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <span className="font-barlow text-[18px]">
                      Solution Serverless
                    </span>
                  </div>
                </div>
                <div className=" flex flx-row justify-start items-start mt-4">
                  <div className="">
                    <img
                      className="w-6 mr-2"
                      src="/icons8-case-à-cocher-vérifiée-30.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <span className="font-barlow text-[18px]">
                      infrastructure as code
                    </span>
                  </div>
                </div>
                <div className=" flex flx-row justify-start items-start mt-4">
                  <div className="">
                    <img
                      className="w-6 mr-2"
                      src="/icons8-case-à-cocher-vérifiée-30.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <span className="font-barlow text-[18px]">
                      Sécurisation des services
                    </span>
                  </div>
                </div>
                <Link className="no-underline " to="/info-dev">
                  <button className="cursor-pointer gap-3 mt-10 flex border-2 border-solid border-white text-white text-lg font-medium px-5 py-1.5 rounded-lg bg-transparent font-barlow ">
                    Découvrir
                    <img src="/icons8-flèche-24.png" alt="" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="second h-[600px] w-1/2 px-5">
            <div className="w-full ">
              <span className="text-21xl  text-black font-semibold">
                Data science
              </span>
              <div className=" flex flx-row justify-start items-start mt-8">
                <div className="">
                  <img
                    className="w-6 mr-2"
                    src="/icons8-case-à-cocher-vérifiée-30.png"
                    alt=""
                  />
                </div>
                <div>
                  <span className="font-barlow text-[18px]">
                    Recueil et analyse des données
                  </span>
                </div>
              </div>
              <div className=" flex flx-row justify-start items-start mt-4">
                <div className="">
                  <img
                    className="w-6 mr-2"
                    src="/icons8-case-à-cocher-vérifiée-30.png"
                    alt=""
                  />
                </div>
                <div>
                  <span className="font-barlow text-[18px]">
                    Création des modèles de machine learning
                  </span>
                </div>
              </div>
              <div className=" flex flx-row justify-start items-start mt-4">
                <div className="">
                  <img
                    className="w-6 mr-2"
                    src="/icons8-case-à-cocher-vérifiée-30.png"
                    alt=""
                  />
                </div>
                <div>
                  <span className="font-barlow text-[18px]">
                    Mise en place de pipeline de données
                  </span>
                </div>
              </div>
              <div className=" flex flx-row justify-start items-start mt-4">
                <div className="">
                  <img
                    className="w-6 mr-2"
                    src="/icons8-case-à-cocher-vérifiée-30.png"
                    alt=""
                  />
                </div>
                <div>
                  <span className="font-barlow text-[18px]">
                    Analyse prédictive, système de recommandation, computer
                    vision, IoT ...
                  </span>
                </div>
              </div>
              <div className=" flex flx-row justify-start items-start mt-4">
                <div className="">
                  <img
                    className="w-6 mr-2"
                    src="/icons8-case-à-cocher-vérifiée-30.png"
                    alt=""
                  />
                </div>
                <div>
                  <span className="font-barlow text-[18px]">
                    Visualisation de données afin de simplifier la compréhension
                    des informations
                  </span>
                </div>
              </div>
              <div className=" flex flx-row justify-start items-start mt-4">
                <div className="">
                  <img
                    className="w-6 mr-2"
                    src="/icons8-case-à-cocher-vérifiée-30.png"
                    alt=""
                  />
                </div>
                <div>
                  <span className="font-barlow text-[18px]">
                    Création de tableaux de bord: Business Intelligence (BI)
                  </span>
                </div>
              </div>
              <Link className="no-underline " to="/data-science">
                <button className="cursor-pointer gap-3 mt-10 flex border-2 border-solid border-colorPink text-bclack text-lg font-medium px-5 py-1.5 rounded-lg bg-transparent font-barlow ">
                  Découvrir
                  <img src="/icons8-flèche-30.png" alt="" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Overlay
        isOpen={isNavOpen}
        closeNav={closeNav}
        handleSubmit={handleSubmit}
        formData={formData}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default ServicesPages;
