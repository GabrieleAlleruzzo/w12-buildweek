import React, { useState } from "react";

const UploadImage = ({ userId }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");

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

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`, {
        method: "POST",
        headers: {
          Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA4Y2QwMTk1ODc4ZjAwMTVmNGExZTciLCJpYXQiOjE3NDU0MDcyMzMsImV4cCI6MTc0NjYxNjgzM30.h9l--SCZDROv8wqUAn2r0_imBXnnIugn3yt4Mv1X21A"
        },
        body: formData
      });

      if (!response.ok) throw new Error("Errore durante il caricamento dell'immagine");

      setMessage("Immagine caricata con successo!");
    } catch (error) {
      console.error(error);
      setMessage("Errore nel caricamento.");
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Carica immagine</button>
      <p>{message}</p>
    </div>
  );
};

export default UploadImage;
