import React, { useState } from 'react';
import './App.css';
import RadialWidget from './components/canvas/widgets/RadialWidget';
import { Slider, Typography } from '@mui/material';
function App() {
  const [arcLength, setArcLength] = useState(Math.PI * 0.75);
  const [rotationFactor, setRotationFactor] = useState(0);
  const [arcValue, setArcValue] = useState(0);
  const [bodyRadius, setBodyRadius] = useState(50);

  const changeArcLength = (event: any) => {
    setArcLength(event.target.value);
  };
  const rotateArc = (event: any) => {
    setRotationFactor(event.target.value);
  };
  const changeValue = (event: any) => {
    setArcValue(event.target.value);
  };
  const changeBodyRadius = (event: any) => {
    setBodyRadius(event.target.value);
  };
  return (
    <div className="App">
      <RadialWidget
        bodyRadius={bodyRadius}
        arcLength={arcLength}
        rotationFactor={rotationFactor}
        value={arcValue}
      />
      <div
        style={{
          width: '500px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
        <div style={{ width: '300px' }}>
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
          <Typography gutterBottom>Radial value</Typography>
          <Slider
            aria-label="Arc value"
            max={Math.PI * 2 + Math.PI - arcLength}
            min={arcLength}
            step={0.1}
            defaultValue={0}
            valueLabelDisplay="auto"
            onChange={changeValue}
          />
          <Typography gutterBottom>Body circle radius</Typography>
          <Slider
            aria-label="Arc value"
            max={90}
            min={40}
            step={0.5}
            defaultValue={40}
            valueLabelDisplay="auto"
            onChange={changeBodyRadius}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
