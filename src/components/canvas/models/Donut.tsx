import Canvas from '../canvasCore/Canvas';
import React, { useEffect, useState } from 'react';
import { IDonut } from '../../../types/interfaces/donut.interface';
import { Donut } from '../../../types/canvas/Donut';

export default function DonutCanvas(props: IDonut) {
  const [donut, setDonut] = useState(new Donut(props));

  useEffect(() => {
    setDonut(new Donut(props));
  }, [props.startAngle, props.rotationFactor, props.endAngle, props.color, props.arcRadius]);

  return (
    <Canvas
      drawable={donut}
      zIndex={props.zIndex}
      xAxisStartingPoint={props.xAxisStartingPoint}
      yAxisStartingPoint={props.yAxisStartingPoint}
    />
  );
}
