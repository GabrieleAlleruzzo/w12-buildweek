import { Col, Container, Row } from "react-bootstrap"
import Esperienze from "./Esperienze"
import Formazione from "./Formazione"
import Competenze from "./Competenze"
import Info from "./Info"
import Sidebar from "./Sidebar"
import Bio from "./Bio"

const Main = function () {
  return (
    <Container fluid className="flex-grow-1 vh-100 main">
      <Row>
        <Col xs={12} md={8}>
          {/* altri componenti */}
          <Bio />
          <Info />
          <Esperienze />
          <Formazione />
          <Competenze />
        </Col>

        <Col xs={12} md={4}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  )
}

export default Main
