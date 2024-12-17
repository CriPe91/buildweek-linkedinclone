import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

const search = new URLSearchParams(window.location.search);
const id = search.get("appId");
const URL = id
  ? `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`
  : "https://striveschool-api.herokuapp.com/api/profile/experiences";
const method = id ? "PUT" : "POST";

const CreaModificaEsperienze = () => {
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita il ricaricamento della pagina

    const newExperience = {
      role: formData.role,
      company: formData.company,
      startDate: formData.startDate,
      endDate: formData.endDate,
      description: formData.description,
      area: formData.area
    };

    fetch(URL, {
      method: method,
      body: JSON.stringify(newExperience),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzNjYWQ3NDRkOGViMzAwMTVhNGE1NGUiLCJpYXQiOjE3MzIwMjk4MTIsImV4cCI6MTczMzIzOTQxMn0.1pK5a1erZzJfD6CE8fLL6z5rW4ZGMWg1TtoDJJwXqwE"
      }
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((newExperience) => {
        if (id) {
          alert("Abbiamo modificato l'esperienza con id: " + newExperience._id);
        } else {
          setFormData({
            // Reset dello stato dopo la creazione
            role: "",
            company: "",
            startDate: "",
            endDate: "",
            description: "",
            area: ""
          });
          alert(
            "Abbiamo creato una nuova esperienza con id: " + newExperience._id
          );
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    if (!id) {
      alert("Nessuna esperienza da eliminare");
      return;
    }

    const confirmDelete = window.confirm(
      "Sei sicuro di voler eliminare questa esperienza?"
    );
    if (!confirmDelete) return;

    fetch(URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzNjYWQ3NDRkOGViMzAwMTVhNGE1NGUiLCJpYXQiOjE3MzIwMjk4MTIsImV4cCI6MTczMzIzOTQxMn0.1pK5a1erZzJfD6CE8fLL6z5rW4ZGMWg1TtoDJJwXqwE"
      }
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((deletedObj) => {
        alert(
          "L'esperienza con id " +
            deletedObj._id +
            " è stata eliminata con successo"
        );
        window.location.assign("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Container className="d-flex mb-5 mt-4 justify-content-center">
        <Row>
          <Col md={9}>
            <h1 className="mb-3">Aggiungi la tua Esperienza lavorativa!💼</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formPlaintextEmail">
                <Form.Label className="mt-3 fs-4 ">Ruolo</Form.Label>
                <input
                  type="text"
                  className="form-control-plaintext"
                  placeholder="Inserisci il ruolo"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                />
                <Form.Label className="mt-3 fs-4 ">Compagnia</Form.Label>
                <input
                  type="text"
                  className="form-control-plaintext"
                  placeholder="Inserisci la compagnia"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
                <Form.Label className="mt-3 fs-4 ">Data di inizio</Form.Label>
                <input
                  type="date"
                  className="form-control-plaintext"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                />
                <Form.Label className="mt-3 fs-4 ">Data di fine</Form.Label>
                <input
                  type="date"
                  className="form-control-plaintext"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                />
                <Form.Label className="mt-3 fs-4 ">Descrizione</Form.Label>
                <input
                  type="text"
                  className="form-control-plaintext"
                  placeholder="Inserisci la descrizione"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
                <Form.Label className="mt-3 fs-4 ">Località</Form.Label>
                <input
                  type="text"
                  className="form-control-plaintext"
                  placeholder="Inserisci la città"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="success" type="submit">
                Conferma i dati
              </Button>
            </Form>

            {id && (
              <Button variant="danger" onClick={handleDelete} className="mt-3">
                Elimina Esperienza
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreaModificaEsperienze;
