import React, { useEffect, useRef, useState } from 'react';
import Canvas from '../canvasCore/Canvas';
import { ICircle } from '../../../types/interfaces/circle.interface';
import { Circle } from '../../../types/canvas/Circle';

const CircleCanvas = (props: ICircle) => {
  console.log('aaaaaaa', props);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  useEffect(() => {
    if (context) {
      const circle = new Circle(props);
      circle.draw(context);
    }
  }, [props.arcRadius, context]);

  return (
    <Canvas
      setContext={setContext}
      zIndex={props.zIndex}
      xAxisStartingPoint={props.xAxisStartingPoint}
      yAxisStartingPoint={props.yAxisStartingPoint}
    />
  );
};

export default React.memo(CircleCanvas);
