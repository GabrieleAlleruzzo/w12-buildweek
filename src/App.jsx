import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNavbar from "./components/MyNavbar";
import Main from "./components/Main";
import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import UploadImage from "./components/UploadImage";

function App() {
  return (
    <>
      <Container
        fluid
        style={{ backgroundColor: "#F8F9FA" }}
        className="border border-1"
      >
        <Row>
          <Col>
            <MyNavbar />
          </Col>
        </Row>
      </Container>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:userId" element={<Main />} />
      </Routes>
    </>
  );
  // inserire "Routes" e "Route"
}

export default App;
