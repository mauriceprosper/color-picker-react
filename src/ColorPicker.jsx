import React, { useState } from 'react'

function ColorPicker(){

  const [color, setColor] = useState("#ffffff");

  function handleColorChange(event){
    setColor(event.target.value);
  }
    
    return(
        <>

            <div className="color-picker-container">
                <h1>Color Picker App</h1>
            <p>by Maurice</p>

            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>

                <label htmlFor="">Select a Color</label>
                <input type="color" value={color} onChange={handleColorChange}/>
            </div>
            </div>
        </>
    );
}

export default ColorPicker