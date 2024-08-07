import { FunctionComponent, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Overlay from "./Overlay";
import "./styles.scss";
import { toast } from "react-toastify";

const Navbar: FunctionComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // État pour le dropdown
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    society: "",
    fonction: "",
    besoin: "",
    budget: "",
    message: "",
    file: "",
  });

  const openNav = () => setIsNavOpen(true);
  const closeNav = () => setIsNavOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen); // Fonction pour le dropdown

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/envoyer-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("🦄 Email envoyé avec succès!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log("E-mail envoyé avec succès");
      } else {
        console.error("Erreur lors de l'envoi de l'e-mail");
      }
    } catch (error) {
      toast.error("😲 Échec de l'envoi de mail", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error("Erreur lors de la requête", error);
    }
  };

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed z-[99] px-5 bg-white flex flex-row items-center justify-between w-full box-border text-left text-lg text-dimgray-400 font-barlow shadow-md">
      <Link to="/" className="logo no-underline">
        <div className="flex flex-row">
          <div className="">
            <img
              className="logImg h-[60px] w-[75.5px] z-[1]"
              loading="lazy"
              alt=""
              src="/GoDaddy.png"
            />
          </div>
          <div className="vivid pt-[25px] text-4xl text-black">
            <b className="self-stretch font-barlow whitespace-nowrap z-[1]">
              <span>FM</span>
              <span className="text-colorPink">Auxi</span>
            </b>
          </div>
        </div>
      </Link>
      <div className="navigation flex flex-row items-center gap-5">
        <Link
          to="/"
          className={`no-underline accueil text-slate-700 font-barlow font-medium ${
            isActive("/") ? "border-b-2 border-lawngreen" : ""
          }`}
        >
          Accueil
        </Link>
        <Link
          to="/abouts"
          className={`no-underline propos text-slate-700 font-barlow font-medium ${
            isActive("/abouts") ? "border-b-2 border-lawngreen" : ""
          }`}
        >
          À propos
        </Link>
        <Link
          to="/services"
          className={`no-underline propos text-slate-700 font-barlow font-medium ${
            isActive("/abouts") ? "border-b-2 border-lawngreen" : ""
          }`}
        >
          Services
        </Link>
        {/* <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button
            className={`no-underline tea cursor-pointer bg-transparent w-full text-slate-700 text-[18px] font-barlow font-medium ${
              isActive("/services") ? "border-b-2 border-lawngreen" : ""
            }`}
          >
            Services
          </button>
          {isDropdownOpen && (
            <div className="absolute mt-2 bg-white border border-gray-200 rounded shadow-lg w-80">
              <Link
                to="/services"
                className={`no-underline block px-4 py-2 hover:bg-colorPink text-slate-700 font-barlow font-medium ${
                  isActive("/services") ? "border-b-2 border-lawngreen" : ""
                }`}
              >
                <div className=" flex flx-row justify-start items-start">
                  <div className="">
                    <img
                      className="w-6 mr-2"
                      src="/icons8-case-à-cocher-vérifiée-30.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <span className="font-barlow font-normal text-[15px]">
                      Développementde projets digitaux sur mesure
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                to="/info-dev"
                className={`no-underline block px-4 py-2 hover:bg-colorPink text-slate-700 font-barlow font-medium ${
                  isActive("/services/service2")
                    ? "border-b-2 border-lawngreen"
                    : ""
                }`}
              >
                <div className=" flex flx-row justify-start items-start">
                  <div className="">
                    <img
                      className="w-6 mr-2"
                      src="/icons8-case-à-cocher-vérifiée-30.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <span className="font-barlow font-normal text-[15px]">
                      Infogérence et DevOps
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                to="/data-science"
                className={`no-underline block px-4 py-2 hover:bg-colorPink text-slate-700 font-barlow font-medium ${
                  isActive("/services/service3")
                    ? "border-b-2 border-lawngreen"
                    : ""
                }`}
              >
                <div className=" flex flx-row justify-start items-start">
                  <div className="">
                    <img
                      className="w-6 mr-2"
                      src="/icons8-case-à-cocher-vérifiée-30.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <span className="font-barlow font-normal text-[15px]">
                      Data science
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div> */}
        <Link
          to="/blogs"
          className={`no-underline projets text-slate-700 font-barlow font-medium ${
            isActive("/blogs") ? "border-b-2 border-lawngreen" : ""
          }`}
        >
          Blog
        </Link>
        <Link
          to="/joindre"
          className={`no-underline projets text-slate-700 font-barlow font-medium ${
            isActive("/joindre") ? "border-b-2 border-lawngreen" : ""
          }`}
        >
          Nous joindre
        </Link>
      </div>
      <div className="flex flex-row gap-10">
        {/* <div className="devis self-stretch py-6">
          <button
            onClick={openNav}
            className="cursor-pointer flex gap-3 font-barlow font-medium text-xl text-black py-2 px-6 w-66 bg-transparent border-2 border-solid border-colorPink rounded-lg hover:bg-colorPink"
          >
            Wedonate
          </button>
        </div> */}
        <div className="devis self-stretch py-6">
          <button
            onClick={openNav}
            className="cursor-pointer flex gap-3 font-barlow font-medium text-xl text-white py-2 px-6 w-66 bg-colorPink rounded-lg hover:bg-limegreen-300"
          >
            We donnate <img src="/icons8-flèche-24.png" alt="" />
          </button>
        </div>
      </div>
      <div className="menu hidden " onClick={toggleMenu}>
        <img className="w-12 h-12" src="/icons8-menu-50.png" alt="Menu" />
      </div>

      {isMenuOpen && (
        <div className="mobile-menu flex flex-col items-start gap-5 p-5 bg-white shadow-md absolute top-full left-0 right-0">
          <Link
            to="/"
            className={`no-underline tea hover:bg-colorPink w-full text-slate-700 font-barlow font-medium ${
              isActive("/") ? "border-b-2 border-lawngreen" : ""
            }`}
          >
            Accueil
          </Link>
          <Link
            to="/abouts"
            className={`no-underline tea hover:bg-colorPink w-full text-slate-700 font-barlow font-medium ${
              isActive("/abouts") ? "border-b-2 border-lawngreen" : ""
            }`}
          >
            À propos
          </Link>
          <Link
            to="/services"
            className={`no-underline tea hover:bg-colorPink w-full text-slate-700 font-barlow font-medium ${
              isActive("/services") ? "border-b-2 border-lawngreen" : ""
            }`}
          >
            Services
          </Link>
          <Link
            to="/blogs"
            className={`no-underline tea hover:bg-colorPink w-full text-slate-700 font-barlow font-medium ${
              isActive("/blogs") ? "border-b-2 border-lawngreen" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            to="/joindre"
            className={`no-underline tea hover:bg-colorPink w-full text-slate-700 font-barlow font-medium ${
              isActive("/joindre") ? "border-b-2 border-lawngreen" : ""
            }`}
          >
            Rejoignez-nous
          </Link>
        </div>
      )}

      <Overlay
        isOpen={isNavOpen}
        closeNav={closeNav}
        handleSubmit={handleSubmit}
        formData={formData}
        handleInputChange={handleInputChange}
      />
    </header>
  );
};

export default Navbar;
