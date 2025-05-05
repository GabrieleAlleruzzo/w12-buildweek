import { useSelector, useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import AddProfiloBody from "./componentsBio/AddProfileBody";
import ImprovedProfileBody from "./componentsBio/ImprovedProfiloBody";
import EditProfileBody from "./componentsBio/EditProfileBody";
const getModalBody = (bodyType, profilo) => {
  switch (bodyType) {
    case "aggiungiProfilo":
      return <AddProfiloBody />;
    case "miglioraProfilo":
      return <ImprovedProfileBody />;
    case "modificaProfilo":
      return <EditProfileBody profilo={profilo} />;
    default:
      return <p>Contenuto non disponibile</p>;
  }
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
        {getModalBody[modalData?.bodyType] || <p>Contenuto non disponibile</p>}
        {getModalBody(modalData?.bodyType, modalData?.profilo)}
      </Modal.Body>

      {modalData?.footer && <Modal.Footer></Modal.Footer>}
    </Modal>
  );
};

export default DynamicModal;
