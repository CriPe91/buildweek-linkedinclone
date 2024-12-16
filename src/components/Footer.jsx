import { Col, Container, NavLink, Row } from "react-bootstrap";
import {
  GearFill,
  QuestionCircleFill,
  ShieldShaded
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <Container className="mt-4 fsSpecial">
        <Row className="justify-content-evenly">
          <Col md={2}>
            <NavLink className="mt-3">
              <strong className="specialh6">Informazioni</strong>
            </NavLink>
            <NavLink className="mt-3">
              <strong className="specialh6">
                Informativa sulla community professionale
              </strong>
            </NavLink>
            <NavLink className="mt-3">
              <strong className="specialh6">Privacy e Condizioni</strong>
            </NavLink>
            <NavLink className="mt-3">
              <strong className="specialh6">Sales Solutions</strong>
            </NavLink>
            <NavLink className="mt-3">
              <strong className="specialh6">Centro Sicurezza</strong>
            </NavLink>
            <NavLink className="mt-3">LinkedIn Corporation © 2024</NavLink>
          </Col>
          <Col md={2}>
            <NavLink className="mt-3">
              <strong className="specialh6">Accessibilità</strong>
            </NavLink>
            <NavLink className="mt-3">
              <strong className="specialh6">Carriera</strong>
            </NavLink>
            <NavLink className="mt-3">
              <strong className="specialh6">
                Opzioni per gli annunci pubblicitari
              </strong>
            </NavLink>
            <NavLink className="mt-3">
              <strong className="specialh6">Mobile</strong>
            </NavLink>
          </Col>
          <Col md={2}>
            <NavLink className="mt-3">
              <strong className="specialh6">Talent Solution</strong>
            </NavLink>
            <NavLink className="mt-3">
              <strong className="specialh6">Soluzione di marketing</strong>
            </NavLink>
            <NavLink className="mt-3">
              <strong className="specialh6">Pubblicità</strong>
            </NavLink>
            <NavLink className="mt-3">
              <strong className="specialh6">Piccole imprese</strong>
            </NavLink>
          </Col>
          <Col md={2}>
            <NavLink className="mt-1">
              <div className="d-flex">
                <QuestionCircleFill style={{ fontSize: "17px" }} />
                <div className="ms-1">
                  <h6 style={{ fontSize: "10px" }} className="specialh6">
                    {" "}
                    <strong>Domande? </strong>
                  </h6>
                  <p>Visita il nostro centro assistenza</p>
                </div>
              </div>
            </NavLink>
            <NavLink className="mt-1">
              <div className="d-flex">
                <GearFill style={{ fontSize: "21px" }} />
                <div className="ms-1">
                  <h6 style={{ fontSize: "10px" }} className="specialh6">
                    {" "}
                    <strong>Gestisci il tuo account e la tua privacy </strong>
                  </h6>
                  <p>Vai alle impostazioni</p>
                </div>
              </div>
            </NavLink>
            <NavLink className="mt-1">
              <div className="d-flex">
                <ShieldShaded style={{ fontSize: "19px" }} />
                <div className="ms-1">
                  <h6 style={{ fontSize: "10px" }} className="specialh6">
                    {" "}
                    <strong>Trasparenza sui contenuti consigliati </strong>
                  </h6>
                  <p>Scopri di più sui contenuti consigliati.</p>
                </div>
              </div>
            </NavLink>
          </Col>
          <Col md={2}>
            <h6 style={{ fontSize: "10px" }}>Seleziona lingua</h6>
            <select
              className="form-select"
              aria-label="Default select example"
              style={{ fontSize: "10px" }}
            >
              <option selected>Italiano (Italiano)</option>
              <option value="1">English (Inglese)</option>
              <option value="2">Español (Spagnolo)</option>
              <option value="3">Deutsch (Tedesco)</option>
              <option value="4">Français (Francese)</option>
            </select>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Footer;
