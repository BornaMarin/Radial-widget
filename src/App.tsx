import React, { useState } from 'react';
import './App.css';
import RadialWidget from './components/canvas/widgets/RadialWidget';
import { Slider, Typography } from '@mui/material';
function App() {
  const [arcLength, setArcLength] = useState(Math.PI * 0.75);
  const [rotationFactor, setRotationFactor] = useState(0);

  const changeArcLength = (event: any) => {
    setArcLength(event.target.value);
  };
  const rotateArc = (event: any) => {
    setRotationFactor(event.target.value);
  };
  return (
    <div className="App">
      <RadialWidget arcLength={arcLength} rotationFactor={rotationFactor} />
      <div style={{ width: '500px' }}>
        <Typography gutterBottom>Arc length</Typography>
        <Slider
          aria-label="Arc length"
          max={Math.PI}
          min={Math.PI / 2}
          step={0.1}
          defaultValue={Math.PI * 0.75}
          valueLabelDisplay="auto"
          onChange={changeArcLength}
        />
        <Typography gutterBottom>Rotate Arc</Typography>
        <Slider
          aria-label="Arc rotate"
          max={Math.PI * 2}
          min={0}
          step={0.1}
          defaultValue={0}
          valueLabelDisplay="auto"
          onChange={rotateArc}
        />
      </div>
    </div>
  );
}

export default App;
