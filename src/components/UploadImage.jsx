import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProfiloMe } from "../redux/actions";

const UploadImage = ({ userId }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage("Seleziona un'immagine prima di caricare.");
      return;
    }

    const formData = new FormData();
    formData.append("profile", selectedFile);

    setLoading(true);
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`, {
        method: "POST",
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA4OTY3MDk1ODc4ZjAwMTVmNGExYjkiLCJpYXQiOjE3NDUzOTMyNjQsImV4cCI6MTc0NjYwMjg2NH0.dVSiLU98dFjQrSCo3MLWZvbclhG9fHU5ZfGfsApK7EM"
        },
        body: formData
      });

      if (!response.ok) throw new Error("Errore durante il caricamento dell'immagine");

      setMessage("Immagine caricata con successo!");
      setSelectedFile(null);

   
      dispatch(fetchProfiloMe());

    } catch (error) {
      console.error(error);
      setMessage("Errore nel caricamento.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-3">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Caricamento..." : "Carica immagine"}
      </button>
      <p>{message}</p>
    </div>
  );
};

export default UploadImage;
