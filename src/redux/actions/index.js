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
