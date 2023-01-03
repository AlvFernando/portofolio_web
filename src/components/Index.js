import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Content from "./Home";
import About from "./About";
import Projects from "./Projects";
import Error from "./Error";

export default function Index(){
    return (
    <Router>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Content></Content>}></Route>
            <Route path="/projects" element={<Projects></Projects>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="*" element={<Error></Error>}></Route>
        </Routes>
    </Router>
    );
}