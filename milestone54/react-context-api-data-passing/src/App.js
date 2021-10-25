
import { createContext, useState } from 'react';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';

export const ringContext=createContext("ring");

function App() {
  const [house,setHouse]=useState(2)
  return (
    <ringContext.Provider value="Diamond Ring">
      <div className="App">
       <GrandFather setHouse={setHouse} house={house}></GrandFather>
       
    </div>
    </ringContext.Provider>
  );
}

export default App;
