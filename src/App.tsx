import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AustraliaLinkmap from "./components/AustraliaLinkmap";
import Victoria from "./pages/Victoria";
import Home from "./pages/Home";
import NewSouthWales from "./pages/NewSouthWales";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/victoria" element={<Victoria />} />
          <Route path="/vic" element={<Victoria />} />
          <Route path="/nsw" element={<NewSouthWales />} />
          <Route path="/new-south-wales" element={<NewSouthWales />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
