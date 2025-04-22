import { Card, Col, Row, Modal, Button, Form } from "react-bootstrap"
import { useState } from "react"

const Formazione = function () {
  const [showModal, setShowModal] = useState(false) // Stato per il modal

  // Funzione per aprire il modal
  const handleShow = () => setShowModal(true)

  // Funzione per chiudere il modal
  const handleClose = () => setShowModal(false)

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
              onClick={handleShow} // Apre il modal quando cliccato
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

      {/* Modal per aggiungere formazione */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi Formazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formScuola">
              <Form.Label>Scuola o Università</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Università degli studi di Milano"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTitolo">
              <Form.Label>Titolo di studio</Form.Label>
              <Form.Control type="text" placeholder="Esempio: Laurea" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCorso">
              <Form.Label>Corso di studi</Form.Label>
              <Form.Control type="text" placeholder="Esempio: Informatica" />
            </Form.Group>
            <p className="text-secondary">Data d'inizio</p>
            <div className="d-flex justify-content-around">
              <Form.Group className="mb-3" controlId="formMese">
                <Form.Label>Mese</Form.Label>
                <Form.Select>
                  <option>Seleziona un mese</option>
                  <option>Gennaio</option>
                  <option>Febbraio</option>
                  <option>Marzo</option>
                  <option>Aprile</option>
                  <option>Maggio</option>
                  <option>Giugno</option>
                  <option>Luglio</option>
                  <option>Agosto</option>
                  <option>Settembre</option>
                  <option>Ottobre</option>
                  <option>Novembre</option>
                  <option>Dicembre</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAnno">
                <Form.Label>Anno</Form.Label>
                <Form.Select>
                  <option>Seleziona un anno</option>
                  <option>2013</option>
                  <option>2014</option>
                  <option>2015</option>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                </Form.Select>
              </Form.Group>
            </div>
            <p className="text-secondary">Data di fine (o prevista) </p>
            <div className="d-flex justify-content-around">
              <Form.Group className="mb-3" controlId="formMese">
                <Form.Label>Mese</Form.Label>
                <Form.Select>
                  <option>Seleziona un mese</option>
                  <option>Gennaio</option>
                  <option>Febbraio</option>
                  <option>Marzo</option>
                  <option>Aprile</option>
                  <option>Maggio</option>
                  <option>Giugno</option>
                  <option>Luglio</option>
                  <option>Agosto</option>
                  <option>Settembre</option>
                  <option>Ottobre</option>
                  <option>Novembre</option>
                  <option>Dicembre</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAnno">
                <Form.Label>Anno</Form.Label>
                <Form.Select>
                  <option>Seleziona un anno</option>
                  <option>2013</option>
                  <option>2014</option>
                  <option>2015</option>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                </Form.Select>
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="formVoto">
              <Form.Label>Voto</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formVoto">
              <Form.Label>Attività e associazioni</Form.Label>
              <Form.Control type="text" placeholder="Pesca" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formVoto">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control type="text" placeholder="Ciao" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annulla
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Formazione
