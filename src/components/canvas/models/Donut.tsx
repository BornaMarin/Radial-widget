import Canvas from '../canvasCore/Canvas';
import React, { useEffect, useState } from 'react';
import { IDonut } from '../../../types/interfaces/donut.interface';
import { Donut } from '../../../types/canvas/Donut';

const DonutCanvas = (props: IDonut) => {
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  useEffect(() => {
    if (context) {
      const circle = new Donut(props);
      circle.draw(context);
    }
  }, [
    props.startAngle,
    props.rotationFactor,
    props.endAngle,
    props.color,
    props.arcRadius,
    context
  ]);

  return (
    <Canvas
      setContext={setContext}
      zIndex={props.zIndex}
      xAxisStartingPoint={props.xAxisStartingPoint}
      yAxisStartingPoint={props.yAxisStartingPoint}
    />
  );
};
export default React.memo(DonutCanvas);
