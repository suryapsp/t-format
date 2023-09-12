import "./App.css";
import Navbar from "./components/Navbar";
import TextInput from "./components/TextInput";

function App() {
  return (
    <>
      <Navbar title="TFormat" />
      <div className="container my-3">
        <TextInput heading="Enter Your Text" />
      </div>
    </>
  );
}

export default App;
