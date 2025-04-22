import { Card, Col, Row } from "react-bootstrap"

const Formazione = function () {
  return (
    <div className="bg-white rounded-2 border m-3 p-3">
      <Row className="justify-content-between">
        <Col>
          <h4>Formazione</h4>
        </Col>
        <Col>
          <div className="text-end">
            <i
              className="bi bi-plus-lg p-2 fs-4"
              style={{ cursor: "pointer" }}
            ></i>
            <i className="bi bi-pen p-2 fs-5" style={{ cursor: "pointer" }}></i>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Card className="d-flex flex-row align-items-start p-2 border-0">
            <Card.Img
              variant="left"
              src="https://placedog.net/60/60"
              style={{ objectFit: "cover" }}
              className="mt-3"
            />
            <Card.Body className="p-2">
              <Card.Title className="mb-1">
                Istituto Superiore TopoGiggius
              </Card.Title>
              <Card.Text className="mb-0 fw-semibold">
                Diploma di Maturità
              </Card.Text>
              <Card.Text className="mb-0">2015</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Formazione
