import Homepage from "./pages/homepage/Homepage";
import Aboutpage from "./pages/about/Aboutpage";
import ContactPage from "./pages/contact/Contact";
import Signup from "./pages/signup/Signup";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/global/navbar/Navbar";
import Footer from "./components/global/footer/Footer";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
