export const ProfileAPI = async (ProfiloAggiornato) => {
    try {
        const response = await fetch ("https://striveschool-api.herokuapp.com/api/profile/",{
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA4OTY3MDk1ODc4ZjAwMTVmNGExYjkiLCJpYXQiOjE3NDUzOTMyNjQsImV4cCI6MTc0NjYwMjg2NH0.dVSiLU98dFjQrSCo3MLWZvbclhG9fHU5ZfGfsApK7EM"
            },
            body: JSON.stringify(ProfiloAggiornato)
        });
        if(!response.ok) {
            throw new Error ("Errore nella PUT del profilo")
        }
        return await response.json();
    }catch(error){
        console.error("Errore API aggiornaProfilo:", error)
        throw error;
    }

};

