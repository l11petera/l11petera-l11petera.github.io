import React from "react";
import "./styles.scss";
import Navbar from "../../layout/header/navbar";
import { Link } from "react-router-dom";
import FooterPage from "../../layout/footer";

function InfoDevPage() {
  return (
    <div className="font-barlow">
      <Navbar />
      <div className="w-full h-20 "></div>
      <div className="principal flex flex-row items-center justify-center gap-10 px-10">
        <div className="titre w-full flex flex-col items-start font justify-center">
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="">
              <h1 className="font-bold text-29xl w-full">
                <span className="font-normal">Notre société d'</span>{" "}
                infogérance informatique{" "}
                <span className="font-normal">est là pour vous</span> aider
              </h1>
            </div>
          </div>
          <div className="flex">
            <p className="font-normal text-lg leading-7 text-justify w-full">
              Nos spécialistes en infogérance informatique soutiennent une
              variété d'entreprises, allant des PME aux grandes entreprises, en
              passant par les administrations publiques. Nous mettons notre
              expertise technique au service de votre entreprise pour garantir
              le bon fonctionnement de vos infrastructures serveurs, de stockage
              et de réseaux, 24 heures sur 24, 7 jours sur 7, 365 jours par an.
            </p>
          </div>
          <div className="flex">
            <a href="#start" className="no-underline">
              <button className="cursor-pointer flex flex-row items-center font-normal gap-3 border-2 border-solid border-lawngreen text-lg px-5 py-1.5 rounded-lg bg-transparent font-barlow">
                Commencer
                <img src="/icons8-flèche-30.png" alt="" />
              </button>
            </a>
          </div>
        </div>
        <div className="image w-full">
          <img src="/Server-bro.png" className="image w-[520px]" alt="" />
        </div>
      </div>
      <div className="principal flex flex-row items-center justify-center my-10 gap-10 px-10">
        <div className="titre w-full flex flex-col items-center justify-center">
          <div className="flex flex-row justify-center items-center gap-2">
            <h1 className="engtech font-medium text-16xl w-full">
              Nos services d'externalisation d'
              <span className="font-bold">infogérance</span> comprennent:
            </h1>
          </div>
        </div>
        <div className="image w-full h-full box-border border-l-2 border-solid border-black flex flex-col gap-5">
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
                Développement application web et/ou mobile sur mesure
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between px-20 gap-10 py-10">
        <div className="flex flex-row justify-end items-end">
          <div>
            <span className="text-29xl w-full">
              <span className="font-semibold">
                {" "}
                Devenez plus agile grâce aux solutions DevOps de VividMind{" "}
              </span>
            </span>
            <p className="text-[18px] ">
              Que vous ayez besoin d'un ingénieur DevOps ou d'une équipe
              complète, HaiRun Technology peut vous aider à automatiser vos
              applications, à réduire les délais de mise sur le marché, à
              accroître l'efficacité et à réduire les coûts informatiques.
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col items-center justify-center py-10">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="cler flex gap-14">
            <div className="clar flex flex-row justify-center items-center h-56 box-border border-[1px] rounded-md border-solid border-black px-2 w-[500px]">
              <div>
                <img src="/icons8-app-50.png" className="w-20 h-20" alt="" />
              </div>
              <div className="pb-3">
                <h3 className="text-[22px]">
                  <span className="font-normal">1.</span>{" "}
                  <span className="font-semibold">Kubernetes Clustering :</span>
                </h3>
                <span className="py-4 leading-6">
                  Faites du potentiel des conteneurs une réalité opérationnelle
                  en exécutant des applications conteneurisées sur plusieurs
                  machines et environnements.
                </span>
              </div>
            </div>
            <div className="clar flex flex-row justify-center items-center h-56 box-border border-[1px] rounded-md border-solid border-black px-2 w-[500px]">
              <div>
                <img src="/icons8-app-50.png" className="w-20 h-20" alt="" />
              </div>
              <div className="pb-3">
                <h3 className="text-[22px]">
                  <span className="font-normal">1.</span>{" "}
                  <span className="font-semibold">
                    Configurer les pipelines CI/CD
                  </span>
                </h3>
                <span className="py-4 leading-6">
                  Concevez et créez des pipelines d'intégration et de livraison
                  continues pour automatiser votre processus de livraison de
                  logiciels via AWS CodePipeline.
                </span>
              </div>
            </div>
          </div>
          <div className="cler flex gap-14">
            <div className="clar flex flex-row justify-center items-center h-56 box-border border-[1px] rounded-md border-solid border-black px-2 w-[500px]">
              <div>
                <img src="/icons8-app-50.png" className="w-20 h-20" alt="" />
              </div>
              <div className="pb-3">
                <h3 className="text-[22px]">
                  <span className="font-normal">1.</span>{" "}
                  <span className="font-semibold">
                    Architecture de microservices: Architecture de
                    microservices:{" "}
                  </span>
                </h3>
                <span className="py-4 leading-6">
                  Faites évoluer la pile technologique d'une application
                  complexe avec une architecture de microservice tout en
                  permettant une livraison rapide, fréquente et fiable.
                  L'objectif est de disposer d'une application facile à
                  maintenir.
                </span>
              </div>
            </div>
            <div className="clar flex flex-row justify-center items-center h-56 box-border border-[1px] rounded-md border-solid border-black px-2 w-[500px]">
              <div>
                <img src="/icons8-app-50.png" className="w-20 h-20" alt="" />
              </div>
              <div className="pb-3">
                <h3 className="text-[22px]">
                  <span className="font-normal">1.</span>{" "}
                  <span className="font-semibold">
                    Serverless Architecture:
                  </span>
                </h3>
                <span className="py-4 leading-6">
                  Créez et exécutez des applications sans gérer
                  l'infrastructure, en exécutant des applications sur des
                  serveurs, mais sans avoir besoin de provisionnement, de mise à
                  l'échelle et de maintenance.
                </span>
              </div>
            </div>
          </div>
          <div className="cler flex gap-14">
            <div className="clar flex flex-row justify-center items-center h-56 box-border border-[1px] rounded-md border-solid border-black px-2 w-[500px]">
              <div>
                <img src="/icons8-app-50.png" className="w-20 h-20" alt="" />
              </div>
              <div className="pb-3">
                <h3 className="text-[22px]">
                  <span className="font-normal">1.</span>{" "}
                  <span className="font-semibold">Infrastructure as code:</span>
                </h3>
                <span className="py-4 leading-6">
                  Provisionnez et gérez les ressources cloud en écrivant un
                  modèle lisible par l'homme et consommable par la machine.
                  L'avantage est de versionner l'infrastructure du cloud et de
                  simplifier la révision
                </span>
              </div>
            </div>
            <div className="clar flex flex-row justify-center items-center h-56 box-border border-[1px] rounded-md border-solid border-black px-2 w-[500px]">
              <div>
                <img src="/icons8-app-50.png" className="w-20 h-20" alt="" />
              </div>
              <div className="pb-3">
                <h3 className="text-[22px]">
                  <span className="font-normal">1.</span>{" "}
                  <span className="font-semibold">DevSecOps:</span>
                </h3>
                <span className="py-4 leading-6">
                  Intégrez les pratiques de sécurité dans le cycle de vie du
                  développement logiciel pour garantir la sécurité
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="principal flex flex-row justify-center gap-10 px-10">
        <div className="titre w-full flex flex-col items-start justify-center">
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="w-auto h-[75px] flex items-center justify-center rounded-full border-2 border-solid border-colorPink">
              <img src="/Good team-bro.svg" className="w-14 h-14 px-2" alt="" />
            </div>
            <div className="">
              <h2 className="text-16xl w-full">
                <span className="font-normal">Des solutions de</span> site cloud
                computing{" "}
                <span className="font-normal">
                  adaptées aux besoins de votre entreprise
                </span>
              </h2>
            </div>
          </div>
          <div className="flex">
            <p className="font-normal text-lg leading-7 text-justify w-full">
              Les solutions de cloud computing offrent à votre entreprise une
              évolutivité illimitée, une meilleure utilisation des ressources,
              une efficacité maximale et surtout un coût optimisé. Notre équipe
              de spécialistes du cloud vous aidera à tirer parti de tous les
              avantages de ces solutions :
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-colorPink font-semibold text-[20px]">
              IaaS: (Infrastructure as a Service) :
            </span>
            <ul>
              <li>
                Déployer une application sans se soucier des infrastructures.{" "}
              </li>
              <li>Minimiser le Time To Market de votre projet digital </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="text-colorPink font-semibold text-[20px]">
              IaaS: (Infrastructure as a Service) :
            </span>
            <ul>
              <li>
                Réduit les coûts liés au serveur et au stockage des données
              </li>
              <li>
                Optimise la maintenance du système et permet de rester flexible
                sur le marché.{" "}
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="text-colorPink font-semibold text-[20px]">
              PaaS: (Platform as a Service) :
            </span>
            <ul>
              <li>
                Une solution rapide pour gérer la mise à l'échelle de votre
                service en cas de montée ou de baisse de charge.
              </li>
            </ul>
          </div>
          <div className="flex mt-4 cur">
            <Link to="" className="no-underline">
              <button className="cursor-pointer flex flex-row items-center gap-3 border-2 border-solid border-colorPink text-lg px-5 py-1.5 rounded-lg bg-transparent font-barlow font-medium ">
                Obtenir un devis <img src="/icons8-flèche-30.png" alt="" />
              </button>
            </Link>
          </div>
        </div>
        <div className="image w-full">
          <img src="/Good team-bro.png" className="image w-[520px]" alt="" />
        </div>
      </div>
      <div className="px-6 py-20 flex flex-col  gap-10">
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
                <img src="/dock.png" className="imge h-24 w-24" alt="" />
              </div>
              <div>
                <img src="/gc.png" className="imge h-24 w-24" alt="" />
              </div>
            </div>
            <div className="flex flex-row gap-10 cid">
              <div>
                <img src="/aws3.png" className="imge h-24 w-24" alt="" />
              </div>
              <div>
                <img src="/mA.png" className="imge h-24 w-24" alt="" />
              </div>
            </div>
          </div>
          <div className="secflex flex flex-row gap-10">
            <div className="flex flex-row gap-10 cid">
              <div>
                <img src="/gitlab.png" className="imge h-24 w-24" alt="" />
              </div>
              <div>
                <img src="/grafana.png" className="imge h-24 w-24" alt="" />
              </div>
            </div>
            <div className="flex flex-row gap-10 cid">
              <div>
                <img src="/kubernetes.png" className="imge h-24 w-24" alt="" />
              </div>
              <div>
                <img src="/terraform.png" className="imge h-24 w-24" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <FooterPage />
      </div>
    </div>
  );
}

export default InfoDevPage;
