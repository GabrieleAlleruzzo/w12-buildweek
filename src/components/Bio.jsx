import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/Bio.css";
import avatarVuoto from "../assets/avatarVuoto.webp";
import coverImage from "../assets/coverImage.png";

const Bio = () => {
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
        <Row className="mt-3">
          <div className="user-image">
            <img src={avatarVuoto} alt="Foto profilo" />
          </div>
        </Row>
        <Row>
          <Col xs="8">
            <h2 className="profile-name">Nome Cognome</h2>
            <p className="profile-role">Web Developer</p>
            <p className="profile-location">Roma, Lazio • Italia</p>
          </Col>
        </Row>

        <Row className="button-row">
          <Col xs="auto">
            <Button variant="primary" className="rounded-pill">
              Disponibile per
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="outline-primary" className="rounded-pill">
              Aggiungi Sezione Del Profilo
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="outline-primary" className="rounded-pill">
              Migliora Profilo
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="outline-secondary" className="rounded-pill">
              Risorse
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bio;
