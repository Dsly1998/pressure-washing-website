// src/components/App/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Services from "../Services/Services";
import Reviews from "../Reviews/Reviews";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import ThankYou from "../../pages/ThankYou/ThankYou";
import "../../../src/index";
import "./App.css";

function App() {
  return (
    <Router basename="/">
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Services />
              <About />
              <Reviews />
              <Gallery />
              <Footer />
            </>
          }
        />

        {/* Thank You Route */}
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
