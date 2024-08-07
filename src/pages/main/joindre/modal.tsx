import React, { useEffect, useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

interface MyModalProps {
  visible: boolean;
  onClose: () => void;
}

const MyModal: React.FC<MyModalProps> = ({ visible, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible && modalRef.current) {
      modalRef.current.querySelector("input")?.focus();
    }
  }, [visible]);

  const handleOutsideClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement; // Conversion de type
    if (target.id === "container") onClose();
  };

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [sujet, setSujet] = useState("");
  const [autre, setAutre] = useState("");
  const [message, setMessage] = useState("");

  const handleNomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNom(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSujetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSujet(event.target.value);
  };

  const handleAutreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAutre(event.target.value);
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = { nom, email, sujet, autre, message };

    try {
      const response = await fetch("http://localhost:3001/envoyer-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        notifySuccess();
        console.log("E-mail envoyé avec succès");
      } else {
        console.error("Erreur lors de l'envoi de l'e-mail");
      }
    } catch (error) {
      notifyError();
      console.error("Erreur lors de la requête", error);
    }
  };
  const notifySuccess = () =>
    toast.success("🦄 Email envoyé avec succès!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyError = () =>
    toast.error("😲 Échec de l'envoye de mail", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return visible ? (
    <div
      id="container"
      onClick={handleOutsideClick}
      className="fixed inset-2 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center pt-1 mt-20 z-10"
    >
      <form
        action=""
        onSubmit={handleSubmit}
        className="h-full self-stretch bg-white py-1 pr-6 rounded-md  pl-[26px] box-border max-w-full"
      >
        <div className="flex justify-center font-barlow">
          <h1>
            Déposer votre <span className="text-lawngreen">CV</span>
          </h1>
        </div>
        <div className="flex flex-col items-start justify-start gap-[25px] max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
            <input
              className="w-full border-[1px] border-solid border-dimgray-200 [outline:none] h-[50px] text-[15px] bg-transparent flex-1 rounded-10xs px-4 box-border font-barlow font-semibold  text-dimgray-200 min-w-[247px] max-w-full z-[1]"
              placeholder="Nom et prénom"
              value={nom}
              onChange={handleNomChange}
              type="text"
              required
            />
            <input
              className="w-full border-[1px] border-solid border-dimgray-200 [outline:none] h-[50px] text-[15px] bg-transparent flex-1 rounded-10xs px-4 box-border font-barlow font-semibold  text-dimgray-200 min-w-[247px] max-w-full z-[1]"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              type="email"
              required
            />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
            <input
              className="w-full border-[1px] border-solid border-dimgray-200 [outline:none] h-[50px] text-[15px] bg-transparent flex-1 rounded-10xs px-4 box-border font-barlow font-semibold  text-dimgray-200 min-w-[247px] max-w-full z-[1]"
              placeholder="Sujet"
              value={sujet}
              onChange={handleSujetChange}
              type="text"
              required
            />
            <input
              className="w-full border-[1px] border-solid border-dimgray-200 [outline:none] h-[50px] text-[15px] bg-transparent flex-1 rounded-10xs px-4 box-border font-barlow font-semibold  text-dimgray-200 min-w-[247px] max-w-full z-[1]"
              placeholder="Autre"
              value={autre}
              onChange={handleAutreChange}
              type="text"
              required
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full">
            <textarea
              className="border-[1px] border-solid border-dimgray-200 bg-transparent h-[84px] w-auto [outline:none] self-stretch rounded-10xs flex flex-row items-start justify-start py-[15px] px-3 box-border font-montserrat font-semibold  text-dimgray-200 z-[1]"
              placeholder="Message"
              value={message}
              onChange={handleMessageChange}
              rows={14}
              cols={39}
              required
            />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] w-full">
            <div className="mt-2 flex justify-center rounded-md w-full border-[1.5px] border-dashed border-dimgray-200 dark:border-dashed dark:border-white ">
              <div className="py-3">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md dark:bg-gray-900 bg-white font-semibold text-dimgray-200 focus-within:outline-none focus-within:ring-2 focus-within:ring-lawngreen focus-within:ring-offset-2 hover:text-lawngreen"
                >
                  <span>Glisser-déposer votre CV</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="cursor-pointer [border:none] w-full text-white text-xl font-semibold py-[13px] px-5 bg-lawngreen self-stretch rounded-10xs flex flex-row items-start justify-center box-border max-w-full z-[1] hover:bg-limegreen-300"
            >
              Envoyer
            </button>
          </div>
        </div>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  ) : null;
};
export default MyModal;
