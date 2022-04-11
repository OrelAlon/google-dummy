import { useState } from "react";

import Navbar from "./components/Navbar";
import RoutesTo from "./components/RoutesTo";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark App" : "white App"}>
      <div className="App-header">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <RoutesTo />
        <Footer />
      </div>
    </div>
  );
}

export default App;

// rfce
// rafce
