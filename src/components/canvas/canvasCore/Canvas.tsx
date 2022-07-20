import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import { useCanvas } from './CanvasContext';
import CSS from 'csstype';

interface CanvasProps {
  zIndex: number;
  xAxisStartingPoint: number;
  yAxisStartingPoint: number;
}

// eslint-disable-next-line react/display-name
const Canvas = forwardRef((props: CanvasProps, ref) => {
  const { canvasRef, prepareCanvas, drawElement } = useCanvas();

  // useEffect(() => {
  //   console.log('canvas bla');
  //   prepareCanvas();
  //   drawElement();
  // });

  useImperativeHandle(ref, () => ({
    draw() {
      prepareCanvas();
      drawElement();
    }
  }));

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
});
export default Canvas;
