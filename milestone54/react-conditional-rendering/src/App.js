import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './components/Home/Home';

function App() {
  const [familar,setFamilar] = useState(false);
  return (
    <div className="App">
         <h1>Is Familar: {familar.toString().toUpperCase()}</h1>
         <button onClick={()=>setFamilar(!familar)}>Toggle Friend </button>
         <Home familar={familar}></Home>
      
    </div>
  );
}

export default App;
