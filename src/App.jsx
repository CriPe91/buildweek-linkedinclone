import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SezioneCentrale from "./components/SezioneCentrale";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreaModificaEsperienze from "./components/CreaModificaEsperienze";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <div
          style={{ backgroundColor: "white" }}
          className=" border-bottom border-1"
        >
          <TopBar />
        </div>
        <Routes>
          {" "}
          <Route path="/" element={<SezioneCentrale />} />
          <Route path="/Esperienze" element={<CreaModificaEsperienze />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
