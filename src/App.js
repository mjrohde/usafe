import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Usage from "./pages/Usage/Usage";
import Offers from "./pages/Offers/Offers";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/usage" element={<Usage />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
