import { useEffect, useState } from "react";
import { Button, Card, Image } from "react-bootstrap";
import {
  ArrowRight,
  BarChartFill,
  EyeFill,
  PencilFill,
  PeopleFill,
  Plus
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
//import VisualizzazioneEsperienze from "./VisualizzazioneEsperienze";

const Aside = () => {
  const [lavoroData, setLavoroData] = useState([]);
  useEffect(() => {
    const fetchProfilo2 = async () => {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/6760008b0ea286001528b947/experiences",
          {
            headers: {
              Authorization:
                "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwMDE0MDBlYTI4NjAwMTUyOGI5NGEiLCJpYXQiOjE3MzQzNDUwMjQsImV4cCI6MTczNTU1NDYyNH0.Kqz3iZ0J2aoCvLEFVddDkOUt58k0TQHXqquqC64Sby0"
            }
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setLavoroData(data);
        } else {
          throw new Error("Errore nell'importazione della fetch");
        }
      } catch (error) {
        console.error("Errore di caricamento,", error);
      }
    };
    fetchProfilo2();
  }, []);
  if (lavoroData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Card className="mt-3">
        <Card.Body>
          <Card.Title style={{ fontWeight: "600" }}>
            Consigliati per te
          </Card.Title>
          <div className="d-flex">
            <EyeFill
              className="me-1 "
              style={{ fontSize: "25px", color: "grey" }}
            />
            <p style={{ color: "grey" }}>Solo per te</p>
          </div>
          <div className="border border-1">
            <Card.Text className="m-2">
              <Image
                src="https://static.licdn.com/aero-v1/sc/h/db05fgvyq7n2ng4fiexgf4hcq"
                alt=""
              />
              <span className="text-black ms-2">
                Scrivi un riepilogo per mettere in evidenza la tua personalità o
                la tua esperienza lavorativa
              </span>
              <p>
                Gli utenti che includono un riepilogo ricevono fino a 3,9 volte
                più visualizzazioni del profilo.
              </p>

              <Button
                variant="btn btn-light border-black"
                className="rounded-pill border-2 mx-2"
              >
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
            <EyeFill
              className="me-1 "
              style={{ fontSize: "25px", color: "grey" }}
            />
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
                      <BarChartFill
                        style={{ fontSize: "24px" }}
                        className="me-2 ms-4"
                      />
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
        <button
          style={{ width: "100%" }}
          className="rounded border border-light-subtle border-top btn btn-light"
        >
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
            <div>{/* <VisualizzazioneEsperienze /> */}</div>
          </div>

          <div className="fsSpecial">
            <h6>{lavoroData[0].role}</h6>
            <p className="mb-0">{lavoroData[0].company}</p>
            <cite className="fsSpecial">
              Inizio:{" "}
              {new Date(lavoroData[0].startDate).getDate() +
                "/" +
                (new Date(lavoroData[0].startDate).getMonth() + 1) +
                "/" +
                new Date(lavoroData[0].startDate).getFullYear()}
            </cite>
            <cite className="fsSpecial">
              {" "}
              Fine:
              {new Date(lavoroData[0].endDate).getDate() +
                "/" +
                (new Date(lavoroData[0].endDate).getMonth() + 1) +
                "/" +
                new Date(lavoroData[0].endDate).getFullYear()}
            </cite>
            <p>{lavoroData[0].area}</p>
            <hr />
          </div>
        </Card.Body>
      </Card>
      <Card className="mt-3">
        <Card.Body>
          <div className="d-flex">
            <Card.Title style={{ fontWeight: "600" }}>Formazione</Card.Title>
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
