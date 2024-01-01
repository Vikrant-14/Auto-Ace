import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
//import { Navigationbar } from "./components/Navigationbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer/Footer";
import AdminPage from "./components/AdminPanel/AdminPage";
import UserPage from"./components/UserPanel/UserPage";
import UserFeedback from "./components/UserPanel/UserFeedback";



function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes>
      
      <Routes>
      <Route path="/AdminPage" element={<AdminPage />}></Route>
      </Routes>


      <Routes>
      <Route path="/UserPage" element={<UserPage />}></Route>
      <Route path="/UserFeedback" element={<UserFeedback />}></Route>
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
