import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Services from "../Services/Services";
import "../../../src/index";
import './App.css';
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
  <Header />
  <Main />
  <Services />
  <About /> 
  <Gallery />
  <Footer /> 
  </div>
  );
}

export default App;
