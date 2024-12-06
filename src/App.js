import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./screens/Hero/Hero";
import TopNavbar from "./screens/Navbar/TopNavbar";
import BodyContent from "./screens/BodyContent/BodyContent";
import FaqSection from "./screens/FaQ/FaqSection";
import Footer from "./screens/Footer/Footer";

function App() {
  return (
    <div>
      <TopNavbar />
      <Hero />
      <BodyContent />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
