import React, { useEffect, useState } from 'react';
import { CanvasProvider } from '../canvasCore/CanvasContext';
import Canvas from '../canvasCore/Canvas';
import { ICircle } from '../../../types/interfaces/circle.interface';
import { Circle } from '../../../types/canvas/Circle';
import { IDrawableCanvasProvider } from '../../../types/interfaces/drawable.interface';

export default function CircleCanvas(props: ICircle) {
  const [circle, setCircle] = useState(new Circle(props));
  const ref = React.useRef<IDrawableCanvasProvider>();
  useEffect(() => {
    setCircle(new Circle(props));
    //todo check this.....
    setTimeout(() => ref?.current?.draw());
  }, [props.arcRadius]);

  return (
    <Canvas
      drawable={circle}
      ref={ref}
      zIndex={props.zIndex}
      xAxisStartingPoint={props.xAxisStartingPoint}
      yAxisStartingPoint={props.yAxisStartingPoint}
    />
  );
}
