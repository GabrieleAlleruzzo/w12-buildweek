import { Col, Container, Row } from "react-bootstrap";
import Esperienze from "./Esperienze";
import Formazione from "./Formazione";
import Competenze from "./Competenze";
import Info from "./Info";
import Sidebar from "./Sidebar";
import Bio from "./Bio";
import DynamicModal from "./DynamicModal";

const Main = function () {
  return (
    <Container fluid className="flex-grow-1 vh-100 main">
      <Row className="justify-content-center pt-2">
        <Col xs={12} lg={6}>
          {/* altri componenti */}
          <Bio />
          <DynamicModal />
          <Info />
          <Esperienze />
          <Formazione />
          <Competenze />
        </Col>

        <Col xs={12} lg={3}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
