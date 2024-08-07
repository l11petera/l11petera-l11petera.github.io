import React from "react";
import "./styles.scss";
import Navbar from "../layout/header/navbar";
import { Link } from "react-router-dom";
import FooterPage from "../layout/footer";

function BlogPages() {
  return (
    <div className="font-barlow">
      <Navbar />
      <div className="w-full h-24 "></div>
      <div className="principal flex flex-row items-center justify-center gap-10 px-10">
        <div className="titre w-full flex flex-col items-start justify-center">
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="">
              <h1 className="font-bold text-29xl w-full">
                Restez constamment à jour avec
                <span className="text-colorPink"> nos actualités</span>
              </h1>
            </div>
          </div>
          <div className="flex">
            <p className="font-normal text-lg leading-7 text-justify w-full">
              Explorez nos dernières publications et découvrez des articles
              informatifs, des guides pratiques et des analyses approfondies.
              Plongez dans notre blog pour rester à jour sur les tendances, les
              conseils et les meilleures pratiques dans notre domaine
              d'expertise.
            </p>
          </div>
          <div className="flex">
            <Link to="#start" className="no-underline">
              <button className="cursor-pointer flex flex-row items-center gap-3 border-2 border-solid border-colorPink text-lg px-5 py-1.5 rounded-lg bg-transparent font-barlow font-normal">
                Commencer <img src="/icons8-flèche-30.png" alt="" />
              </button>
            </Link>
          </div>
        </div>
        <div className="image">
          <img src="/vadim.jpg" className="image w-[600px]" alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center">
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
                  Septembre 2024 pour tous les étudiants de FMAUX de la
                  maternelle jusqu'au terminale...
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
                    pour cette nouvelle année scolaire 2024-2025. Un club de
                    plus pour les activités parascolaires des étudiants.
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
                  Septembre 2024 pour tous les étudiants de FMAUX de la
                  maternelle jusqu'au terminale...
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
                    pour cette nouvelle année scolaire 2024-2025. Un club de
                    plus pour les activités parascolaires des étudiants.
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
      </div>
      <div className="mt-16">
        <FooterPage />
      </div>
    </div>
  );
}

export default BlogPages;
