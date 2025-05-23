
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import MyNavbar from "./components/MyNavbar"
import Main from "./components/Main"
import { Col, Container, Row } from "react-bootstrap"
import { Routes, Route } from "react-router-dom"
import UploadImage from "./components/UploadImage"
import Jobs from "./components/jobs"


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
        <Route path="/jobs" element={<Jobs />} />
        {/* Altre route */}
      </Routes>
    </>
  )
  // inserire "Routes" e "Route"
}

export default App
