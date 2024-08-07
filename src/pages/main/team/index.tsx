import { FunctionComponent } from "react";
import NetworkInterface from "../about";
import "./styles.scss";

const TeamPage: FunctionComponent = () => {
  return (
    <section id="team" className="mx-6 relative">
      <div className="items-center ">
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
          Notre <span className="text-lawngreen">Teams</span>
        </h1>
      </div>
      <div className="flex flex-row team justify-center items-center m-2">
        <div className="w-[690px] mot px-14">
          <div className="">
            <h1 className="font-barlow font-bold text-[45px]">
              <span className="font-barlow">Finacement </span>
              <span className="text-lawngreen">certain</span>
            </h1>
            <h1 className="font-barlow font-bold text-[35px]">
              “Let’s make !t happen”
            </h1>
          </div>
          <div className="text-justify font-barlow">
            <p className="font-barlow">
              Sécurisez votre investissement ! Notre équipe dédiée travaille à
              maximiser votre retour sur investissement grâce à une attention
              aux détails.
            </p>
          </div>
          <div className="flex my-5">
            <img
              className="h-[25px] w-[25px] mr-3"
              alt=""
              src="/gmail-2@2x.png"
            />
            <div className="mr-3">
              <img
                className="w-[25px] h-[25px]"
                alt=""
                src="/whatsapp1-2@2x.png"
              />
            </div>
            <img className="h-[25px] w-[25px]" alt="" src="/pngegg4-1@2x.png" />
          </div>
          <div className="flex">
            <button className="mr-3 cursor-pointer rounded-lg  px-5 py-2.5 font-barlow font-bold text-xl text-white bg-lawngreen hover:bg-limegreen-300 ">
              En savoir plus
            </button>
            {/* <button className="cursor-pointer px-5 py-2.5 font-barlow font-bold text-xl bg-[transparent] rounded-lg box-border  border-[2px] border-solid border-lightgreen hover:bg-forestgreen-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-forestgreen-100">
              À propos de nous
            </button> */}
          </div>
        </div>
        <div className=" w-[500px] px-12">
          <div className="bg-[#EBF2F3] chef flex flex-row justify-center items-center w-full my-3 rounded-xl">
            <div className="px-3 py-3 rou">
              <h4 className="font-barlow title">
                RASOLONJATOVOARINORO Justinien Mariot
              </h4>
              <b className="font-barlow poste">Chief Executive officier</b>
              <p className="w-80 font-barlow desc text-[#5F6867]">
                Chez VividMind, nous ne nous contentons pas de suivre le futur ;
                nous le construisons ensemble.
              </p>
            </div>
            <div>
              <a href="/teams">
                <img
                  className="h-[193px] ichef w-[152px] "
                  loading="lazy"
                  alt=""
                  src="/Mario.png"
                />
              </a>
            </div>
          </div>

          <div className="flex it my-4">
            <div className="">
              <img
                className="h-20 imt rounded-full"
                loading="lazy"
                alt=""
                src="/marko 1.png"
              />
            </div>
            <div>
              <h3 className="font-barlow name">Marc Yowan Ratsimbazafy</h3>
              <b className="font-barlow poste font-medium text-[#6B767B]">
                Directeur technique
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
