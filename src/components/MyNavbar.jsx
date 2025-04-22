import { Navbar, Container, Nav, NavDropdown, Form } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const MyNavBar = function () {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark">
    <Container fluid className="align-items-center justify-content-start">

      {/* Logo + Search vicini */}
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
            className="me-4 text-center border-end pe-4"
          >
            <NavDropdown.Item href="#">Le mie App</NavDropdown.Item>
            <NavDropdown.Item href="#"><i class="bi bi-cursor-fill"></i>Trova Nuovi Clienti</NavDropdown.Item>
            <NavDropdown.Item href="#"><i class="bi bi-person-lines-fill"></i>Gruppi</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#"><i class="bi bi-clipboard-data-fill"></i>Talent Insight</NavDropdown.Item>
            <NavDropdown.Item href="#"><i class="bi bi-person-plus-fill"></i>Pubblica un'offerta di Lavoro</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#"><i class="bi bi-info-square-fill"></i>Trova i migliori Freelancer</NavDropdown.Item>
          <NavDropdown.Item href="#"><i class="bi bi-graph-up-arrow"></i>Marketing</NavDropdown.Item>
          </NavDropdown>

          {/* Le mie aziende */}
          <Nav.Link href="#" className="d-flex flex-column align-items-center ms-4 me-4 text-center">
            <i className="bi bi-grid-3x3-gap" style={{ fontSize: "1.5rem" }}></i>
            <small>Le mie aziende</small>
          </Nav.Link>

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
