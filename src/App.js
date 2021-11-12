import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'



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
      <Router>
        <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <div className="container  my-3">
              <Textform mode={mode} heading="Enter the text to analyze" />
            </div>
          </Route>
        </Switch>
      </Router>


    </>
  );
}

export default App;
