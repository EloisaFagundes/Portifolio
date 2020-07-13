import React from "react";
import "./App.css";
import Appbar from "./components/Appbar/Appbar";
import BannerApresentation from "../src/containers/BannerApresentation/BannerApresentation";
import AboutMe from "../src/containers/AboutMe/AboutMe";
import Knowledges from "../src/containers/Knowledges/Knowledges";
import Education from "../src/containers/Education/Education";
import MyProjects from "../src/containers/MyProjects/MyProjects";
import HireMe from "../src/containers/HireMe/HireMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Appbar />
      <BannerApresentation />
      <AboutMe />
      <Knowledges />
      <Education />
      <MyProjects />
      <HireMe />
      <Footer />
    </div>
  );
}

export default App;
