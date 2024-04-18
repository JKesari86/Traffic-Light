import { useState } from 'react';
import './App.css'

function App() {

  let [color, setColor] = useState(null);

  const handleClick = (color) => {
    setColor(color);
    
  }

  return (
    <>
      <div id="traffic-light">
        <div className={"circle red " + ((color === "red") ? "turn-on-red" : "") } onClick={()=> handleClick('red')}></div>
        <div className={"circle orange " + ((color === "orange") ? "turn-on-orange" : "" )} onClick={()=> handleClick('orange')}></div>
        <div className={"circle green " + ((color === "green") ? "turn-on-green" : "")} onClick={()=> handleClick('green')}></div>
      </div>
    </>
  );
}

export default App
