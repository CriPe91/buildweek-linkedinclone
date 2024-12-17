import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import SezioneCentrale from "./components/SezioneCentrale";
import ComponenteHome from "./components/ComponenteHome";

function App() {
  return (
    <>
      {" "}
      <div
        style={{ backgroundColor: "white" }}
        className=" border-bottom border-1"
      >
        <TopBar />
      </div>
      <ComponenteHome />
      <SezioneCentrale />
      <Footer />
    </>
  );
}

export default App;
