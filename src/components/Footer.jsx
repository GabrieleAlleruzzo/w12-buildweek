import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="footer-column">
            <a href="#">Informazioni</a>
            <a href="#">Informazioni sulla privacy</a>
            <a href="#">Privacy e condizioni</a>
            <a href="#">Sales Solutions</a>
            <a href="#">Centro sicurezza</a>
          </Col>
          <Col className="footer-column">
            <a href="#">Accessibilità</a>
            <a href="#">Carriera</a>
            <a href="#">Opzioni per gli annunci pubblicitari</a>
            <a href="#">Mobile</a>
          </Col>
          <Col className="footer-column">
            <a href="#">Talent Solutions</a>
            <a href="#">Soluzioni di marketing</a>
            <a href="#">Pubblicità</a>
            <a href="#">Piccole imprese</a>
          </Col>
        </Row>
        <Row className="footer-logo">
          <Col className="text-center text-muted">
            LinkedIn Corporation © {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
