// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');

  const [modeTxt, setModeTxt] = useState('Enable Dark Mode');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const modeSwitch = ()=>{
    if (mode === 'light') {
      setMode('dark');
      setModeTxt('Enable Light Mode');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      document.body.style.transition = '.9s';
      showAlert("Dark Mode Enable", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      setModeTxt('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enable", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title = "Text Utils" abouttxt ="About" mode={mode} modeSwitch = {modeSwitch} modeTxt={modeTxt} />
    <Alert alert = {alert} />
    <div className="container my-3">
    {/* <Routes> */}
    {/* <Route path='/about' element={<About />} /> */}
    {/* </Routes> */}
    {/* <Routes> */}
    {/* <Route path='/' element={ */}
      <TextForm showAlert = {showAlert} Header="Enter Your Text Here" />
      {/* } /> */}
    {/* </Routes> */}
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;