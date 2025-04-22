import { Card, Col, Dropdown, Row } from "react-bootstrap"

const Esperienze = function () {
  return (
    <div className="bg-white rounded-2 border m-3 p-3">
      {/* singole esperienze */}

            <Row className="justify-content-between">
                <Col  >
                <h4>Esperienza</h4>
                </Col>
                <Col>
                    <div className="text-end d-flex justify-content-end">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="bg-transparent text-black border-0">
                                <i className="bi bi-plus-lg p-2 fs-4"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" className="fw-semibold"><i className="bi bi-duffle-fill pe-1"></i>  Aggiungi posizione lavorativa</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" className="fw-semibold"><i className="bi bi-calendar-date pe-1"></i>  Aggiungi pausa lavorativa</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                        <i className="bi bi-pen p-2 fs-5"></i>
                    </div>

                </Col>
            </Row>

            {/* singole esperienze */}

            <Row>
                <Col xs={12}>
                <Card className="d-flex flex-row align-items-start p-2 border-0">
                    <Card.Img
                    variant="left"
                    src="https://placecats.com/60/60"
                    style={{ objectFit: "cover" }}
                    className="mt-3"
                    />
                    <Card.Body className="p-2">
                    <Card.Title className="mb-1">
                        Nome posizione
                    </Card.Title>
                    <Card.Text className="mb-0 fw-semibold">
                        Nome impresa &#183; Part-time
                    </Card.Text>
                    <Card.Text className="mb-0 text-secondary">
                        inizio - fine &#183; durata
                    </Card.Text>
                    <Card.Text className="mb-0 fw-semibold">
                    <i className="bi bi-gem"></i> compentenze
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Esperienze
