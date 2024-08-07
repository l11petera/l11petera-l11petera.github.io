import React, { FunctionComponent, useEffect, useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const BlogPage: FunctionComponent = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      image: "/christopher.png",
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil.",
    },
    {
      image: "/girl.png",
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil.",
    },
    {
      image: "/coffee.png",
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil.",
    },
    {
      image: "/girl.png",
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil.",
    },
    {
      image: "/christopher.png",
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil.",
    },
  ];
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (cards.length - 2));
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + (cards.length - 2)) % (cards.length - 2)
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Défilement automatique toutes les 3 secondes
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="blog">
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
        <h1 className="text-[40px] text-center font-barlow">
          Notre <span className="text-colorPink font-barlow">Actualité</span>
        </h1>
      </div>

      <div className="principal flex flex-row items-center justify-center gap-10 py-5 px-10">
        <div className="image w-full flex items-center justify-center ">
          <img src="/vasily.jpg" className="image w-[600px]" alt="" />
        </div>
        <div className="titre w-full flex flex-col items-start font justify-center">
          <div className="flex flex-row justify-center items-center gap-2">
            {/* <div className="w-auto h-[75px] flex items-center justify-center rounded-full border-2 border-solid border-colorPink">
              <img
                src="/icons8-blog-50.png"
                className="w-14 h-14 px-2"
                alt=""
              />
            </div> */}

            <div className="">
              <h2 className="text-16xl w-full">
                <span className="font-normal">Soit toujours</span> à jour
                <span className="font-normal"> des </span>
                nouvelles posts<span className="font-normal"> et </span>
                articles <span className="font-normal"> de FMAUX.</span>
              </h2>
            </div>
          </div>
          <div className="flex">
            <p className="font-normal leading-7 font-barlow text-[18px] text-justify w-full">
              Restez constamment informé des derniers posts et articles de FMAUX
              grâce à notre engagement à vous fournir des contenus pertinents et
              informatifs. Nous mettons un point d'honneur à partager
              régulièrement des informations précieuses, des analyses
              approfondies et des insights de qualité pour vous permettre de
              rester à la pointe dans votre domaine. Avec FMAUX, soyez assuré de
              ne manquer aucune mise à jour importante et de bénéficier d'une
              source fiable de connaissances et d'inspiration.
            </p>
          </div>
          <div className="flex cur">
            <Link className="no-underline " to="/blogs">
              <button className="cursor-pointer gap-3 mt-2 flex border-2 border-solid border-colorPink text-bclack text-lg font-medium px-5 py-1.5 rounded-lg bg-transparent font-barlow ">
                Visiter et profiter
                <img src="/icons8-flèche-30.png" alt="" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="cird flex flex-row items-center justify-center gap-10">
        <div className="card0 flex flex-row items-center justify-center gap-5">
          <div className="card1 w-[370px] h-[550px] shadow-xl shadow-colorPink flex flex-col  justify-center">
            <img
              src="/Work in progress-pana.png"
              className="w-72 h-72"
              alt=""
            />
            <div className="px-6">
              <span className="font-semibold text-7xl">
                Rentrée pour Année Scolaire 2024-2025...
              </span>
            </div>
            <div className="px-6">
              <p className="text-justify">
                La rentrée pour l'année scolaire 2024-2025 est prévu le 12
                Septembre 2024 pour tous les étudiants de FMAUX de la maternelle
                jusqu'au terminale...
              </p>
            </div>
            <div className="px-6">
              <a className="no-underline " href="/blogs">
                <button className="cursor-pointer gap-3 mt-2 flex flex-row items-center justify-center border-2 border-solid border-colorPink text-bclack text-lg font-medium px-5 py-1.5 rounded-lg bg-transparent font-barlow ">
                  Visiter
                  <img src="/icons8-flèche-30.png" alt="" />
                </button>
              </a>
            </div>
          </div>
          <div className="card2 w-[370px] h-[550px] shadow-xl shadow-colorPink flex flex-col  justify-center">
            <img
              src="/JavaScript frameworks-pana.png"
              className="w-72 h-72"
              alt=""
            />
            <div className="px-6">
              <span className="font-semibold text-7xl">
                Football tournoi Sud-Ouest...
              </span>
            </div>
            <div className="px-6">
              <p className="text-justify">
                Les joueurs de FMAux ont gagné le tournoi football Sud-Ouest
                cette année 2024. un évenement qui marque la bonne volonté de
                cet établissement sur le sport...
              </p>
            </div>
            <div className="px-6">
              <a className="no-underline " href="/blogs">
                <button className="cursor-pointer gap-3 mt-2 flex flex-row items-center border-2 border-solid border-colorPink text-bclack text-lg font-medium px-5 py-1.5 rounded-lg bg-transparent font-barlow ">
                  Visiter
                  <img src="/icons8-flèche-30.png" alt="" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card3 w-[370px] h-[550px] shadow-xl shadow-colorPink flex flex-col px-1 justify-center">
            <img src="/Security-bro.png" className="w-72 h-72" alt="" />
            <div className="flex flex-col items-start justify-center">
              <div className="px-6">
                <span className="font-semibold text-7xl">
                  Ouverture du club Vintsy...
                </span>
              </div>
              <div className="px-6">
                <p className="text-justify">
                  L'ouverture du club Vintsy marquera la rentrée des étudiants
                  pour cette nouvelle année scolaire 2024-2025. Un club de plus
                  pour les activités parascolaires des étudiants.
                </p>
                <div className="px-6">
                  <a className="no-underline " href="/blogs">
                    <button className="cursor-pointer gap-3 mt-2 flex flex-row items-center border-2 border-solid border-colorPink text-bclack text-lg font-medium px-5 py-1.5 rounded-lg bg-transparent font-barlow ">
                      Visiter
                      <img src="/icons8-flèche-30.png" alt="" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="px-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
