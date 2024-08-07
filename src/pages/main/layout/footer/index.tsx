import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function FooterPage() {
  return (
    <footer className="bg-[#203366] text-white font-barlow mt-10">
      <div className="self-stretch  flex flex-row items-start justify-between pt-[52px] pb-2.5 pr-[79px] pl-[85px] box-border max-w-full gap-[20px] text-justify text-xl  mq450:pl-5 mq450:box-border mq750:pt-[34px] mq750:pb-5 mq750:pr-[39px] mq750:pl-[42px] mq750:box-border mq1275:flex-wrap">
        <div className=" flex flex-col items-start justify-start py-0 pr-[9px] pl-0 box-border gap-[27px]">
          <b className="inline-block font-semibold font-barlow shrink-0 z-[1] mq450:text-lgi mq450:leading-[36px]">
            Contacter nous
          </b>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-[15px] font-barlow">
            <p className=" text-[15px] inline-block shrink-0 whitespace-nowrap z-[1] mq450:text-base mq450:leading-[36px]">
              +261 34 69 058 74
            </p>
            <a
              className="[text-decoration:none] text-[inherit] inline-block shrink-0 whitespace-nowrap z-[1] mq450:text-base mq450:leading-[36px]"
              href="mailto:contact@vividmind.mg"
              target="_blank"
            >
              contact@fmaux.mg
            </a>
            <p className="inline-block z-[1] mq450:text-base mq450:leading-[36px]">
              FMAux MG
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-start justify-start gap-9 py-0 pr-[9px] pl-0 box-border ">
          <b className="inline-block font-semibold font-barlow shrink-0  z-[1] mq450:text-lgi mq450:leading-[36px]">
            Lien du site
          </b>
          <div className="self-stretch flex flex-col items-start  justify-start gap-9 text-[15px] font-barlow">
            <a
              className="[text-decoration:none] text-[inherit] inline-block shrink-0 whitespace-nowrap z-[1] mq450:text-base mq450:leading-[36px]"
              href="#intro"
            >
              Accueil
            </a>
            <a
              className="[text-decoration:none] text-[inherit] inline-block shrink-0 whitespace-nowrap z-[1] mq450:text-base mq450:leading-[36px]"
              href="#service"
            >
              À propos
            </a>
            <Link
              className="[text-decoration:none] text-[inherit] inline-block shrink-0 whitespace-nowrap z-[1] mq450:text-base mq450:leading-[36px]"
              to="/services"
            >
              Services
            </Link>
            <Link
              className="[text-decoration:none] text-[inherit] inline-block shrink-0 whitespace-nowrap z-[1] mq450:text-base mq450:leading-[36px]"
              to="/blogs"
            >
              Blog
            </Link>
            <Link
              className="[text-decoration:none] text-[inherit] inline-block shrink-0 whitespace-nowrap z-[1] mq450:text-base mq450:leading-[36px]"
              to="/contact"
            >
              Rejoignez-nous
            </Link>
          </div>
        </div>
        {/* <div className=" flex flex-col items-start justify-start gap-9 py-0 pr-[9px] pl-0 box-border ">
          <b className="inline-block font-semibold font-barlow shrink-0  z-[1] mq450:text-lgi mq450:leading-[36px]">
            Nos services
          </b>
          <div className="self-stretch flex flex-col items-start  justify-start gap-9 text-[15px] font-barlow">
            <a
              className="w-full [text-decoration:none] text-white"
              href="#intro"
            >
              Développement application web et/ou mobile sur mesure
            </a>
            <a className="[text-decoration:none] text-white" href="#about">
              Refonte site Internet
            </a>
            <a className="[text-decoration:none] text-white" href="#service">
              Développement back-end et API
            </a>
            <a className="[text-decoration:none] text-white" href="#team">
              Data science et Big data
            </a>
            <a className="[text-decoration:none] text-white" href="#contact">
              Administration et maintenance préventive
            </a>
          </div>
        </div> */}
        <div className="flex flex-col items-center justify-center gap-3">
          <div>
            <img
              className="w-[110px] h-[95px]"
              loading="lazy"
              alt=""
              src="/GoDaddy.png"
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-10">
            <a href="gmail.com">
              <img
                className="w-[24.5px] h-[25px] grayscale"
                alt=""
                src="/gmail-1@2x.png"
              />
            </a>
            <a href="">
              <img
                className="w-[24.5px] h-[25px] grayscale"
                alt=""
                src="/whatsapp1-1@2x.png"
              />
            </a>
            <a href="https://www.linkedin.com/company/vividmind-mg/">
              <img
                className="w-[24.5px] h-[25px] grayscale"
                alt=""
                src="/pngegg4@2x.png"
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="">
              <h3 className="text-white font-semibold">Restez-informer</h3>
            </div>
            <form className="form flex flex-row justify-center items-center gap-3">
              <div>
                <input
                  className="w-full text-center text-[18px] bg-transparent text-white border-2 border-solid border-white flex-1 rounded-10xs py-2.5 px-4 box-border font-barlow font-semibold"
                  placeholder="Votre adresse mail"
                  type="email"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 cursor-pointer px-3 bg-colorPink rounded-sm font-semibold text-lg text-white"
                >
                  S'inscrire
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center max-w-full px-20">
        <p>
          <span>copyright @ 2024. l'éducation pour </span>
          <span className="text-colorPink">tout </span>
          <span>le monde</span>
        </p>
      </div>
    </footer>
  );
}

export default FooterPage;
