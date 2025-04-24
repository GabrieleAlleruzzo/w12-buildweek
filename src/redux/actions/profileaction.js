import { ProfileAPI } from "../components/api/profile";
import aggiornaProfilo from "../redux/actions/profileActions";

export const aggiornaProfilo = (profiloAggiornato) => {
  return async (dispatch) => {
    try {
      const data = await ProfileAPI(profiloAggiornato);

      dispatch({
        type: "GET_PROFILE_ME",
        payload: {
          name: data.name,
          surname: data.surname,
          title: data.title,
          area: data.area,
          image: data.image,
        },
        
      });
      return data;
    } catch (error) {
      console.error("Errore nella dispatch PUT:", error);
      throw error;
    }
  };
}; 
