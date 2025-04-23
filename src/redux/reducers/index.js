
const initialState = {
  competenze: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP", "REACT", "REDUX"],
  formazione: [
    {
      scuola: "Istituto Superiore TopoGiggius",
      titolo: "Diploma di Maturità",
      anno: "2015",
      img: "https://placedog.net/60/60",
    },
  ],
  modalContent: {
    title: "",
    bodyType:"",
    footer:"",
    show: false
  }
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AGGIUNGI_COMPETENZA":
      return {
        ...state,
        competenze: [...state.competenze, action.payload],
      }
    case "AGGIUNGI_FORMAZIONE":
      return {
        ...state,
        formazione: [...state.formazione, action.payload],
      }
      case "OPEN_DYNAMIC_MODAL":
        return {
          ...state,
          modalContent: action.payload,
      }
      case "CLOSE_DYNAMIC_MODAL":
        return {
          ...state,
          modalContent: initialState.modalContent,
      }

    default:
      return state
  }
}

export default mainReducer
