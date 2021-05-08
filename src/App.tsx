import React from 'react';
import './App.css';
import {Tube} from "./components/Tube";
import {IBlockItem} from "./interface";

const itemSet:IBlockItem[]=[
    {
        id:1,
        color:'blue',
        order:1
    },
    {
        id:2,
        color:'red',
        order:2
    },
    {
        id:3,
        color:'yellow',
        order:3
    },
    {
        id:4,
        color:'white',
        order:4
    }
]

function App() {
  return (
    <>

      <div className="game-area">
          <Tube items={itemSet}/>
      </div>
    </>
  );
}

export default App;
