import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Calculator from "./components/Calculator/Calculator";
import Grid from "./components/Grid/Grid";
import { useState } from "react";

function App() {
const [] = useState();

  return (
    <div className="App">
      <Calculator />
      {/* <Footer /> */}
      <Grid />
    </div>
  );
}

export default App;
