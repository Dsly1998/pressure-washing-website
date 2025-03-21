import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Services from "../Services/Services";
import Reviews from "../Reviews/Reviews";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import "../../../src/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Services />
      <About />
      <Reviews />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
