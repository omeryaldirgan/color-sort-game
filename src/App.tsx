import React from 'react';
import './App.css';
import {Tube} from "./components/Tube";
function App() {
  return (
    <>

      <div className="game-area">
          <Tube/>
          <Tube/>
          <Tube/>
          <Tube/>
          <Tube/>
      </div>
    </>
  );
}

export default App;
