const initialState = {
    name: "",
    surname: "",
    title: "",
    area: "",
    image: "",
    loading: false,
    error: null,
  };
  
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      // Aggiornamento del profilo
      case "GET_PROFILE_ME":
        return {
          ...state,
          name: action.payload.name,
          surname: action.payload.surname,
          title: action.payload.title,
          area: action.payload.area,
          image: action.payload.image,
          loading: false,
          error: null,
        };
  
      //  Upload immagine: inizio richiesta
      case "UPLOAD_PROFILE_PICTURE_REQUEST":
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      //  Upload immagine: successo
      case "UPLOAD_PROFILE_PICTURE_SUCCESS":
        return {
          ...state,
          image: action.payload,
          loading: false,
          error: null,
        };
  
      // Upload immagine: errore
      case "UPLOAD_PROFILE_PICTURE_ERROR":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default profileReducer;
  