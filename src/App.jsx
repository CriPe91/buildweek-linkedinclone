import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import SezioneCentrale from "./components/SezioneCentrale";

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
      <SezioneCentrale />
      <Footer />
    </>
  );
}

export default App;
