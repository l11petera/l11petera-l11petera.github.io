import React, { FunctionComponent, useState } from "react";
import { ToastContainer } from "react-toastify";

interface OverlayProps {
  isOpen: boolean;
  closeNav: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  formData: {
    name: string;
    email: string;
    society: string;
    fonction: string;
    besoin: string;
    budget: string;
    message: string;
    file: string;
  };
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Overlay: FunctionComponent<OverlayProps> = ({
  isOpen,
  closeNav,
  handleSubmit,
  formData,
  handleInputChange,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData1, setFormData1] = useState({
    budget: "",
    currency: "Ariary", // Définissez la devise par défaut ici
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    // Ajoutez ici des styles pour indiquer que le glisser-déposer est possible (par exemple, changer la couleur de fond du label).
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const currency = event.target.value;
    setFormData1((prevData) => ({ ...prevData, currency }));
  };

  const handleDivClick = () => {
    setSelectedFile(null); // Réinitialise le fichier sélectionné
  };

  const navbarOptions = [
    { value: "VB", label: "Votre besoin" },
    { value: "US", label: "Application web" },
    { value: "CA", label: "Application mobile" },
  ];

  const servicesPagesOptions = [
    { value: "VB", label: "Votre besoin" },
    { value: "RE", label: "Refonte site web" },
    { value: "IF", label: "Infogérance" },
    // Ajoutez d'autres options ici si nécessaire
  ];

  const options = isOpen ? navbarOptions : servicesPagesOptions;

  return (
    <div id="myNav" className={`overlay  h-full ${isOpen ? "open" : ""}`}>
      <button className="closebtn z-10" onClick={closeNav}>
        &times;
      </button>

      <section id="contact" className="font-barlow h-full">
        <section className=" h-full overflow-y-auto max-w-full text-justify text-xl text-black font-barlow">
          <div className="py-10 my-10 z-[2] text-lg">
            <form
              action=""
              onSubmit={handleSubmit}
              className="py-0 px-10 box-border h-full max-w-full"
            >
              <div>
                <h1 className="text-21xl">
                  Demandez un <span className="text-colorPink">dévis</span>
                </h1>
              </div>
              <div className="self-stretch flex flex-row items-center justify-end">
                <div className="flex-1 flex flex-col items-start justify-start gap-[55px] max-w-full">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
                    <input
                      className="w-full h-[50px] text-[15px] bg-transparent border-2 border-solid border-gainsboro flex-1 rounded-10xs px-4 box-border font-barlow font-semibold text-white min-w-[247px] max-w-full z-[1]"
                      placeholder="Nom et prénom"
                      value={formData.name}
                      onChange={handleInputChange}
                      name="name"
                      type="text"
                      required
                    />
                    <input
                      className="w-full h-[50px] text-[15px] bg-transparent border-2 border-solid border-gainsboro flex-1 rounded-10xs px-4 box-border font-barlow font-semibold text-white min-w-[247px] max-w-full z-[1]"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      name="email"
                      type="text"
                      required
                    />
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
                    <input
                      className="w-full h-[50px] text-[15px] bg-transparent border-2 border-solid border-gainsboro flex-1 rounded-10xs px-4 box-border font-barlow font-semibold text-white min-w-[247px] max-w-full z-[1]"
                      placeholder="Société"
                      value={formData.society}
                      onChange={handleInputChange}
                      name="society"
                      type="text"
                      required
                    />
                    <input
                      className="w-full h-[50px] text-[15px] bg-transparent border-2 border-solid border-gainsboro flex-1 rounded-10xs px-4 box-border font-barlow font-semibold text-white min-w-[247px] max-w-full z-[1]"
                      placeholder="Fonction"
                      value={formData.fonction}
                      onChange={handleInputChange}
                      name="fonction"
                      type="text"
                      required
                    />
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
                    {isOpen && (
                      <select
                        id="countries"
                        className="w-full h-[50px] text-[15px] bg-transparent border-2 border-solid border-gainsboro flex-1 rounded-10xs px-4 box-border font-barlow font-semibold text-white min-w-[247px] max-w-full z-[1]"
                        onChange={handleCurrencyChange}
                        value={formData1.currency}
                      >
                        {options.map((option) => (
                          <option
                            className="bg-[#96b74a]"
                            key={option.value}
                            value={option.value}
                          >
                            {option.label}
                          </option>
                        ))}
                      </select>
                    )}
                    <div className="flex flex-row h-full items-center justify-center w-1/2">
                      <div className="flex flex-row gap-0 w-full">
                        <select
                          className="w-1/3 h-[50px] text-[15px] bg-transparent border-2 border-solid border-gainsboro rounded-10xs px-4 box-border font-barlow font-semibold text-white z-[1]"
                          value={formData1.currency}
                          onChange={handleCurrencyChange}
                          name="currency"
                        >
                          <option value="Ariary" className="bg-[#96b74a]">
                            Ariary
                          </option>
                          <option value="Dollar" className="bg-[#96b74a]">
                            Dollar
                          </option>
                          <option value="Euros" className="bg-[#96b74a]">
                            Euro
                          </option>
                        </select>
                        <input
                          className="w-full h-[50px] text-[15px] bg-transparent border-2 border-solid border-gainsboro flex-1 rounded-10xs px-4 box-border font-barlow font-semibold text-white min-w-[247px] max-w-full z-[1] pl-[33.33%]"
                          placeholder="Votre budget"
                          defaultValue={formData.budget}
                          onChange={(e) =>
                            setFormData1({
                              ...formData1,
                              budget: e.target.value,
                            })
                          }
                          name="budget"
                          type="number"
                          required
                        />
                      </div>
                      {selectedFile && (
                        <p>Fichier sélectionné : {selectedFile.name}</p>
                      )}

                      {selectedFile && (
                        <p>Fichier sélectionné : {selectedFile.name}</p>
                      )}
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[45.5px] max-w-full">
                    <textarea
                      className="bg-transparent border-2 border-solid border-gainsboro h-[154px] w-auto self-stretch rounded-10xs flex flex-row items-start justify-start py-[15px] px-3 box-border font-barlow font-semibold text-white z-[1]"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      name="message"
                      rows={14}
                      cols={39}
                      required
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[45.5px] max-w-full">
                    <div
                      className="flex flex-col border-2 border-dashed rounded-md border-gainsboro h-[250px] items-center justify-center w-full"
                      onClick={handleDivClick}
                    >
                      <input
                        id="file-upload"
                        className="hidden"
                        onChange={handleFileChange}
                        required
                        type="file"
                      />
                      <label
                        htmlFor="file-upload"
                        className="bg-transparent h-[100px] w-auto self-stretch flex flex-col gap-4 items-center justify-center py-[15px] px-3 box-border font-barlow font-semibold text-white z-[1] cursor-pointer relative"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                      >
                        <img
                          src="/icons8-attachment-mail-64.png"
                          className="h-20 w-20"
                          alt=""
                        />
                        <span> Uploader fichier dans l'input</span>
                      </label>
                      {selectedFile && (
                        <p>Fichier sélectionné : {selectedFile.name}</p>
                      )}
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[45.5px] max-w-full">
                    <button
                      type="submit"
                      className="cursor-pointer [border:none] text-white text-xl font-bold py-[19px] px-5 bg-lawngreen self-stretch rounded-10xs flex flex-row items-start justify-center box-border max-w-full z-[1] hover:bg-limegreen-300"
                    >
                      Envoyer
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
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
      </section>
    </div>
  );
};

export default Overlay;
