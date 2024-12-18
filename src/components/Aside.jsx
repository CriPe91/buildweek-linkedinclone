import { Button, Card, Image } from "react-bootstrap";
import { ArrowRight, BarChartFill, EyeFill, PencilFill, PeopleFill, Plus } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Aside = ({ esperienza }) => {
  return (
    <>
      <Card className="mt-3">
        <Card.Body>
          <Card.Title style={{ fontWeight: "600" }}>Consigliati per te</Card.Title>
          <div className="d-flex">
            <EyeFill className="me-1 " style={{ fontSize: "25px", color: "grey" }} />
            <p style={{ color: "grey" }}>Solo per te</p>
          </div>
          <div className="border border-1">
            <Card.Text className="m-2">
              <Image src="https://static.licdn.com/aero-v1/sc/h/db05fgvyq7n2ng4fiexgf4hcq" alt="" />
              <span className="text-black ms-2">Scrivi un riepilogo per mettere in evidenza la tua personalità o la tua esperienza lavorativa</span>
              <p>Gli utenti che includono un riepilogo ricevono fino a 3,9 volte più visualizzazioni del profilo.</p>

              <Button variant="btn btn-light border-black" className="rounded-pill border-2 mx-2">
                Aggiungi un riepilogo
              </Button>
            </Card.Text>
          </div>
          <div className="mt-5"></div>
        </Card.Body>
      </Card>
      <Card className="mt-3">
        <Card.Body>
          <Card.Title style={{ fontWeight: "600" }}>Analisi</Card.Title>
          <div className="d-flex">
            <EyeFill className="me-1 " style={{ fontSize: "25px", color: "grey" }} />
            <p style={{ color: "grey" }}>Solo per te</p>
          </div>
          <div>
            <Card.Text className="m-2">
              <div className="d-flex">
                <div className="d-flex">
                  <div>
                    <PeopleFill style={{ fontSize: "24px" }} className="me-2" />
                  </div>
                  <div>
                    <h6>
                      {" "}
                      <strong>11 Visualizzazioni del profilo </strong>
                    </h6>

                    <p className="text-black" style={{ fontSize: "14px" }}>
                      Scopri chi ha visitato il tuo profilo.
                    </p>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="d-flex">
                    <div>
                      <BarChartFill style={{ fontSize: "24px" }} className="me-2 ms-4" />
                    </div>
                    <div>
                      <h6>
                        <strong> 184 impressioni del post </strong>
                      </h6>
                      <p className="text-black" style={{ fontSize: "14px" }}>
                        Scopri chi sta interagendo con i tuoi post.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Text>
          </div>
        </Card.Body>
        <button style={{ width: "100%" }} className="rounded border border-light-subtle border-top btn btn-light">
          <strong>
            Mostra tutte le analisi <ArrowRight className="my-2" />{" "}
          </strong>
        </button>
      </Card>
      <Card className="mt-3">
        <Card.Body>
          <div className="d-flex">
            <Card.Title style={{ fontWeight: "600" }}>Esperienza</Card.Title>
            <div className="ms-auto">
              <Link to="/Esperienze">
                <Button variant="btn btn-light" className="rounded-circle me-4">
                  <Plus style={{ fontSize: "25px" }} />
                </Button>
              </Link>
              <Button variant="btn btn-light" className="rounded-circle">
                {" "}
                <PencilFill style={{ fontSize: "21px" }} />{" "}
              </Button>
            </div>
            <div>
              {/* Aggiungi un controllo per evitare errori quando 'esperienza' è undefined */}
              <h5>{esperienza.role || "Ruolo non disponibile"}</h5>
              <p>{esperienza.company || "Compagnia non disponibile"}</p>
              <p>{esperienza.startDate ? `${esperienza.startDate} - ${esperienza.endDate}` : "Date non disponibili"}</p>
              <p>{esperienza.description || "Descrizione non disponibile"}</p>
              <p>{esperienza.area || "Area non disponibile"}</p>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card className="mt-3">
        <Card.Body>
          <div className="d-flex">
            <Card.Title style={{ fontWeight: "600" }}>Formazione</Card.Title>
            <div className="ms-auto">
              <Button variant="btn btn-light" className="rounded-circle me-4 ">
                <Plus style={{ fontSize: "25px" }} />
              </Button>
              <Button variant="btn btn-light" className="rounded-circle">
                {" "}
                <PencilFill style={{ fontSize: "21px" }} />{" "}
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card className="mt-3">
        <Card.Body>
          <div className="d-flex">
            <Card.Title style={{ fontWeight: "600" }}>Competenze</Card.Title>
            <div className="ms-auto">
              <Button variant="btn btn-light" className="rounded-circle me-4">
                <Plus style={{ fontSize: "25px" }} />
              </Button>
              <Button variant="btn btn-light" className="rounded-circle">
                {" "}
                <PencilFill style={{ fontSize: "21px" }} />{" "}
              </Button>
            </div>
          </div>

          <div></div>
        </Card.Body>
      </Card>
    </>
  );
};
export default Aside;
