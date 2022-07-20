import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import MainArea from './Components/MainArea';
import Navbar from './Components/Navbar';
import About from './Components/About';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('success'," Dark mode has been Enabled.")
      setTimeout(() => {
        setAlert(null)
      }, 2000);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('success'," Light mode has been Enabled.")
      setTimeout(() => {
        setAlert(null)
      }, 2000);
    }
  }

  const showAlert = (type,message) => {
    setAlert({
      Type : type,
      Message : message
    });
  }
  return (
    <>
      {/* <h1 className='display-4 fw-bold text-center'>Hello World</h1> */}
      {/* <Router> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <MainArea mode={mode} />
      {/* <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
