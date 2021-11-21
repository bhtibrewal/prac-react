import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WishList from "./components/WishList";

function App() {
  const [mode, setMode] = useState("light");

  function changeMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#111";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleHandler={changeMode} />

        <Routes>
          <Route
            path="/"
            element={
              <WishList heading="Wish List" mode={mode} />
            }
          />

          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/about" element={}/>
          <Route path="/" element={}/>
             <div className="container  my-3">
              
            </div> 
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
