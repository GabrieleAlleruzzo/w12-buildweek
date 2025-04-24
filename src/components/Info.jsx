import { useEffect, useState } from "react"
import { Col, Dropdown, Form, Modal, Row, Button } from "react-bootstrap"

const Info = function () {

    const APIUrl = 'https://striveschool-api.herokuapp.com/api/profile/'
    const maddalena = '6808967095878f0015f4a1b9'
    const apiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA4OTY3MDk1ODc4ZjAwMTVmNGExYjkiLCJpYXQiOjE3NDUzOTMyNjQsImV4cCI6MTc0NjYwMjg2NH0.dVSiLU98dFjQrSCo3MLWZvbclhG9fHU5ZfGfsApK7EM'

    const [info, setInfo] = useState([])
    const [bio, setBio] = useState('')

    const handleShow = () => setShowModal(true)
    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false)

    // fetch get
    const getInfo = ()  => {
        fetch(APIUrl + maddalena, {
            headers: {
                Authorization: apiKey
            }
        })
        .then(response => {
            if (response.ok) {
              return response.json()
            } else {
                throw new Error('Request failed!')
            }
            })
        .then((data) => {
            console.log('data', data)
            setInfo(data)
            //console.log(experiences)
        })
        .catch((err) => {
            console.log('errore nella fetch', err)
        })
    }


    //fetch put

    const changeBio = () => {
        const updatedProfile = {
            ...info,
            bio: bio,
          }

        
        fetch(APIUrl, {
            method: 'PUT',
            body: JSON.stringify(updatedProfile), 
            headers: { 
                "Authorization": apiKey,
                'Content-type': 'application/json'
            }
        })
        .then((response) => {
            if(response.ok){
                console.log('Bio aggiornata con successo!')
                getInfo()
            } else {
                console.log(response)
                throw new Error('aggiornamento fallito')
            }
        })
        .catch((error) => {
            console.log('errore nel salvataggio!', error)
        })
    }


    useEffect(() => {
            getInfo()
        }, [])



    return (
        <div className="bg-white rounded-2 border m-3 p-3">
            <Row className="justify-content-between">
                <Col>
                    <h4>Informazioni</h4>
                </Col>
                <Col className="text-end d-flex justify-content-end">
                 <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="bg-transparent text-black border-0">
                                <i className="bi bi-pen p-2 fs-5"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item className="fw-semibold" onClick={handleShow}>Modifica bio</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    
                </Col>
                
            </Row>

            <Row className="py-3">
                <Col><p>{info.bio || 'aggiungi una bio'}</p></Col>
            </Row>

            <Row className="border border-1 rounded-2 m-1 py-2">
                <Col xs={1} className="text-center">
                    <i className="bi bi-gem"></i>
                </Col>
                <Col xs={11} className="text-start ps-1">
                    <h6 className="mb-0">Competenze principali</h6>
                    <div className="d-flex justify-content-between">
                        <p className="">lotta libera <span className="fw-bold">&#183;</span>  attività manageriali <span className="fw-bold">&#183;</span> gestione dati</p>
                        <i className="bi bi-arrow-right"></i>
                    </div>
                </Col>
            </Row>

            <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi esperienze</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            <Form.Group className="mb-3" controlId="formVoto">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control type="text" placeholder="Nella vita sono..." value={bio} onChange={(e) => setBio(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annulla
          </Button>
          <Button variant="primary" onClick={() => {
            changeBio()
            handleClose()
          }}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>

            
        </div>
    )
}

export default Info