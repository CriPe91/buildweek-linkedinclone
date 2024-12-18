import { useState } from "react";
import { Col, Row, Form, Container, Button } from "react-bootstrap";
import Aside from "./Aside";

const CreaModificaEsperienze = () => {
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedData = {
      role: formData.role,
      company: formData.company,
      startDate: formData.startDate ? new Date(formData.startDate).toISOString().split("T")[0] : null,
      endDate: formData.endDate ? new Date(formData.endDate).toISOString().split("T")[0] : null,
      description: formData.description,
      area: formData.area,
    };

    try {
      console.log(formData);
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/6760008b0ea286001528b947/experiences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwMDE0MDBlYTI4NjAwMTUyOGI5NGEiLCJpYXQiOjE3MzQzNDUwMjQsImV4cCI6MTczNTU1NDYyNH0.Kqz3iZ0J2aoCvLEFVddDkOUt58k0TQHXqquqC64Sby0",
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        setFormData(data); // Se la risposta è corretta, aggiorna i dati del form
      } else {
        throw new Error("Errore nell'importazione della fetch");
      }
    } catch (error) {
      console.error("Errore di caricamento,", error);
    }
  };

  return (
    <Container className="d-flex mb-5 mt-4">
      <Row>
        <Col md={7}></Col>
        <Col md={5}>
          <h1 className="mb-3">Aggiungi la tua Esperienza lavorativa!💼</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formPlaintextEmail">
              <Form.Label className="mt-3 fs-4">Ruolo</Form.Label>
              <input
                type="text"
                className="form-control-plaintext"
                placeholder="Inserisci il ruolo"
                name="role"
                value={formData.role}
                onChange={handleChange}
              />
              <Form.Label className="mt-3 fs-4">Compagnia</Form.Label>
              <input
                type="text"
                className="form-control-plaintext"
                placeholder="Inserisci la compagnia"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
              <Form.Label className="mt-3 fs-4">Data di inizio</Form.Label>
              <input type="date" className="form-control-plaintext" name="startDate" value={formData.startDate} onChange={handleChange} />
              <Form.Label className="mt-3 fs-4">Data di fine</Form.Label>
              <input type="date" className="form-control-plaintext" name="endDate" value={formData.endDate} onChange={handleChange} />
              <Form.Label className="mt-3 fs-4">Descrizione</Form.Label>
              <input
                type="text"
                className="form-control-plaintext"
                placeholder="Inserisci la descrizione"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
              <Form.Label className="mt-3 fs-4">Località</Form.Label>
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
          {/* Passa formData come prop al componente Aside */}
          <Aside esperienza={formData} />
        </Col>
      </Row>
    </Container>
  );
};

export default CreaModificaEsperienze;
