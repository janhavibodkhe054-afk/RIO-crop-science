import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Conatct";

import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Services from "./pages/Services";
import Product from "./pages/Product";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <FloatingWhatsApp />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
    </Router>
  );
}
