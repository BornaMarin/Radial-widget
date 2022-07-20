import React, { useEffect, useState } from 'react';
import { CanvasProvider } from '../canvasCore/CanvasContext';
import Canvas from '../canvasCore/Canvas';
import { ICircle } from '../../../types/interfaces/circle.interface';
import { Circle } from '../../../types/classes/canvas/Circle';

export default function CircleCanvas(props: ICircle) {
  const [circle, setCircle] = useState(new Circle(props));

  useEffect(() => {
    setCircle(new Circle(props));
  }, [props.arcRadius]);
  return (
    <CanvasProvider drawable={circle}>
      <Canvas
        zIndex={props.zIndex}
        xAxisStartingPoint={props.xAxisStartingPoint}
        yAxisStartingPoint={props.yAxisStartingPoint}
      />
    </CanvasProvider>
  );
}
