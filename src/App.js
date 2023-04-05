//import logo from './logo.svg';
import './App.css';
 import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForms from './Component/TextForms';
import Alert from './Component/Alert';
import React, {useState} from 'react';

function App() {
  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null)

  let showAlert = (message,type)=>{
      setAlert({
        msg: message,
        type: type

      })
      setTimeout(()=>{
        setAlert(null)
      },1500);
  }

  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode("dark")
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode has been enabled","success");
    }else{
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled","success")
    }

  }

  return (
    <>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div class="container  my-3">
    <TextForms heading="Enter the text to analyze" mode={mode} showAlert={showAlert} /> 
    <About mode={mode} />
    </div>
    </>
    
  );
}
export default App;
