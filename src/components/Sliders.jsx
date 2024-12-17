import { Card } from "react-bootstrap";
import Slider from "react-slick";

function Sliders() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container mb-2 mx-2">
      <Slider {...settings}>
        <div>
          <Card style={{ backgroundColor: "#dde7f1" }}>
            <p className="ms-2">
              <strong>Disponibile a lavorare</strong> <br />
              Ruoli di Assistente amministrativo <br />
              <a className="text-primary  text-decoration-none">
                Mostra dettagli
              </a>
            </p>
          </Card>
        </div>
        <div>
          <Card className="ms-2">
            <p className=" ms-2">
              <strong>Fai sapere che stai facendo selezione</strong> e attrai
              candidati qualificati. <br />
              <a className="text-primary text-decoration-none">Inizia</a>
            </p>
          </Card>
        </div>
        <div>
          <Card className="ms-2">
            <p className=" ms-2">
              <strong>Metti in risalto i tuoi servizi</strong>in un apposita
              sezione sul tuo profilo, così sarà più facile trovarti. <br />
              <a className="text-primary  text-decoration-none">Inizia</a>
            </p>
          </Card>
        </div>
      </Slider>
    </div>
  );
}

export default Sliders;
