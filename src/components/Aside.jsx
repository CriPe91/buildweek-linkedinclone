import { useEffect, useState } from "react";
import { Button, Card, Form, Image } from "react-bootstrap";
import {
  ArrowRight,
  BarChartFill,
  EyeFill,
  PencilFill,
  PeopleFill,
  Plus,
  Trash3Fill
} from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";

const Aside = () => {
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: ""
  });
  const [lavoroData, setLavoroData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = async (_id) => {
    console.log("aooo", _id);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/6760008b0ea286001528b947/experiences/${_id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwMDA4YjBlYTI4NjAwMTUyOGI5NDciLCJpYXQiOjE3MzQzNTEyMzgsImV4cCI6MTczNTU2MDgzOH0.A7_dxDQ2czJRBCzIe0Af1bv9bVqqFDSEYrd-3JI-pPo"
          }
        }
      );

      if (!response.ok) {
        throw new Error("Impossibile eliminare l'esperienza.");
      }
      const result = await response.text();
      console.log("esperienza eliminata, bravo", result);
      fetchEsperienze();
    } catch (err) {
      console.error("erroreeeee", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Impedisce il comportamento predefinito di invio del form

    // Prepara i dati da inviare
    const formattedData = {
      role: formData.role,
      company: formData.company,
      startDate: formData.startDate
        ? new Date(formData.startDate).toISOString().split("T")[0]
        : null,
      endDate: formData.endDate
        ? new Date(formData.endDate).toISOString().split("T")[0]
        : null,
      description: formData.description,
      area: formData.area
    };

    try {
      console.log("Dati inviati:", formattedData);

      // Verifica se c'è o meno l'ID
      const url = formData._id
        ? `https://striveschool-api.herokuapp.com/api/profile/6760008b0ea286001528b947/experiences/${formData._id}`
        : "https://striveschool-api.herokuapp.com/api/profile/6760008b0ea286001528b947/experiences";

      const method = formData._id ? "PUT" : "POST"; // Se esiste _id, ci sarà una modifica dell'esperienza già creata prima, sennò te ne crea una nuova

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwMDA4YjBlYTI4NjAwMTUyOGI5NDciLCJpYXQiOjE3MzQzNTEyMzgsImV4cCI6MTczNTU2MDgzOH0.A7_dxDQ2czJRBCzIe0Af1bv9bVqqFDSEYrd-3JI-pPo"
        },
        body: JSON.stringify(formattedData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Esperienza aggiornata/creata:", data);

        fetchEsperienze();

        //aggiorna dati form
        setFormData({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: ""
        });

        setShow(false);
      } else {
        throw new Error("Errore durante l'invio dei dati al server");
      }
    } catch (error) {
      console.error("Errore durante l'invio della richiesta:", error);
    }
  };

  const fetchEsperienze = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/6760008b0ea286001528b947/experiences",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwMDA4YjBlYTI4NjAwMTUyOGI5NDciLCJpYXQiOjE3MzQzNTEyMzgsImV4cCI6MTczNTU2MDgzOH0.A7_dxDQ2czJRBCzIe0Af1bv9bVqqFDSEYrd-3JI-pPo"
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
  useEffect(() => {
    fetchEsperienze();
  }, []);
  if (lavoroData.length === 0) {
    return <div>Loading...</div>;
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevQuery) => ({
      ...prevQuery,
      [name]: value
    }));
  };

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
              <Button
                variant="btn btn-light"
                className="rounded-circle me-4 "
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover"
                }}
                onClick={handleShow}
              >
                <Plus style={{ fontSize: "25px" }} />
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Aggiungi Esperienza Lavorativa</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                  <Modal.Body>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Ruolo</Form.Label>
                      <Form.Control
                        name="role"
                        onChange={handleChange}
                        value={formData.role}
                        type="text"
                        placeholder="ruolo..."
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Azienda</Form.Label>
                      <Form.Control
                        name="company"
                        onChange={handleChange}
                        value={formData.company}
                        type="text"
                        placeholder="Azienda..."
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Data di inizio</Form.Label>
                      <Form.Control
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        type="date"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Data di fine</Form.Label>
                      <Form.Control
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        type="date"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Descrizione</Form.Label>
                      <Form.Control
                        name="description"
                        onChange={handleChange}
                        value={formData.description}
                        type="text"
                        placeholder="Inserisci la descrizione"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Località</Form.Label>
                      <Form.Control
                        name="area"
                        onChange={handleChange}
                        value={formData.area}
                        type="text"
                        placeholder="inserisci la città"
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
          </div>

          {lavoroData.map((lavoroSing) => (
            <div className="fsSpecial" key={lavoroSing._id}>
              <div className="d-flex justify-content-between align-items-end">
                <h6>{lavoroSing.role}</h6>
                <div>
                  <Button
                    variant="btn btn-light"
                    className="rounded-circle me-3 mt-2"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover"
                    }}
                    onClick={() => {
                      setFormData(lavoroSing);
                      handleShow();
                    }}
                  >
                    {" "}
                    <PencilFill />{" "}
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Aggiungi Esperienza Lavorativa</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleSubmit}>
                      <Modal.Body>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Ruolo</Form.Label>
                          <Form.Control
                            name="role"
                            onChange={handleChange}
                            value={formData.role}
                            type="text"
                            placeholder="ruolo..."
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Azienda</Form.Label>
                          <Form.Control
                            name="company"
                            onChange={handleChange}
                            value={formData.company}
                            type="text"
                            placeholder="Azienda..."
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Data di inizio</Form.Label>
                          <Form.Control
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            type="date"
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Data di fine</Form.Label>
                          <Form.Control
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange}
                            type="date"
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Descrizione</Form.Label>
                          <Form.Control
                            name="description"
                            onChange={handleChange}
                            value={formData.description}
                            type="text"
                            placeholder="Inserisci la descrizione"
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Località</Form.Label>
                          <Form.Control
                            name="area"
                            onChange={handleChange}
                            value={formData.area}
                            type="text"
                            placeholder="inserisci la città"
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
                  <Button
                    variant="danger"
                    type="button"
                    className="py-1 px-2 mt-2"
                    onClick={() => {
                      handleDelete(lavoroSing._id);
                    }}
                  >
                    <Trash3Fill />
                  </Button>
                </div>
              </div>
              <p className="mb-0">{lavoroSing.company}</p>
              <cite className="fsSpecial">
                Inizio:{" "}
                {new Date(lavoroSing.startDate).getDate() +
                  "/" +
                  (new Date(lavoroSing.startDate).getMonth() + 1) +
                  "/" +
                  new Date(lavoroSing.startDate).getFullYear()}
              </cite>

              <cite className="fsSpecial">
                {" "}
                Fine:{" "}
                {new Date(lavoroSing.endDate).getDate() +
                  "/" +
                  (new Date(lavoroSing.endDate).getMonth() + 1) +
                  "/" +
                  new Date(lavoroSing.endDate).getFullYear()}
              </cite>
              <div className="d-flex justify-content-between">
                <p>{lavoroSing.area}</p>
              </div>
              <hr />
            </div>
          ))}
        </Card.Body>
      </Card>
      <Card className="mt-3">
        <Card.Body>
          <div className="d-flex">
            <Card.Title style={{ fontWeight: "600" }}>Formazione</Card.Title>
            <div className="ms-auto">
              <Button
                variant="btn btn-light"
                className="rounded-circle me-4"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover"
                }}
              >
                <Plus style={{ fontSize: "25px" }} />
              </Button>
              <Button
                variant="btn btn-light"
                className="rounded-circle"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover"
                }}
              >
                {" "}
                <PencilFill />{" "}
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
              <Button
                variant="btn btn-light"
                className="rounded-circle me-4"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover"
                }}
              >
                <Plus style={{ fontSize: "25px" }} />
              </Button>
              <Button
                variant="btn btn-light"
                className="rounded-circle"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover"
                }}
              >
                {" "}
                <PencilFill />{" "}
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
