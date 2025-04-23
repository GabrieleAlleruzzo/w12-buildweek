import { useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { useDispatch, useSelector } from "react-redux"

const Sidebar = () => {
  const dispatch = useDispatch()
  const profiliColleghi = useSelector((state) => state.profiliColleghi)

  useEffect(() => {
    const userIds = [
      "68074ff7d451810015ce83d1", // Barbara
      "6808947495878f0015f4a1b8", // Salvatore
      "6808967095878f0015f4a1b9", // Maddalena
      "68074850d451810015ce83d0", // Gabriele
      "68074291d451810015ce83cc", // Vincenza
      "6807a244d451810015ce83ef", // Pietro
    ]

    const profili = []
    let completedRequests = 0 // Contatore per le richieste completate

    userIds.forEach((userId) => {
      fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA4OTQ3NDk1ODc4ZjAwMTVmNGExYjgiLCJpYXQiOjE3NDUzOTI3NzgsImV4cCI6MTc0NjYwMjM3OH0.vWg5par8Z4-ERE6cqbduCs9LwFuNkIz4r7N-uHoH3fQ",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error("Errore nella risposta del server")
          }
        })
        .then((data) => {
          profili.push(data)
          completedRequests++

          if (completedRequests === userIds.length) {
            dispatch({ type: "SET_PROFILI_COLLEGHI", payload: profili })
          }
        })
        .catch((error) => {
          console.log("Errore nella fetch:", error)
        })
    })
  }, [dispatch])

  return (
    <Container className="d-flex flex-column m-0">
      <Row>
        <Col>
          {/* Lingua e URL */}
          <Container className="rounded border border-2 m-1 p-4 bg-white">
            <Row>
              <Col xs={12} className="d-flex justify-content-between">
                <h3>Lingua del profilo</h3>
                <i className="bi bi-pen"></i>
              </Col>
              <Col>
                <p>Italiano</p>
              </Col>
              <div className="border-bottom border-1 my-4"></div>
              <Col xs={12} className="d-flex justify-content-between">
                <h3>Profilo pubblico e URL</h3>
                <i className="bi bi-pen"></i>
              </Col>
              <Col>
                <a href="https://www.linkedin.com/">
                  Link-profilo-nome-cognome
                </a>
              </Col>
            </Row>
          </Container>

          {/* Suggeriti */}
          <Container className="rounded border border-2 m-1 p-4 pb-0 rounded-bottom-0 bg-white">
            <Row>
              <Col>
                <h4>Persone che potresti conoscere</h4>
                <div className="d-flex align-items-center">
                  <i className="bi bi-eye-fill me-2"></i>
                  <p className="mb-0">Dal tuo settore</p>
                </div>
                <div className="border-bottom border-1 my-4"></div>

                {profiliColleghi &&
                  profiliColleghi.map((profilo) => (
                    <div key={profilo._id}>
                      <Card className="border-0 d-flex flex-row">
                        <Col xs={3}>
                          <Card.Img
                            src={
                              profilo.image ||
                              "https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
                            }
                            className="rounded-circle"
                          />
                        </Col>
                        <Col xs={9}>
                          <Card.Body>
                            <Card.Title>
                              <strong>
                                {profilo.name} {profilo.surname}
                              </strong>
                            </Card.Title>
                            <Card.Text>
                              {profilo.title || "Ruolo non specificato"} presso{" "}
                              <strong>{profilo.area || "Epicode"}</strong>
                            </Card.Text>
                            <Button
                              variant="light"
                              className="rounded-5 border-2 border-dark"
                            >
                              <i className="bi bi-person-add"></i> Collegati
                            </Button>
                          </Card.Body>
                        </Col>
                      </Card>
                      <div className="border-bottom border-1 my-4"></div>
                    </div>
                  ))}

                <div className="w-100 mt-0 m-1">
                  <button className="border border-2 rounded-5 rounded-top-0 w-100 text-secondary text-center bg-white">
                    <p className="m-2">
                      <strong>
                        <a
                          href="https://www.linkedin.com/"
                          className="text-decoration-none text-muted"
                        >
                          Mostra tutto
                        </a>
                      </strong>
                    </p>
                  </button>
                </div>
              </Col>
            </Row>
          </Container>

          {/* Annuncio */}
          <Container className="rounded border-1 m-1 p-0 border-dark-subtle">
            <Row>
              <Col xs={12} className="mt-2">
                <img
                  className="rounded w-100"
                  src="https://media.licdn.com/media/AAYABATPAAgAAQAAAAAAAKwYrfHUPkoBQGmwnaG71Ps_5Q.png"
                  alt="Annuncio"
                />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Sidebar
