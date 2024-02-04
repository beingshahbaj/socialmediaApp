import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Detail from "./Components/Detail";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Detail />} >
         
        </Route>
      </Routes>
    </div>
  );
}

export default App;
