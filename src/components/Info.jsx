import { Col, Row } from "react-bootstrap"

const Info = function () {
    return (
        <div className="bg-white rounded-2 border m-3 p-3">
            <Row className="justify-content-between">
                <Col>
                    <h4>Informazioni</h4>
                </Col>
                <Col className="text-end d-flex justify-content-end">
                    <i className="bi bi-pen p-2 fs-5"></i>
                </Col>
                
            </Row>

            <Row className="py-3">
                <Col>Ciao, sono un Testo</Col>
            </Row>

            <Row className="border border-1 rounded-2 m-1">
                <Col xs={3}>
                    <i class="bi bi-gem"></i>
                </Col>
                <Col xs={9} className="text-start">
                    <h6>Competenze principali</h6>
                </Col>
            </Row>
        </div>
    )
}

export default Info