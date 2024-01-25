import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Detail from "./components/Detail/Detail";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
// https://ancient-basin-27683.herokuapp.com/
// https://ancient-basin-27683.herokuapp.com/projects

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/allProject" element={<Projects></Projects>}></Route>
        <Route path="/project/:id" element={<Detail></Detail>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
