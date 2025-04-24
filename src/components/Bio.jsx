import React, { useState } from "react"; // Importare useState
import { Container, Row, Col, Button, Dropdown, Modal } from "react-bootstrap"; // Importare Dropdown
import "../style/Bio.css";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProfiloMe } from "../redux/actions";
import UploadImage from './UploadImage';

const modalContents = {
  content1: {
    title: "Aggiungi al Profilo",
    bodyType: "aggiungiProfilo",
    footer: "",
    show: true,
  },
  content2: {
    title: "Migliora il tuo profilo con Premium",
    bodyType: "miglioraProfilo",
    footer: "",
    show: true,
  },
};

const Bio = () => {
  const dispatch = useDispatch();
  const profilo = useSelector((state) => state.profiloMe);

  const [showImageModal, setShowImageModal] = useState(false);
const handleOpenImageModal = () => setShowImageModal(true);
const handleCloseImageModal = () => setShowImageModal(false);

  useEffect(() => {
    dispatch(fetchProfiloMe());
  }, [dispatch]);

  const openAddProfilo = () => {
    dispatch({
      type: "OPEN_DYNAMIC_MODAL",
      payload: modalContents.content1,
    });
  };

  const openImproveProfilo = () => {
    dispatch({
      type: "OPEN_DYNAMIC_MODAL",
      payload: modalContents.content2,
    });
  };

  const [showMenuDisponibilePer, setShowMenuDisponibilePer] = useState(false); // Aggiunto useState
  const [showMenuRisorse, setShowMenuRisorse] = useState(false); // Aggiunto useState

  const handleDropdownToggle1 = () => {
    setShowMenuDisponibilePer(!showMenuDisponibilePer);
  };

  const handleDropdownToggle2 = () => {
    setShowMenuRisorse(!showMenuRisorse);
  };

  return (
    <div className="bio-wrapper bg-white rounded-2 border m-3 p-3">

    <div
        className="cover-image"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1068554/pexels-photo-1068554.jpeg)`,
        }}
      >
        
            <span className="camera-icon">
          <i className="bi bi-camera"></i>
        </span>
      </div>

      <Modal show={showImageModal} onHide={handleCloseImageModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Carica una nuova immagine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UploadImage userId={"6808967095878f0015f4a1b9"} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseImageModal}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
      

      <Container className="bio-container">
        <div className="d-flex flex-column align-items-start">
          <div className="user-image">
            <img src={profilo.image} alt="Foto profilo" className="d-block" />
          </div>
          <div className="w-100 d-flex justify-content-end">
            {/* giusto */}
          <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className="bg-transparent text-black border-0">
                  <i className="bi bi-plus-lg p-2 fs-4"></i>
              </Dropdown.Toggle>
               <Dropdown.Menu>
               <Dropdown.Item onClick={handleOpenImageModal}>Carica nuova immagine</Dropdown.Item>
              </Dropdown.Menu>
           </Dropdown>


            <i
              className="bi bi-pen p-2 fs-5"
              style={{ cursor: "pointer" }}
              onClick={() =>
                dispatch({
                  type: "OPEN_DYNAMIC_MODAL",
                  payload: {
                    title: "Modifica Profilo",
                    bodyType: "modificaProfilo",
                    show: true,
                    footer: true,
                    profilo: profilo,
                  },
                })
              }
            />
          </div>
        </div>
        <Row className=" mt-2">
          <Col xs="12" sm="8">
            <h2 className="profile-name">
              {profilo.name} {profilo.surname}
            </h2>
            <p className="profile-role">{profilo.title}</p>
            <p className="profile-location">{profilo.area}</p>
          </Col>
        </Row>

        <Row className=" gap-2">
          <Col xs={12} md="auto" className="mb-2 mb-md-0">
            <Button
              variant="primary"
              className="rounded-pill btn-mobile-full "
              onClick={handleDropdownToggle1}
            >
              Disponibile per
            </Button>
            {showMenuDisponibilePer && (
              <Dropdown.Menu className="custom-dropdown-menu" show>
                <Dropdown.Item href="#action1" className="custom-dropdown-item">
                  <h5>Cambiare Lavoro</h5>
                  <p>
                    Mostra ai recruiter e ad altri che sei disponibile a
                    lavorare
                  </p>
                </Dropdown.Item>
                <Dropdown.Item href="#action2" className="custom-dropdown-item">
                  <h5>Selezione del Personale</h5>
                  <p>
                    Fai sapere che stai facendo selezione e attrai i candidati
                    qualificati
                  </p>
                </Dropdown.Item>
                <Dropdown.Item href="#action3" className="custom-dropdown-item">
                  <h5>Servizi Offerti</h5>
                  <p>
                    Metti in risalto i servizi che offri, così i nuovi clienti
                    potranno trovarti
                  </p>
                </Dropdown.Item>
              </Dropdown.Menu>
            )}
          </Col>

          <Col xs={12} md="auto" className="mb-2 mb-md-0">
            <Button
              variant="outline-primary"
              className="rounded-pill btn-mobile-full"
              onClick={openAddProfilo}
            >
              Aggiungi Sezione Del Profilo
            </Button>
          </Col>

          <Col xs={12} md="auto" className="mb-2 mb-md-0">
            <Button
              variant="outline-primary"
              className="rounded-pill btn-mobile-full"
              onClick={openImproveProfilo}
            >
              Migliora Profilo
            </Button>
          </Col>

          <Col xs={12} md="auto" className="mb-2 mb-md-0">
            <Button
              variant="outline-secondary"
              className="rounded-pill btn-mobile-full"
              onClick={handleDropdownToggle2}
            >
              Risorse
            </Button>
            {showMenuRisorse && (
              <Dropdown.Menu className="custom-dropdown-menu" show>
                <Dropdown.Item href="#action1" className="custom-dropdown-item">
                  <p>
                    {" "}
                    <i class="bi bi-arrow-90deg-right"></i> Invia il profilo in
                    un messaggio
                  </p>
                </Dropdown.Item>
                <Dropdown.Item href="#action2" className="custom-dropdown-item">
                  <p>
                    {" "}
                    <i class="bi bi-download"></i> Salva come PDF
                  </p>
                </Dropdown.Item>
                <Dropdown.Item href="#action3" className="custom-dropdown-item">
                  <p>
                    {" "}
                    <i class="bi bi-person"></i> Informazioni Demografiche
                    Personali
                  </p>
                </Dropdown.Item>
                <Dropdown.Item href="#action4" className="custom-dropdown-item">
                  <p>
                    {" "}
                    <i class="bi bi-bookmark"></i> Elementi salvati
                  </p>
                </Dropdown.Item>
                <Dropdown.Item href="#action5" className="custom-dropdown-item">
                  <p>
                    {" "}
                    <i class="bi bi-newspaper"></i> Attività
                  </p>
                </Dropdown.Item>
                <Dropdown.Item href="#action6" className="custom-dropdown-item">
                  <p>
                    {" "}
                    <i class="bi bi-info-square"></i> Informazioni su questo
                    profilo
                  </p>
                </Dropdown.Item>
              </Dropdown.Menu>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bio;
