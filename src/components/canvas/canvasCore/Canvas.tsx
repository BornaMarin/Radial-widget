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

interface CanvasProps {
  zIndex: number;
}

function Canvas(props: CanvasProps) {
  const { canvasRef, prepareCanvas, drawElement } = useCanvas();

  useEffect(() => {
    prepareCanvas();
    drawElement();
  });

  const canvasStyle: CSS.Properties = {
    zIndex: props.zIndex,
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
