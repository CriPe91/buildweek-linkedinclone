import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SezioneCentrale from "./components/SezioneCentrale";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";

import ComponenteHome from "./components/ComponenteHome";

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
          <Route path="/Home" element={<ComponenteHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
