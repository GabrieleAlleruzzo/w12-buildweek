import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfiloMe } from "../redux/actions";

const MyNavBar = function () {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const profilo = useSelector((state) => state.profiloMe); // accedi allo stato del profilo

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    dispatch(fetchProfiloMe());
  }, [dispatch]);

  return (
    <>
      <Container id="navbar">
        <Row className="justify-content-center ">
          <Col xs={12} lg={9} className="p-0">
            <Navbar
              expand="lg"
              className="bg-light w-100 d-flex justify-content-center"
              bg="light"
              data-bs-theme="light"
            >
              <Container fluid className="align-items-center p-0 d-flex">
                {" "}
                {/* Rimosso flex-wrap */}
                {/* Logo + Search vicini */}
                <div className="d-flex align-items-center ">
                  {/* Icona LinkedIn */}
                  <Navbar.Brand href="#" className="me-2">
                    <i
                      className="bi bi-linkedin text-primary"
                      style={{ fontSize: "2rem" }}
                    ></i>
                  </Navbar.Brand>

                  {/* Barra di ricerca */}
                  <Form
                    className="d-none d-lg-flex d-none d-md-block"
                    style={{ width: "250px" }}
                  >
                    <Form.Control
                      type="search"
                      placeholder="Cerca"
                      className="me-2"
                      aria-label="Search"
                    />
                  </Form>
                </div>
                {/* DESTRA: Icone + Tu + Le mie aziende + Premium */}
                <Nav className="d-flex flex-row align-items-center ms-auto justify-content-center">
                  {" "}
                  <Nav.Link
                    href="#"
                    className="d-flex flex-column align-items-center m-2 text-center d-md-none"
                  >
                    <i className=" bi bi-search text-secondary"></i>
                    <small className="d-none d-lg-block">Search</small>
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className="d-flex flex-column align-items-center m-2 text-center"
                  >
                    <i
                      className="bi bi-house-door text-secondary"
                      style={{ fontSize: "1rem" }}
                    ></i>
                    <small className="d-none d-lg-block text-secondary">
                      Home
                    </small>
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className="d-flex flex-column align-items-center m-2 text-center"
                  >
                    <i
                      className="bi bi-people-fill text-secondary"
                      style={{ fontSize: "1em" }}
                    ></i>
                    <small className="d-none d-lg-block text-secondary">
                      Rete
                    </small>
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className="d-flex flex-column align-items-center m-2 text-center"
                  >
                    <i
                      className="bi bi-suitcase-lg-fill text-secondary"
                      style={{ fontSize: "1em" }}
                    ></i>
                    <small className="d-none d-lg-block text-secondary">
                      Lavoro
                    </small>
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className="d-flex flex-column align-items-center m-2 text-center"
                  >
                    <i
                      className="bi bi-chat-dots-fill text-secondary"
                      style={{ fontSize: "1em" }}
                    ></i>
                    <small className="d-none d-lg-block text-secondary">
                      Messaggistica
                    </small>
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className="d-flex flex-column align-items-center m-2 text-center"
                  >
                    <i
                      className="bi bi-bell-fill text-secondary"
                      style={{ fontSize: "1em" }}
                    ></i>
                    <small className="d-none d-lg-block text-secondary">
                      Notifiche
                    </small>
                  </Nav.Link>
                  {/* Profilo Utente */}
                  <div
                    className="m-lg-0 d-lg-none position-relative mt-3"
                    style={{
                      height: "40px",
                      width: "40px",
                      marginRight: "16px",
                    }}
                  >
                    {/* Trigger del dropdown (icona/immagine) */}
                    <div
                      ref={dropdownRef}
                      className="d-flex flex-column align-items-center position-absolute top-0 end-0 z-3"
                      onClick={toggleUserDropdown}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={profilo.image || "https://via.placeholder.com/50"}
                        alt="Avatar"
                        className="rounded-circle me-2"
                        style={{
                          width: "20px",
                          height: "20px",
                          marginRight: "0",
                        }}
                      />
                      <small className="d-none d-lg-block text-secondary">
                        Tu
                      </small>
                    </div>

                    {/* Menu del dropdown (condizionale) */}
                    {showUserDropdown && (
                      <div
                        className="position-absolute top-100 end-0 z-3 bg-white border shadow p-3 border-1 rounded rounded-2"
                        style={{ minWidth: "200px", right: "0" }}
                      >
                        {/* ... (Contenuto del dropdown mobile) ... */}
                        <div className="px-3 py-2 text-start">
                          <div className="d-flex align-items-center mb-2">
                            <img
                              src={
                                profilo.image ||
                                "https://via.placeholder.com/50"
                              }
                              alt="Avatar"
                              className="rounded-circle me-2"
                              style={{ width: "50px", height: "50px" }}
                            />
                            <div>
                              <div className="fw-bold">
                                {profilo.name || "Nome Cognome"}{" "}
                                {profilo.surname}
                              </div>
                              <div
                                className="text-muted"
                                style={{ fontSize: "0.8rem" }}
                              >
                                {profilo.title || "Ruolo professionale"}
                              </div>
                            </div>
                          </div>

                          <button
                            className="btn btn-outline-primary w-100 mb-2"
                            style={{ borderRadius: "25px", fontWeight: "bold" }}
                          >
                            Visualizza profilo
                          </button>
                        </div>

                        <NavDropdown.Divider />

                        <div className=" text-start">
                          <small className="fw-bold text-muted">
                            <strong>Account</strong>
                          </small>
                        </div>
                        <NavDropdown.Item href="#">
                          <i className="bi bi-award-fill text-warning me-2"></i>
                          Prova 1 mese di Premium per 0 EUR
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">
                          Impostazioni e privacy
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">Guida</NavDropdown.Item>
                        <NavDropdown.Item href="#">Lingua</NavDropdown.Item>

                        <NavDropdown.Divider />

                        <div className=" text-start">
                          <small className="fw-bold text-muted">
                            <strong>Gestisci</strong>
                          </small>
                        </div>
                        <NavDropdown.Item href="#">
                          Post e attività
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">
                          Account per la pubblicazione di offerte
                        </NavDropdown.Item>

                        <NavDropdown.Divider />

                        <NavDropdown.Item href="#">Esci</NavDropdown.Item>
                      </div>
                    )}
                  </div>
                  {/* desktop */}
                  <div className="d-none d-lg-block">
                    <NavDropdown
                      title={
                        <div className="d-flex flex-column align-items-center">
                          <img
                            src="http://localhost:5173/src/assets/avatarVuoto.webp?t=1745393890655"
                            alt="Avatar"
                            className="rounded-circle "
                            style={{ width: "20px", height: "20px" }}
                          />
                          <small className="d-none d-lg-block">Tu</small>
                        </div>
                      }
                      id="nav-dropdown-user"
                      className="me-2 text-center border-end pe-2 "
                    >
                      {/* PARTE PROFILO */}
                      <div className="px-3 py-2 text-start">
                        <div className="d-flex align-items-center mb-2">
                          <img
                            src={
                              profilo.image || "https://via.placeholder.com/50"
                            }
                            alt="Avatar"
                            className="rounded-circle me-2"
                            style={{ width: "50px", height: "50px" }}
                          />
                          <div>
                            <div className="fw-bold">
                              {" "}
                              {profilo.name || "Nome Cognome"} {profilo.surname}
                            </div>
                            <div
                              className="text-muted"
                              style={{ fontSize: "0.8rem" }}
                            >
                              {profilo.title || "Ruolo professionale"}
                            </div>
                          </div>
                        </div>

                        <button
                          className="btn btn-outline-primary w-100 mb-2"
                          style={{ borderRadius: "25px", fontWeight: "bold" }}
                        >
                          Visualizza profilo
                        </button>
                      </div>

                      <NavDropdown.Divider />

                      {/* SEZIONE ACCOUNT */}
                      <div className="px-3 text-start">
                        <small className="fw-bold text-muted">Account</small>
                      </div>
                      <NavDropdown.Item href="#">
                        <i className="bi bi-award-fill text-warning me-2"></i>
                        Prova 1 mese di Premium per 0 EUR
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Impostazioni e privacy
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">Guida</NavDropdown.Item>
                      <NavDropdown.Item href="#">Lingua</NavDropdown.Item>

                      <NavDropdown.Divider />

                      {/* SEZIONE GESTISCI */}
                      <div className="px-3 text-start">
                        <small className="fw-bold text-muted">Gestisci</small>
                      </div>
                      <NavDropdown.Item href="#">
                        Post e attività
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Account per la pubblicazione di offerte
                      </NavDropdown.Item>

                      <NavDropdown.Divider />

                      {/* Esci */}
                      <NavDropdown.Item href="#">Esci</NavDropdown.Item>
                    </NavDropdown>
                  </div>
                  {/* bho */}
                  {/* Le mie aziende */}
                  <div className="d-none d-lg-block ">
                    <NavDropdown
                      title={
                        <div className="d-flex flex-column align-items-center p-0">
                          <i
                            className="bi bi-grid-3x3-gap text-secondary"
                            style={{ fontSize: "1.5em" }}
                          ></i>
                        </div>
                      }
                      id="nav-dropdown-user"
                      className="m-0 text-center border-end pe-2"
                    >
                      <small className="fw-bold ms-2">Le mie Aziende</small>
                      <NavDropdown.Item href="#">
                        <i class="bi bi-cursor-fill"></i> Trova Nuovi Clienti
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        <i class="bi bi-person-lines-fill"></i> Gruppi
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#">
                        <i class="bi bi-clipboard-data-fill"></i> Talent Insight
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        <i class="bi bi-person-plus-fill"></i> Pubblica
                        un'offerta di Lavoro
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#">
                        <i class="bi bi-info-square-fill"></i> Trova i migliori
                        Freelancer
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        <i class="bi bi-graph-up-arrow"></i> Marketing
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        <i class="bi bi-collection-play-fill"></i> Learning
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                  {/* Prova Premium */}
                  <div className="d-none d-lg-block ">
                    <Nav.Link
                      href="#"
                      className="d-flex flex-column align-items-center text-warning ms-2 d-none d-lg-block"
                    >
                      <div className="" style={{ fontSize: "12px" }}>
                        <p className="m-0 d-inline">
                          Prova Premium per 0 <strong>EUR</strong>
                        </p>
                      </div>
                    </Nav.Link>
                  </div>
                </Nav>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyNavBar;
