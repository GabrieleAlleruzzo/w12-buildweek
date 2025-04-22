
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

    default:
      return state
  }
}

export default mainReducer
