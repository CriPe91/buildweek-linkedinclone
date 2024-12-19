import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FileCheck, PencilFill } from "react-bootstrap-icons";
import Sliders from "./Sliders";
import Aside from "./Aside";
import SezLatBenv from "./SezLatBenv";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const SezioneCentrale = () => {
  const [profileData, setProfileData] = useState([]);

  const [update, setUpdateData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdateData((prevQuery) => ({
      ...prevQuery,
      [name]: value
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwMDA4YjBlYTI4NjAwMTUyOGI5NDciLCJpYXQiOjE3MzQzNTEyMzgsImV4cCI6MTczNTU2MDgzOH0.A7_dxDQ2czJRBCzIe0Af1bv9bVqqFDSEYrd-3JI-pPo"
          },
          method: "PUT",
          body: JSON.stringify(update)
        }
      );
      if (response.ok) {
        const data = await response.json();
        fetchProfilo();
        console.log(data);
      } else {
        throw new Error("Errore nell'importazione della fetch");
      }
    } catch (error) {
      console.error("Errore di caricamento,", error);
    }
  };

  const fetchProfilo = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwMDA4YjBlYTI4NjAwMTUyOGI5NDciLCJpYXQiOjE3MzQzNTEyMzgsImV4cCI6MTczNTU2MDgzOH0.A7_dxDQ2czJRBCzIe0Af1bv9bVqqFDSEYrd-3JI-pPo"
          }
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        setProfileData(data);
        setUpdateData(data);
      } else {
        throw new Error("Errore nell'importazione della fetch");
      }
    } catch (error) {
      console.error("Errore di caricamento,", error);
    }
  };
  useEffect(() => {
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
                    className="d-flex align-items-center"
                  >
                    {profileData.name} {profileData.surname}{" "}
                    <Button
                      type="Button"
                      className="btn btn-light text-info mx-3 rounded-pill "
                    >
                      <FileCheck /> Aggiungi badge di verifica
                    </Button>
                    <div
                      className="d-flex flex-inline"
                      style={{ marginLeft: "300px" }}
                    >
                      <Button
                        onClick={handleShow}
                        variant="btn btn-light"
                        className="rounded-circle"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover"
                        }}
                      >
                        {" "}
                        <PencilFill style={{ fontSize: "21px" }} />{" "}
                      </Button>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Modifica Presentazione</Modal.Title>
                        </Modal.Header>
                        <Form onSubmit={handleSubmit}>
                          <Modal.Body>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Nome</Form.Label>
                              <Form.Control
                                name="name"
                                onChange={handleChange}
                                value={update.name}
                                type="text"
                                placeholder=" "
                                autoFocus
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Cognome</Form.Label>
                              <Form.Control
                                name="surname"
                                onChange={handleChange}
                                value={update.surname}
                                type="text"
                                placeholder=" "
                                autoFocus
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                name="email"
                                value={update.email}
                                onChange={handleChange}
                                type="name@example.com"
                                placeholder=" "
                                autoFocus
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Username</Form.Label>
                              <Form.Control
                                name="username"
                                value={update.username}
                                onChange={handleChange}
                                type="text"
                                placeholder=" "
                                autoFocus
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Title</Form.Label>
                              <Form.Control
                                name="title"
                                onChange={handleChange}
                                value={update.title}
                                type="text"
                                placeholder=" "
                                autoFocus
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Bio</Form.Label>
                              <Form.Control
                                name="bio"
                                onChange={handleChange}
                                value={update.bio}
                                type="text"
                                placeholder=" "
                                autoFocus
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Area</Form.Label>
                              <Form.Control
                                name="area"
                                value={update.area}
                                type="text"
                                onChange={handleChange}
                                placeholder=" "
                                autoFocus
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Image</Form.Label>
                              <Form.Control
                                name="image"
                                value={update.image}
                                onChange={handleChange}
                                type="text"
                                placeholder=" "
                                autoFocus
                              />
                            </Form.Group>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Chiudi
                            </Button>
                            <Button
                              variant="primary"
                              type="submit"
                              onClick={handleClose}
                            >
                              Salva
                            </Button>
                          </Modal.Footer>
                        </Form>
                      </Modal>
                    </div>
                  </Card.Title>
                </div>
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
            <Aside />
          </Col>
          <Col md={3}>
            <SezLatBenv />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SezioneCentrale;
