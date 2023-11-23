import "./App.css";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Video from "./components/Video";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Works from "./pages/Works";

function App() {
  return (
    <>
      <div className="container">
        <div className="content">
          <Header />
          <Routes>
            <Route path="/*" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
