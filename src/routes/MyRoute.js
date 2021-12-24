import { Routes, Route } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import ErrorPage from "../components/ErrorPage";
import Features from "../components/Features";
import Home from "../components/Home";
import Main from "../components/Main";
import Terms from "../components/Terms";
import Privacy from "../components/Privacy";
// import AdminLogin from "../components/AdminLogin";
// import Adminroute from "../Admin/Adminroute";
export default function MyRoute() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            {/* 
                    <Route exact path="/adminlogin" element={<AdminLogin/>} />
                    <Route exact path="/admin" element={<Adminroute/>} /> 
                */}
            <Route element={<ErrorPage />} />
        </Routes>
    );
}
