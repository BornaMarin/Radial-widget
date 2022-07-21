import React, { useState } from 'react';
import './App.css';
import RadialWidget from './components/canvas/widgets/RadialWidget';
import { Slider, Typography, TextField, Checkbox } from '@mui/material';
import { TwitterPicker } from 'react-color';
function App() {
  //centar je jedini hardcoded.. prema njemu se canvas siri, smanjuje
  const [center, setCenter] = useState(250);

  const [arcLength, setArcLength] = useState(Math.PI * 0.75);
  const [arcRadius, setArcRadius] = useState(100);
  const [minValue, setMinValue] = useState(-4);
  const [maxValue, setmaxValue] = useState(9);
  const [rotationFactor, setRotationFactor] = useState(0);
  const [arcValue, setArcValue] = useState(0);
  const [bidirection, setBidirection] = useState(false);
  const [bodyRadius, setBodyRadius] = useState(50);
  const [sunburstRatio, setSunburstRatio] = useState(40);
  const [defaultTickColor, setDefaultTickColor] = useState('#ABB8C3');
  const [progressColor, setProgressColor] = useState('#ff6900');

  const changeArcLength = (event: any) => {
    setArcLength(event.target.value);
  };
  const changeArcRadius = (event: any) => {
    setArcRadius(event.target.value);
  };
  const changeMinValue = (event: any) => {
    setMinValue(parseInt(event.target.value));
  };
  const changeMaxValue = (event: any) => {
    setmaxValue(parseInt(event.target.value));
  };
  const rotateArc = (event: any) => {
    setRotationFactor(event.target.value);
  };
  const handleBidirectionChange = (event: any) => {
    console.log(event.target.checked);
    setBidirection(event.target.checked);
  };
  const changeValue = (event: any) => {
    setArcValue(event.target.value);
  };
  const changeBodyRadius = (event: any) => {
    setBodyRadius(event.target.value);
  };
  const changeSunburstRatio = (event: any) => {
    setSunburstRatio(event.target.value);
  };
  const changeDefaultTickColor = (event: any) => {
    setDefaultTickColor(event.hex);
  };
  const changeProgressColor = (event: any) => {
    setProgressColor(event.hex);
  };

  //napravljena je pretpostavka da je radial widget uvijek centriran.. sto znaci da je width = xStartingPoint * 2, povecavanjem ili smanjivanjem starting pointa mijenjamo canvas width, height.. malkoc nespretno..
  return (
    <div className="App">
      {/*Pravi use case je da sa parent pageu postoji samo componenta Radial Widget te spojen neki data flow na value prop, sve ostalo sto vidimo  je samo 'Storybook' kako biste vi mogli testirati opcije Radial Widgeta*/}
      <RadialWidget
        bodyRadius={bodyRadius}
        arcLength={arcLength}
        arcRadius={arcRadius}
        rotationFactor={rotationFactor}
        value={arcValue}
        sunburstRatio={sunburstRatio}
        xAxisStartingPoint={center}
        yAxisStartingPoint={center}
        defaultTickColor={defaultTickColor}
        progressColor={progressColor}
        minValue={minValue}
        maxValue={maxValue}
        bidirection={bidirection}
      />
      <div
        style={{
          width: '500px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
        <div style={{ width: '300px', margin: '20px' }}>
          <TextField
            helperText="Min value"
            id="demo-helper-text-misaligned"
            label="Min value"
            defaultValue={-4}
            onChange={changeMinValue}
          />
          <TextField
            helperText="Max value"
            id="demo-helper-text-misaligned"
            label="Max value"
            defaultValue={9}
            onChange={changeMaxValue}
          />
          <Typography gutterBottom>Arc length</Typography>
          <Slider
            aria-label="Arc length"
            max={Math.PI}
            min={Math.PI / 2}
            step={0.01}
            defaultValue={Math.PI * 0.75}
            valueLabelDisplay="auto"
            onChange={changeArcLength}
          />
          <Typography gutterBottom>Arc radius</Typography>
          <Slider
            aria-label="Arc length"
            step={1}
            min={0}
            max={center}
            defaultValue={center}
            valueLabelDisplay="auto"
            onChange={changeArcRadius}
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
          <Typography gutterBottom>Is bidirectional</Typography>
          <Checkbox onChange={handleBidirectionChange} />
          <Typography gutterBottom>Radial value</Typography>
          <Slider
            aria-label="Arc value"
            max={maxValue}
            min={minValue}
            step={0.1}
            defaultValue={0}
            valueLabelDisplay="auto"
            onChange={changeValue}
          />
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
            max={center}
            min={40}
            step={0.5}
            defaultValue={40}
            valueLabelDisplay="auto"
            onChange={changeBodyRadius}
          />
          <Typography gutterBottom>Sunburst ratio</Typography>
          <Slider
            aria-label="Sunburst ratio"
            max={180}
            min={6}
            step={2}
            defaultValue={90}
            valueLabelDisplay="auto"
            onChange={changeSunburstRatio}
          />
          <Typography gutterBottom>Default tick color</Typography>
          <TwitterPicker color={defaultTickColor} onChange={changeDefaultTickColor} />
          <Typography gutterBottom>Progress color</Typography>
          <TwitterPicker color={progressColor} onChange={changeProgressColor} />
        </div>
      </div>
    </div>
  );
}

export default App;
