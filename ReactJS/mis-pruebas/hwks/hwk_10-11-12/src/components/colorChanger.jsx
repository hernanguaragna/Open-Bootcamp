import React, { useState } from 'react';

function ColorChanger() {
  const [color, setColor] = useState('black');

  function handleMouseEnter() {
    changeColor();
  }

  function handleDoubleClick() {
    setColor('black');
  }

  function changeColor() {
    setColor(`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`);
    setTimeout(changeColor, 500);  
  }

  return (
    <div
      
      style={{ width: '255px', height: '255px', backgroundColor: color }}
      onMouseEnter={handleMouseEnter}
      onDoubleClick={handleDoubleClick}
    ></div>
  );
}
export default ColorChanger;

  
