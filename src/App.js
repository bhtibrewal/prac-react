import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  function changeMode() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#111";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "#ffffff";
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleHandler={changeMode} />
      <About mode={mode} />
      <Textform mode={mode} heading="Enter the text to analyze" />

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
