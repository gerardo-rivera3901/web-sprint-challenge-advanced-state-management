import React from "react";
import "./App.css";
import SmurfsList from './SmurfStuff/smurfsList'
import SmurfForm from './SmurfStuff/smurfForm'

const App = () => {
  return (
    <div className="App">
      <h1>Redux Smurfs</h1>
      <SmurfForm/>
      <SmurfsList/>
    </div>
  );
}

export default App;
