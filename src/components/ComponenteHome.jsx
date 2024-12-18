import { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import {
  BookmarkFill,
  Calendar,
  Newspaper,
  PeopleFill
} from "react-bootstrap-icons";
import ParteCenHome from "./ParteCenHome";
import ParteDestraHome from "./ParteDestraHome";
import PostHome from "./PostHome";

const ComponenteHome = () => {
  const [profileData, setProfileData] = useState([]);
  const [lavoroData, setLavoroData] = useState([]);
  useEffect(() => {
    const fetchProfilo = async () => {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/6760008b0ea286001528b947",
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
  useEffect(() => {
    const fetchProfilo2 = async () => {
      try {
        const response2 = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/6760008b0ea286001528b947/experiences",
          {
            headers: {
              Authorization:
                "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwMDE0MDBlYTI4NjAwMTUyOGI5NGEiLCJpYXQiOjE3MzQzNDUwMjQsImV4cCI6MTczNTU1NDYyNH0.Kqz3iZ0J2aoCvLEFVddDkOUt58k0TQHXqquqC64Sby0"
            }
          }
        );

        if (response2.ok) {
          const job = await response2.json();
          console.log(job);
          setLavoroData(job);
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
      <Container className="mt-5">
        <Row>
          <Col md={3}>
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
                  borderRadius: "50%"
                }}
              />
              <Card.Body
                style={{
                  marginTop: "-80px"

                  // transform: "translate(4%, -40%)"
                }}
              >
                <div className="d-flex">
                  <Card.Title
                    style={{ fontWeight: "700" }}
                    className="mt-2 fs-3"
                  >
                    {profileData.name} {profileData.surname}{" "}
                  </Card.Title>
                </div>
                <Card.Text style={{ fontSize: "15px" }}>
                  {profileData.bio} <br />
                  {profileData.area}{" "}
                </Card.Text>
                <hr />

                <div className="mt-1">
                  <div className="d-flex">
                    <h6 className="mb-4">Visitatori del profilo:</h6>
                    <h6 className="ms-auto" style={{ color: "blue" }}>
                      153
                    </h6>
                  </div>
                  <div className="d-flex">
                    <h6>Impressioni del post:</h6>
                    <h6 className="ms-auto" style={{ color: "blue" }}>
                      11
                    </h6>
                  </div>
                </div>
                <hr />
                <div className="mt-1" style={{ textDecoration: "underline" }}>
                  <div className="d-flex">
                    <p className="mb-4" style={{ color: "grey" }}>
                      Amplia la tua rete
                    </p>
                  </div>
                  <div className="d-flex">
                    <Image
                      src="data:image/jpeg;base64,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"
                      alt="LinkedIn Premium"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <h6>Prova Premium per 0 EUR</h6>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="mt-2">
              <Card.Body>
                <div className="mt-1">
                  <div className="d-flex">
                    <BookmarkFill />
                    <h6 className="mb-3 ms-2">Elementi salvati</h6>
                  </div>
                  <div className="d-flex">
                    <PeopleFill />
                    <h6 className="mb-3 ms-2">Gruppi</h6>
                  </div>
                  <div className="d-flex">
                    <Newspaper />
                    <h6 className="mb-3 ms-2">Newsletter</h6>
                  </div>
                  <div className="d-flex">
                    <Calendar />
                    <h6 className=" ms-2">Eventi</h6>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={5}>
            <ParteCenHome profileData={profileData} />
            <PostHome />{" "}
          </Col>
          <Col sm={3}>
            <ParteDestraHome />{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ComponenteHome;
