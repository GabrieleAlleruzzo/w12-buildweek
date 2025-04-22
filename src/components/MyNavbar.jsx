import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';


const MyNavBar = function () {
return (
<Navbar  expand="lg"  className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark">
<Container fluid>
    <Navbar.Brand href="#"><i class="bi bi-linkedin"></i>
    <Form inline>
        <Row>
            <Col xs="auto">
            <Form.Control type="text"
            placeholder="Search"
            className="mr-sm-2"/>
            </Col>
        </Row>
    </Form>
    </Navbar.Brand>
</Container>
</Navbar>
)
}
export default MyNavBar