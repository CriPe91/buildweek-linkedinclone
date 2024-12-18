import { Button, Card, Image } from "react-bootstrap";
import { EyeFill, Pencil, PersonPlusFill } from "react-bootstrap-icons";

const SezLatBenv = () => {
  return (
    <>
      <Card>
        <Card.Body className="pb-0">
          <div className="d-flex">
            <Card.Title style={{ fontWeight: "600" }}>
              Lingua del profilo
            </Card.Title>
            <div className="ms-auto">
              {" "}
              <Pencil style={{ fontSize: "17px" }} />{" "}
            </div>
          </div>

          <div>
            <h6 style={{ color: "grey", fontWeight: "lighter" }}>Italiano</h6>
          </div>
          <hr />
        </Card.Body>
        <Card.Body className="pt-0">
          <div className="d-flex">
            <Card.Title style={{ fontWeight: "600" }}>
              Profilo pubblico e URL
            </Card.Title>
            <div className="ms-auto">
              {" "}
              <Pencil style={{ fontSize: "17px" }} />{" "}
            </div>
          </div>

          <div>
            <h6 style={{ color: "grey", fontWeight: "lighter" }}>
              Qui ci va l url dinamico
            </h6>
          </div>
        </Card.Body>
      </Card>
      <Card className="mt-2">
        <Card.Body>
          <Card.Title style={{ fontWeight: "600" }}>
            Altre visualizzazioni
          </Card.Title>
          <div className="d-flex">
            <EyeFill
              className="me-1 "
              style={{ fontSize: "25px", color: "grey" }}
            />
            <p style={{ color: "grey" }}>Solo per te</p>
          </div>
          <div>
            <Card.Text className="m-2">
              <div className="d-flex align-items-start">
                <Image
                  src="https://static.licdn.com/aero-v1/sc/h/db05fgvyq7n2ng4fiexgf4hcq"
                  alt=""
                  className="rounded-circle top"
                />
                <div className="d-flex flex-column">
                  <p className="text-black ms-2 fsSpecial2 mb-0 fw-bold">
                    Nome e cognome profilo consigliato
                  </p>
                  <p className="text-black ms-2 fsSpecial2 pt-0">
                    Lavoro profilo consigliato
                  </p>

                  <Button
                    variant="btn btn-outline-primary"
                    className="rounded-pill p-1 "
                  >
                    Messaggio
                  </Button>
                </div>
              </div>
              <hr />
            </Card.Text>
          </div>
          <div className="mt-5"></div>
        </Card.Body>
      </Card>
      <Card className="mt-2">
        <Card.Body>
          <Card.Title
            style={{ fontWeight: "600", fontSize: "15px" }}
            className="mb-4"
          >
            Persone che potresti conoscere
          </Card.Title>
          <div>
            <Card.Text className="m-2">
              <div className="d-flex align-items-start">
                <Image
                  src="https://static.licdn.com/aero-v1/sc/h/db05fgvyq7n2ng4fiexgf4hcq"
                  alt=""
                  className="rounded-circle top"
                />
                <div className="d-flex flex-column">
                  <p className="text-black ms-2 fsSpecial2 mb-0 fw-bold">
                    Nome e cognome profilo consigliato
                  </p>
                  <p className="text-black ms-2 fsSpecial2 pt-0">
                    Lavoro profilo consigliato
                  </p>
                  <Button
                    variant="btn btn-light border-black"
                    className="rounded-pill border-2 mx-2 p-1"
                  >
                    {" "}
                    <div className="d-flex justify-content-center align-items-center">
                      <PersonPlusFill className="me-2" />
                      Collegati
                    </div>
                  </Button>
                </div>
              </div>
              <hr />
            </Card.Text>
          </div>
          <div className="mt-5"></div>
        </Card.Body>
      </Card>
    </>
  );
};
export default SezLatBenv;
