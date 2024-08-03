// jk
// kjkj
// kjkjjk
// jhk
// hj
// kh
// k
// <HTMLUnknownElementh>khkhjk</HTMLUnknownElementh>

import "./App.css";
import LandingPage from "./component/LandingPage";
import About from "./component/About.jsx";
import Contact from "./component/Contact.jsx";
import Projects from "./component/Projects.jsx";
import Navbar from "./component/Navbar.jsx";
import Services from "./component/Services.jsx";

import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
