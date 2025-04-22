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

            <Row className="border border-1 rounded-2 m-1 py-2">
                <Col xs={1} className="text-center">
                    <i class="bi bi-gem"></i>
                </Col>
                <Col xs={11} className="text-start ps-1">
                    <h6 className="mb-0">Competenze principali</h6>
                    <div className="d-flex justify-content-between">
                        <p className="">competenze <span className="fw-bold">&#183;</span>  competenze <span className="fw-bold">&#183;</span> competenze</p>
                        <i className="bi bi-arrow-right"></i>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Info