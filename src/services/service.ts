// emailService.ts
import axios from "axios";
import { toast } from "react-toastify";
import { api } from "./apiConfig"; // Importer la variable api

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
  toast.error("😲 Échec de l'envoi de mail", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const sendEmail = async (formData: any) => {
  try {
    console.log(`Sending request to ${api}contact`);
    const response = await axios.post(`${api}contact`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      notifySuccess();
      console.log("E-mail envoyé avec succès");
    } else {
      console.error("Erreur lors de l'envoi de l'e-mail", response);
    }
  } catch (error) {
    notifyError();
    console.error("Erreur lors de la requête", error);
  }
};
