import Nav from "./Components/NavBar/Nav";
import { HashRouter, Route, Routes } from "react-router-dom";
import Crousel from "./Components/Crousel/Crousel";
import Service from "./Components/Services/Service";
import About from "./Components/About/About";
import Team from "./Components/OutTeam/Team";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/ContactUs/Contact";
import Foot from "./Components/Footer/Foot";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Nav />} />
        </Routes>
      </HashRouter>
      <Crousel />
      <Service />
      <About />
      <Team />
      <Gallery />
      <Contact />
      <Foot />
    </div>
  );
}

export default App;
