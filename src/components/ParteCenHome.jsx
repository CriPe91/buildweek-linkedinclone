import { Button, Card, Form, Image } from "react-bootstrap";
import { BlockquoteLeft, Calendar, Images } from "react-bootstrap-icons";

const ParteCenHome = ({ profileData }) => {
  return (
    <>
      <Card>
        {" "}
        <Form className="mx-3 mt-3">
          <Form.Group
            className="mb-3 d-flex"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>
              <Image
                src={profileData.image}
                alt="immagine del profilo"
                style={{ width: "55px", height: "55px", objectFit: "cover" }}
                className="rounded-circle me-2"
              />
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              placeholder="Crea un post"
              className="rounded-pill align-content-center"
            />
          </Form.Group>
        </Form>
        <div className="d-flex">
          <Button type="button" variant="btn btn-light" className="p-0 w-50">
            <div className="d-flex align-items-center justify-content-center ">
              <Images className="d-flex ms-3" style={{ color: "blue" }} />{" "}
              <div className="d-flex me-3 " style={{ paddingTop: "16px" }}>
                <p className="fsSpecial ms-2 fw-bold">Contenuti Multimediali</p>
              </div>
            </div>
          </Button>
          <Button type="button" variant="btn btn-light" className="p-0 w-25">
            <div className="d-flex align-items-center justify-content-center">
              <Calendar className="d-flex ms-3" style={{ color: "brown" }} />{" "}
              <div className="d-flex me-3 " style={{ paddingTop: "16px" }}>
                <p className="fsSpecial ms-2 fw-bold">Evento</p>
              </div>
            </div>
          </Button>
          <Button type="button" variant="btn btn-light" className="p-0 w-50">
            <div className="d-flex align-items-center justify-content-center ">
              <BlockquoteLeft
                className="d-flex ms-3"
                style={{ color: "orange" }}
              />{" "}
              <div className="d-flex me-3 " style={{ paddingTop: "16px" }}>
                <p className="fsSpecial ms-2 fw-bold">Scrivi un articolo</p>
              </div>
            </div>
          </Button>
        </div>
      </Card>
    </>
  );
};
export default ParteCenHome;
