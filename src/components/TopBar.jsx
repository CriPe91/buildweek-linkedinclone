import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  Image,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import {
  BellFill,
  BriefcaseFill,
  ChatRightDotsFill,
  Grid3x3GapFill,
  HouseFill,
  PeopleFill
} from "react-bootstrap-icons";
const TopBar = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const profileFetch = async () => {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/me",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwMDA4YjBlYTI4NjAwMTUyOGI5NDciLCJpYXQiOjE3MzQzNTEyMzgsImV4cCI6MTczNTU2MDgzOH0.A7_dxDQ2czJRBCzIe0Af1bv9bVqqFDSEYrd-3JI-pPo"
            }
          }
        );
        if (response.ok) {
          const resp = await response.json();
          console.log(resp);
          setProfile(resp);
        } else {
          throw new Error("Error in fetching songs");
        }
      } catch (err) {
        console.log("error", err);
      }
    };
    profileFetch();
  }, []);

  return (
    <>
      <div className="TopBar">
        <Navbar
          expand="md"
          className="bg-white marginS "
          style={{ maxHeight: "50px" }}
        >
          <Container fluid>
            <div className="d-flex">
              <Image
                src="data:image/png;base64,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"
                style={{ width: "10%" }}
                alt="logoLinkedin"
              />

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Cerca"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </div>
            <div className="d-flex">
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0 align-items-center"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <div className="d-flex flex-column mx-5">
                    <div className="text-center">
                      <HouseFill className="text-center" />
                    </div>
                    <Nav.Link
                      href="/Home"
                      className="fsSpecial align-content-center p-0"
                    >
                      {" "}
                      Home
                    </Nav.Link>
                  </div>
                  <div className="d-flex flex-column me-5">
                    <div className="text-center">
                      <PeopleFill className="text-center" />
                    </div>
                    <Nav.Link
                      href="/Rete"
                      className="fsSpecial align-content-center p-0 "
                    >
                      {" "}
                      Rete
                    </Nav.Link>
                  </div>
                  <div className="d-flex flex-column me-5">
                    <div className="text-center">
                      <BriefcaseFill className="text-center" />
                    </div>
                    <Nav.Link
                      href="/Lavoro"
                      className="fsSpecial align-content-center p-0"
                    >
                      Lavoro
                    </Nav.Link>
                  </div>
                  <div className="d-flex flex-column me-5">
                    <div className="text-center">
                      <ChatRightDotsFill />
                    </div>
                    <Nav.Link
                      href="/Messaggistica"
                      className="fsSpecial align-content-center p-0"
                    >
                      Messaggistica
                    </Nav.Link>
                  </div>
                  <div className="d-flex flex-column me-5">
                    <div className="text-center">
                      <BellFill />
                    </div>
                    <Nav.Link
                      href="/Notifiche"
                      className="fsSpecial align-content-center p-0"
                    >
                      Notifiche
                    </Nav.Link>
                  </div>
                  <div className="d-flex flex-column  me-5">
                    <div className="text-center">
                      <img
                        src={profile.image}
                        alt="immagineprofilo"
                        style={{ maxWidth: "26px" }}
                        className="rounded-circle p-0 mb-0 marginTopp"
                      />
                    </div>

                    <NavDropdown
                      id="navbarScrollingDropdown"
                      className="fsSpecial align-content-center paddingTu margineNeg"
                    >
                      <NavDropdown.Item
                        href="/me"
                        className="d-flex flex-column fsSpecial align-content-center text-center "
                      >
                        {" "}
                        <div className="d-flex">
                          <img
                            src={profile.image}
                            alt="immagineprofilo"
                            style={{ maxWidth: "50px" }}
                            className="rounded-circle mb-2"
                          />

                          <strong className="align-content-center ms-1">
                            {profile.name} {profile.surname}
                          </strong>
                        </div>
                        <Button
                          variant="white"
                          type="button"
                          className="heightBut text-center fsSpecial btn btn-outline-primary"
                        >
                          {" "}
                          <strong>Visualizza il profilo </strong>
                        </Button>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/account">
                        <h6 className="fsSpecial align-content-center mb-0">
                          <strong> Account </strong>
                        </h6>
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="/Privacy"
                        className="fsSpecial align-content-center"
                      >
                        Impostazioni e Privacy
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="/Guida"
                        className="fsSpecial align-content-center"
                      >
                        Guida
                      </NavDropdown.Item>

                      <NavDropdown.Item
                        href="/Lingua"
                        className="fsSpecial align-content-center"
                      >
                        Lingua
                      </NavDropdown.Item>
                      <hr />

                      <NavDropdown.Item href="/Gestisci">
                        <h6 className="fsSpecial align-content-center mb-0">
                          <strong> Gestisci </strong>
                        </h6>
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="/Attivita"
                        className="fsSpecial align-content-center"
                      >
                        Post e attività
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="/Offerte"
                        className="fsSpecial align-content-center"
                      >
                        Pubblicazione di offerte
                      </NavDropdown.Item>
                      <hr />
                      <NavDropdown.Item href="/Logout">
                        <h6 className="fsSpecial align-content-center mx-0">
                          Esci
                        </h6>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>

                  <hr />
                  <div className="d-flex flex-column border-start border-1">
                    <div className="text-center">
                      <Grid3x3GapFill />
                    </div>
                    <Nav.Link
                      href="/Aziende"
                      className="fsSpecial align-content-center p-0"
                    >
                      Per le aziende
                    </Nav.Link>
                  </div>
                  <Nav.Link
                    href="/Premium"
                    className="fsSpecial align-content-center text-decoration-underline"
                    style={{ color: "brown" }}
                  >
                    Prova Premium per 0 EUR
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
export default TopBar;
