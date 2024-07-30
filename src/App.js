import "./App.css";
import NavBar from "./components/Navbar";
import React from "react";
import News from "./components/News";

class App extends React.Component {
  render() {
    return <div>
      <NavBar/>
      <News/>
    </div>;
  }
}

// #endregion

export default App;
