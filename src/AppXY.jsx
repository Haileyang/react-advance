import React, {useState} from 'react';
import './AppXY.css';

export default function AppXY() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [position, setPosition] = useState({x:0, y:0})

  return (
    <div className='container' onPointerMove={(e) => {
      console.log(e.clientX, e.clientY)
      // setPosition({x: e.clientX, y: e.clientY})
      // if the point can only move horizontally?
      setPosition((prev) => ({x: e.clientX, y: prev.y}))
      //refactoring above
      setPosition((prev) => ({...prev, x: e.clientX}))
    }}>
      <div 
        className='pointer'
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </div>
  );
}
