import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

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
      <Footer />
    </>
  );
}

export default App;
