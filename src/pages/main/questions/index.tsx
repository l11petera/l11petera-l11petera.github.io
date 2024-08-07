import { FunctionComponent, useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const QuestionPage: FunctionComponent = () => {
  // Utilisez un état pour suivre si l'élément est survolé ou non
  const [isHovered, setIsHovered] = useState(false);

  // Gérez la fonction pour déclencher le survol
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Gérez la fonction pour détecter lorsque le curseur quitte l'image
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const AccordionItem: React.FC<{ title: string; content: string }> = ({
    title,
    content,
  }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleAccordion = () => {
      setIsActive(!isActive);
    };

    return (
      <div className="w-full">
        <div className="flex flx-row justify-start items-start mt-4 ">
          <img
            className="w-6 mr-2"
            src="/icons8-case-à-cocher-vérifiée-30.png"
            alt=""
          />
          <div className="flex flex-col">
            <button
              onClick={toggleAccordion}
              className={`text-[18px] cursor-pointer text-justify font-barlow text-white font-semibold bg-transparent`}
            >
              {title}
            </button>
            <div
              className={`font-normal font-barlow ${
                isActive ? "block" : "hidden"
              }`}
            >
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section id="question" className="font-barlow text-justify">
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
          Vos <span className="text-colorPink">questions</span>
        </h1>
      </div>

      <div>
        <div className="px-10">
          <h1 className="text-21xl">
            Réponses à <span className="text-colorPink">vos questions</span>
          </h1>
          <p className="font-normal text-lg">
            VividMind est là pour répondre à vos questions et vous guider à
            chaque étape de votre parcours. Avec notre expertise et notre
            engagement à fournir un service client exceptionnel, nous sommes
            déterminés à vous offrir des solutions adaptées à vos besoins
            spécifiques.
          </p>
        </div>

        <div className="h-full w-full bg-colorPink2 flex flex-col items-center justify-center">
          <div className="princi flex flex-col my-5 justify-center items-center text-white gap-10 px-10">
            <div className="first flex flex-row items-center justify-center gap-10">
              <AccordionItem
                title="Qu'est-ce qui distingue votre établissement des autres?"
                content="Notre établissement se distingue par son engagement envers l'éducation innovant et son approche centrée sur les étudiants. Nous offrons des solutions sur mesure et un service client exceptionnel qui répondent aux besoins uniques de chaque client."
              />
              <AccordionItem
                title="Quels sont les principaux domaines d'expertise de votre établissement ?"
                content="Notre établissement se spécialise dans l'enseignement générale. Nous avons une équipe d'enseignant talentueuse de professionnels hautement qualifiés dans ces domaines, prête à répondre à tous les besoins pédagogiques de nos étudiants."
              />
            </div>
            <div className="second flex flex-row items-center justify-center gap-10">
              <AccordionItem
                title="Comment votre établissement garantit-elle la sécurité des étudiants ?"
                content="La sécurité des étudiants est notre priorité absolue. Nous utilisons des protocoles de sécurité avancés, robustes et des mesures strict pour protéger les étudiants. De plus."
              />
              <AccordionItem
                title="Quels sont les avantages de travailler avec votre établissement ?  ?"
                content="Travailler avec notre établissement vous donne accès à une équipe hautement qualifiée et expérimentée, ainsi qu'à des solutions pédagogique de pointe. Nous nous engageons à fournir un service personnalisé, une expertise approfondie et des résultats exceptionnels pour chaque apprentissage."
              />
            </div>
            <div className="third flex flex-row items-center justify-center gap-10">
              <AccordionItem
                title="Quels sont les succès récents ou les réalisations notables de votre établissement ? "
                content="Récemment, notre établissement a réussi à mettre en œuvre avec succès des bonnes résultats  des examens officiels de Madagascar."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionPage;
