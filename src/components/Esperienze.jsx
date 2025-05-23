import { useEffect, useState } from "react"
import { Button, Card, Col, Dropdown, Form, Modal, Row } from "react-bootstrap"

const Esperienze = function () {
  
    const APIUrl = 'https://striveschool-api.herokuapp.com/api/profile/6808967095878f0015f4a1b9/experiences'
    const apiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA4OTY3MDk1ODc4ZjAwMTVmNGExYjkiLCJpYXQiOjE3NDUzOTMyNjQsImV4cCI6MTc0NjYwMjg2NH0.dVSiLU98dFjQrSCo3MLWZvbclhG9fHU5ZfGfsApK7EM'

    const [experiences, setExperiences] = useState([])

    // form
    const [role, setRole] = useState("")
    const [company, setCompany] = useState("")
    const [tipo, setTipo] = useState("")
    const [startMonth, setStartMonth] = useState("")
    const [startYear, setStartYear] = useState("")
    const [endMonth, setEndMonth] = useState("")
    const [endYear, setEndYear] = useState("")
    const [area, setArea] = useState("")
    const [description, setDescription] = useState("")
    // date
    const startDate = `${startYear}-${startMonth}-01`
    const endDate = endYear && endMonth ? `${endYear}-${endMonth}-01` : null
    // modale
    const [showModal, setShowModal] = useState(false)

  // Funzione per aprire il modal
  const handleShow = () => setShowModal(true)

  // Funzione per chiudere il modal
  const handleClose = () => setShowModal(false)

  // calcolare la durata

  const calcolaDurata = (start, end) => {
    const startDate = new Date(start)
    const endDate = end ? new Date(end) : new Date()
  
    let anni = endDate.getFullYear() - startDate.getFullYear()
    let mesi = endDate.getMonth() - startDate.getMonth()
  
    if (mesi < 0) {
      anni -= 1
      mesi += 12
    }
  
    const anniStr = anni > 0 ? `${anni} ann${anni === 1 ? "o" : "i"}` : ""
    const mesiStr = mesi > 0 ? `${mesi} mes${mesi === 1 ? "o" : "i"}` : ""

    if (anniStr && mesiStr) return `${anniStr} e ${mesiStr}`
    if (anniStr) return anniStr
    if (mesiStr) return mesiStr

    return "meno di un mese"
  }

  // fetch get
    const getExperiences = ()  => {
        fetch(APIUrl, {
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
            console.log("Tutte le esperienze:", data.map(exp => exp._id))
            setExperiences(data)
            //console.log(experiences)
        })
        .catch((err) => {
            console.log('errore nella fetch', err)
        })
    }
  
    




    /* fetch POST */

    const newExperience = () => {

        const experienceData = {
            role,
            company,
            startDate,
            endDate,
            description,
            area
        }


        fetch(APIUrl, {
            method: 'POST',
            body: JSON.stringify(experienceData), 
            headers: { 
                "Authorization": apiKey,
                'Content-type': 'application/json'
            }
        })
        .then((response) => {
            if(response.ok){
                console.log('salvato con successo!!')
                
            } else {
                console.log(response)
                throw new Error('post perduta')
            }
        })
        .then((data) => {
          console.log('risposta POST', data)
          getExperiences()
        }

        )
        .catch((error) => {
            console.log('errore nel salvataggio!', error)
        })
    }

    /* fetch DELETE */

    const deleteExperience = (id) => {
      fetch(APIUrl + '/' + id, {
        method: 'DELETE',
        headers: {
            Authorization: apiKey
        }
    })
      .then(response => {
        if (response.ok){
          // qualcosa
          alert('eliminato!')
        } else {
          throw new Error('già eliminato?')
        }
      })
      .catch((err)=>{
        console.log('errore cancellazione', err)
      })
    }

    useEffect(() => {
        getExperiences()
    }, [])
  
  /* fetch POST IMMAGINI EXP */

  const changeImgExp = function (id, file) {
    const apiImg = `https://striveschool-api.herokuapp.com/api/profile/6808967095878f0015f4a1b9/experiences/${id}/picture`

    const formData = new FormData()
    formData.append("experience", file)

    fetch(apiImg, {
      method: 'POST',
      body: formData, 
      headers: { 
          "Authorization": apiKey,
      }
    })
    .then((response) => {
        if(response.ok){
            console.log('immagine aggiornata!!')
            getExperiences() 
        } else {
            throw new Error("errore nel caricamento dell'immagine")
        }
    })
    .catch((error) => {
        console.log('Upload fallito', error)
    })

  }
  
  
  
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
                                <Dropdown.Item className="fw-semibold" onClick={handleShow}><i className="bi bi-duffle-fill pe-1"></i>  Aggiungi posizione lavorativa</Dropdown.Item>
                                <Dropdown.Item className="fw-semibold"><i className="bi bi-calendar-date pe-1"></i>  Aggiungi pausa lavorativa</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                        <i className="bi bi-pen p-2 fs-5"></i>
                    </div>

                </Col>
            </Row>

            {/* singole esperienze */}


        { experiences.map((exp) => (

        


        
            <Row key={exp._id}>
                <Col xs={12}>
                <Card className="d-flex flex-row align-items-start p-2 border-0">
                    <Card.Img
                    variant="left"
                    src={exp.image}
                    style={{ objectFit: "cover" }}
                    className="mt-3"
                    width={80}
                    height={80}
                    />
                    <Card.Body className="p-2">
                    <Card.Title className="mb-1 d-flex justify-content-between">
                        {exp.role}

                        <div className="d-flex">

                        <input
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      id={`file-upload-${exp._id}`}
                      onChange={(e) => {
                        const file = e.target.files[0]
                        if (file) changeImgExp(exp._id, file)
                      }}
                      />
                        

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="bg-transparent text-black border-0 p-0">
                            <i className="bi bi-x"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item className="fw-semibold" onClick={() => deleteExperience(exp._id)}>Rimuovi</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="bg-transparent text-black border-0 p-0">
                            <i className="bi bi-card-image"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item
                              className="fw-semibold"
                              onClick={() => {
                                document.getElementById(`file-upload-${exp._id}`).click()
                              }}
                            >
                              Carica immagine
                            </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                        </div>

                        
                    </Card.Title>
                    <Card.Text className="mb-0 fw-semibold">
                        {exp.company} &#183; {tipo}
                    </Card.Text>
                    <Card.Text className="mb-0 text-secondary">                      
                    {new Date(exp.startDate).toLocaleDateString("it-IT", { month: 'long', year: 'numeric' })} -{" "}
                    {exp.endDate
                      ? new Date(exp.endDate).toLocaleDateString("it-IT", { month: 'long', year: 'numeric' })
                      : "Presente"} &#183; {calcolaDurata(exp.startDate, exp.endDate)} 
                    </Card.Text>
                    <Card.Text className="mb-0 fw-semibold">
                    <i className="bi bi-gem"></i> {exp.description}
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        
    ))}

            {/* modale post request */}

            <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi esperienze</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formScuola">
              <Form.Label>Qualifica</Form.Label>
              <Form.Control
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Esempio: Retail sales Manager"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMese">
                <Form.Label>Tipo di impiego</Form.Label>
                <Form.Select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                  <option>seleziona</option>
                  <option>A tempo pieno</option>
                  <option>Part-time</option>
                  <option>Autonomo</option>
                  <option>Freelance</option>
                  <option>A contratto</option>
                  <option>Stage</option>
                  <option>Apprendistato</option>
                </Form.Select>
              </Form.Group>

            <Form.Group className="mb-3" controlId="formTitolo">
              <Form.Label>Azienda o organizzazione</Form.Label>
              <Form.Control type="text" placeholder="Esempio: Microsoft" value={company} onChange={(e) => setCompany(e.target.value)} />
            </Form.Group>
            <p className="text-secondary">Data d'inizio</p>
            <div className="d-flex justify-content-around">
              <Form.Group className="mb-3" controlId="formMese">
                <Form.Label>Mese</Form.Label>
                <Form.Select value={startMonth} onChange={(e) => setStartMonth(e.target.value)}>
                    <option>Seleziona un mese</option>
                    <option value="01">Gennaio</option>
                    <option value="02">Febbraio</option>
                    <option value="03">Marzo</option>
                    <option value="04">Aprile</option>
                    <option value="05">Maggio</option>
                    <option value="06">Giugno</option>
                    <option value="07">Luglio</option>
                    <option value="08">Agosto</option>
                    <option value="09">Settembre</option>
                    <option value="10">Ottobre</option>
                    <option value="11">Novembre</option>
                    <option value="12">Dicembre</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAnno">
                <Form.Label>Anno</Form.Label>
                <Form.Select value={startYear} onChange={(e) => setStartYear(e.target.value)}>
                    <option>Seleziona un anno</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </Form.Select>
              </Form.Group>
            </div>
            <p className="text-secondary">Data di fine (o prevista) </p>
            <div className="d-flex justify-content-around">
              <Form.Group className="mb-3" controlId="formMese">
                <Form.Label>Mese</Form.Label>
                <Form.Select value={endMonth} onChange={(e) => setEndMonth(e.target.value)}>
                    <option>Seleziona un mese</option>
                    <option value="01">Gennaio</option>
                    <option value="02">Febbraio</option>
                    <option value="03">Marzo</option>
                    <option value="04">Aprile</option>
                    <option value="05">Maggio</option>
                    <option value="06">Giugno</option>
                    <option value="07">Luglio</option>
                    <option value="08">Agosto</option>
                    <option value="09">Settembre</option>
                    <option value="10">Ottobre</option>
                    <option value="11">Novembre</option>
                    <option value="12">Dicembre</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAnno">
                <Form.Label>Anno</Form.Label>
                <Form.Select value={endYear} onChange={(e) => setEndYear(e.target.value)}>
                    <option>Seleziona un anno</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </Form.Select>
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="formVoto">
              <Form.Label>Località</Form.Label>
              <Form.Control type="text" placeholder="Esempio: Milano" value={area} onChange={(e) => setArea(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formVoto">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control type="text" placeholder="Svolgo varie attività.." value={description} onChange={(e) => setDescription(e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annulla
          </Button>
          <Button variant="primary" onClick={() => {
            newExperience()
            handleClose()
          }}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default Esperienze
