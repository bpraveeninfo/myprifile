
import React from 'react';

import { usePersistentCanvas } from '../hooks'

function Homecanvas() {
  
    const [locations, setLocations, canvasRef] = usePersistentCanvas()

    function handleCanvasClick(e) {
      setLocations([...locations, { x: e.clientX, y: e.clientY }])
    }
  
    function handleClear() {
      setLocations([])
    }
  
    function handleUndo() {
      setLocations(locations.slice(0, -1))
    }
  
    return (
      <div className="container-fluid">
        
        <canvas
          ref={canvasRef}
          width={window.innerWidth}
          height={window.innerHeight}
          onClick={handleCanvasClick}
        />
        <div className="controls">
          <button onClick={handleClear}>Clear</button>
          <button onClick={handleUndo}>Undo</button>
        </div>
      </div>
    )
  }

export default Homecanvas