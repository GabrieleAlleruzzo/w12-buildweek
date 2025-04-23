import { Navbar, Container, Nav, NavDropdown, Form } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const MyNavBar = function () {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark">
    <Container fluid className="align-items-center justify-content-start">

      {/* Logo + Search */}
      <div className="d-flex align-items-center me-5">
        {/* Icona LinkedIn */}
        <Navbar.Brand href="#" className="me-2">
          <i className="bi bi-linkedin" style={{ fontSize: "2rem" }}></i>
        </Navbar.Brand>

        {/* Barra di ricerca */}
        <Form className="d-none d-md-flex flex-grow-0" style={{ width: "250px" }}>
          <Form.Control
            type="search"
            placeholder="Cerca"
            className="me-2"
            aria-label="Search"
          />
        </Form>
      </div>
        {/* DESTRA: Icone + Tu + Le mie aziende + Premium */}
        <Nav className="d-flex flex-row align-items-center ms-auto">

          {/* Icone principali */}
          <Nav.Link href="#" className="d-flex flex-column align-items-center me-4 text-center">
            <i className="bi bi-house-door" style={{ fontSize: "1.5rem" }}></i>
            <small>Home</small>
          </Nav.Link>
          <Nav.Link href="#" className="d-flex flex-column align-items-center me-4 text-center">
            <i className="bi bi-people-fill" style={{ fontSize: "1.5rem" }}></i>
            <small>Rete</small>
          </Nav.Link>
          <Nav.Link href="#" className="d-flex flex-column align-items-center me-4 text-center">
            <i className="bi bi-suitcase-lg-fill" style={{ fontSize: "1.5rem" }}></i>
            <small>Lavoro</small>
          </Nav.Link>
          <Nav.Link href="#" className="d-flex flex-column align-items-center me-4 text-center">
            <i className="bi bi-chat-dots-fill" style={{ fontSize: "1.5rem" }}></i>
            <small>Messaggistica</small>
          </Nav.Link>
          <Nav.Link href="#" className="d-flex flex-column align-items-center me-4 text-center">
            <i className="bi bi-bell-fill" style={{ fontSize: "1.5rem" }}></i>
            <small>Notifiche</small>
          </Nav.Link>

          {/* Profilo Utente */}
          <NavDropdown
            title={
              <div className="d-flex flex-column align-items-center">
                <img
                  src="https://via.placeholder.com/30"
                  alt="Avatar"
                  className="rounded-circle mb-1"
                  style={{ width: '30px', height: '30px' }}
                />
                <small>Tu</small>
              </div>
            }
            id="nav-dropdown-user"
            className="me-4 text-center border-end pe-4">
           {/* PARTE PROFILO */}
      <div className="px-3 py-2 text-start">
        <div className="d-flex align-items-center mb-2">
          <img
            src="https://via.placeholder.com/50"
            alt="Avatar"
            className="rounded-circle me-2"
            style={{ width: '50px', height: '50px' }}
          />
          <div>
            <div className="fw-bold">Nome Cognome</div>
            <div className="text-muted" style={{ fontSize: '0.8rem' }}>Content Moderator</div>
          </div>
        </div>

        <button className="btn btn-outline-primary w-100 mb-2" style={{ borderRadius: '25px', fontWeight: 'bold' }}>
          Visualizza profilo
        </button>
      </div>

      <NavDropdown.Divider />

      {/* SEZIONE ACCOUNT */}
      <div className="px-3 text-start">
        <small className="fw-bold text-muted">Account</small>
      </div>
      <NavDropdown.Item href="#">
        <i className="bi bi-award-fill text-warning me-2"></i>Prova 1 mese di Premium per 0 EUR
      </NavDropdown.Item>
      <NavDropdown.Item href="#">Impostazioni e privacy</NavDropdown.Item>
      <NavDropdown.Item href="#">Guida</NavDropdown.Item>
      <NavDropdown.Item href="#">Lingua</NavDropdown.Item>

      <NavDropdown.Divider />

      {/* SEZIONE GESTISCI */}
      <div className="px-3 text-start">
        <small className="fw-bold text-muted">Gestisci</small>
      </div>
      <NavDropdown.Item href="#">Post e attività</NavDropdown.Item>
      <NavDropdown.Item href="#">Account per la pubblicazione di offerte</NavDropdown.Item>

      <NavDropdown.Divider />

      {/* Esci */}
      <NavDropdown.Item href="#">Esci</NavDropdown.Item>
    </NavDropdown>
    

          {/* Le mie aziende */}
          <NavDropdown
            title={
              <div className="d-flex flex-column align-items-center">
               <i className="bi bi-grid-3x3-gap" style={{ fontSize: "1.5rem" }}></i>
              </div>
            }
            id="nav-dropdown-user"
            className="me-4 text-center border-end pe-4">
                <small className="fw-bold">Le mie Aziende</small>
            <NavDropdown.Item href="#"><i class="bi bi-cursor-fill"></i> Trova Nuovi Clienti</NavDropdown.Item>
            <NavDropdown.Item href="#"><i class="bi bi-person-lines-fill"></i> Gruppi</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#"><i class="bi bi-clipboard-data-fill"></i> Talent Insight</NavDropdown.Item>
            <NavDropdown.Item href="#"><i class="bi bi-person-plus-fill"></i> Pubblica un'offerta di Lavoro</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#"><i class="bi bi-info-square-fill"></i> Trova i migliori Freelancer</NavDropdown.Item>
          <NavDropdown.Item href="#"><i class="bi bi-graph-up-arrow"></i> Marketing</NavDropdown.Item>
          <NavDropdown.Item href="#"><i class="bi bi-collection-play-fill"></i> Learning</NavDropdown.Item>
                  </NavDropdown>


          {/* Prova Premium */}
          <Nav.Link href="#" className="d-flex flex-column align-items-center text-warning ms-2">
            <div className="text-nowrap">
              Prova Premium per 0 <strong>EUR</strong>
            </div>
          </Nav.Link>

        </Nav>

      </Container>
    </Navbar>
  );
};

export default MyNavBar;
