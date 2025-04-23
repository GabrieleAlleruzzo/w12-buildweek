export const aggiungiCompetenza = (competenza) => {
  return {
    type: "AGGIUNGI_COMPETENZA",
    payload: competenza,
  }
}

export const aggiungiFormazione = (formazione) => {
  return {
    type: "AGGIUNGI_FORMAZIONE",
    payload: formazione,
  }
}


export const getProfiloMe = (data) => ({
  type: "GET_PROFILE_ME",
  payload: data,
});

export const fetchProfiloMe =()=>{
  return async (dispatch) =>{
    try {
      const response= await fetch ("https://striveschool-api.herokuapp.com/api/profile/me",{
        headers: {
          Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA4OTY3MDk1ODc4ZjAwMTVmNGExYjkiLCJpYXQiOjE3NDUzOTMyNjQsImV4cCI6MTc0NjYwMjg2NH0.dVSiLU98dFjQrSCo3MLWZvbclhG9fHU5ZfGfsApK7EM"
        }
      })
      if (response.ok) {
        const data= await response.json();
        dispatch(
          getProfiloMe({
           
              name: data.name,
              surname: data.surname,
              title: data.title,
              area: data.area,
             image: data.image,
          })
        );
      } else {
        throw new Error("Errore nel recupero del profilo");
      }
      
    }
    catch (error) {
      console.error("Errore nella fetch profilo:", error);
    }
  };

  }
