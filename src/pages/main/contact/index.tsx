import { FunctionComponent, useState } from "react";
// import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.scss";
import { sendEmail } from "../../../services/service";

const ContactPage: FunctionComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleNomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSujetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = { name, email, subject, message };
    await sendEmail(formData);
  };

  return (
    <section id="contact" className="font-barlow">
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
          Nous <span className="text-colorPink">contacter</span>
        </h1>
      </div>
      <section className="h-auto max-w-full text-justify text-xl text-black font-barlow">
        <div className="flex flex-row justify-center items-start gap-20 mx-24 px-10 contact">
          <div className="autre w-full">
            <div className="flex flex-row justify-center gap-2">
              <div className="w-auto h-[75px] mt-10 flex items-center justify-center rounded-full border-2 border-solid border-colorPink">
                <img
                  src="/icons8-blog-50.png"
                  className="w-14 h-14 px-2"
                  alt=""
                />
              </div>

              <div className="flex flex-col">
                <h2 className="text-16xl w-full">
                  <span className="font-normal">Vous pouvez toujours</span>{" "}
                  joindre
                  <span className="font-normal"> VividMind </span> via :
                </h2>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <img
                      className="w-[30px] h-[40px] object-cover grayscale"
                      loading="lazy"
                      alt=""
                      src="/gps-1@2x.png"
                    />
                    <div className="ml-6">
                      <p className="text-[15px] font-barlow">Madagascar</p>
                      <p className="text-[15px] font-barlow">
                        601 - Soahazo-Toliara
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="w-[30px] h-[25px] object-cover grayscale"
                      loading="lazy"
                      alt=""
                      src="/icons8-nouveau-message-50.png"
                    />
                    <div className="ml-6">
                      <p className="text-[15px] font-barlow">
                        contact@fmaux.mg
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="w-[30px] h-[30px] object-cover grayscale"
                      loading="lazy"
                      alt=""
                      src="/icons8-whatsapp-48.png"
                    />
                    <div className="ml-6">
                      <p className="text-[15px] font-barlow">
                        +261 34 69 058 74
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="w-[30px] h-[30px] object-cover grayscale"
                      loading="lazy"
                      alt=""
                      src="/icons8-linkedin-50.png"
                    />
                    <div className="ml-6">
                      <p className="text-[15px] font-barlow">FMAux MG</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form
            action=""
            onSubmit={handleSubmit}
            className="form h-full bg-white shadow-xl shadow-colorPink px-6 py-4 rounded-md box-border"
          >
            <div className="flex justify-center font-barlow">
              <h1>
                Contacter-<span className="text-lawngreen">nous</span>
              </h1>
            </div>
            <div className="inp flex flex-col items-start justify-start gap-5 max-w-full">
              <div className="inp0 self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
                <input
                  className="w-full border-[1px] border-solid border-dimgray-200 [outline:none] h-[50px] text-[15px] bg-transparent flex-1 rounded-10xs px-4 box-border font-barlow font-semibold text-dimgray-200 max-w-full z-[1]"
                  placeholder="Nom et prénom"
                  value={name}
                  onChange={handleNomChange}
                  type="text"
                  required
                />
                <input
                  className="w-full border-[1px] border-solid border-dimgray-200 [outline:none] h-[50px] text-[15px] bg-transparent flex-1 rounded-10xs px-4 box-border font-barlow font-semibold text-dimgray-200 max-w-full z-[1]"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  type="email"
                  required
                />
              </div>
              <div className="inp1 self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
                <input
                  className="w-full border-[1px] border-solid border-dimgray-200 [outline:none] h-[50px] text-[15px] bg-transparent flex-1 rounded-10xs px-4 box-border font-barlow font-semibold text-dimgray-200 max-w-full z-[1]"
                  placeholder="Sujet"
                  value={subject}
                  onChange={handleSujetChange}
                  type="text"
                  required
                />
              </div>
              <div className="inp2 self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full">
                <textarea
                  className="border-[1px] border-solid w-auto border-dimgray-200 bg-transparent h-[84px] [outline:none] self-stretch rounded-10xs flex flex-row items-start justify-start py-[15px] px-3 box-border font-barlow font-semibold text-dimgray-200 z-[1]"
                  placeholder="Message"
                  value={message}
                  onChange={handleMessageChange}
                  rows={14}
                  cols={39}
                  required
                />
              </div>
              <div className="inp-3 w-full">
                <button
                  type="submit"
                  className="cursor-pointer [border:none] w-full text-white text-xl font-semibold py-[13px] px-5 bg-colorPink self-stretch rounded-10xs flex flex-row items-start justify-center box-border max-w-full z-[1] hover:bg-limegreen-300"
                >
                  Envoyer
                </button>
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
  );
};

export default ContactPage;
