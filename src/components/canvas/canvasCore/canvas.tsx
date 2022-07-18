import React, { useEffect, useRef } from 'react';
import { useCanvas } from './canvasContext';
import CSS from 'csstype';

// interface CanvasStyle {
//   zIndex: number;
//   position: string;
//   border: string;
//   display: string;
//   objectFit: string;
//   width: string;
//   height: string;
// }

function Canvas() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { canvasRef, prepareCanvas } = useCanvas();

  useEffect(() => {
    prepareCanvas();
  });

  const canvasStyle: CSS.Properties = {
    zIndex: 1,
    position: 'absolute',
    border: '1px solid red',
    display: 'block',
    objectFit: 'contain',
    width: '500px',
    height: '500px'
  };
  return (
    <>
      <canvas width="500" height="500" style={canvasStyle} ref={canvasRef} />
    </>
  );
}
export default Canvas;
