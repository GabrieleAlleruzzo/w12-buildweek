import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { aggiungiCompetenza } from "../redux/actions"
import { Col, ListGroup, Modal, Row, Button, Form, Card } from "react-bootstrap"

const Competenze = function () {
  const [show, setShow] = useState(false)
  const [nuovaComp, setNuovaComp] = useState("")
  const dispatch = useDispatch()
  const competenze = useSelector((state) => state.competenze)

  const handleClose = () => {
    setShow(false)
    setNuovaComp("")
  }

  const handleAggiungi = () => {
    if (nuovaComp.trim() !== "") {
      // Verifica che la competenza non esista già
      if (competenze.includes(nuovaComp.trim())) {
        alert("Questa competenza è già stata aggiunta!")
      } else {
        dispatch(aggiungiCompetenza(nuovaComp.trim()))
        handleClose()
      }
    }
  }

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
              onClick={() => setShow(true)}
            ></i>
            <i className="bi bi-pen p-2 fs-5" style={{ cursor: "pointer" }}></i>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <ListGroup>
            {competenze.map((skill, i) => (
              <ListGroup.Item
                key={i}
                className="border-0 border-bottom fw-bold"
              >
                {skill}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>

      {/* Modale per aggiungere una nuova competenza */}
      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi Competenza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Nome competenza</Form.Label>
              <Form.Control
                type="text"
                placeholder="Es: TypeScript"
                value={nuovaComp}
                onChange={(e) => setNuovaComp(e.target.value)}
              />
            </Form.Group>
          </Form>
          <Card>
            <Card.Body>
              <Card.Title>Suggerite in base al tuo profilo</Card.Title>
              <ul className="list-unstyled d-flex flex-wrap mt-2">
                <li
                  className="border border-1 border-black rounded-3 me-2 p-1 mt-2 skill-items"
                  style={{ cursor: "pointer" }}
                >
                  Inglese
                </li>
                <li
                  className="border border-1 border-black rounded-3 me-2 p-1 mt-2 skill-items"
                  style={{ cursor: "pointer" }}
                >
                  Java
                </li>
                <li
                  className="border border-1 border-black rounded-3 me-2 p-1 mt-2 skill-items"
                  style={{ cursor: "pointer" }}
                >
                  Strategia
                </li>
                <li
                  className="border border-1 border-black rounded-3 me-2 p-1 mt-2 skill-items"
                  style={{ cursor: "pointer" }}
                >
                  Servizio clienti
                </li>
                <li
                  className="border border-1 border-black rounded-3 me-2 p-1 mt-2 skill-items"
                  style={{ cursor: "pointer" }}
                >
                  Ingegneria
                </li>
                <li
                  className="border border-1 border-black rounded-3 me-2 p-1 mt-2 skill-items"
                  style={{ cursor: "pointer" }}
                >
                  Leadership
                </li>
                <li
                  className="border border-1 border-black rounded-3 me-2 p-1 mt-2 skill-items"
                  style={{ cursor: "pointer" }}
                >
                  Presentazioni
                </li>
                <li
                  className="border border-1 border-black rounded-3 me-2 p-1 mt-2 skill-items"
                  style={{ cursor: "pointer" }}
                >
                  Competenze Analitiche
                </li>
                <li
                  className="border border-1 border-black rounded-3 me-2 p-1 mt-2 skill-items"
                  style={{ cursor: "pointer" }}
                >
                  Design
                </li>
                <li
                  className="border border-1 border-black rounded-3 me-2 p-1 mt-2 skill-items"
                  style={{ cursor: "pointer" }}
                >
                  Presentazioni
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annulla
          </Button>
          <Button variant="primary" onClick={handleAggiungi}>
            Aggiungi
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Competenze
