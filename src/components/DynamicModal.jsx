import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import AddProfiloBody from "./componentsBio.jsx/AddProfileBody";
import ImprovedProfileBody from "./componentsBio.jsx/ImprovedProfiloBody";

const modalBodies = {
  aggiungiProfilo: <AddProfiloBody />,
  miglioraProfilo: <ImprovedProfileBody />,
};

const DynamicModal = () => {
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state.modalContent);

  const handleClose = () => {
    dispatch({ type: "CLOSE_DYNAMIC_MODAL" });
  };

  return (
    <Modal show={modalData?.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalData?.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {modalBodies[modalData?.bodyType] || <p>Contenuto non disponibile</p>}
      </Modal.Body>

      {modalData?.footer && (
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salva modifiche
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default DynamicModal;
