import React, { useEffect, useRef } from 'react';
import { useCanvas } from './CanvasContext';
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
  console.log(2);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { canvasRef, prepareCanvas, drawElement } = useCanvas();

  useEffect(() => {
    prepareCanvas();
    drawElement();
  });

  const canvasStyle: CSS.Properties = {
    zIndex: 1,
    position: 'absolute',
    display: 'block',
    objectFit: 'contain',
    border: '1px solid'
  };
  return (
    <>
      <canvas width="500" height="500" style={canvasStyle} ref={canvasRef} />
    </>
  );
}
export default Canvas;
