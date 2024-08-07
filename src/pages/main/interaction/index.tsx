import { FunctionComponent } from "react";
import "./styles.scss";

const InteractionPage: FunctionComponent = () => {
  return (
    <section id="interaction" className="max-w-full ">
      <div className="max-w-full -mb-10">
        <div className="test px-16 text-black font-barlow ">
          <div className="py-4 part1">
            <div className="flexi items-center">
              <div className="number1">
                <img
                  className="w-24 items-center"
                  loading="lazy"
                  alt=""
                  src="/numberblocks-1@2x.png"
                />
              </div>
              <div className=" number2">
                <b className="text-[40px] items-center">{`{100 000} Visiteurs`}</b>
              </div>
            </div>
            <div className="texte">
              <div className="">{`Merci à nos {100 000} visiteurs ! Votre engagement envers VividMind nous pousse à innover.  Restez connectés pour plus de nouveautés !`}</div>
            </div>
          </div>
          <div className="py-4 part2">
            <div className="image">
              <img
                className=" mr-2"
                loading="lazy"
                alt=""
                src="/star-1@2x.png"
              />
              <img
                className=" mr-2"
                loading="lazy"
                alt=""
                src="/star-1@2x.png"
              />
              <img
                className=" mr-2"
                loading="lazy"
                alt=""
                src="/star-1@2x.png"
              />
              <img className=" mr-2" alt="" src="/star-1@2x.png" />
              <img
                className=" mr-2"
                loading="lazy"
                alt=""
                src="/star5@2x.png"
              />
            </div>

            <div className="py-6">
              Votre avis compte pour nous ! Prenez un moment pour noter votre
              expérience sur VividMind. Chaque étoile nous aide à mieux vous
              servir. Merci !
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractionPage;
