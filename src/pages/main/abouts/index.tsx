import React, { useEffect, useState } from "react";
import "./styles.scss";
import Navbar from "../layout/header/navbar";
import FooterPage from "../layout/footer";
import IntroPage from "../layout/header/intro";
import { Link } from "react-router-dom";
import { getPagesWithTeams } from "../../../services/api";
import Page from "../../../models/Page";
import { PageData } from "../../../models/types";

function AboutsPage() {
  const [pages, setPages] = useState<Page[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data: PageData[] = await getPagesWithTeams();
  //     const pagesData = data.map(
  //       (page: PageData) =>
  //         new Page(
  //           page.id,
  //           page.title,
  //           page.subtitle,
  //           page.content,
  //           page.sections
  //         )
  //     );
  //     console.log(Page);
  //     setPages(pagesData);
  //   };

  //   fetchData();
  // }, []);
  return (
    <div id="abouts" className="font-barlow">
      <Navbar />
      <div className="w-full h-24 "></div>

      <div>
        <div className="principal flex flex-row items-center justify-center gap-10 px-10">
          <div className="titre w-full flex flex-col items-start font justify-center">
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="">
                <span className="font-medium text-29xl w-full text-lawngreen">
                  Curieux de <span className="text-colorPink">découvrir</span>{" "}
                  notre à <span className="text-colorPink">propos</span>
                </span>
              </div>
            </div>
            <div className="flex">
              <p className="font-normal text-lg leading-7 text-justify w-full">
                Votre partenaire innovant en solutions d'éducation. Née de la
                passion pour la l'enseignement et l'éducation, FMAux s'est
                donnée pour mission de concrétiser les idées innovantes en
                réalités tangibles à travers des solutions éducatives sur
                mesure. Nous nous spécialisons dans le'enseignement général,
                technique pour répondre aux besoins évolutifs de nos clients.
              </p>
            </div>
            <div className="flex cur">
              <a href="#start" className="no-underline">
                <button className="cursor-pointer flex flex-row items-center gap-3 border-2 border-solid border-colorPink text-lg px-5 py-1.5 rounded-lg bg-transparent font-barlow font-normal">
                  Commencer <img src="/icons8-flèche-30.png" alt="" />
                </button>
              </a>
            </div>
          </div>

          <div className="image w-full">
            <img src="/vadim.jpg" className="image w-[570px]" alt="" />
          </div>
        </div>
        <div id="start">
          <div className="flex flex-row items-center justify-between gap-10 py-10">
            <div className="flex flex-row justify-end items-start px-10">
              <span className="title text-29xl w-[700px]">
                Découvrir l'Unité :
                <span className="font-semibold"> Notre Odyssée </span>
                vers l'
                <span className="font-semibold">Excellence Débute </span>
              </span>
            </div>
            <div></div>
          </div>
        </div>
        {/* <div className="principal flex flex-row items-center justify-center px-10 gap-10">
          <div className="image">
            <img src="/vasily.jpg" className="image w-[570px]" alt="" />
          </div>
          <div className="titre w-full flex flex-col items-start font justify-center">
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="w-auto h-[75px] flex items-center justify-center rounded-full border-2 border-solid border-[#e044ac]">
                <img src="/aboutic.png" className="w-14 h-14 px-2" alt="" />
              </div>
              <div className="">
                <h2 className="title1 font-normal w-full text-16xl">
                  Votre <span className="font-bold">partenaire</span> de
                  confiance dans le domaine des{" "}
                  <span className="font-bold">solutions pédagogiques</span>.
                </h2>
              </div>
            </div>
            <div className="flex">
              <p className="font-normal text-lg leading-7 text-justify w-full">
                Votre partenaire innovant en solutions pédagogiques. Née de la
                passion pour l'apprentissage et l'innovation, FMAux s'est
                donnée pour mission de concrétiser les idées innovantes en
                réalités tangibles à travers des solutions pédagogiques sur
                mesure. Nous nous spécialisons dans le développement de
                solutions web et mobile de pointe, le déploiement de solutions
                personnalisées, et bien plus, pour répondre aux besoins
                évolutifs de nos clients.
              </p>
            </div>
            <div className="flex cur">
              <Link to="/joindre" className="no-underline">
                <button className="cursor-pointer flex gap-3 border-2 border-solid border-colorPink text-lg px-5 py-1.5 rounded-lg bg-transparent font-barlow font-normal text-[#747474]">
                  Rejoigner nous <img src="/icons8-flèche-30.png" alt="" />
                </button>
              </Link>
            </div>
          </div>
        </div> */}
        <div className="primo flex flex-col items-center justify-center gap-10 mt-5">
          <div className="secundo flex flex-row items-center justify-center gap-5">
            <div className="card w-[350px] h-[350px] border-2 border-solid border-colorPink rounded-lg leading-5 py-2 px-4 hover:border-lawngreen-dark">
              <h1 className="font-extrabold">1.</h1>
              <h2 className="font-medium text-2xl">Notre équipe</h2>
              <p className="leading-6 text-justify">
                Chez FMAux, nous croyons que notre force réside dans notre
                équipe. Composée de penseurs créatifs, des enseignans
                talentueux, de éducateurs ingénieux et de stratèges avisés,
                notre équipe travaille en harmonie pour livrer des
                apprentissages qui dépassent les attentes. Chaque membre apporte
                une perspective unique et une expertise spécialisée, contribuant
                à notre culture de collaboration et d'excellence.
              </p>
            </div>
            <div className="card w-[350px] h-[350px] border-2 border-solid border-colorPink rounded-lg leading-5 py-2 px-4 hover:border-lawngreen-dark">
              <h1 className="font-extrabold">2.</h1>
              <h2 className="font-medium text-2xl">Notre Philosophie </h2>
              <p className="leading-6 text-justify">
                Notre philosophie est simple : mettre l'innovation au service de
                nos clients. Nous nous engageons à rester à la pointe de la
                technologie, en explorant de nouvelles avenues et en adoptant
                les dernières tendances pour fournir des solutions
                avant-gardistes. Notre approche centrée sur le client garantit
                que nous comprenons et répondons précisément à vos besoins, en
                vous accompagnant à chaque étape du processus.
              </p>
            </div>
          </div>
          <div className="tertio flex flex-row items-center justify-center gap-5">
            <div className="card w-[350px] h-[350px] border-2 border-solid border-colorPink rounded-lg leading-5 py-2 px-4 hover:border-lawngreen-dark">
              <h1 className="font-extrabold">3.</h1>
              <h2 className="font-medium text-2xl">Notre Engagement</h2>
              <p className="leading-6 text-justify">
                Nous nous engageons à fournir des solutions de qualité,
                personnalisées pour répondre aux défis uniques de votre enfant.
                Notre processus transparent et notre communication ouverte
                assurent une collaboration fluide et des résultats
                exceptionnels. Chez FMAux, votre vision devient notre mission.
              </p>
            </div>
            <div className="card w-[350px] h-[350px] border-2 border-solid border-colorPink rounded-lg leading-5 py-2 px-4 hover:border-lawngreen-dark">
              <h1 className="font-extrabold">4.</h1>
              <h2 className="font-medium text-2xl leading-5">
                Rejoignez-nous dans notre Voyage{" "}
              </h2>
              <p className="leading-6 text-justify">
                Nous invitons clients, collaborateurs et passionnés de
                l'éducation à nous rejoindre dans notre voyage passionnant.
                Ensemble, explorons les possibilités illimitées que la
                l'éducation peut offrir et créons un avenir brillant.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-center items-center my-5">
            <h1 className="font-semibold text-21xl">Notre leader</h1>
          </div>
          <div className="font-barlow px-10">
            <h1 className="tit1 text-lawngreen w-48">Découvrer notre leader</h1>
            <p className="desc w-96 ">
              Assurez-vous de l'efficacité de notre équipe ! Notre dévouement
              inébranlable et notre souci du détail garantissent des résultats
              exceptionnels
            </p>
            <div className="trio flex justify-center gap-6">
              <div className="relative flex items-center h-[500px]">
                <div className="">
                  <div className="group group1 w-80 h-[420px] [perspective:1000px]">
                    <div className="absolute w-full h-full bg-white rounded-[5px] shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div className="absolute inset-0 pt-5">
                        <div className="flex justify-center ">
                          <img
                            src="/Max.png"
                            className="w-48 h-72  object-cover "
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h4 className="px-2 font-barlow">
                            Alphonse Tampon ABRAHAM
                          </h4>
                        </div>
                        <div className="">
                          <h4 className="font-medium px-2 font-barlow">
                            Directeur de l'FMAux
                          </h4>
                        </div>
                      </div>

                      <div className="absolute group1 inset-0 w-80 h-[420px]  rounded-[5px] flex flex-col items-center justify-center bg-white text-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex justify-center ">
                          <img
                            src="/godaddy.png"
                            className="w-40 h-40  object-cover "
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center h-[500px]">
                <div className="">
                  <div className="group group1 w-80 h-[420px] [perspective:1000px]">
                    <div className="absolute w-full h-full bg-white rounded-[5px] shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div className="absolute inset-0 pt-5">
                        <div className="flex justify-center ">
                          <img
                            src="/Max.png"
                            className="w-48 h-72  object-cover "
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h4 className="px-2 font-barlow">
                            Avotra Fitia Julien Alphonse
                          </h4>
                        </div>
                        <div className="">
                          <h4 className="font-medium px-2 font-barlow">
                            Surveillant générale
                          </h4>
                        </div>
                      </div>

                      <div className="absolute group1 inset-0 w-80 h-[420px]  rounded-[5px] flex flex-col items-center justify-center bg-white text-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex justify-center ">
                          <img
                            src="/godaddy.png"
                            className="w-40 h-40  object-cover "
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center h-[500px]">
                <div className="">
                  <div className="group group1 w-80 h-[420px]  [perspective:1000px]">
                    <div className="absolute w-full h-full bg-white rounded-[5px] shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div className="absolute inset-0 pt-5">
                        <div className="flex justify-center ">
                          <img
                            src="/Max.png"
                            className="w-48 h-72  object-cover "
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h4 className="px-2 font-barlow">Fitia Alphonsine</h4>
                        </div>
                        <div className="">
                          <h4 className="font-medium px-2 font-barlow">
                            Sécrétaire principale
                          </h4>
                        </div>
                      </div>

                      <div className="absolute group1 inset-0 w-80 h-[420px]  rounded-[5px] flex flex-col items-center justify-center bg-white text-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex justify-center ">
                          <img
                            src="/godaddy.png"
                            className="w-40 h-40  object-cover "
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="trio flex justify-center gap-6">
              <div className="relative flex items-center  h-[500px]">
                <div className=" ">
                  <div className="group group1 w-80 h-[420px]  [perspective:1000px]">
                    <div className="absolute w-full h-full bg-white rounded-[5px] shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div className="absolute inset-0 pt-5">
                        <div className="flex justify-center ">
                          <img
                            src="/Mario.png"
                            className="w-3/4 h-3/4  object-cover "
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h4 className="px-2 font-barlow">
                            RATSIMBAZAFY Rajema Claude
                          </h4>
                        </div>
                        <div className="">
                          <h4 className="font-medium px-2 font-barlow">
                            Chief Operating System Officer
                          </h4>
                        </div>
                      </div>

                      <div className="absolute group1 inset-0 w-80 h-[420px] rounded-[5px] flex flex-col items-center justify-center bg-white text-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex justify-center ">
                          <img
                            src="/logo.png"
                            className="w-40 h-40  object-cover "
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center  h-[500px]">
                <div className=" ">
                  <div className="group group1 w-80 h-[420px]  [perspective:1000px]">
                    <div className="absolute w-full h-full bg-white rounded-[5px] shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div className="absolute inset-0 pt-5">
                        <div className="flex justify-center ">
                          <img
                            src="/Mario.png"
                            className="w-3/4 h-3/4  object-cover "
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h4 className="px-2 font-barlow">
                            RAZAIARY Lala Rodrigue
                          </h4>
                        </div>
                        <div className="">
                          <h4 className="font-medium px-2 font-barlow">
                            Software Responsable Officer
                          </h4>
                        </div>
                      </div>

                      <div className="absolute group1 inset-0 w-80 h-[420px]  rounded-[5px] flex flex-col items-center justify-center bg-white text-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex justify-center ">
                          <img
                            src="/logo.png"
                            className="w-40 h-40  object-cover "
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className="flex flex-row justify-center items-center my-5">
          <h1 className="font-semibold text-21xl">Notre philosophie</h1>
        </div>
        <div className="philo flex px-10">
          <div className="w-full h-full flex items-center justify-center">
            <span className="engtech text-29xl  w-80">
              Les{" "}
              <span className="font-semibold">engagements technologiques </span>
              : Les Fondations de Notre Approche Client
            </span>
          </div>
          <div className="cd0 flex flex-col items-center justify-center box-border border-l-2 p-4 border-solid border-black  gap-10">
            <div className="crd flex gap-14">
              <div className="cd h-full box-border border-2 border-solid border-transparent hover:border-2 hover:border-solid hover:border-colorPink px-2 w-96">
                <h3 className="text-[22px]">
                  <span className="font-normal">1.</span>{" "}
                  <span className="font-semibold">
                    Mettre l'innovation au service de nos clients
                  </span>
                </h3>
                <span className="py-4 leading-6">
                  Nous nous engageons à mettre l'innovation au service de nos
                  clients, en repoussant les limites pour offrir des solutions
                  exceptionnelles et pertinentes, afin de répondre efficacement
                  à leurs besoins et de les aider à atteindre leurs objectifs.
                </span>
              </div>
              <div className="cd h-full box-border border-2 border-solid border-transparent hover:border-2 hover:border-solid hover:border-colorPink px-2 w-96">
                <h3 className="text-[22px]">
                  <span className="font-normal">2.</span>{" "}
                  <span className="font-semibold">
                    Engageons à rester à la pointe de la technologie :
                  </span>
                </h3>
                <span className="py-4 leading-6">
                  Engagés à rester à la pointe de la technologie, nous
                  investissons continuellement dans la recherche et le
                  développement pour offrir à nos clients des solutions
                  innovantes et adaptées à un monde en constante évolution.
                </span>
              </div>
            </div>
            <div className="crd flex gap-14">
              <div className="cd h-full box-border border-2 border-solid border-transparent hover:border-2 hover:border-solid hover:border-colorPink px-2 w-96">
                <h3 className="text-[22px]">
                  <span className="font-normal">3.</span>{" "}
                  <span className="font-semibold">
                    Adoptant les dernières tendances technologiques :
                  </span>
                </h3>
                <span className="py-4 leading-6">
                  Adoptant les dernières tendances technologiques, nous nous
                  efforçons de toujours proposer des solutions modernes et
                  performantes, garantissant ainsi à nos clients une expérience
                  exceptionnelle et à la pointe de l'innovation.
                </span>
              </div>
              <div className="cd h-full box-border border-2 border-solid border-transparent hover:border-2 hover:border-solid hover:border-colorPink px-2 w-96">
                <h3 className="text-[22px]">
                  <span className="font-normal">4.</span>{" "}
                  <span className="font-semibold">
                    Comprehension et reponses précises aux besoins de client :
                  </span>
                </h3>
                <span className="py-4 leading-6">
                  Nous nous engageons à une compréhension précise des besoins de
                  nos clients et à fournir des réponses adaptées, garantissant
                  ainsi des solutions sur mesure qui répondent efficacement à
                  leurs attentes.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center my-5">
          <h1 className="font-semibold text-21xl">Notre engagement</h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 my-10 px-10">
          <div className="w-full h-full flex items-center justify-center">
            <span className="engtech text-29xl  w-full">
              Les{" "}
              <span className="font-semibold">engagements technologiques </span>
              : Les Fondations de Notre Approche Client
            </span>
          </div>
          <div className="cardEng flex gap-10">
            <div className="eng h-full box-border border-2 border-solid border-black py-3 px-2 w-96">
              <h3 className="text-[22px]">
                <span className="font-normal">1.</span>{" "}
                <span className="font-semibold">
                  Fournir des solutions de qualité :
                </span>
              </h3>
              <span className="py-4 leading-6">
                Fournir des solutions de qualité est au cœur de notre engagement
                envers nos clients. Nous nous efforçons continuellement d'offrir
                des produits et des services qui répondent aux normes les plus
                élevées d'excellence et de fiabilité, garantissant ainsi une
                satisfaction totale et une confiance durable.
              </span>
            </div>
            <div className="eng h-full box-border border-2 border-solid border-black py-3 px-2 w-96">
              <h3 className="text-[22px]">
                <span className="font-normal">2.</span>{" "}
                <span className="font-semibold">
                  Répondre aux défis uniques de notre client :
                </span>
              </h3>
              <span className="py-4 leading-6">
                Nous nous engageons à relever les défis uniques de chaque client
                avec une approche personnalisée et proactive. En comprenant
                pleinement leurs besoins spécifiques, nous sommes en mesure de
                fournir des solutions adaptées qui surpassent leurs attentes.
              </span>
            </div>
            <div className="eng h-full box-border border-2 border-solid border-black py-3 px-2 w-96">
              <h3 className="text-[22px]">
                <span className="font-normal">3.</span>{" "}
                <span className="font-semibold">
                  Assurer une collaboration fluide et des résultats
                  exceptionnels :
                </span>
              </h3>
              <span className="py-4 leading-6">
                Nous nous engageons à garantir une collaboration fluide et à
                produire des résultats exceptionnels. En favorisant une
                communication ouverte et une coopération étroite avec nos
                clients, nous créons un environnement propice à l'innovation.
              </span>
            </div>
          </div>
        </div> */}
      </div>
      <div className="mt-16">
        <FooterPage />
      </div>
    </div>
  );
}

export default AboutsPage;
