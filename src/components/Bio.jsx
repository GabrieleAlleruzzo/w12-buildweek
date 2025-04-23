import React, { useState } from "react"; // Importare useState
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap"; // Importare Dropdown
import "../style/Bio.css";
import avatarVuoto from "../assets/avatarVuoto.webp";
import coverImage from "../assets/coverImage.png";
import { useDispatch } from "react-redux";

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
    <div className="bio-wrapper">
      <div
        className="cover-image"
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <span className="camera-icon">
          <i className="bi bi-camera"></i>
        </span>
      </div>

      <Container className="bio-container">
        <div className="mt-3">
          <div className="user-image">
            <img src={avatarVuoto} alt="Foto profilo" />
          </div>
        </div>
        <Row>
          <Col xs="8">
            <h2 className="profile-name">Nome Cognome</h2>
            <p className="profile-role">Web Developer</p>
            <p className="profile-location">Roma, Lazio • Italia</p>
          </Col>
        </Row>

        <Row className="button-row">
          <Col xs="auto">
            <Button
              variant="primary"
              className="rounded-pill"
              onClick={handleDropdownToggle1}
            >
              Disponibile per
            </Button>
            {/* Dropdown Menu */}
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

          <Col xs="auto">
            <Button
              variant="outline-primary"
              className="rounded-pill"
              onClick={openAddProfilo}
            >
              Aggiungi Sezione Del Profilo
            </Button>
          </Col>

          <Col xs="auto">
            <Button
              variant="outline-primary"
              className="rounded-pill"
              onClick={openImproveProfilo}
            >
              Migliora Profilo
            </Button>
          </Col>

          <Col xs="auto">
            <Button
              variant="outline-secondary"
              className="rounded-pill"
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
