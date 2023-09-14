import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextInput from "./components/TextInput";


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light') 
      document.body.style.backgroundColor = 'white'
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = 'gray'
    }
  }

  return (
    <>
      <Navbar title="TFormat" mode={mode} toggleMode = {toggleMode}/>
      <div className="container my-3">
        <TextInput heading="Enter Your Text" mode={mode} />
      </div>
    </>
  );
}

export default App;
