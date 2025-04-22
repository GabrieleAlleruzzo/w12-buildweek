import { Card, Col, ListGroup, Row } from "react-bootstrap"

const Competenze = function () {
  return (
    <div className="bg-white rounded-2 border m-3 p-3">
      <Row className="justify-content-between">
        <Col>
          <h4>Competenze</h4>
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
          <ListGroup>
            <ListGroup.Item className="border-0 border-bottom fw-bold">
              HTML
            </ListGroup.Item>
            <ListGroup.Item className="border-0 border-bottom fw-bold">
              CSS
            </ListGroup.Item>
            <ListGroup.Item className="border-0 border-bottom fw-bold">
              JAVASCRIPT
            </ListGroup.Item>
            <ListGroup.Item className="border-0 border-bottom fw-bold">
              BOOTSTRAP
            </ListGroup.Item>
            <ListGroup.Item className="border-0 border-bottom fw-bold">
              REACT
            </ListGroup.Item>
            <ListGroup.Item className="border-0 border-bottom fw-bold">
              REDUX
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default Competenze
