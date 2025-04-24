import { useState } from "react";
import { useDispatch } from "react-redux";
import aggiornaProfilo from "../../redux/actions/profileAction";

import { Form, Button } from "react-bootstrap";

const EditProfileBody = ({ profilo }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(profilo);

  // Funzione per aggiornare lo stato formData quando l'utente cambia un campo
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    dispatch({ type: "CLOSE_DYNAMIC_MODAL" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(aggiornaProfilo(formData));
    dispatch({ type: "CLOSE_DYNAMIC_MODAL" });
  };
  console.log(formData.title);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formSurname" className="mt-2">
        <Form.Label>Cognome</Form.Label>
        <Form.Control
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formTitle" className="mt-2">
        <Form.Label>Ruolo</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formArea" className="mt-2">
        <Form.Label>Area</Form.Label>
        <Form.Control
          type="text"
          name="area"
          value={formData.area}
          onChange={handleChange}
        />

        <Button
          className="mt-3"
          variant="primary"
          onClick={async () => {
            try {
              const profiloAggiornato = await dispatch(
                aggiornaProfilo(formData)
              );
              console.log("Profilo aggiornato:", profiloAggiornato);

              // opzionale se vuoi ricaricare tutto

              handleClose(); // chiudi solo dopo tutto
            } catch (error) {
              console.error("Errore nell'aggiornamento:", error);
              // qui puoi mostrare un toast o alert
            }
          }}
        >
          Salva modifiche
        </Button>
      </Form.Group>
    </Form>
  );
};

export default EditProfileBody;
