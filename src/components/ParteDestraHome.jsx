import { Card } from "react-bootstrap";
import { InfoSquareFill } from "react-bootstrap-icons";
import FooterHome from "./FooterHome";

const ParteDestraHome = () => {
  return (
    <>
      <Card>
        <Card.Body className="pb-0">
          <div className="d-flex">
            <Card.Title style={{ fontWeight: "600" }}>
              LinkedIn Notizie
            </Card.Title>
            <div className="ms-auto">
              {" "}
              <InfoSquareFill style={{ fontSize: "15px" }} />{" "}
            </div>
          </div>
          <h6 style={{ color: "grey" }} className="mb-3">
            Storie principali
          </h6>

          <div>
            <h6>Tech 2025</h6>
            <p style={{ color: "grey" }} className="fw-lighter fsSpecial">
              6 giorni fa - 1400 lettori{" "}
            </p>
          </div>
          <div>
            <h6>Ruffini</h6>
            <p style={{ color: "grey" }} className="fw-lighter fsSpecial">
              2 giorni fa - 270 lettori{" "}
            </p>
          </div>
          <div>
            <h6>Revolut</h6>
            <p style={{ color: "grey" }} className="fw-lighter fsSpecial">
              3 giorni fa - 600 lettori{" "}
            </p>
          </div>
          <div>
            <h6>Maximall Pompei</h6>
            <p style={{ color: "grey" }} className="fw-lighter fsSpecial">
              16 giorni fa - 5200 lettori{" "}
            </p>
          </div>
          <div>
            <h6>Big Ideas 2025</h6>
            <p style={{ color: "grey" }} className="fw-lighter fsSpecial">
              4 giorni fa - 10721 lettori{" "}
            </p>
          </div>
        </Card.Body>
      </Card>
      <FooterHome />
    </>
  );
};
export default ParteDestraHome;
