import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import "../../../src/index";
import './App.css';
import Gallery from "../Gallery/Gallery";

function App() {
  return (
    <div className="App">
  <Header />
  <Main />
  <Gallery />
  <About /> 
  </div>
  );
}

export default App;
