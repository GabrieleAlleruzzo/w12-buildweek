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
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                        <i className="bi bi-pen p-2 fs-5"></i>
                    </div>

                </Col>
            </Row>

            {/* singole esperienze */}

            <Row>
                
                <Col xs={3}>
                    <img src="https://placecats.com/300/300" alt="" />
                </Col>
                <Col xs={9}>
                    <h5>Nome Posizione</h5>
                    <p>Nome impresa &#183; Part-time</p>
                    <p className="text-secondary">inizio - fine &#183; durata</p>
                    <h6>competenze</h6>
                </Col>


            </Row>
        </div>
    )
}

export default Esperienze
