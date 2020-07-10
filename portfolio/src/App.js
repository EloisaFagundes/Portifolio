import React from 'react';
import './App.css';
import Appbar from './components/Appbar/Appbar';
import BannerApresentation from "../src/containers/BannerApresentation/BannerApresentation"
import AboutMe from "../src/containers/AboutMe/AboutMe"
import Knowledges from "../src/containers/Knowledges/Knowledges"
import Education from "../src/containers/Education/Education"

function App() {
  return (
    <div className="App">
    <Appbar />
    <BannerApresentation />
    <AboutMe />
    {/* <Knowledges /> */}
    {/* <Education /> */}
      
    </div>
  );
}

export default App;
