import Canvas from '../canvasCore/Canvas';
import React, { useEffect, useState } from 'react';
import { IDonut } from '../../../types/interfaces/donut.interface';
import { Donut } from '../../../types/canvas/Donut';
import { IDrawableCanvasProvider } from '../../../types/interfaces/drawable.interface';

export default function DonutCanvas(props: IDonut) {
  const [donut, setDonut] = useState(new Donut(props));
  const ref = React.useRef<IDrawableCanvasProvider>();

  useEffect(() => {
    setDonut(new Donut(props));
  }, [props.startAngle, props.rotationFactor, props.endAngle, props.color, props.arcRadius]);
  useEffect(() => {
    ref?.current?.draw();
  }, [donut]);
  return (
    <Canvas
      drawable={donut}
      ref={ref}
      zIndex={props.zIndex}
      xAxisStartingPoint={props.xAxisStartingPoint}
      yAxisStartingPoint={props.yAxisStartingPoint}
    />
  );
}
