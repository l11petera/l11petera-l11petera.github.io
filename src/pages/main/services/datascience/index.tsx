import React from "react";
import "./styles.scss";
import Navbar from "../../layout/header/navbar";
import { Link } from "react-router-dom";
import FooterPage from "../../layout/footer";

function DataSciencePage() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-20"></div>
      <div className="principal principale flex flex-row justify-center items-center gap-10 px-10">
        <div className="image w-full">
          <img
            src="/Business Plan-bro.png"
            className="image w-[520px]"
            alt=""
          />
        </div>
        <div className="titre">
          <span className="text-29xl">
            Externalisez vos projets
            <span className="font-semibold"> Data science</span> en mode
            <span className="font-semibold"> régie</span>
          </span>
        </div>
      </div>
      <div className="philo w-full flex gap-10 py-10">
        <div className="w-full -green-500 flex items-center justify-center">
          <span className="engtech text-29xl font-semibold w-60">
            <span className="font-normal">Nos</span> expertises{" "}
            <span className="font-normal">en</span> Data science :
          </span>
        </div>
        <div className="cd0 w-full flex flex-col items-center justify-center -red-500 gap-10">
          <div className="crd flex gap-10">
            <div className="cd h-32 border-l-2 border-solid border-black px-4 w-60">
              <h1 className="font-normal">1.</h1>
              <h2>Computer Vision</h2>
            </div>
            <div className="cd h-32 border-l-2 border-solid border-black px-4 w-60">
              <h1>2.</h1>
              <h2>Iot</h2>
            </div>
          </div>
          <div className="crd flex gap-10">
            <div className="cd h-32 border-l-2 border-solid border-black px-4 w-60">
              <h1>3.</h1>
              <h2>Recommendations Systems</h2>
            </div>
            <div className="cd h-32 border-l-2 border-solid border-black px-4 w-60">
              <h1>4.</h1>
              <h2>NLP</h2>
            </div>
          </div>
          <div className="crd flex gap-10">
            <div className="cd h-32 border-l-2 border-solid border-black px-4 w-60">
              <h1>5.</h1>
              <h2>Predictive maintenance</h2>
            </div>
            <div className="cd h-32 border-l-2 border-solid border-black px-4 w-60">
              <h1>6.</h1>
              <h2>Business Intelligence (BI)/Data</h2>
            </div>
          </div>
          <div className="crd flex gap-10">
            <div className="cd h-32 border-l-2 border-solid border-black px-4 w-60">
              <h1>7.</h1>
              <h2>Big Data Analytics</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6">
        <h1 className="text-21xl ">
          Notre <span className="text-colorPink">processus</span>
        </h1>
        <div className="imag w-full flex justify-center">
          <img src="/Data-Science-Process.png" className="imag w-auto" alt="" />
        </div>
      </div>
      <div className="philo flex px-10 py-10 my-5 bg-[#96b74a]">
        <div className="w-full h-full flex items-center justify-center">
          <span className="engtech text-29xl font-semibold w-60">
            Nous travaillons ensamble en 4 étapes :
          </span>
        </div>
        <div className="cd0 flex flex-col items-center justify-center gap-10">
          <div className="crd flex gap-5">
            <div className="cd h-32 border-l-2 border-solid border-black px-4 w-60">
              <h1>1.</h1>
              <h2>Vous nous envoyez vos attentes</h2>
            </div>
            <div className="cd h-32 border-l-2 border-solid border-black px-4 w-60">
              <h1>2.</h1>
              <h2>Vous nous envoyez vos attentes</h2>
            </div>
          </div>
          <div className="crd flex gap-5">
            <div className="cd h-32 border-l-2 border-solid border-black px-4 w-60">
              <h1>3.</h1>
              <h2>Nous vous proposons nos data scientist</h2>
            </div>
            <div className="cd h-32 border-l-2 border-solid border-black px-4 w-60">
              <h1>4.</h1>
              <h2>Nous démarrons votre projet en mode régie</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-10">
        <h1 className="px-10">Pourquoi ViviMind ?</h1>
        <p className="font-medium py-5 px-16 text-justify text-[20px]">
          VividMind excelle dans les domaines de la Data Science et du Big Data.
          Notre équipe expérimentée offre des analyses approfondies et des
          solutions sur mesure, aidant nos clients à prendre des décisions
          éclairées et à rester compétitifs. Grâce à notre engagement envers
          l'innovation constante, nous sommes votre partenaire idéal pour
          exploiter tout le potentiel de vos données et propulser votre
          entreprise vers le succès.
        </p>
      </div>
      <div className="px-6 py-20 bg-[#96b74a] flex flex-col  gap-10">
        <div className="flex items-center justify-center">
          <span className="title text-21xl justify-center text-center px-20">
            Quelques unes des{" "}
            <span className="font-semibold">technologies</span> que nous
            maitrisons
          </span>
        </div>
        <div className="secflex0 flex items-center justify-center gap-10 px-10">
          <div className="secflex flex flex-row gap-10">
            <div className="flex flex-row gap-10 cid">
              <div>
                <img src="/tensor.png" className="imge h-24 w-24" alt="" />
              </div>
              <div>
                <img src="/keras.png" className="imge h-24 w-24" alt="" />
              </div>
            </div>
            <div className="flex flex-row gap-10 cid">
              <div>
                <img src="/aws.png" className="imge h-24 w-24" alt="" />
              </div>
              <div>
                <img src="/fast.png" className="imge h-24 w-24" alt="" />
              </div>
            </div>
          </div>
          <div className="secflex flex flex-row gap-10">
            <div className="flex flex-row gap-10 cid">
              <div>
                <img src="/flask.png" className="imge h-24 w-24" alt="" />
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
      </div>
      <div>
        <FooterPage />
      </div>
    </div>
  );
}

export default DataSciencePage;
