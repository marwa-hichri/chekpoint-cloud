import React from "react";
import IntroSection from "./components/intro/Intro";
import ContactSection from "./components/contact-section/ContactSection";
import MapSection from "./components/map/Map";
import DisclaimerSection from "./components/disclaimer/Disclaimer";
import FooterSection from "./components/footer/Footer";
import "./App.css";

const location = {
  address: "enfidha ,sousse  Tunisia .",
  lat: 34.431141,
  lng: 8.775656,
};

function App() {
  return (
    <div className="App">
      <IntroSection />
      <ContactSection />
      <MapSection location={location} zoomLevel={17} />
      <DisclaimerSection />
      <FooterSection />
    </div>
  );
}

export default App;
