import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FileCheck } from "react-bootstrap-icons";
import Sliders from "./Sliders";

const SezioneCentrale = () => {
  const [profileData, setiProfileData] = useState([]);

  useEffect(() => {
    const fetchProfilo = async () => {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/6551f6cdc55e7e0018f83c0f",
          {
            headers: {
              Authorization:
                "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwMDE0MDBlYTI4NjAwMTUyOGI5NGEiLCJpYXQiOjE3MzQzNDUwMjQsImV4cCI6MTczNTU1NDYyNH0.Kqz3iZ0J2aoCvLEFVddDkOUt58k0TQHXqquqC64Sby0",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setiProfileData(data);
        } else {
          throw new Error("Errore nell'importazione della fetch");
        }
      } catch (error) {
        console.error("Errore di caricamento,", error);
      }
    };
    fetchProfilo();
  }, []);
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={8}>
            <Card>
              <Card.Img variant="top" src="src/assets/sfondo1.png" />

              <Card.Img
                variant="top"
                src={profileData.image}
                className="rounded-circle ms-3 border border-4   border border-white "
                style={{
                  transform: "translate(5%, -50%)",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                }}
              />
              <Card.Body
                style={{
                  transform: "translate(4%, -40%)",
                }}
              >
                <Card.Title style={{ fontWeight: "700" }}>
                  {profileData.name}{" "}
                  <Button
                    type="Button"
                    className="btn btn-light text-info mx-3 rounded-pill "
                  >
                    <FileCheck cl /> Aggiungi badge di verifica
                  </Button>
                </Card.Title>
                <Card.Text>
                  {profileData.title} <br />
                  {profileData.area} -{" "}
                  <span className="text-info">Informazioni di contatto</span>
                </Card.Text>

                <div className="mt-5">
                  <Button className="rounded-pill ">Disponibile per</Button>
                  <Button
                    variant="outline-primary"
                    className=" rounded-pill border-2 mx-2"
                  >
                    Aggiungi sezione del profilo
                  </Button>
                  <Button
                    variant="outline-primary"
                    className=" rounded-pill border-2 mx-2"
                  >
                    Migliora profilo
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className="rounded-pill border-2 mx-2"
                  >
                    Risorse
                  </Button>
                </div>
              </Card.Body>
              <Sliders />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4}></Col>
        </Row>
      </Container>
    </>
  );
};

export default SezioneCentrale;
