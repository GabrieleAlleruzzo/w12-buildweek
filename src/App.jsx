import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNavbar from "./components/MyNavbar";
import Main from "./components/Main";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Container
        fluid
        style={{ backgroundColor: "#FFFFFF" }}
        className="border border-1"
      >
        <Row>
          <Col>
            <MyNavbar />
          </Col>
        </Row>
      </Container>
      <Main />
    </>
  );
  // inserire "Routes" e "Route"
}

export default App;
