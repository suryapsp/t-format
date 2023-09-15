import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextInput from "./components/TextInput";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TFormat" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextInput heading="Enter Your Text" mode={mode} />}/>
            <Route path="/about" element={<About />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
