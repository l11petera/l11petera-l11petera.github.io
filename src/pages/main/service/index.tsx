import Navbar from "../layout/header/navbar";
import { Link } from "react-router-dom";
import FooterPage from "../layout/footer";
import "./styles.scss";

const handlePointerEnter = (event: React.MouseEvent) => {
  // Votre logique pour gérer l'événement pointerenter
};

const handlePointerLeave = (event: React.MouseEvent) => {
  // Votre logique pour gérer l'événement pointerleave
};

export default function ServicePage() {
  return (
    <section className="font-barlow">
      <Navbar />
      <div className="w-full h-24 "></div>
      <div className="principal flex flex-row items-center justify-center gap-10 px-10">
        <div className="titre w-full flex flex-col items-start justify-center">
          <div className="flex flex-row justify-center items-center">
            <h1 className="font-bold text-29xl w-full">
              Voulez-vous découvrir
              <span className="text-colorPink"> nos services</span>
            </h1>
          </div>
          <div className="flex">
            <p className="font-normal text-lg leading-7 text-justify w-full">
              On est un établissement qui s'engage à enseigner des étudiants
              depuis leur mternalle jusqu'au terminal en enseignement général.
              Notre établissement comporte trois cycle d'études commençant par
              la primaire, l'étude secodare composant de premier cycle (de la
              classe de sixieme à la classe de troisieme ) et de second cycle
              (dela classe de seconde à la classe de terminal pour l'obtention
              de baccalauréat)
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
        <div className="image w-full">
          <img src="/vadim.jpg" className="image w-[550px]" alt="" />
        </div>
      </div>
      <div>
        <div className="flex flex-row items-end justify-end gap-10 py-10">
          <div className="flex flex-row px-5">
            <span className="title text-29xl w-[700px]">
              Enseignement
              <span className="font-semibold"> prescolaire et primaire </span>
              innovant.
            </span>
          </div>
        </div>
      </div>
      <div className="principal flex flex-row items-center justify-center gap-10 px-10">
        <div className="image">
          <img src="/vasily.jpg" className="image w-[600px]" alt="" />
        </div>
        <div className="titre w-full flex flex-col items-start justify-center">
          <div className="flex flex-row justify-center items-center gap-2">
            {/* <div className="w-auto h-[75px] flex items-center justify-center rounded-full border-2 border-solid border-colorPink">
              <img
                src="/icons8-tâches-en-série-64.png"
                className="w-14 h-14 px-2"
                alt=""
              />
            </div> */}
            <div className="">
              <h2 className="text-16xl w-full">
                <span className="font-normal">
                  Enseignement de base pour les enfants jusqu'à l'obtention de
                  leur
                </span>{" "}
                CEPE
              </h2>
            </div>
          </div>
          <div className="flex">
            <p className="font-normal font-barlow text-lg leading-7 text-justify w-full">
              FMAux, fait partie des meilleures écoles pour l'enseignement de
              base dans la partie Sud-Ouest de Madagascar. Quels que soient vos
              besoins, nos enseignants sont à votre disposition pour
              l'esnseignement de vos enfants : enseignement de base, sportive,
              travail dirigé, dynamique, performante, et bien d'autre !
            </p>
          </div>
          <div className="flex cur">
            <button className="cursor-pointer flex flex-row items-center gap-3 border-2 border-solid border-colorPink text-lg px-5 py-1.5 rounded-lg bg-transparent font-barlow font-normal">
              Voir plus <img src="/icons8-flèche-30.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      {/* <div className="philo flex py-10">
        <div className="w-full h-full flex items-center justify-center">
          <span className="engtech text-29xl  w-80">
            Les <span className="font-semibold">démarches indispensables</span>{" "}
            au développement de votre application mobile
          </span>
        </div>
        <div className="cd0 flex flex-col items-center justify-center box-border border-l-2 p-4 border-solid border-black  gap-10">
          <div className="crd flex flex-row gap-14">
            <div className="cd h-full box-border border-2 border-solid border-transparent hover:border-2 hover:border-solid hover:border-colorPink px-2 w-96">
              <h3 className="text-[22px]">
                <span className="font-normal">1.</span>{" "}
                <span className="font-semibold">
                  L’UX ou l’expérience de l’utilisateur
                </span>
              </h3>
              <span className="py-4 leading-6">
                UX n’est autre chose que le ressenti de l’utilisateur, lors
                d’une utilisation d’une application mobile, écran par écran.
                L’UX répond à un seul besoin principal : l’utilisabilité.
              </span>
            </div>
            <div className="cd h-full box-border border-2 border-solid border-transparent hover:border-2 hover:border-solid hover:border-colorPink px-2 w-96">
              <h3 className="text-[22px]">
                <span className="font-normal">2.</span>{" "}
                <span className="font-semibold">Les tests d’acceptation :</span>
              </h3>
              <span className="py-4 leading-6">
                Une équipe agile et dédiée, d'Ingénieurs, experts, se mobilise
                pour assurer une qualité irréprochable de vos livrables. Avec
                une maîtrise parfaite de la méthodologie SCRUM, sur base de
                l'itératif et l'incrémental.
              </span>
            </div>
          </div>
          <div className="crd flex flex-row gap-14">
            <div className="cd h-full box-border border-2 border-solid border-transparent hover:border-2 hover:border-solid hover:border-colorPink px-2 w-96">
              <h3 className="text-[22px]">
                <span className="font-normal">3.</span>{" "}
                <span className="font-semibold">
                  L’UI ou l’interface utilisateur :
                </span>
              </h3>
              <span className="py-4 leading-6">
                Notre objectif principal est de lui proposer un produit
                visuellement agréable. L'objectif principal est que
                l’application mobile développer correspond au goût des
                utilisateurs cibles.
              </span>
            </div>
            <div className="cd h-full box-border border-2 border-solid border-transparent hover:border-2 hover:border-solid hover:border-colorPink px-2 w-96">
              <h3 className="text-[22px]">
                <span className="font-normal">4.</span>{" "}
                <span className="font-semibold">
                  IxD ou Interaction Design ou Design d’interaction :
                </span>
              </h3>
              <span className="py-4 leading-6">
                Le design d’interaction, est une spécialisation au croisement
                entre l’UX et l’UI. Son objectif est de définir comment
                l’utilisateur interagit avec la machine.
              </span>
            </div>
          </div>
          <div className="crd flex flex-row gap-14">
            <div className="cd h-full box-border border-2 border-solid border-transparent hover:border-2 hover:border-solid hover:border-colorPink px-2 w-96">
              <h3 className="text-[22px]">
                <span className="font-normal">5.</span>{" "}
                <span className="font-semibold">
                  Déploiement ou la mise en production :
                </span>
              </h3>
              <span className="py-4 leading-6">
                Dernière étape tactique dans le processus de développement de
                votre application mobile. Après son passage sous les mains
                expertes de nos ingénieurs qualité, nous vous garantissons un
                solide processus de mise en production de votre projet fini et
                son bon fonctionnement.
              </span>
            </div>
            <div className="cd h-full box-border border-2 border-solid border-transparent hover:border-2 hover:border-solid hover:border-colorPink px-2 w-96">
              <h3 className="text-[22px]">
                <span className="font-normal">6.</span>{" "}
                <span className="font-semibold">
                  Les développements front-end et back-end :
                </span>
              </h3>
              <span className="py-4 leading-6">
                Cette phase se caractérise par la réalisation du cœur de
                fonctionnement de votre application mobile. Réalisée par nos
                développeurs mobiles, elle est organisée en méthode Agile/SCRUM
                proposant un modèle simple et complet.
              </span>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="principal flex flex-row items-center justify-center gap-10 px-10">
        <div className="titre w-full flex flex-col items-start font justify-center">
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-solid border-colorPink">
              <img src="/Good team-bro.svg" className="w-16 h-16" alt="" />
            </div>
            <div className="">
              <h2 className="text-16xl w-full">
                Refonte <span className="font-normal">de votre</span> site
                internet
              </h2>
            </div>
          </div>
          <div className="flex">
            <p className="font-normal text-lg leading-7 text-justify w-full">
              Votre site internet est obsolète ? Nous sommes aussi en mesure de
              faire la refonte de votre site internet en apportant la nouvelle
              technologie de développement web pour vous assister dans
              l'optimisation de votre site internet.
            </p>
          </div>
          <div className="flex cur">
            <button className="cursor-pointer flex flex-row items-center gap-3 border-2 border-solid border-colorPink text-lg px-5 py-1.5 rounded-lg bg-transparent font-barlow font-normal">
              Obtenir un devis <img src="/icons8-flèche-30.png" alt="" />
            </button>
          </div>
        </div>
        <div className="image">
          <img src="/Design team-pana.png" className="image w-[600px]" alt="" />
        </div>
      </div>
      <div className="flex py-10 flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <span className="title text-21xl justify-center text-center px-20">
            Nous <span className="font-semibold">respectons les standards</span>{" "}
            en vigueur dans la refonte de vos projets digitaux
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 my-10">
          <div className="cardEng flex gap-14">
            <div className="eng h-full box-border border-2 border-solid border-transparent hover:border-2 hover:border-solid hover:border-colorPink px-2 w-96">
              <h3 className="text-[22px]">
                <span className="font-normal">1.</span>{" "}
                <span className="font-semibold">Aspects techniques :</span>
              </h3>
              <span className="py-4 leading-6">
                Vitesse de chargement, compatibilité mobile, bonne redirection
                de vos pages web.
              </span>
            </div>
            <div className="eng h-full box-border border-2 border-solid border-transparent hover:border-2 hover:border-solid hover:border-colorPink px-2 w-96">
              <h3 className="text-[22px]">
                <span className="font-normal">2.</span>{" "}
                <span className="font-semibold">Aspects rédactionnels :</span>
              </h3>
              <span className="py-4 leading-6">
                Création du contenu pour vos stratégies marketing.
              </span>
            </div>
            <div className="eng h-full box-border border-2 border-solid border-transparent hover:border-2 hover:border-solid hover:border-colorPink px-2 w-96">
              <h3 className="text-[22px]">
                <span className="font-normal">3.</span>{" "}
                <span className="font-semibold">Aspects UX :</span>
              </h3>
              <span className="py-4 leading-6">
                Avoir une bonne expérience utilisation de votre site internet.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-20 bg-[#96b74a] flex flex-col  gap-10">
        <div className="flex items-center justify-center">
          <span className="title text-21xl justify-center text-center px-20">
            Quelques unes des{" "}
            <span className="font-semibold">technologies</span> que nous
            utilisons
          </span>
        </div>
        <div className="secflex0 flex items-center justify-center gap-10 px-10">
          <div className="secflex flex flex-row gap-10">
            <div className="flex flex-row gap-10 cid">
              <div>
                <img src="/Angulars.png" className="imge h-24 w-24" alt="" />
              </div>
              <div>
                <img src="/reacts.png" className="imge h-24 w-24" alt="" />
              </div>
            </div>
            <div className="flex flex-row gap-10 cid">
              <div>
                <img src="/vues.png" className="imge h-24 w-24" alt="" />
              </div>
              <div>
                <img src="/laravels.png" className="imge h-24 w-24" alt="" />
              </div>
            </div>
          </div>
          <div className="secflex flex flex-row gap-10">
            <div className="flex flex-row gap-10 cid">
              <div>
                <img src="/symfony.png" className="imge h-24 w-24" alt="" />
              </div>
              <div>
                <img src="/nodes.png" className="imge h-24 w-24" alt="" />
              </div>
            </div>
            <div className="flex flex-row gap-10 cid">
              <div>
                <img
                  src="/spring-boot-removebg-preview.png"
                  className="imge h-24 w-24"
                  alt=""
                />
              </div>
              <div>
                <img src="/djangos.png" className="imge h-24 w-24" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <div className="flex flex-row items-center justify-between gap-10 py-10">
          <div className="flex flex-row justify-end items-end px-10">
            <span className="title text-29xl w-[700px]">
              Enseignement
              <span className="font-semibold"> secondaire </span>
              en <span className="font-semibold">premier cycle</span>
            </span>
          </div>
          <div></div>
        </div>
      </div>
      <div className="principal flex flex-row items-center justify-center gap-10 px-10">
        <div className="titre w-full flex flex-col items-start justify-center">
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="">
              <h2 className="text-16xl w-full">
                <span className="font-normal">Enseignement</span> secondaire
                <span className="font-normal"> pour les </span>
                collégéens<span className="font-normal">
                  {" "}
                  de la classe de
                </span>{" "}
                sixieme<span className="font-normal"> jusqu'à </span>troisieme
              </h2>
            </div>
          </div>
          <div className="flex">
            <p className="font-normal text-lg leading-7 text-justify w-full">
              FMAux, fait partie des meilleures écoles pour l'enseignement de
              base dans la partie Sud-Ouest de Madagascar. Quels que soient vos
              besoins, nos enseignants sont à votre disposition pour
              l'esnseignement de vos enfants : enseignement de base, sportive,
              travail dirigé, dynamique, performante, et bien d'autre !
            </p>
          </div>
          <div className="flex">
            <button className="cursor-pointer flex flex-row items-center gap-3 border-2 border-solid border-colorPink text-lg px-5 py-1.5 rounded-lg bg-transparent font-barlow font-normal ">
              Voir plus <img src="/icons8-flèche-30.png" alt="" />
            </button>
          </div>
        </div>
        <div className="image">
          <img src="/vadim.jpg" className="image w-[600px]" alt="" />
        </div>
      </div>
      <div>
        <div className="flex flex-row items-end justify-end gap-10 py-10">
          <div className="flex flex-row px-5">
            <span className="title text-29xl w-[700px]">
              Enseignement
              <span className="font-semibold"> secondaire </span>
              en <span className="font-semibold"> second cycle</span>.
            </span>
          </div>
        </div>
      </div>
      <div className="principal flex flex-row items-center justify-center gap-10 px-10">
        <div className="image">
          <img src="/vasily.jpg" className="image w-[600px]" alt="" />
        </div>
        <div className="titre w-full flex flex-col items-start justify-center">
          <div className="flex flex-row justify-center items-center gap-2">
            {/* <div className="w-auto h-[75px] flex items-center justify-center rounded-full border-2 border-solid border-colorPink">
              <img
                src="/icons8-tâches-en-série-64.png"
                className="w-14 h-14 px-2"
                alt=""
              />
            </div> */}
            <div className="">
              <h2 className="text-16xl w-full">
                <span className="font-normal">Enseignement</span> secondaire
                <span className="font-normal"> pour les </span>
                lycéens<span className="font-normal">
                  {" "}
                  de la classe de
                </span>{" "}
                second<span className="font-normal"> jusqu'au </span>terminal
              </h2>
            </div>
          </div>
          <div className="flex">
            <p className="font-normal font-barlow text-lg leading-7 text-justify w-full">
              FMAux, fait partie des meilleures écoles pour l'enseignement de
              base dans la partie Sud-Ouest de Madagascar. Quels que soient vos
              besoins, nos enseignants sont à votre disposition pour
              l'esnseignement de vos enfants : enseignement de base, sportive,
              travail dirigé, dynamique, performante, et bien d'autre !
            </p>
          </div>
          <div className="flex cur">
            <button className="cursor-pointer flex flex-row items-center gap-3 border-2 border-solid border-colorPink text-lg px-5 py-1.5 rounded-lg bg-transparent font-barlow font-normal">
              Voir plus <img src="/icons8-flèche-30.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      {/* <div className="flextri flex flex-row items-center justify-center my-10">
        <div className="flexone h-[700px] w-1/3 bg-colorPink flex flex-col justify-center gap-10 pl-10">
          <span className="text-21xl items-center justify-center text-white font-bold">
            Avantages
          </span>
          <div className="flex flex-col gap-3">
            <div className=" flex flx-row justify-start items-center mt-2">
              <div className="flex flex-col items-center justify-center ">
                <span className="font-semibold  text-[24px] text-white">
                  SÉCURITÉ
                </span>
              </div>
            </div>
            <div className="pr-10">
              <span className="text-white">
                Les informations importantes sont sécurisées avec une gestion de
                droit d'accès
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className=" flex flx-row justify-start items-center mt-2">
              <div className="flex flex-col items-center justify-center ">
                <span className="font-semibold  text-[24px] text-white">
                  OPTIMISÉ
                </span>
              </div>
            </div>
            <div className="pr-10">
              <span className="text-white">
                Optimise et facilite une gestion flexible de l’ensemble des
                processus de l'application
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className=" flex flx-row justify-start items-center mt-2">
              <div className="flex flex-col items-center justify-center ">
                <span className="font-semibold  text-[24px] text-white">
                  ECONOMIQUE
                </span>
              </div>
            </div>
            <div className="pr-10">
              <span className="text-white">
                Réduction des coûts et gagner en productivité dans le service
                cloud
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className=" flex flx-row justify-start items-center mt-2">
              <div className="flex flex-col items-center justify-center ">
                <span className="font-semibold  text-[24px] text-white">
                  ERGONOMIE
                </span>
              </div>
            </div>
            <div className="pr-10">
              <span className="text-white">
                Application multiplateforme quel que l'OS utilisé
              </span>
            </div>
          </div>
        </div>
        <div className="flexone h-[700px] w-1/3 bg-[#96b74a] flex flex-col items-start justify-start px-5">
          <div className="flex flex-row mt-5 justify-center text-white gap-10">
            <div className="w-full">
              <span className="text-21xl text-white font-semibold">
                Equipe dédiée professionnelle et flexible
              </span>
              <div className=" flex flx-row justify-start items-start mt-8">
                <div>
                  <span className="font-barlow text-[18px]">
                    Les équipes de VividMind possèdent une solide expérience
                    dans le développement back-end, et ce dans des domaines
                    variés :
                  </span>
                </div>
              </div>
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
                    Développement des applications web métier, pour faciliter le
                    travail de vos collaborateurs en entreprise
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
                    Plateformes d'e-commerce et marketplaces à fort trafic avec
                    un volume de vente assez important traitée en temps réel
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
                    Solutions en Business Intelligence moderne visant à résoudre
                    les défis business de nos clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flexone h-[700px] w-1/3 bg-white flex flex-col items-start justify-start px-5">
          <div className="flex flex-row mt-5 justify-center text-black gap-10">
            <div className="w-full">
              <span className="text-21xl    font-semibold">
                Solution BaaS (Backend as a service)
              </span>
              <div className=" flex flx-row justify-start items-start mt-8">
                <div>
                  <span className="font-barlow text-[18px]">
                    Soucieux de la qualité du travail fourni à nos clients,
                    Hairun Technology utilise le modèle BaaS ou Back-end en tant
                    que service pour gagner en productivité grâce à un
                    développement d’applications multiplateformes et simplifié.
                  </span>
                </div>
              </div>
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
                    Stockage dans le cloud
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
                    Les notifications push
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
                    Le code serveur
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
                    La gestion des utilisateurs et des fichiers
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
                    L'intégration des réseaux sociaux
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
                    Service de Localisation
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
                    Gestion des utilisateurs
                  </span>
                </div>
              </div>
              <div className=" flex flx-row justify-start items-start mt-8">
                <div>
                  <span className="font-barlow text-[18px]">
                    Ainsi que de nombreux services backend qui ont leurs propres
                    API, ce qui leur permet d'être intégrés dans des
                    applications avec une relative facilité.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-10 flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <span className="title text-21xl justify-center text-center px-10">
            <span className="font-semibold">Gestion</span> de votre{" "}
            <span className="font-semibold">base de données</span> en fonction
            de vos besoins
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 my-10">
          <div className="cardEng flex gap-5">
            <div className="eng h-full box-border border-l-2 border-solid border-black px-2 w-96">
              <h3 className="text-[28px] font-medium">
                Technologie Back-End utilisée
              </h3>
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
                    NodeJS/Express
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
                  <span className="font-barlow text-[18px]">Symfony</span>
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
                  <span className="font-barlow text-[18px]">Laravel</span>
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
                  <span className="font-barlow text-[18px]">Spring boot</span>
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
                  <span className="font-barlow text-[18px]">Fast API</span>
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
                    REST API/ GraphQL
                  </span>
                </div>
              </div>
            </div>
            <div className="eng h-full box-border border-l-2 border-solid border-black px-2 w-96">
              <h3 className="text-[28px] font-medium">
                Système de Gestion de Base de Données utilisé
              </h3>
              <div className=" flex flx-row justify-start items-start mt-4">
                <div className="">
                  <img
                    className="w-6 mr-2"
                    src="/icons8-case-à-cocher-vérifiée-30.png"
                    alt=""
                  />
                </div>
                <div>
                  <span className="font-barlow text-[18px]">Mysql</span>
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
                  <span className="font-barlow text-[18px]">MariaDB</span>
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
                  <span className="font-barlow text-[18px]">Sql Server</span>
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
                  <span className="font-barlow text-[18px]">PostgreSql</span>
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
                  <span className="font-barlow text-[18px]">MongoDB</span>
                </div>
              </div>
            </div>
            <div className="eng h-full box-border border-l-2 border-solid border-black px-2 w-96">
              <h3 className="text-[28px] font-medium">Solution stack</h3>
              <span className="py-4 leading-6">
                VividMind utilise une combinaison de plusieurs technologies JS
                pour permettre de créer un site web applicatif de A à Z sur le
                frontend et le backend.
              </span>
              <div className=" flex flx-row justify-start items-start mt-4">
                <div className="">
                  <img
                    className="w-6 mr-2"
                    src="/icons8-case-à-cocher-vérifiée-30.png"
                    alt=""
                  />
                </div>
                <div>
                  <span className="font-barlow text-[18px]">MEAN Stack</span>
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
                  <span className="font-barlow text-[18px]">MERN Stack</span>
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
                  <span className="font-barlow text-[18px]">NodeJS</span>
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
                  <span className="font-barlow text-[18px]">AngularJS</span>
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
                  <span className="font-barlow text-[18px]">VueJS/Symfony</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <FooterPage />
      </div>
    </section>
  );
}
