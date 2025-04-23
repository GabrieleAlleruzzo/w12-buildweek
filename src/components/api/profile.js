export const ProfileAPI = async (ProfiloAggiornato) => {
    try {
        const response = await fetch ("https://striveschool-api.herokuapp.com/api/profile/",{
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA4Y2QwMTk1ODc4ZjAwMTVmNGExZTciLCJpYXQiOjE3NDU0MDcyMzMsImV4cCI6MTc0NjYxNjgzM30.h9l--SCZDROv8wqUAn2r0_imBXnnIugn3yt4Mv1X21A"
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

