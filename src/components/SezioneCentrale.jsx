import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FileCheck, PencilFill } from "react-bootstrap-icons";
import Sliders from "./Sliders";
import Aside from "./Aside";
import SezLatBenv from "./SezLatBenv";
import Footer from "./Footer";

const SezioneCentrale = () => {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    const fetchProfilo = async () => {
      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/6760008b0ea286001528b947", {
          headers: {
            Authorization:
              "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwMDE0MDBlYTI4NjAwMTUyOGI5NGEiLCJpYXQiOjE3MzQzNDUwMjQsImV4cCI6MTczNTU1NDYyNH0.Kqz3iZ0J2aoCvLEFVddDkOUt58k0TQHXqquqC64Sby0",
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setProfileData(data);
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
                className="rounded-circle ms-3 border border-4   border border-white object-fit-cover"
                style={{
                  transform: "translate(5%, -50%)",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                }}
              />
              <Card.Body
                style={{
                  marginTop: "-80px",

                  // transform: "translate(4%, -40%)"
                }}
              >
                <div className="d-flex">
                  <Card.Title style={{ fontWeight: "700" }} className="d-flex align-items-center">
                    {profileData.name} {profileData.surname}{" "}
                    <Button type="Button" className="btn btn-light text-info mx-3 rounded-pill ">
                      <FileCheck /> Aggiungi badge di verifica
                    </Button>
                    <div className="d-flex flex-inline" style={{ marginLeft: "300px" }}>
                      <Button variant="btn btn-light" className="rounded-circle">
                        {" "}
                        <PencilFill style={{ fontSize: "21px" }} />{" "}
                      </Button>
                    </div>
                  </Card.Title>
                </div>
                <Card.Text>
                  {profileData.title} <br />
                  {profileData.area} - <span className="text-info">Informazioni di contatto</span>
                </Card.Text>

                <div className="mt-5">
                  <Button className="rounded-pill ">Disponibile per</Button>
                  <Button variant="outline-primary" className=" rounded-pill border-2 mx-2">
                    Aggiungi sezione del profilo
                  </Button>
                  <Button variant="outline-primary" className=" rounded-pill border-2 mx-2">
                    Migliora profilo
                  </Button>
                  <Button variant="outline-secondary" className="rounded-pill border-2 mx-2">
                    Risorse
                  </Button>
                </div>
              </Card.Body>
              <Sliders />
            </Card>
            <Aside />
          </Col>
          <Col md={3}>
            <SezLatBenv />
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
};

export default SezioneCentrale;
