import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <div className="content">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
