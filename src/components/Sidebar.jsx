import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Sidebar = () => {
  return (
    <>
      <Container className="d-flex flex-column m-0 ">
        <Row>
          <Col>
            {/* lingua e link profilo*/}
            <Container className="rounded rounded-2 border border-light-subtle border border-2 m-1 p-4 ">
              <Row>
                <Col
                  xs={12}
                  className="d-flex flex-row justify-content-between"
                >
                  <h3>Lingua del profilo</h3>
                  <i className="bi bi-pen"></i>
                </Col>

                <Col>
                  <p>Italiano</p>
                </Col>
                {/* Separatore */}
                <div className="border-bottom border border-light-subtle border-1 my-4"></div>
                <Col
                  xs={12}
                  className="d-flex flex-row justify-content-between"
                >
                  <h3>Profilo pubblico e URL</h3>
                  <i className="bi bi-pen"></i>
                </Col>

                <Col>
                  <a href="https://www.linkedin.com/">
                    Link-profilo-nome-congome
                  </a>
                </Col>
              </Row>
            </Container>
            {/* Persone che potresti conoscere */}
            <Container className="rounded rounded-2 border border-light-subtle border border-2 m-1 mb-0 p-4 rounded-bottom-0 border-bottom-0">
              <Row>
                <Col xs={12}>
                  <h4>Persone che potresti conoscere</h4>
                  <Col
                    xs={12}
                    className="d-flex flex-row justify-content-start"
                  >
                    <i className="bi bi-eye-fill me-2"></i>
                    <p>Dal tuo settore</p>
                  </Col>
                  {/* Separatore */}
                  <div className="border-bottom border border-light-subtle border-1 my-4"></div>

                  {/* Card */}
                  <Card className="border border-0 d-flex flex-row">
                    <Col xs={3}>
                      <Card.Img
                        src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
                        className="rounded rounded-circle"
                      />
                    </Col>
                    <Col xs={9}>
                      <Card.Body>
                        <Card.Title>
                          <strong>Nome Cognome</strong>
                        </Card.Title>
                        <Card.Text>
                          Epicodere presso <strong>Epicode</strong>
                        </Card.Text>

                        <Button
                          variant="light"
                          className="rounded rounded-5 border-2 border-dark"
                        >
                          {" "}
                          <i className="bi bi-person-add"></i> Collegati
                        </Button>
                      </Card.Body>
                    </Col>
                  </Card>
                  {/* Fine card */}
                  {/* Separatore */}
                  <div className="border-bottom border border-light-subtle border-1 my-4"></div>

                  {/* Card */}
                  <Card className="border border-0 d-flex flex-row">
                    <Col xs={3}>
                      <Card.Img
                        src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
                        className="rounded rounded-circle"
                      />
                    </Col>
                    <Col xs={9}>
                      <Card.Body>
                        <Card.Title>
                          <strong>Nome Cognome</strong>
                        </Card.Title>
                        <Card.Text>
                          Epicodere presso <strong>Epicode</strong>
                        </Card.Text>

                        <Button
                          variant="light"
                          className="rounded rounded-5 border-2 border-dark"
                        >
                          {" "}
                          <i className="bi bi-person-add"></i> Collegati
                        </Button>
                      </Card.Body>
                    </Col>
                  </Card>
                  {/* Fine card */}
                  {/* Separatore */}
                  <div className="border-bottom border border-light-subtle border-1 my-4"></div>

                  {/* Card */}
                  <Card className="border border-0 d-flex flex-row">
                    <Col xs={3}>
                      <Card.Img
                        src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
                        className="rounded rounded-circle"
                      />
                    </Col>
                    <Col xs={9}>
                      <Card.Body>
                        <Card.Title>
                          <strong>Nome Cognome</strong>
                        </Card.Title>
                        <Card.Text>
                          Epicodere presso <strong>Epicode</strong>
                        </Card.Text>

                        <Button
                          variant="light"
                          className="rounded rounded-5 border-2 border-dark"
                        >
                          {" "}
                          <i className="bi bi-person-add"></i> Collegati
                        </Button>
                      </Card.Body>
                    </Col>
                  </Card>
                  {/* Fine card */}
                  {/* Separatore */}
                  <div className="border-bottom border border-light-subtle border-1 my-4"></div>

                  {/* Card */}
                  <Card className="border border-0 d-flex flex-row">
                    <Col xs={3}>
                      <Card.Img
                        src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
                        className="rounded rounded-circle"
                      />
                    </Col>
                    <Col xs={9}>
                      <Card.Body>
                        <Card.Title>
                          <strong>Nome Cognome</strong>
                        </Card.Title>
                        <Card.Text>
                          Epicodere presso <strong>Epicode</strong>
                        </Card.Text>

                        <Button
                          variant="light"
                          className="rounded rounded-5 border-2 border-dark"
                        >
                          {" "}
                          <i className="bi bi-person-add"></i> Collegati
                        </Button>
                      </Card.Body>
                    </Col>
                  </Card>
                  {/* Fine card */}
                  {/* Separatore */}
                  <div className="border-bottom border border-light-subtle border-1 my-4"></div>

                  {/* Card */}
                  <Card className="border border-0 d-flex flex-row">
                    <Col xs={3}>
                      <Card.Img
                        src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
                        className="rounded rounded-circle"
                      />
                    </Col>
                    <Col xs={9}>
                      <Card.Body>
                        <Card.Title>
                          <strong>Nome Cognome</strong>
                        </Card.Title>
                        <Card.Text>
                          Epicodere presso <strong>Epicode</strong>
                        </Card.Text>

                        <Button
                          variant="light"
                          className="rounded rounded-5 border-2 border-dark"
                        >
                          {" "}
                          <i className="bi bi-person-add"></i> Collegati
                        </Button>
                      </Card.Body>
                    </Col>
                  </Card>
                  {/* Fine card */}
                </Col>
              </Row>
            </Container>{" "}
            <div>
              <button className="border border-2 rounded-5 rounded-top-0  w-100 mt-0 m-1  text-secondary d-flex flex-column justify-content-center  hover-active">
                {" "}
                <p className="m-2 ">
                  <strong>
                    <a
                      href="https://www.linkedin.com/"
                      className="text-decoration-none text-muted"
                    >
                      Mostra tutto
                    </a>
                  </strong>
                </p>
              </button>
            </div>
            {/* Annuncio */}
            <Container className="rounded rounded-2 border-1 border-dark-subtle m-1 p-0">
              <Row>
                <Col xs={12} className="mt-2">
                  <img
                    className="rounded rounded-2"
                    style={{ width: "100%" }}
                    src="https://media.licdn.com/media/AAYABATPAAgAAQAAAAAAAKwYrfHUPkoBQGmwnaG71Ps_5Q.png"
                    alt="Annuncio"
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sidebar;
