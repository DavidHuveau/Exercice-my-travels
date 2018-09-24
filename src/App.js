import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DHUV Travel</h1>
        </header>
        <Travel
          destination="Myvatn"
          country="Icland"
          photo="https://www.northiceland.is/static/toy/images/Place_405_1___Selected.jpg"
          distance="2500km"
        />
        <Travel
          destination="London"
          country="England"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/London_Montage_L.jpg/275px-London_Montage_L.jpg"
          distance="1234km"
        />
      </div>
    );
  }
}

export default App;