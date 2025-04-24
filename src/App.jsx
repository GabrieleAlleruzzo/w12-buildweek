import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNavbar from "./components/MyNavbar";
import Main from "./components/Main";
import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProfiloMe, getProfiloMe } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfiloMe());
  }, []);
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
