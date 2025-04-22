import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Sidebar = () => {
  retunr(
    <>
      {/* lingua e link profilo*/}
      <Container className="rounded rounded-2 border-1 border-dark-subtle p-1">
        <Row>
          <Col xs={12}>
            <h3>Lingua del profilo</h3>
            <i class="bi bi-pen"></i>
          </Col>
          <Row>
            <Col>
              <p>Italiano</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h3>Profilo pubblico e URL</h3>
              <i class="bi bi-pen"></i>
            </Col>
            <Row>
              <Col>
                <a href="https://www.linkedin.com/">Link-profilo</a>
              </Col>
            </Row>
          </Row>
        </Row>
      </Container>

      {/* Persone che potresti conoscere */}
      <Container className="rounded rounded-2 border-1 border-dark-subtle p-1">
        <Row>
          <Col xs={12}>
            <h4>Persone che potresti conoscere</h4>
            <i class="bi bi-eye-fill"></i>
            <p>Dal tuo settore</p>
            <br className=" border-1 border-dark-subtle" />

            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>
                  <strong>Nome Cognome</strong>
                </Card.Title>
                <Card.Text>
                  Epicodere presso <strong>Epicode</strong>
                </Card.Text>
                <Button className="rounded rounded-2 border-1 border-dark-subtle">
                  {" "}
                  <i class="bi bi-person-add"></i> Collegati
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Annuncio */}
      <Container className="rounded rounded-2 border-1 border-dark-subtle p-1">
        <Row>
          <Col xs={12}>
            <img
              src="https://media.licdn.com/media/AAYABATPAAgAAQAAAAAAAKwYrfHUPkoBQGmwnaG71Ps_5Q.png"
              alt="Annuncio"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sidebar;
