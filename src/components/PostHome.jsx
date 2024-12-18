import { useEffect, useState } from "react";
import { Alert, Button, Card, Image, Spinner } from "react-bootstrap";
import {
  ArrowsFullscreen,
  ChatRightText,
  HandThumbsUp,
  Plus,
  Send,
  ThreeDots,
  X
} from "react-bootstrap-icons";

const PostHome = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/posts/",
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
          setPost(data.slice(1740, 1760));
          setLoading(false);
        } else {
          throw new Error("Errore nell'importazione della fetch");
        }
      } catch (error) {
        console.error("Errore di caricamento,", error);
        setLoading(false);
      }
    };
    fetchPost();
  }, []);
  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" />
        <p>Caricamento dei dati...</p>
      </div>
    );
  }

  return (
    <>
      <div className="mt-3">
        {post.length === 0 ? (
          <Alert variant="warning">
            <Alert.Heading>Nessun post trovato</Alert.Heading>
          </Alert>
        ) : (
          post.map((singlePost) => (
            <Card key={singlePost._id} className="mb-3">
              <Card.Body className="d-flex justify-content-between">
                <div className="d-flex">
                  <Image
                    src={singlePost.user.image}
                    alt="immagine del profilo"
                    style={{
                      width: "55px",
                      height: "55px",
                      objectFit: "cover"
                    }}
                    className="rounded-circle me-2"
                  />
                  <div>
                    <Card.Title
                      className="mb-0 fw-bold"
                      style={{ fontSize: "15px" }}
                    >
                      {singlePost.user.name} {singlePost.user.surname}
                    </Card.Title>
                    <Card.Text
                      className="mb-0 fsSpecial"
                      style={{ color: "grey" }}
                    >
                      ( {singlePost.user.email} )
                    </Card.Text>

                    <Card.Text
                      className="mb-0"
                      style={{ color: "grey", fontSize: "8px" }}
                    >
                      {singlePost.user.bio}
                    </Card.Text>
                    <Card.Text
                      style={{
                        color: "grey",
                        fontFamily: "cursive",
                        fontSize: "8px"
                      }}
                    >
                      {" "}
                      Pubblicato il{" "}
                      {new Date(singlePost.updatedAt).getDate() +
                        "/" +
                        (new Date(singlePost.updatedAt).getMonth() + 1) +
                        "/" +
                        new Date(singlePost.updatedAt).getFullYear()}
                    </Card.Text>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="me-4">
                    <Button
                      variant="btn btn-outline-primary"
                      type="button"
                      style={{ fontSize: "10px" }}
                    >
                      {" "}
                      <Plus /> Segui{" "}
                    </Button>
                  </div>
                  <div className="me-4">
                    <ThreeDots />
                  </div>
                  <div>
                    <X />
                  </div>
                </div>
              </Card.Body>
              <Card.Text className="ms-3 mb-2">{singlePost.text}</Card.Text>
              <Image src={singlePost.image} className="mb-1" />
              <div style={{ borderTop: "0.1px solid #80808045" }}>
                <div className="d-flex">
                  <Button
                    type="button"
                    variant="btn btn-light"
                    className="p-0 w-25"
                  >
                    <div className="d-flex align-items-center justify-content-center ">
                      <HandThumbsUp className="d-flex" />{" "}
                      <div
                        className="d-flex me-3 "
                        style={{ paddingTop: "16px" }}
                      >
                        <p className="fsSpecial ms-2 fw-bold">Consiglia</p>
                      </div>
                    </div>
                  </Button>
                  <Button
                    type="button"
                    variant="btn btn-light"
                    className="p-0 w-25"
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      <ChatRightText className="d-flex ms-2" />{" "}
                      <div
                        className="d-flex me-3 "
                        style={{ paddingTop: "16px" }}
                      >
                        <p className="fsSpecial ms-2 fw-bold">Commenta</p>
                      </div>
                    </div>
                  </Button>
                  <Button
                    type="button"
                    variant="btn btn-light"
                    className="p-0 w-25"
                  >
                    <div className="d-flex align-items-center justify-content-center ">
                      <ArrowsFullscreen className="d-flex ms-1" />{" "}
                      <div
                        className="d-flex me-3 "
                        style={{ paddingTop: "16px" }}
                      >
                        <p className="fsSpecial ms-2 fw-bold">
                          Diffondi il post
                        </p>
                      </div>
                    </div>
                  </Button>
                  <Button
                    type="button"
                    variant="btn btn-light"
                    className="p-0 w-25"
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      <Send className="d-flex ms-1" />{" "}
                      <div
                        className="d-flex me-3 "
                        style={{ paddingTop: "16px" }}
                      >
                        <p className="fsSpecial ms-2 fw-bold">Invia</p>
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </>
  );
};
export default PostHome;
