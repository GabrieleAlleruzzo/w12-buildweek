import { Card, Col, Row } from "react-bootstrap"

const Esperienze = function () {
    return (
        <div className="bg-white rounded-2 border m-3 p-3">

            {/* titolo */}

            <Row className="justify-content-between">
                <Col  >
                <h4>Esperienza</h4>
                </Col>
                <Col>
                    <div className="text-end">
                        <i className="bi bi-plus-lg p-2 fs-4"></i>
                        <i className="bi bi-pen p-2 fs-5"></i>
                    </div>

                </Col>
            </Row>

            {/* singole esperienze */}

            <Row>
                
                <Col xs={12}>
                
                <Card>
                    <Card.Img variant="left" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                </Col>


            </Row>
        </div>
    )
}

export default Esperienze