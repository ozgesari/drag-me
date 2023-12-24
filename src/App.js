
import { useState } from 'react';
import './App.css';
import Background from './components/Background';
import Box from './components/Box';
import { useImmer } from 'use-immer';



function App() {
  const initialPosition = {
    x: 0,
    y: 0
  };
  const [shape, setShape] = useImmer({
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx, dy) {
    setShape(draft => {
      draft.position.x += dx;
      draft.position.y += dy;
    });
  }

  function handleColorChange(e) {
    setShape(draft => {
      draft.color = e.target.value
    })
  }



  return (
    <div className="App">
      <>
        <select
          value={shape.color}
          onChange={handleColorChange}
        >
          <option value="orange">orange</option>
          <option value="lightpink">lightpink</option>
          <option value="aliceblue">aliceblue</option>
        </select>
        <Background
          position={initialPosition}
        />
        <Box
          color={shape.color}
          position={shape.position}
          onMove={handleMove}
        >
          Drag me!
        </Box>
      </>
    </div>
  );
}

export default App;
