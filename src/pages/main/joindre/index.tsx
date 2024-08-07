import React, { useState } from "react";
import "./styles.scss";
import Navbar from "../layout/header/navbar";
import { Link } from "react-router-dom";
// import MyModal from "./modal";
import FooterPage from "../layout/footer";
import ContactPage from "../contact";

function JoindrePage() {
  const [activeTab, setActiveTab] = useState<string>("Analyse");
  const [isActive, setIsActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const openCity = (cityName: string) => {
    setActiveTab(cityName);
  };

  const handleButtonClick = () => {
    setIsActive(true);
    openCity("Catégorie"); // Mettre à jour l'onglet actif lorsque le bouton est cliqué
  };
  function closeNav() {
    const navElement = document.getElementById("myNav");
    if (navElement !== null) {
      navElement.style.width = "0%";
    }
  }

  return (
    <div className="font-barlow">
      <Navbar />
      <div className="w-full h-24 "></div>
      <div className="principal flex flex-row items-center justify-center gap-10 px-10">
        <div className="titre w-full flex flex-col items-start justify-center">
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="">
              <h1 className="font-bold text-29xl w-full">
                Voulez-vous nous
                <span className="text-colorPink"> joindre </span>?
              </h1>
            </div>
          </div>
          <div className="flex">
            <p className="font-normal text-lg leading-7 text-justify w-full">
              Vous cherchez à nous joindre ? Vous pouvez le faire via les
              contacts ci-dessous. Soit par whatsapp, par email, par linkedin ou
              directement par les formulaire ci-dessous en ne pas oublier de
              mettre le message que vous voulez nous envoyer merci !
            </p>
          </div>
          <div className="flex cur">
            <Link to="#start" className="no-underline">
              <button className="cursor-pointer flex flex-row items-center gap-3 border-2 border-solid border-colorPink text-lg px-5 py-1.5 rounded-lg bg-transparent font-barlow font-normal">
                Commencer <img src="/icons8-flèche-30.png" alt="" />
              </button>
            </Link>
          </div>
        </div>
        <div className="image w-full">
          <img src="/vadim.jpg" className="image w-[600px]" alt="" />
        </div>
      </div>
      <ContactPage />
      {/* <div>
        <div className="px-20">
          <h2 className="text-21xl font-semibold">
            Trouver ce qui vous convient !
          </h2>
        </div>

        <div className="pripe flex flex-row justify-center gap-10 px-10 mb-10">
          <div className="pripe1 w-[700px] h-full flex flex-col items-center rounded-md gap-4 btn py-10 px-10 bg-slate-200">
            <div className="flex w-full flex-row justify-between items-center hover:bg-colorPink  px-5 rounded-md">
              <img
                src="/icons8-frontière-tout-48.png"
                className="w-7 h-7"
                alt=""
              />
              <button
                className="w-full p-4 text-left font-medium text-lg "
                onClick={() => openCity("Analyse")}
                style={{ backgroundColor: "transparent" }}
              >
                Toutes les catégories
              </button>
              <h2 className="font-medium text-lg">(1)</h2>
            </div>
            <div className="flex w-full flex-row justify-between items-center hover:bg-colorPink px-5 rounded-md">
              <img
                src="/icons8-données-arrivées-24.png"
                className="w-7 h-7"
                alt=""
              />
              <button
                className="w-full p-4 text-left font-medium text-lg "
                onClick={() => openCity("Data")}
                style={{ backgroundColor: "transparent" }}
              >
                Datascientist & Machine lea..
              </button>
              <h2 className="font-medium text-lg">(0)</h2>
            </div>
            <div className="flex w-full flex-row justify-between items-center hover:bg-colorPink px-5 rounded-md">
              <img
                src="/icons8-tableau-et-graphique-24.png"
                className="w-7 h-7"
                alt=""
              />
              <button
                className="w-full p-4 text-left font-medium text-lg "
                onClick={() => openCity("Analyse")}
                style={{ backgroundColor: "transparent" }}
              >
                Développement logiciel
              </button>
              <h2 className="font-medium text-lg">(1)</h2>
            </div>
            <div className="flex w-full flex-row justify-between items-center hover:bg-colorPink px-5 rounded-md">
              <img src="/icons8-design-24.png" className="w-7 h-7" alt="" />
              <button
                className="w-full p-4 text-left font-medium text-lg "
                onClick={() => openCity("Design")}
                style={{ backgroundColor: "transparent" }}
              >
                Design & Graphisme
              </button>
              <h2 className="font-medium text-lg">(0)</h2>
            </div>
            <div className="flex w-full flex-row justify-between items-center hover:bg-colorPink px-5 rounded-md">
              <img
                src="/icons8-paramètres-administrateur-homme-30.png"
                className="w-7 h-7"
                alt=""
              />
              <button
                className="w-full p-4 text-left font-medium text-lg "
                onClick={() => openCity("Administration")}
                style={{ backgroundColor: "transparent" }}
              >
                Administration & Autres
              </button>
              <h2 className="font-medium text-lg">(0)</h2>
            </div>
          </div>
          <div
            className={`pripe2 w-full rounded-md border-[1px] border-solid border-black p-4 ${
              showMore ? "h-full" : "h-full"
            }`}
          >
            <div
              id="Analyse"
              className={`tabcontent ${
                activeTab === "Analyse" ? "block" : "hidden"
              }`}
            >
              <div className="align flex w-full flex-row justify-between items-center rounded-md">
                <div className="flex flex-row gap-5 justify-center items-center">
                  <img
                    src="/icons8-paramètres-administrateur-homme-30.png"
                    className="w-7 h-7"
                    alt=""
                  />
                  <span>Poste :</span>
                </div>
                <span className="font-semibold text-colorPink">
                  DÉVELOPPEUR FULLSTACK
                </span>
                <span className="">Publié le 26 Avril 2024</span>
              </div>
              <div className="px-5 pt-3 flex flex-col gap-3">
                <span className="text-justify">
                  VividMind est une ESN (Entreprise de Services Numériques)
                  basée à Madagascar, spécialisée dans la conception et
                  développement de projet web, mobile et d'applications
                  serveurs. Actuellement nous cherchons deux (02) développeurs
                  React typescript/React Native qui vont agrandir nos équipes
                  des développeurs en realisant des importants et passionnés
                  projets web et mobile.
                </span>
                <span className="font-semibold">Mission :</span>
                <ul>
                  <li>
                    Participer à la conception, au développement et à la mise en
                    œuvre de fonctionnalités pour des projets web et mobiles.
                  </li>
                  <li>
                    Collaborer avec les membres de l'équipe pour concevoir des
                    solutions techniques efficaces et innovantes.
                  </li>
                  <li>
                    Assurer la qualité du code, la performance et la
                    maintenabilité des applications développées.
                  </li>
                </ul>
              </div>
              <div
                className={`px-5 pt-3 flex flex-col gap-3 ${
                  showMore ? "" : "hidden"
                }`}
              >
                <span className="text-justify">
                  VividMind est une ESN (Entreprise de Services Numériques)
                  basée à Madagascar, spécialisée dans la conception et
                  développement de projet web, mobile et d'applications
                  serveurs. Actuellement nous cherchons deux (02) développeurs
                  React typescript/React Native qui vont agrandir nos équipes
                  des développeurs en realisant des importants et passionnés
                  projets web et mobile.
                </span>
                <span className="font-semibold">Critère :</span>
                <ul>
                  <li>
                    Participer à la conception, au développement et à la mise en
                    œuvre de fonctionnalités pour des projets web et mobiles.
                  </li>
                  <li>
                    Collaborer avec les membres de l'équipe pour concevoir des
                    solutions techniques efficaces et innovantes.
                  </li>
                  <li>
                    Assurer la qualité du code, la performance et la
                    maintenabilité des applications développées.
                  </li>
                </ul>
                <div className="flex flex-row items-center justify-between">
                  <button
                    onClick={() => setShowMore(false)}
                    className="cursor-pointer bg-transparent font-barlow font-semibold text-xl text-colorPink py-2 px-6 w-64 border-[1px] border-solid border-colorPink rounded-md "
                  >
                    Voir moins
                  </button>
                  <span>
                    Type contrat : <span className="font-semibold">CDI</span>
                  </span>
                </div>
              </div>
              <div className="h-full flex flex-row items-center justify-center">
                <div
                  className={`align flex flex-row items-center gap-3 ${
                    showMore ? "hidden" : ""
                  }`}
                >
                  <button
                    onClick={() => setShowModal(true)}
                    className="align0 cursor-pointer flex gap-5 font-barlow font-semibold text-xl text-white py-2 px-6 w-64 bg-colorPink rounded-md hover:bg-limegreen-300"
                  >
                    Déposer votre CV
                    <img src="/icons8-flèche-24.png" alt="" />
                  </button>
                  <button
                    onClick={() => setShowMore(true)}
                    className="align1 cursor-pointer bg-transparent font-barlow font-semibold text-xl text-colorPink py-2 px-6 w-32 border-[1px] border-solid border-colorPink rounded-md "
                  >
                    Voir plus{" "}
                  </button>
                  <span className={`${showMore ? "hidden" : ""}`}>
                    Type contrat : <span className="font-semibold">CDI</span>
                  </span>
                </div>
              </div>
            </div>
            <div
              id="Data"
              className={`tabcontent ${
                activeTab === "Data" ? "block" : "hidden"
              }`}
            >
              <p>
                Aucun offre disponible dur le Datascientist & Machine learning.
              </p>
            </div>
            <div
              id="Design"
              className={`tabcontent ${
                activeTab === "Design" ? "block" : "hidden"
              }`}
            >
              <p>Aucun offre disponible sur le Design & Graphisme.</p>
            </div>
            <div
              id="Administration"
              className={`tabcontent ${
                activeTab === "Administration" ? "block" : "hidden"
              }`}
            >
              <p>Aucun offre disponible sur le Administration & Autres.</p>
            </div>
          </div>
        </div>
      </div>
      <MyModal onClose={() => setShowModal(false)} visible={showModal} /> */}
      <div className="mt-5">
        <FooterPage />
      </div>
    </div>
  );
}

export default JoindrePage;
