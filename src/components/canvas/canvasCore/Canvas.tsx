import React, { useEffect, useRef } from 'react';
import { useCanvas } from './CanvasContext';
import CSS from 'csstype';

interface CanvasProps {
  zIndex: number;
  xAxisStartingPoint: number;
  yAxisStartingPoint: number;
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
      <canvas
        width={props.xAxisStartingPoint * 2}
        height={props.yAxisStartingPoint * 2}
        style={canvasStyle}
        ref={canvasRef}
      />
    </>
  );
}
export default Canvas;
